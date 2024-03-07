import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../lib/axios/axios-instance";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/header/Navbar";

const AuthLayout = () => {


  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const checkLoggedIn = async () => {
      try{
      const response = await axios.get("/api/logged_in");
      if(!response.data.logged_in){
         navigate('/login');
      } else {
        setUser(response.data.user);
      }} catch (err){
        console.log(err)
      }
     }

  checkLoggedIn();

}, []);

  
  return (
    <>
    <Navbar/>
    <Outlet context={[user]}/>
    </>
  )


}

export default AuthLayout;