import { useState,createContext, useContext } from "react";

import * as adminApi from '../../../api/admin-api'
import * as publicApi from '../../../api/product-api'



const AdminContext  = createContext()

export function AdminContextProvider ({children}) {
    const [order, setOrder] = useState(null)
    const [customer, setCustomer] = useState(null)

    console.log(customer)

  
    const getOrder = async () => {
        const item = await adminApi.getOrder()

        setOrder(item.data.order)
    }

    const getCustomer = async () => {
        const user = await adminApi.getCustomer()

        setCustomer(user.data.customer)
    }

    return <AdminContext.Provider value={{getOrder,customer,getCustomer}}>{children}</AdminContext.Provider>
}

export default function useAdmin () {
    return useContext(AdminContext)
}