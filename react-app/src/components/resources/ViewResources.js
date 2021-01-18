import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const useStyles = makeStyles(theme => ({
  root: {
    width: '30vw',
    margin: 'auto'
  }
}))



export default function ViewResources({ resources }) {
  const [type, setType] = useState(2);
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }


  const handleChange = (event, newValue) => {
    setType(newValue);
  };


  return (
    <>
      <Paper className={classes.root} square>
        <Tabs
          value={type}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Tab label="Audio" value={2} />
          <Tab label="Video" value={3} />
          <Tab label="PDF" value={1} />
        </Tabs>
        <List className={classes.root}>
          {resources ? resources.map((resource, i) => {
            if (resource.resourceTypeId === type) {
              return (
                <ListItem key={resource.id} role={undefined} button >
                  <ListItemText id={resource.id} primary={resource.title} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="comments">
                      {type === 1 ?
                        <MenuBookIcon />
                        :
                        <PlayArrowIcon />
                      }
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              );
            }
          }) :
            null
          }
        </List>
      </Paper>
       <div>
        <Document
          onLoadError={console.error}
          file={{ url: `https://cors-anywhere.herokuapp.com/https://ace-management.s3.us-east-2.amazonaws.com/resources/dlscrib.com-pdf-galamian-contemporary-violin-technique-scales-dl_89baf79ec922d8863966d3428c8ee2c3.pdf_76401ee4-9bac-4430-b701-7b53fffecb6a` }}
          // file={{ url: '/ace-management.s3.us-east-2.amazonaws.com/resources/dlscrib.com-pdf-galamian-contemporary-violin-technique-scales-dl_89baf79ec922d8863966d3428c8ee2c3.pdf_76401ee4-9bac-4430-b701-7b53fffecb6a'}}

          // file="https://ace-management.s3.us-east-2.amazonaws.com/resources/dlscrib.com-pdf-galamian-contemporary-violin-technique-scales-dl_89baf79ec922d8863966d3428c8ee2c3.pdf_76401ee4-9bac-4430-b701-7b53fffecb6a"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    </>
  );
}
