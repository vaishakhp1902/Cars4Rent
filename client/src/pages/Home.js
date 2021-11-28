import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { getAllCars } from "../redux/actions/carsAction";
//import Loader from '../components/Loader'

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { Row, Col } from "antd";
import {Link} from 'react-router-dom'

function Home() {
  const { cars } = useSelector((state) => state.carsReducer);
  //const {loading} = useSelector(state=>state.alertsReducer)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  });

  return (
    <DefaultLayout>
      {/**  {loading == true && (<Loader/>)} */}

      <Row justify="center" gutter={16} className="mt-5">
        {cars.map((car) => {
          return (
            <Col lg={5} sm={24} xs={24}>
              <div className="car p-2 bs1">
                <img src={car.image} className="car-img" alt="" />
                <div className="car-content d-flex align-items-center justify-content-between">
                  <div>
                    <p>{car.name}</p>
                    <p>{car.rentPerHour} Rent per hour</p>

                  </div>

                  <div>
                    <button className="btn-1 mr-2"><Link to ={`/booking/${car._id}`}> Book Now</Link></button>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </DefaultLayout>
  );
}
export default Home;
