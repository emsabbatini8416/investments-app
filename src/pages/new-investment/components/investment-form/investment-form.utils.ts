import { useCertify } from "hooks"
import { useMemo } from "react"
import { useQuery } from "react-query"
import { currencyListApi, modelListApi } from "services"
import { ApiRoute } from "services/utils"

const useModels = () => {
  const certify = useCertify()

  const queryResult = useQuery(ApiRoute.GET_MODELS, () => modelListApi(certify))

  const { data, status, isLoading } = queryResult

  const models = useMemo(() => {

    if (data) {
      return Object.keys(data.data).map((key) => ({ value: key, label: data.data[key] }))
    }

    return [];
  }, [data])

  return { 
    modelsMap: data?.data || {},
    models, 
    status, 
    isLoading 
  }
}
  
const useCurrencies = () => {
  const certify = useCertify()

  const queryResult = useQuery(ApiRoute.GET_CURRENCIES, () => currencyListApi(certify))

  const { data, status, isLoading } = queryResult

  const currencies = useMemo(() => {

    if (data) {
      return Object.keys(data.data).map((key) => ({ value: key, label: data.data[key] }))
    }

    return [];
  }, [data])

  return {
    currenciesMap: data?.data || {},
    currencies, 
    status, 
    isLoading 
  }
}

export {
  useCurrencies,
  useModels
}