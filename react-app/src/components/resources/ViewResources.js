import React, { useState } from 'react';
import { dispatch, useDispatch } from 'react-redux';
import { Card, CardHeader } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import VisibilityIcon from '@material-ui/icons/Visibility';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Document, Page, pdfjs } from 'react-pdf';
import { deleteResource, getResources } from './actions';
import DialogDelete from '../../DialogDelete';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const useStyles = makeStyles(theme => ({
  root: {
    width: '30vw',
    margin: 'auto',
    position: 'relative'

  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(-7),
    right: theme.spacing(-6),
  }
}))



export default function ViewResources({ resources, dispatch, setResources, handleOpen, openDeleteDialog, handleCloseDeleteDialog, handleOpenDeleteDialog }) {
  const [type, setType] = useState(2);
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [lessonId, setLessonId] = useState(null)
  const [title, setTitle] = useState(null)

  // const id = localStorage.getItem('user_id')
  // const dispatch = useDispatch()

  const useEffect = (() => {

  }, [dispatch])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const onDelete = async() => {
    // (async () => {
    const data = await dispatch(deleteResource(lessonId))

    // }
    // })()
    // console.log(deleted)
    if (!data.errors) {
      // const data = await dispatch(getResources(lessonId))
      // setResources(data)
      handleCloseDeleteDialog()
    }
  }


  const onDeleteDialog = (id, title) => {
    setLessonId(id)
    setTitle(title)
    handleOpenDeleteDialog()
  }

  const handleChange = (event, newValue) => {
    setType(newValue);
  };



  return (
    <>
      <div className={classes.root} >
        <DialogDelete
          open={openDeleteDialog}
          handleClose={handleCloseDeleteDialog}
          callBack={onDelete}
          title={`Are you sure you want to delete "${title}"?`}
        />
        <Card square>
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
                  <ListItem key={resource.id} role={undefined} /*button*/
                  >
                    <ListItemText id={resource.id} primary={resource.title} />
                    {/* <IconButton edge="end" aria-label="comments">
                  </IconButton> */}
                    <IconButton style={{ marginRight: '0' }} onClick={() => onDeleteDialog(resource.id, resource.title)} edge="end" aria-label="comments">
                      <DeleteIcon />
                    </IconButton>
                    {/* <IconButton style={{ marginRight: '0' }} edge="end" aria-label="comments">
                      <EditIcon />
                    </IconButton> */}
                    <IconButton edge="end" aria-label="comments">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer" download>
                        {type === 1 ?
                          <MenuBookIcon style={{ color: 'white' }} />
                          :
                          <>
                            <PlayArrowIcon style={{ color: 'white' }} />
                          </>
                        }
                        {/* <GetAppIcon style={{ color: 'white' }} /> */}
                      </a>
                    </IconButton>
                  </ListItem>
                );
              }
            }) :
              null
            }
          </List>
        </Card>
        <Fab onClick={handleOpen} className={classes.fab} color="secondary" aria-label="edit">
          <AddIcon />
        </Fab>
        {/* <div>
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
      </div> */}
      </div>

    </>
  );
}
