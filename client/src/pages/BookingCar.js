import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCars } from "../redux/actions/carsAction";
import { Row, Col, Divider, DatePicker, Checkbox, Modal } from "antd";
import moment from "moment";
import { bookCar } from "../redux/actions/bookingActions";

const { RangePicker } = DatePicker;


function BookingCar({ match }) {
  const { cars } = useSelector((state) => state.carsReducer);
  //const {loading} = useSelector(state=>state.alertsReducer)
  const [car, setCar] = useState({});
  const dispatch = useDispatch();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [totalHours, setTotalHours] = useState(0);
  const [driver, setDriver] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getAllCars());
    } else {
      setCar(cars.find((o) => o._id === match.params.carid));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cars]);

  useEffect(() => {
    setTotalAmount(totalHours * car.rentPerHour);

    if (driver) {
      setTotalAmount(totalAmount + 30 * totalHours);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [driver, totalHours]);

  function selectTimeslots(values) {
    console.log(moment(values[0]).format("MMM DD yyyy HH:MM"));
    console.log(moment(values[1]).format("MMM DD yyyy HH:MM"));

    setFrom(moment(values[0]).format("MMM DD yyyy HH:MM"));
    setTo(moment(values[1]).format("MMM DD yyyy HH:MM"));
    setTotalHours(values[1].diff(values[0], "hours"));
  }

  function bookNow() {
    const reqObj = {
      user: JSON.parse(localStorage.getItem(`user`))._id,
      car: car._id,
      totalHours,
      totalAmount,
      driverRequired: driver,
      bookedTimeSlots: {
        from,
        to,
      },
    };

    dispatch(bookCar(reqObj));
  }
  return (
    <DefaultLayout>
      <Row
        justify="center"
        className="d-flex align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <Col lg={10} sm={24} xs={24}>
          <img src={car.image} className="carimg2  bs1" alt="" />
        </Col>

        <Col lg={10} sm={24} xs={24}>
          <Divider type="horizontal" dashed>
            Car Details
          </Divider>
          <div className="text-right">
            <p>
              <b>name: </b>
              {car.name}
            </p>
            <p>
              <b>Rent: </b>
              {car.rentPerHour} per Hour
            </p>
            <p>
              <b>Fuel: </b>
              {car.fuelType}
            </p>
            <p>
              <b>Max Capacity:</b> {car.capacity}
            </p>
          </div>

          <Divider type="horizontal" dashed>
            Select Timeslots
          </Divider>

          <RangePicker
            showTime={{ format: "HH:mm" }}
            format="MMM DD YYYY HH mm"
            onChange={selectTimeslots}
          />
          <br />
          <button
            className="btn1 mt-2"
            onClick={() => {
              setShowModal(true);
            }}
          >
            See Booked Slots
          </button>
          

          <div>
            <p>
              <b>Total Hours :</b>
              {totalHours}
            </p>
            <p>
              <b>Rent per hour : </b>
              {car.rentPerHour}
            </p>
            <Checkbox
              onChange={(e) => {
                if (e.target.checked) {
                  setDriver(true);
                } else {
                  setDriver(false);
                }
              }}
            >
              Driver Required ?
            </Checkbox>

            <h3>Total Amount : {totalAmount}</h3>
            <button className="btn-1" onClick={bookNow}>
              Book Now
            </button>
          </div>
        </Col>
        {car.name && (
          <Modal
            visible={showModal}
            closable={false}
            footer={false}
            title="Booked time slots"
          >
            <div className="p-2">
              {car.bookedTimeSlots.map((slot) => {
                return (
                  <button className="btn1 mt-2">
                    {slot.from} - {slot.to}
                  </button>
                );
              })}

              <div className="text-right mt-5">
                <button
                  className="btn1"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  CLOSE
                </button>
              </div>
            </div>
          </Modal>
        )}
        
        
      </Row>

  

      
    </DefaultLayout>
  );
}

export default BookingCar;
