import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsAction'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'



function Home() {

    const {cars} = useSelector(state=>state.carsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCars())
    })

    return (
        <DefaultLayout>
            <h1>Homeapage</h1>
            <h1>length of cars array is {cars.length}</h1>
        </DefaultLayout>
    )
}
export default Home
