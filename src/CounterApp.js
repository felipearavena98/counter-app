import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value }) => {
  //handledAdd

  const [counter, setCounter] = useState(value)

  const handledAdd = (e) => {
    //setCounter(counter + 1)
    setCounter((c) => c + 1)
  }

  const handledReset = () => {
    setCounter(value)
  }

  const handledSustract = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handledAdd}>+1</button>
      <button onClick={handledReset}>Reset</button>
      <button onClick={handledSustract}>-1</button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number,
}

export default CounterApp
