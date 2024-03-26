import { DOMAIN } from "utils"

const ApiRoute = {
  SIGN_IN: `${DOMAIN}/login`,
  GET_MODELS: `${DOMAIN}/getModels`,
  GET_CURRENCIES: `${DOMAIN}/getCurrencies`,
  SIMULATE_INVESTMENT: `${DOMAIN}/simulateInvestment`,
  STORE_INVESTMENT: `${DOMAIN}/storeInvestment`,
  GET_PAYMENT: `${DOMAIN}/getPayment`
}

export { ApiRoute }
