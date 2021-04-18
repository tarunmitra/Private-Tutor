import React, { useContext } from "react";
import { UserContext } from "../../../App";
import ServiceList from "../AdminDash/ServiceList/ServiceList";
import OurServices from "../UserDash/OurServices/OurServices";

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <>
      {loggedInUser.isAdmin ? (
        <ServiceList></ServiceList>
      ) : (
        <OurServices></OurServices>
      )}
    </>
  );
};

export default Dashboard;
