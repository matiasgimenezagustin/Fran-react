import React, { useState } from 'react'
import "./index.css"
const TransactionCard = ({transaction, handleDeleteTransaction, handleChangeAmount}) => {

  const [editMode, setEditMode] = useState(false)
  const handleEditMode = ()=>{
    setEditMode(!editMode)

  }
  const [amount, setAmount] = useState(transaction.amount)
  return (
    <div className={'transactionCard ' + (transaction.type === "income" ? "incomeBorder": "spendBorder")} /* style={{
      borderWidth: 1, 
      borderStyle: "solid", 
      borderColor: transaction.type === "income" ? "green": "red"
      }} */>
        <div className='transactionInfo'>
            <span className='transactionType'>{transaction.type == "income" ? "+" : "-" }</span>
            <div>
                <h2 className='hola'>{transaction.title}</h2>
                <span>{transaction.date}</span>
            </div>
        </div>
        
        {
          editMode 
          ? 
          <input value={amount} onChange={(e)=> setAmount(e.target.value)}/> 
          : 
          <h3>$ {transaction.amount}</h3> 
        }
        {
          editMode 
          ?
          <button onClick={() => {
            handleChangeAmount(transaction.id, amount )
            setEditMode(false)
          }}>Confirmar</button>
          :
          <button onClick={handleEditMode}>Editar</button>
        }
        <button onClick={()=> handleDeleteTransaction(transaction.id)}>Eliminar</button>
    </div>
  )
}

export default TransactionCard