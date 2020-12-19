import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
 
    const [show, handleShow] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
      /* return handleShow; */
/*       console.log(handleShow); */
    });
     return () => {
      window.removeEventListener("scroll");
    };
  },[]);

  return (
    <div className={ `nav ${show && "nav__black"}`}>
      <img
        className="nav_logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="Netflix logo"
      />
      <img
        className="nav_avatar"
        src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg"
        alt="Netflix logo"
      />
    </div>
  );
}
export default Nav;
