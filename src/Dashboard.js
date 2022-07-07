import { Grid } from "@mui/material";
import React from "react";
import HeaderBar from "./Components/Header";

export default function Dashboard() {
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
