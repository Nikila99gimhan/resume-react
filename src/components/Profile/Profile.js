import { Typography } from "@material-ui/core";
import React from "react";
import myImage from "../../assets/images/profile.jpg";
import CostomTimeline, { CostomTimelineSeparator } from "../Timeline/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import resumeData from "../../utils/resumeData";
import PersonOutlineOutLinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import "./Profile.css";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CostomButton from "../Button/Button";
import GetAppIcon from "@material-ui/icons/GetApp";

const CostomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CostomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Portfolio = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={myImage} alt="" />
      </figure>
      <div className="profile_information">
        <CostomTimeline icon={<PersonOutlineOutLinedIcon />}>
          <CostomTimelineItem title="Name" text={resumeData.name} />
          <CostomTimelineItem title="Title" text={resumeData.title} />
          <CostomTimelineItem
            className="special_fontsize"
            title="Email"
            text={resumeData.email}
          />

          {Object.keys(resumeData.socials).map((key) => (
            <CostomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CostomTimeline>
        <div className="button_container" style = {{display:"flex"}}>
          <CostomButton text={"Download CV"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
