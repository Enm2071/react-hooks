import { useState, useEffect } from 'react'
import axios from 'axios'

const useGoogleAddress = addressLocation => {
    const [map, setMap] = useState({})
    console.log('address', addressLocation)
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressLocation}&key=AIzaSyDDwmzsCR7kN4-mT0U2HE93qfhH6iuyq5c`
    console.log('API', API)
    useEffect(async () => {
        console.log('useGoogleAddress')
        const response = await axios(API)
        console.log('data response', response.data)
        setMap(response.data.results[0].geometry.location)
    }, [])

    return map 
}

export default useGoogleAddress;