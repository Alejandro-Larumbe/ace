import React from "react";
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { Card, CardHeader } from '@material-ui/core';

export default function CardWithHeader(props) {
  const {
    setOpen,
    title
  } = props

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card style={{margin:'auto', width: props.width || 500}} variant="outlined" >
      <CardHeader
        title={title}
        action={
          <>
            <IconButton onClick={handleClose} aria-label="add to favorites">
              <CloseIcon />
            </IconButton>
          </>
        }
      />
      {props.children}
    </Card>
  )
}
