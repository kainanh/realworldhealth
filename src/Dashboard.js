import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import HeaderBar from "./Components/Header";
import Networking from "./Networking";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const networking = new Networking();
  const navigate = useNavigate();

  useEffect(() => {
    checkUserSession();
  });

  async function checkUserSession() {
    const authentication = await networking.verifyUserSession();
    const userLoggedIn = authentication.response;
    if (!userLoggedIn) navigate("/");
    return userLoggedIn;
  }

  return (
    <Grid container>
      <HeaderBar />
      <iframe
        title="example"
        src="https://sense-demo.qlik.com/sso/single/?appid=cd840389-f841-4477-86be-532fb0b13775&sheet=aLvPhq&opt=ctxmenu,currsel"
        style={{ border: 0, width: "100%", height: "800px" }}
      ></iframe>
    </Grid>
  );
}
