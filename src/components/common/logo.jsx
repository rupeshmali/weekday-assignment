import React from "react";
import { Link } from "react-router-dom";
import weekdayLogo from "../../assets/weekdayLogo.png";

const Logo = () => {
  return (
    <Link>
      <img src={weekdayLogo} alt="" height={30} />
    </Link>
  );
};

export default Logo;
