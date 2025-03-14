import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import {ActionCreators} from '../state/index'

const  Shop=() => {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.amount)
  const {withdrawMoney,depositMoney} = bindActionCreators(ActionCreators,dispatch)
  return (
    <div>
        {/* <h2>Deposit/Withdraw Money</h2>
        <button className="btn btn-secondary mx-2" onClick={()=>{dispatch(ActionCreators.withdrawMoney(100))}}>-</button>
        Update Balance
        <button className="btn btn-success mx-2" onClick={()=>{dispatch(ActionCreators.depositMoney(100))}}>+</button> */}
        <button className="btn btn-secondary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
        Update Balance ({balance})
        <button className="btn btn-success mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
