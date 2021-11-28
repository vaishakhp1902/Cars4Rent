import axios from "axios";
import { message } from "antd";

export const bookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    // eslint-disable-next-line no-unused-vars
    const response = await axios.post("/api/bookings/bookcar",reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Your Car is booked successfully")
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
    message.error("Something Went Wrong please try Later")
  }
};
