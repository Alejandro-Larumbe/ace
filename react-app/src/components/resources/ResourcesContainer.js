import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTitleView } from '../../store/actions/ui'
import UploadResource from './UploadResource';
import ViewResources from './ViewResources';
import { getResources } from './actions';
import resources from './reducer';
import { Unstable_TrapFocus } from '@material-ui/core';
import { set } from 'date-fns';
import { PhotoSizeSelectLargeRounded } from '@material-ui/icons';

export default function ResourcesContainer() {
  const id = localStorage.getItem('user_id')
  const dispatch = useDispatch();
  const byId = useSelector(state => state.resources.byId)
  const [loaded, setLoaded] = useState(false)
  const [open, setOpen] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);



  useEffect(() => {
    (async () => {
      const data = await dispatch(getResources(id))
    }
    )()
    // setLoaded(true)
  }, [dispatch, open, openDeleteDialog]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };



  return (
    <>
      <UploadResource
        open={open}
        handleClose={handleClose}
      />
      <ViewResources
        resources={Object.values(byId)}
        dispatch={dispatch}
        handleOpen={handleOpen}
        handleCloseDeleteDialog={handleCloseDeleteDialog}
        openDeleteDialog={openDeleteDialog}
        handleOpenDeleteDialog={handleOpenDeleteDialog}
      />

    </>
  )
}
