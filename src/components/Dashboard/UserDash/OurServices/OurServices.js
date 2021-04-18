import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import "./OurServices.css";
import { UserContext } from "../../../../App";
import OrderdServices from "./OrderdServices";

const OurServices = () => {
  const [loggedInUser, setloggedInUser] = useContext(UserContext);
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    fetch(
      "https://dry-temple-18256.herokuapp.com/getServiceByEmail?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        setOrderData(data);
      });
  }, []);

  return (
    <div className='row'>
      <Sidebar></Sidebar>
      <div className='col-md-10 col-sm-10 main-col'>
        <div className='desh-head'>
          <h4 className='pt-4 pl-5'>Our Services</h4>
        </div>
        <div className='row px-5 py-3'>
          {orderData.map((order) => (
            <OrderdServices order={order}></OrderdServices>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
