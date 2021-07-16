import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Button from '@material-ui/core/Button';
import { TextField, InputAdornment } from "@material-ui/core";
import Docks from './Docks';
import { ArrowForward, CheckOutlined, CloseOutlined, DeleteForeverOutlined, ExpandMoreOutlined } from '@material-ui/icons';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

<link rel="stylesheet" media="screen" href="http://fontlibrary.org/face/poppins" type="text/css"/>



const useStyles = makeStyles((theme) => ({
  main: {
    height: '100%', 
    width: '100%',
    color: '#113E72',
    padding: '4% 0 0 0'
  },
  inner: {
    height: '22%', 
    width: '90%', 
    margin: '-1% 0vw 0 4.3vw', 
    background: '#FDFDFD', 
    border: '1px solid rgba(0, 0, 0, 0.2)',
    boxSizing: 'borderBox',
    borderRadius: '15px'
  },
  notchedOutline: {
    borderWidth: '1px',
    //borderColor: 'black !important',
    borderLeft: '2px solid white',
  },
  txtfld: {
    width: '90%',
    margin: '-5% 0 0 0vw',
    
  },
  txtfld1: {
    height: '5%',
    width: '90%',
    margin: '5% 0 0 3vw',
  },
  inputStyle: {
    fontStyle: 'italic',
    color: '#174A84 !important',
    fontSize: "0.9vw",
    background: 'white',
    paddingTop: '0%',
    background: '#FDFDFD',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    boxSizing: 'borderBox',
    boxShadow: '0px 4px 7px rgba(0, 0, 0, 0.07)',
    borderRadius: '5px'
  },
  button: {
    '&:hover': {
        background: '#174A84'
       },
    width: '25%',
    color: 'white',
    background: '#174A84',
    textTransform: 'capitalize',
    border: '1px solid #174A84',
    boxSizing: 'border-box',
    filter: 'dropShadow(0px 4px 8px rgba(0, 0, 0, 0.1))',
    borderRadius: '5px',
    margin: '3.8% 0vw 0 0vw'
  },
  innerElements: {
      margin: '0 0vw 0 2vw'
  },
  container: {
      margin: '0 0 0 0vw'
  },
  headings: {
      fontWeight: '400'
  }
}));

export default function Individual_collection(props) {
  const classes = useStyles();
  const history = useHistory();
  var text = 'Checker Inbox & Tasks';
  var icon = <SearchOutlinedIcon />;
  var ci = 'Checker Inbox';

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'madeOnDate', headerName: 'Made On Date', width: 210 },
    { field: 'status', headerName: 'Status', width: 210 },
    { field: 'user', headerName: 'User', width: 210 },
    { field: 'action', headerName: 'Action', width: 210 },
    { field: 'entity', headerName: 'Entity', width: 210 },
   
  ];

  const rows = [
    
  ];

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  

  return (
   <Docks content={
       <div className={classes.main}>
           <h1 style={{ height: '10%',margin: '0% 0vw 0 6vw', fontWeight: '500'}}>Collection Sheet</h1>
           <div className={classes.inner}>
               <div className={classes.innerElements}>
                   <div style={{height: '100%', width: '100%', margin: '2% 0 0 1vw', display: 'flex', flexDirection:'row'}}>
                    <div className={classes.container}>
                        <h4 className={classes.headings}>Branch Office</h4>
                        <TextField
                            variant="outlined"
                            size="normal"
                            required
                            id="firstname"
                            placeholder="Select Branch Office"
                            InputLabelProps={{
                                classes: {
                                root: classes.textColor
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="start">
                                    <IconButton style={{margin: '0 0 0 -1.5vw'}}>
                                    <ExpandMoreOutlined />
                                    </IconButton>
                                </InputAdornment>
                                ),
                                classes: {
                                root: classes.inputStyle,
                                notchedOutline: classes.notchedOutline,
                                }
                            }}
                            name="name"
                            autoComplete="name"
                            className={classes.txtfld}
                            />

                    </div>

                    <div className={classes.container} style={{width: '20%'}}>
                        <h4 className={classes.headings}>Repayment Date</h4>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            style={{margin:'-5% 0 0 0', width: '90%'}}
                            disableToolbar
                            size="normal"
                            inputVariant="outlined"
                            format="MM/dd/yyyy"
                            id="date-picker-inline"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            InputLabelProps={{
                                classes: {
                                root: classes.textColor
                                },
                            }}
                            InputProps={{
                                classes: {
                                root: classes.inputStyle,
                                notchedOutline: classes.notchedOutline,
                                }
                            }}
                            />
                        </MuiPickersUtilsProvider>

                    </div>

                    <div className={classes.container}>
                        <h4 className={classes.headings}>Staff</h4>
                        <TextField
                            variant="outlined"
                            size="normal"
                            required
                            id="firstname"
                            placeholder="Select Loan Office"
                            InputLabelProps={{
                                classes: {
                                root: classes.textColor
                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="start">
                                    <IconButton style={{margin: '0 0 0 -1.5vw'}}>
                                    <ExpandMoreOutlined />
                                    </IconButton>
                                </InputAdornment>
                                ),
                                classes: {
                                root: classes.inputStyle,
                                notchedOutline: classes.notchedOutline,
                                }
                            }}
                            name="name"
                            autoComplete="name"
                            className={classes.txtfld}
                            />
                    </div>
                    <Button className={classes.button}>Collection Sheet<ArrowForward style={{marginLeft: '2vw'}}/></Button>
                   </div>


                    </div>
                   </div>
                   
               </div>
   }/>
  );
}