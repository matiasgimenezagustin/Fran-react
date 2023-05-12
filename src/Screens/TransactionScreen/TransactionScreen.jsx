import React, { useState } from 'react'
import {TransactionCard} from "../../Components"
const TransactionScreen = () => {
    
  const transacciones = [
    {
      date: "mar 24 April",
      amount: 24,
      type: "income",
      title: "Anna Perterson",
      id:1
    },
    {
      date: "mar 24 April",
      amount: 24,
      type: "income",
      title: "Anna Perterson",
      id:2
    },
    {
      date: "mar 24 April",
      amount: 24,
      type: "income",
      title: "Anna Perterson",
      id:3
    },
    {
      date: "mar 24 April",
      amount: 24,
      type: "income",
      title: "Anna Perterson",
      id:4
    },
    {
      date: "mar 24 April",
      amount: 24,
      type: "spend",
      title: "Anna Perterson",
      id:5
    },
  ]
/*   console.log(transacciones.map(transaccion => transaccion.id)) */
  const [transaccionesActuales, setTransaccionesActuales] = useState(transacciones)

  const handleDeleteTransaction = (id) =>{
    setTransaccionesActuales(transaccionesActuales.filter(transaccion => transaccion.id !== id))
  }
  const handleChangeAmount = (id, valueToChange) =>{
    setTransaccionesActuales(transaccionesActuales.map(transaccion => {
      if(transaccion.id == id){
        transaccion.amount = Number(valueToChange)
      }
      return transaccion
    }))
  }
  return (
    <div>
        <h2>Transactions</h2>
         {
        transaccionesActuales.map(transaccion =><TransactionCard 
          transaction={transaccion} 
          key={transaccion.id} 
          handleDeleteTransaction={handleDeleteTransaction}
          handleChangeAmount={handleChangeAmount}
        /> )
      }
    </div>
  )
}

export default TransactionScreen