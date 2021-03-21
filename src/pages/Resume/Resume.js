import React from "react";
import './Resume.css';
import {Grid, Icon, Typography} from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import CostomTimeline, { CostomTimelineSeparator } from "../../components/Timeline/Timeline";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

import {TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@material-ui/lab";

const Resume = () => {
  return (

      <>
        {/* About me*/}

        <Grid container className='section pb_45'>
            <Grid item className='section_title mb-30' >
                <span></span>
                <h6 className={'section_title_text'}>About Me </h6>
            </Grid>
            <Grid item xs={12}>
                <Typography variant={'body2'} className={'aboutme_text'}>{resumeData.about}</Typography>
            </Grid>
        </Grid>


          {/* Educational And Experiences*/}
        <Grid container className='section pb_45'>
            <Grid item className='section_title mb-30' >
                <span></span>
                <h6 className={'section_title_text'}>Resume </h6>
            </Grid>
            <Grid item xs ={12}>
                <Grid container className={'resume_timeline'}>
                    { /*Working and Volunteering Experiences  */}
                    <Grid item sm={12} md={6}>
                        <CostomTimeline title={'Work and Volunteering'} icon={<WorkIcon />}>
                            {resumeData.Experiences.map((Experiences) =>(
                                <TimelineItem>
                                    <CostomTimelineSeparator />
                                    <TimelineContent className={'timeline_content'}>
                                        <Typography  className={'timeline_title'}>{Experiences.title}</Typography>
                                        <Typography variant={"caption"} className={'timeline_date'}>{Experiences.date}</Typography>
                                        <Typography variant={"body2"} className={'timeline_description'}>{Experiences.description}</Typography>
                                    </TimelineContent>

                                </TimelineItem>
                            ))}
                        </CostomTimeline>
                    </Grid>

                    { /*Educational*/}
                    <Grid item sm={12} md={6}>
                        <CostomTimeline title={'Education'} icon={<SchoolIcon />}>
                            {resumeData.Education.map((Education) =>(
                                <TimelineItem>
                                    <CostomTimelineSeparator />
                                    <TimelineContent className={'timeline_content'}>
                                        <Typography  className={'timeline_title'}>{Education.title}</Typography>
                                        <Typography variant={"caption"} className={'timeline_date'}>{Education.date}</Typography>
                                        <Typography variant={"body2"} className={'timeline_description'}>{Education.description}</Typography>
                                    </TimelineContent>

                                </TimelineItem>
                            ))}
                        </CostomTimeline>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        {/* Services*/}

        <Grid container className='section pb_45'>
            <Grid item className='section_title mb-30' >
                <span></span>
                <h6 className={'section_title_text'}>My Services </h6>
            </Grid>
            <Grid item xs={12}>
                <Grid container>
                    {resumeData.services.map(service => (
                        <Grid item xs={12} sm={6} md={3}>
                            <div className={'service'}>
                                <Icon className={"service_icon"}>{service.icon}</Icon>
                                <Typography className={'service_title'} variant={"h6"}>{service.title}</Typography>
                                <Typography className={'service_description'} variant={"body2"}>{service.description}</Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>

        {/*Skills*/}

        <Grid container className='section'></Grid>

        {/*Contact*/}

        <Grid container className='section'></Grid>


      </>



  );
};

export default Resume;
