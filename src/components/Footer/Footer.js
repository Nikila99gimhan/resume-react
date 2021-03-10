import React from "react";
import "./Footer.css"
import {Typography} from "@material-ui/core";
import resumeData from "../../utils/resumeData";

const Footer = () => {
  return (
      <di className="footer">
        <div className="footer_left">
          <Typography className="footer_name">{resumeData.name}</Typography>
        </div>
        <div className="footer_right">
          <Typography className="footer_copyright">
            Designed and Developed by <a href="https://www.linkedin.com/in/nikila-fernando-47ba811b0/" traget='_blank'>Nikila Fernando</a>
            <br />
              Clone idea from <a href="http://tavonline.net/html/mat/default/index.html#" target='_blank'>Travonline</a>.
          </Typography>

        </div>

      </di>
  )
};

export default Footer;
