import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { getAllCars } from '../redux/actions/carsAction'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'


import { Button,Row,Col } from 'antd'



function Home() {

    const {cars} = useSelector(state=>state.carsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCars())
    })

    return (
        <DefaultLayout>
        <Row justify='center' gutter={16} className='mt-5'>

        {cars.map(car=>{

            return <Col lg={5} sm={24} xs={24}>
           <div className='car p-2 bs1 mt-4'>
           <img src={car.image} className='car-img'/>
           <div className='car-content d-flex align-items-center justify-content-between'>

           <div>

           <p>{car.name}</p>
           <p>{car.rentPerHour} Rent per hour</p>
           
           </div>

           <div>
           <button className='btn-1 mr-2'>Book Now</button>
           
           
           </div>
           
           
           </div>

           
           </div>



            </Col>
        })}
        
        
        </Row>
        
            
        </DefaultLayout>
    )
}
export default Home
