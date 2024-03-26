import { useQuery } from "react-query"
import { paymentApi } from "services"
import { useCertify } from "hooks"
import { ApiRoute } from "services/utils"

const usePayments = () => {
  const certify = useCertify()

  const queryResult = useQuery(ApiRoute.GET_PAYMENT, () => paymentApi(certify))

  const { data, status, isLoading } = queryResult

  return { 
    payment: data?.data, 
    status, 
    isLoading 
  }
}

export {
    usePayments
}