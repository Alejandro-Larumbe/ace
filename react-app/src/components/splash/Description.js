import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DescriptionCard from './Card'
import useWindowPosition from './windowPositionHook';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'flex-end'
  }
}))

export default function () {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="description">
      <DescriptionCard checked={checked}></DescriptionCard>
    </div>
  )
}
