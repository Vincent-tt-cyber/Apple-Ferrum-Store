import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>404 Error 😒</h2>
      <div style={{marginBottom: "20px"}}>
        <TypeAnimation
          sequence={[
            "Страница в разработке...",
            2000,
            "Попробуйте вернуться назад 👇",
            2000,
          ]}
          wrapper="div"
          repeat={Infinity}
        />
      </div>
      <Link to="/" style={{border: "1px solid crimson", padding: "10px", borderRadius: "10px", color: "crimson" }}>
        Перейти на главную
      </Link>
    </div>
  );
};
