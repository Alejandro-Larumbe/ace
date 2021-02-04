import React from "react";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';

import { Card, CardHeader } from '@material-ui/core';

export default function CardWithHeader(props) {
  const {
    handleClose,
    onEdit,
    onDelete,
    title, src
  } = props

  return (
    <Card style={{margin:'auto', width: props.width || 500}} variant="outlined" >
      <CardHeader
        title={title}
        action={
          <>
           <IconButton onClick={onEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={onDelete} aria-label="add to favorites">
              <DeleteIcon />
            </IconButton>
            <IconButton onClick={handleClose} aria-label="add to favorites">
              <CloseIcon />
            </IconButton>
          </>
        }
        avatar={<Avatar src={src}/>}
      />
      {props.children}
    </Card>
  )
}
