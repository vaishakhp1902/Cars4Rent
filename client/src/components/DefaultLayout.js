import React from "react";
import { Menu, Dropdown, Button } from "antd";

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  const menu = (
    <Menu>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>My bookings</Menu.Item>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item onClick={()=>{
        localStorage.removeItem('user')
        window.location.href='/login'
      }}>
        <l1>Logout</l1>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header bs1">
        <div className="d-flex justify-content-between">
          <h1>Cars4Rent</h1>
          <Dropdown overlay={menu} placement="bottomCenter">
            <Button>{user.username}</Button>
          </Dropdown>
         </div>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
