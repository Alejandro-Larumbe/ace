import React from 'react';




const LessonCreate = () => {

  const [rate] = useState(45)
  const [datetime, setDatetime] = useState('')
  const [duration, setDuration] = useState(45)
  const [rate, setRate] = useState(60)


  return (
    <>
      <form onSubmit={onCreate}>
        <div className={classes.root}>
          <Paper variant="outlined" >
            <List component="nav" className={classes.list} aria-label="mailbox folders">
              <ListItem button>
                <TextField
                  margin="dense"
                  type="text"
                  label="first name"
                  name="firstName"
                  onChange={updateField(setFirstName)}
                  defaultValue={firstName}
                  value={firstName}
                  required={true}
                  fullWidth
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <TextField
                  variant="outlined"
                  margin="dense"
                  type="text"
                  label="last name"
                  name="lastName"
                  onChange={updateField(setLastName)}
                  defaultValue={lastName}
                  value={lastName}
                  required={true}
                  fullWidth
                />
              </ListItem>
              <Divider light />
              <ListItem button>
                <TextField
                  margin="dense"
                  type="text"
                  label="dob"
                  name="dob"
                  onChange={updateField(setDob)}
                  defaultValue={dob}
                  value={dob}
                  required={true}
                  fullWidth
                />
              </ListItem>
              <Divider />
              <ListItem button>
                <TextField
                  margin="dense"
                  type="text"
                  label="email"
                  name="email"
                  onChange={updateField(setEmail)}
                  defaultValue={email}
                  value={email}
                  required={true}
                  fullWidth
                />
              </ListItem>
              <Divider light />
              <ListItem button>
                <TextField
                  margin="dense"
                  type="text"
                  label="phone number"
                  name="phoneNumber"
                  onChange={updateField(setPhoneNumber)}
                  defaultValue={phoneNumber}
                  value={phoneNumber}
                  required={true}
                  fullWidth
                />
              </ListItem>
              <Divider light />
              <ListItem button>
                <TextField
                  margin="dense"
                  type="address"
                  label="address"
                  name="address"
                  onChange={updateField(setAddress)}
                  defaultValue={address}
                  value={address}
                  required={true}
                  fullWidth
                />
              </ListItem>
              <Divider light />
              <Button onClick={() => history.goBack()} color="primary">
                Cancel
              </Button>
              <Button type="submit" onClick={onSubmit} color="primary">
                Update
              </Button>
            </List>
          </Paper>
        </div>
      </form>
    </>
  );
}

export default LessonCreate;
