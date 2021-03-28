import React, {useState} from "react";
import './Portfolio.css'
import {CardActionArea, CardContent, CardMedia, Grid, Grow, Tab, Tabs, Typography} from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import {Card} from "react-bootstrap";

const Portfolio = () => {

    const [tabValue,setTabValue] = useState('All')

  return (
      <Grid container className={'section pb_45 pt_45'}>
        <Grid item className={'section_title mb-30'}>
          <span></span>
          <h6 className={'section_title_text'}>Portfolio </h6>
        </Grid>


        {/*Tabs */}
        <Grid item xs={12} >
            <Tabs value={tabValue} indicatorColor={"white"} className={'custom_tabs'} onChange={(event,newValue) => setTabValue(newValue)}>
                <Tab label={"All"} value={"All"} className={tabValue == "All" ? "customTabs_item active" : "customTabs_item"}/>

                {[...new Set(resumeData.projects.map((item) => item.tag))].map(
                    (tag) => (
                        <Tab label={tag} value={tag} className={tabValue == "All" ? "customTabs_item active" : "customTabs_item"} />
                    )
                )}


            </Tabs>

        </Grid>

          {/* Projects */}
          <Grid item={12}>
              <Grid container spacing={2} >
                  {resumeData.projects.map(projects => (
                      <>
                          {tabValue == projects.tag || tabValue == 'All' ? (
                              <Grid item>
                                  <Grow in timeout={1000}>
                                      <Card className={'customCard'} onClick={() => console.log("sdf")}>
                                          <CardActionArea>
                                              <CardMedia className={'customCard_image'} image={projects.image} title={projects.title} />
                                              <CardContent>
                                                  <Typography className={'customCard_title'}>{projects.title}</Typography>
                                                  <Typography variant={"body2"} className={'customCard_description'}>{projects.description}</Typography>
                                              </CardContent>
                                          </CardActionArea>
                                      </Card>
                                  </Grow>
                              </Grid>

                              ) : null}
                      </>



                  ))}
              </Grid>
          </Grid>
      </Grid>
  );
};

export default Portfolio;
