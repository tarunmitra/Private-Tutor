import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Feedback from "../Feedback/Feedback";
import Header from "../Header/Header";
import TeachersQualification from "../TeachersQualification/TeachersQualification";
import Services from "../Services/Services";
import Students from "../Students/Students";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <TeachersQualification></TeachersQualification>
      <Students></Students>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  );
};

export default Home;
