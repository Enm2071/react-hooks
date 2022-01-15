import React, {useContext} from 'react'
import '../styles/components/Success.css'
import AppContext from '../context/AppContext'
import Map from '../components/Map'
import useGoogleAddress from '../hooks/useGoogleAddess'
const Success = () => {
    const {state} = useContext(AppContext)
    const {buyer} = state
    console.log('buyer',buyer)
    // const location = useGoogleAddress('maximo%20gomez')
    // console.log('location', location)
    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{buyer.name}, Gracias por tu compra</h2>
                <span>Tu pedido llegara en 3 dias a tu direcció:</span>
                <div className="Success-map">
                    <Map />
                </div>
            </div>
        </div>
    )
}

export default Success
