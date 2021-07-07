import React, {useState} from "react";
import './Portfolio.css'
import {
    CardActionArea,
    CardContent,
    CardMedia,
    Dialog, DialogActions, DialogContent,
    DialogTitle,
    Grid,
    Grow,
    Tab,
    Tabs,
    Typography
} from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import {Card} from "react-bootstrap";

const Portfolio = () => {

    const [tabValue,setTabValue] = useState('All')
    const [projectDialog,setProjectDialog] =useState(false)




  return (
      <Grid container spacing={1} className={'section pb_45 pt_45'}>
        <Grid item className={'section_title mb-20'}>
          <span></span>
          <h6 className={'section_title_text'}>Portfolio </h6>
        </Grid>


        {/*Tabs */}
        <Grid item xs={12} >
            <Tabs value={tabValue} indicatorColor={"white"} className={'customTabs'} onChange={(event,newValue) => setTabValue(newValue)}>
                <Tab label={"All"} value={"All"} className={tabValue == "All" ? "customTabs_item active" : "customTabs_item"}/>

                {[...new Set(resumeData.projects.map((item) => item.tag))].map(
                    (tag) => (
                        <Tab label={tag} value={tag} className={tabValue == tag ? "customTabs_item active" : "customTabs_item"} />
                    )
                )}


            </Tabs>

        </Grid>

          {/* Projects */}
          <Grid item={12}>
              <Grid container spacing={3} >
                  {resumeData.projects.map(projects => (
                      <>
                          {tabValue == projects.tag || tabValue == 'All' ? (
                              <Grid item xs={12} sm={6} md={4}>
                                  <Grow in timeout={1000}>
                                      <Card className={'customCard'} onClick={() => setProjectDialog(projects)}>
                                          <CardActionArea>
                                              <CardMedia className={'customCard_image'} image={projects.image} title={projects.title} />
                                              <CardContent>
                                                  <Typography variant={"body2"} className={'customCard_title'}>{projects.title}</Typography>
                                                  <Typography variant={"caption"} className={'customCard_caption'}>{projects.caption}</Typography>
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
          <Dialog open={projectDialog} onClose={() => setProjectDialog(false) } className={'projectDialog'} maxWidth={"lg"} fullWidth>
              <DialogTitle onClose={() => setProjectDialog(false)}>{projectDialog.title}</DialogTitle>
              <img src={projectDialog.image } alt={""} className={'projectDialog_image'}/>
              <DialogContent >
                  <Typography className={'projectDialog_description'}>{projectDialog.description}</Typography>
              </DialogContent>
              <DialogActions className={'projectDialog_actions'}>
                  {projectDialog?.links?.map(link => (
                      <a href={link.link} target={'_blank'} className={'projectDialog_icon'}>{link.icon}</a>
                  ))}
              </DialogActions>
          </Dialog>
      </Grid>
  );
};

export default Portfolio;
