import React from "react";
import './Resume.css';
import {Grid, Typography} from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import CostomTimeline, { CostomTimelineSeparator } from "../../components/Timeline/Timeline";
import WorkIcon from '@material-ui/icons/Work';

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
        <Grid container className='section'>
            <Grid item className='section_title mb-30' >
                <span></span>
                <h6 className={'section_title_text'}>Resume </h6>
            </Grid>
            <Grid item xs ={12}>
                <Grid container>
                    { /*Working and Volunteering Experiences  */}
                    <Grid item sm={12} md={6}>
                        <CostomTimeline title={'Work and Volunteering'} icon={<WorkIcon />}></CostomTimeline>
                    </Grid>

                    { /*Educational*/}
                    <Grid item sm={12} md={6}></Grid>
                </Grid>
            </Grid>
        </Grid>

        {/* Services*/}

        <Grid container className='section'></Grid>

        {/*Skills*/}

        <Grid container className='section'></Grid>

        {/*Contact*/}

        <Grid container className='section'></Grid>


      </>



  );
};

export default Resume;
