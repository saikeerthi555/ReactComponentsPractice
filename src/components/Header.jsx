import React from "react";
import App from "./App.jsx";

function Header() {
  const date = new Date();
  const currentTime = date.getHours();

  let Day;

  //inline style
  const customeStyle = {
    color: ""
  };

  if (currentTime < 12) {
    Day = "Good Morning";
    customeStyle.color = "red";
  } else if (currentTime < 18) {
    Day = "Good Afternoon";
    customeStyle.color = "green";
  } else {
    Day = "Good Night";
    customeStyle.color = "blue";
  }
  return (
    <h1 className="heading" style={customeStyle}>
      {Day}
    </h1>
  );
}

export default Header;
