import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ className, border, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <Link to="/" className={border}>
        home
      </Link>
      <Link to="/login" className={border}>
        portfolio
      </Link>
      <Link to="/aboutus" className={border}>
        about us
      </Link>
      <Link to="/author" className={border}>
        author
      </Link>
      <Link to="/contact" className={border}>
        contact
      </Link>
    </div>
  );
};

export default Menu;
