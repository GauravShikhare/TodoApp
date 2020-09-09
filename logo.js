import React from "react";
import logo from "../Components/logo.png";
console.log(logo);
function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img className="img" src={require("../Components/logo.png")} alt="Logo" />
    </div>
  );
}
export default Header;
