import React from "react";
import { Button } from "@material-ui/core";

import "./Button.css";

const CostomButton = ({ text, icon }) => {
  return (
    <Button
      className="costom_btn"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
    >
      <span className="btn-text">{text}</span>
    </Button>
  );
};

export default CostomButton;
