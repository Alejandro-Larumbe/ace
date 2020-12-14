import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Collapse } from '@material-ui/core';


const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    minHeight: 400,
    backgroundColor: 'rgba(0,0,0,0.2)'

  },
  media: {
    height: 300,
  },
  text: {
    fontWeight: 'bold',
    fontSize: '1.3em',
    lineHeight: '1.6em',
    color: 'white',
    // textAlign: 'center'
  },
  title: {
    color: '#FAC637',
    fontWeight: 'bold',
    // fontWeight: 'bold',
    // fontSize: '1.2em',
    // textAlign: 'center'
  }
});

export default function DescriptionCard({ checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? {timeout: 1000 } : {})} >
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://ace-management.s3.us-east-2.amazonaws.com/pexels-any-lane-5727886+(1).jpg"
          title="At the keyboard"
        />
        <CardContent >
          <Typography className={classes.title} variant="h5" color="textSecondary" component="p">
            Let's all Ace it together!
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            Ace is an app designed to empower private music teachers do what they do best. Ace provides solutions to manage your studio. Schedule lessons, assign repertoire and keep track of your finantials with this app!
          </Typography>
          <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
            Keep those students motivated! Assign repertoire, share resources, and keep track of their progress.
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
