


export default function BookAutoComplete(props) {



  return (
    <Autocomplete
      value={bookId}
      fullWidth
      className={classes.input}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          // timeout to avoid instant validation of the dialog's form.
          setTimeout(() => {
            toggleOpen(true);
            setDialogValue({
              title: newValue,
              year: '',
            });
          });
        } else if (newValue && newValue.inputValue) {
          toggleOpen(true);
          setDialogValue({
            title: newValue.inputValue,
            year: '',
          });
        } else {
          setBookId(newValue);
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
      options={books}
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
      // fullWidth
      clearOnBlur
      handleHomeEndKeys
      renderOption={(option) => option.title}
      // style={{ width: 300 }}
      fullWidth
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="book" />
      )}
    />
  )
}
