import React from "react";
import "./toggle.css";

export const Toggle = ({ onClick }: any) => {
  return (
    <label className="switch" >
      <input type="checkbox" onClick={onClick} />
      <span className="slider round"></span>
    </label>
  );
};
