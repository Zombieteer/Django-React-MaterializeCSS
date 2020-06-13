import React, { useState, useEffect } from 'react'
import axios from 'axios'
import LP1 from './LP1'
import LP2 from './LP2'
import LP3 from './LP3'
import API from '../../services'


export const LP = () => {

    const [partners, setPartners] = useState([])
    const [idle, setIdle] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getPartners()
    }, [false])

    const getPartners = async () => {
        setLoading(true)
        const { data } = await API.get('/')
        // const { data } = await axios.get('http://127.0.0.1:8000/api/')
        setPartners(data)
        console.log("PARTNERS_DATA_RESP", data)
        console.log(partners)
        setLoading(false)
    }

    useEffect(() => {
        getIdle()
    }, [partners])

    const getIdle = () => {
        setLoading(true)
        setIdle(partners.filter(partner => partner.availability_status === 'idle').length)
        setLoading(false)
    }

    return (
        <div>
            {loading ? (<div> Loading..</div>) :
                (<div>
                    <LP1 partners={partners} idle={idle} />
                    <LP2 partners={partners} idle={idle} />
                    <LP3 partners={partners} idle={idle} />
                </div>
                )}
        </div>
    )

}

export default LP