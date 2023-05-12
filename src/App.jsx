import React from 'react'
import './App.css'
import { Card, Counter } from './Components'
import TransactionCard from './Components/TransactionCard'
import TransactionScreen from './Screens/TransactionScreen/TransactionScreen'

const App = () => {



  /* 
  Crear un componente CreditCard que reciba un nro de tarjeta, codigo de seguridad, fecha vto y un nombre completo, banco
  la carta debera estar en un div con un borde de color golden y un background gris
  */

  return (
    <>
      <div className='transactionList'>
      <TransactionScreen/>
      </div>
      <h1>Hola</h1>
      <Card title="hola h2" />
      <Counter/>
    </>
  )
}

export default App
