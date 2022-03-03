import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "../NavbarLower/NavbarLower.css";
import telephone from "../../img/telephone.png";
import basket from "../../img/basket.png";

const maski = [
  { label: "Главная" },
  { label: "Доставка" },
  { label: "ОПТ" },
  { label: "Контакты" },
  { label: "Что защищает?" },
  { label: "Корзина" },
];

const NavbarLower = () => {
  return (
    <div className="NavbarLower-bottom">
      <div className="NavbarLower ">
        <div className="NavbarLower NavbarLower-logo">
          <h2 className="logo">
            Маски.<span>ру</span>
          </h2>
          <div>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={maski}
              sx={{ width: 150 }}
              renderInput={(params) => (
                <TextField {...params} label="Каталог" />
              )}
            />
          </div>
        </div>
        <div className="NavbarLower-navigate">
          <button className="button NavbarLower-navigate-">Главная</button>
          <button className="button NavbarLower-navigate-">Доставка</button>
          <button className="button NavbarLower-navigate-">ОПТ</button>
          <button className="button NavbarLower-navigate-">Контакты</button>
          <button className="button NavbarLower-navigate-">
            Что защищает?
          </button>
        </div>
        <div className="NavbarLower">
          <div className="NavbarLower">
            <img src={basket} alt="" />
            <div>
              <p>0</p>
              <p>
                0 <span>сом</span>
              </p>
            </div>
          </div>
          <div className="NavbarLower">
            <img src={telephone} alt="Звонок" />
            <div className="">
              <p>+996 777 777 777</p>
              <p>Заказать звонок</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarLower;
