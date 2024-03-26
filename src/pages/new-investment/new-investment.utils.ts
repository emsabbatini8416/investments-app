import React, { ChangeEvent } from "react"
import { useNavigate } from "react-router-dom"
import { Routes } from "router"
import type { NewInvestmentPayloadAction, NewInvestmentPayloadActionPaired, NewInvestmentState } from "./new-investment.types"
import { NewInvestmentActionType, newInvestmentInitialState } from "./new-investment.constants"
import { useMutation } from "react-query"
import { simulateInvestmentApi, storeInvestmentApi } from "services"
import { NewInvestmentPayloadRequest } from "typings/services"
import { useCertify } from "hooks"

const newInvestmentReducer = (
  state: NewInvestmentState, 
  action: NewInvestmentPayloadAction
  ): NewInvestmentState => {

  const { type, payload } = action

  switch (type) {
    case NewInvestmentActionType.STEP: {
      const { step } =
        payload as NewInvestmentPayloadActionPaired[NewInvestmentActionType.STEP]

      const newState: NewInvestmentState = {
        ...state,
        step,
      }

      return newState
    }
    case NewInvestmentActionType.SET_VALUE: {
      const { investment } =
        payload as NewInvestmentPayloadActionPaired[NewInvestmentActionType.SET_VALUE]

      const newState: NewInvestmentState = {
        ...state,
        investment: {
          ...state.investment,
          ...investment,
        }
      }

      return newState
    }
    case NewInvestmentActionType.SIMULATE: {
      const { simulateInvestment } =
        payload as NewInvestmentPayloadActionPaired[NewInvestmentActionType.SIMULATE]

      const newState: NewInvestmentState = {
        ...state,
        simulateInvestment: {
          ...state.investment,
          ...simulateInvestment,
        }
      }

      return newState
    }
    case NewInvestmentActionType.SET_MODEL: {
      const { model } =
        payload as NewInvestmentPayloadActionPaired[NewInvestmentActionType.SET_MODEL]

      const newState: NewInvestmentState = {
        ...state,
        model
      }

      return newState
    }
    case NewInvestmentActionType.SET_CURRENCY: {
      const { currency } =
        payload as NewInvestmentPayloadActionPaired[NewInvestmentActionType.SET_CURRENCY]

      const newState: NewInvestmentState = {
        ...state,
        currency
      }

      return newState
    }
    case NewInvestmentActionType.TERMS: {
      const { terms } =
        payload as NewInvestmentPayloadActionPaired[NewInvestmentActionType.TERMS]

      const newState: NewInvestmentState = {
        ...state,
        terms
      }

      return newState
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const initializeState = (initialState: NewInvestmentState) => {

  const state = {...initialState}

  return state
}

const useNewInvestment = () => {
  const navigate = useNavigate()
  
  const certify = useCertify()

  const [state, dispatch] = React.useReducer(newInvestmentReducer, newInvestmentInitialState, initialState =>
    initializeState(initialState)
  )

  const mutationSimulate = useMutation((payload: NewInvestmentPayloadRequest) => simulateInvestmentApi(payload, certify), {
    onSuccess: response => {

      dispatch({
        type: NewInvestmentActionType.SIMULATE,
        payload: { simulateInvestment: response.data }
      })

      dispatch({
        type: NewInvestmentActionType.STEP,
        payload: { step: 2 }
      })

    },
    onError: error => {
      console.log(error)
    },
  })
  
  const mutationStore = useMutation(() => storeInvestmentApi(certify), {
    onSuccess: response => {

    },
    onError: error => {
      console.log(error)
    },
  })

  const handleBackToInvestments = () => {

    dispatch({
      type: NewInvestmentActionType.STEP,
      payload: { step: 1 } 
    })
    
    navigate(Routes.INVESTMENTS, {
      replace: true,
    })
  }

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement | HTMLInputElement >, optionValue: string = null) => {
    const { name, value } = event.target;

    const investment: NewInvestmentState['investment'] = {
      ...state.investment,
      [name]: value
    }

    dispatch({
      type: NewInvestmentActionType.SET_VALUE,
      payload: { investment }
    })

    if (optionValue && name === 'model_id') {
      dispatch({
        type: NewInvestmentActionType.SET_MODEL,
        payload: { ...state, model: optionValue }
      })
    }

    if (optionValue && name === 'currency_id') {
      dispatch({
        type: NewInvestmentActionType.SET_CURRENCY,
        payload: { ...state, currency: optionValue }
      })
    }

  }

  const handleOnCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target

    dispatch({
      type: NewInvestmentActionType.TERMS,
      payload: { terms: checked }
    })

  }

  const handleOnClickContinue = async () => {

    if (state.step === 1) {
      mutationSimulate.mutate({ ...state.investment })
    }

    if (state.step === 2) {
      dispatch({
        type: NewInvestmentActionType.STEP,
        payload: { step: 3 }
      })
    }

    if (state.step === 3) {
      mutationStore.mutate()
    }

  }

  const validateFlow = (): boolean => {

    if (state.step === 1) {
      const { model_id, currency_id, amount } = state.investment
      if (model_id && currency_id && amount) return false
    }

    if (state.step === 2) return false

    if (state.step === 3) return !state.terms

    return true

  }

  return {
    state,
    handleBackToInvestments,
    handleOnChange,
    handleOnCheckboxChange,
    handleOnClickContinue,
    validateFlow
  }
}

export {
  useNewInvestment
}