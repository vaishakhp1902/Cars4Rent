import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCars } from "../redux/actions/carsAction";
import { Row,Col,Divider,DatePicker } from "antd";
import moment from 'moment'

const {RangePicker} = DatePicker

function BookingCar({match}) {
  const { cars } = useSelector((state) => state.carsReducer);
  //const {loading} = useSelector(state=>state.alertsReducer)
  const [car,setCar] = useState({})
  const dispatch = useDispatch();
  const [from,setFrom]=useState()
  const [to,setTo] = useState()
  const [totalHours,setTotalHours] = useState(0)

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getAllCars());
    } else {
      setCar(cars.find((o) => o._id === match.params.carid));
    }
    
  },[cars]);


  function selectTimeslots(values) {
    console.log(moment(values[0]).format('MMM DD yyyy HH:MM'))
    console.log(moment(values[1]).format('MMM DD yyyy HH:MM'))

    setFrom(moment(values[0]).format('MMM DD yyyy HH:MM'))
    setTo(moment(values[1]).format('MMM DD yyyy HH:MM'))
    setTotalHours(values[1].diff(values[0], 'hours'))
    
  }
  return (
    <DefaultLayout>
      <Row justify='center' className='d-flex align-items-center' style={{minHeight:'80vh'}}>
        <Col lg={10} sm={24} xs={24}>
        <img src={car.image} className='carimg2  bs1' alt='' />
        
        
        </Col>

        <Col lg={10} sm={24} xs={24}>
        <Divider type='horizontal' dashed>Car Details</Divider>
        <div className='text-right'>
        <p>name: {car.name}</p>
        <p>Rent: {car.rentPerHour}  per Hour</p>
        <p>Fuel: {car.fuelType}</p>
        <p>Max Capacity: {car.capacity}</p>
        
        </div>

        <Divider type='horizontal' dashed>Select Timeslots</Divider>
        <RangePicker showTime={{format:'HH:mm'}} format='MMM DD YYYY HH mm' onChange={selectTimeslots}/>

        <div>
        {totalHours}
        </div>

        
        
        
        </Col>
      
      </Row>
    </DefaultLayout>
  );
}

export default BookingCar;
