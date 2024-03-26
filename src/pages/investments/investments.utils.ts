import { useNavigate } from "react-router-dom"
import { Routes } from "router"

const useInvestments = () => {

  const navigate = useNavigate()
  
  const handleToNewInvestment = () => {
    navigate(Routes.INVESTMENTS_NEW, {
      replace: true,
    })
  }

  return {
    handleToNewInvestment
  }

}

export {
  useInvestments   
}