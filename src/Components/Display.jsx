import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
   const {value} =useSelector((store)=>store.counter)
  return (
    <div>your count is : {value} </div>
  )
}

export default Display