import React from "react";
import Group from "../../img/Group.png";
import Clock from "../../img/clock.png";
import email from "../../img/email.png";
import "../Navbar/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-navigate">
        <div className="navbar-navigate">
          <img src={Group} alt="Ваша место положение!" />
          <p className="location-title">Бишкек</p>
        </div>
        <div className="navbar-navigate">
          <div className="navbar-navigate block">
            <img src={Clock} alt="Мы работаем" />
            <p>пн-вс с 10:00 до 20:00</p>
          </div>
          <div className="navbar-navigate block">
            <img src={email} alt="Почта" />
            <p>mask@mail.ru</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
