import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Stay Hungy and Fight on ✌️")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          <cite>
            Our lives are defined by opportunities, even the ones we miss.
          </cite>
          - 《The Curious Case Of Benjamin Button》
        </p>
      </div>
    </Fade>
  );
}
