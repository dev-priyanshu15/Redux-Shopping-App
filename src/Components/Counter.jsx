import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increaseby1, decreaseby1, increaseby10, decreaseby10} from '../redux/counterSlice'


const Counter = () => {
    const count=useSelector((state)=>state.counter)
    const dispatch = useDispatch();
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increaseby1())}>Increaseby1</button>
        <button onClick={()=>dispatch(decreaseby1())}>Decreaseby1</button>
        <button onClick={()=>dispatch(increaseby10())}>Increaseby10</button>
        <button onClick={()=>dispatch(decreaseby10())}>Decreaseby10</button>






    </div>
  )
}

export default Counter
//output me 10 de rha hai kaise kyunkli counterslice ka value 10 die hai 
//state.counter kya hai kajha se hai jaha slice ka value diya hai awaha areducer me usko counteSuperrman use karlo phir yaha countersuperman use karna padega
//wha reducer me addtocart bana lo addtocart: addtocart karke 
//phir dispatch kiye kaise const dispatch se phir button me onclick me dispatch krege increase by 1 ko bhi as a function pass kiye 