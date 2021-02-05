import React from "react";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import DeleteDialogue from './ConfirmationDialogue'

import { Card, CardHeader } from '@material-ui/core';

export default function CardWithHeader(props) {
  const {
    setOpen,
    onEdit,
    onDelete,
    title,
    src,
    setMode,
    avatar
  } = props

  const [openDialogue, setOpenDialogue] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <DeleteDialogue
        open={openDialogue}
        setOpen={setOpenDialogue}
        message={"Are you sure you want to delete student?"}
      />
      <Card style={{ margin: 'auto', width: props.width || 500 }} variant="outlined" >
        <CardHeader
          titleTypographyProps={{
            variant: 'h5'
          }}
          title={title}
          action={
            <>
              <IconButton onClick={() => setMode('edit')}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => setOpenDialogue(true)} aria-label="add to favorites">
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={() => setOpen(false)} aria-label="add to favorites">
                <CloseIcon />
              </IconButton>
            </>
          }

          avatar={avatar && <Avatar src={src} />}

        />
        {props.children}
      </Card>
    </>
  )
}
