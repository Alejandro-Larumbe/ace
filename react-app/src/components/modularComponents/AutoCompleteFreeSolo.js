/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import AddBook from './QuickAddDialog';
// import AddPiece from '../modules/QuickAddDialog';

const filter = createFilterOptions();

export default function FreeSoloCreateOptionDialog(props) {
  const {
    value,
    setValue,
    options,
    toggleOpen,
    // setDialogValue,
    label,
    // dialogValue,
    type
  } = props
  const [openBook, toggleOpenBook] = useState(false);
  const [openPiece, toggleOpenPiece] = useState(false);
  const [dialogValue, setDialogValue] = useState(
      type === 'book' ? { title: '', author: '' }
      :
        type === 'piece' ? { title: '', composer: '' }
        :
          null
    );

  const handleCloseBook = () => {
    if (type === 'book') {
      setDialogValue({
        title: '',
        author: '',
      }
      );
      toggleOpenBook(false);
    }
    if (type === 'piece') {
      setDialogValue({
        title: '',
        conposer: '',
      }
      );
      toggleOpenPiece(false);
    }

  };


  return (
    <React.Fragment>
      <AddBook
        open={openBook}
        handleClose={handleCloseBook}
        dialogValue={dialogValue}
        setDialogValue={setDialogValue}
        setValue={setValue}
        type={type}
      />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue(
                type === 'book' ? {
                  title: newValue,
                  author: '',
                } :
                type === 'piece' ? {
                  title: newValue,
                  composer: '',
                } :
                  null
              );
            });
          } else if (newValue && newValue.inputValue) {
            if (type === 'book') {
              toggleOpenBook(true);
              setDialogValue({
                title: newValue.inputValue,
                author: '',
              });
            }
            if (type === 'piece') {
              toggleOpenPiece(true);
              setDialogValue({
                title: newValue.inputValue,
                composer: '',
              });

            }
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={options}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.title;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => option.title}
        style={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label={label} />
        )}
      />
    </React.Fragment>
  );
}
