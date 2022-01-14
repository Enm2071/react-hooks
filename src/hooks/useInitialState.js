import {useState} from 'react'
import InitialState from '../initialState'

const useInitialState = () => {
    const [state, setState] = useState(InitialState)
    
    const addtoCart = payload => {
        setState({...state, cart: [...state.cart, payload]})
    }

    const removeFromCart = payload => {
        setState({...state, cart: state.cart.filter(item => item.id !== payload.id)})
    }
   
    return {state, addtoCart, removeFromCart}
}

export default useInitialState;