import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Button from '@material-ui/core/Button';
import { TextField, InputAdornment } from "@material-ui/core";
import Docks from './Docks';
import { ArrowForward, CheckOutlined, CloseOutlined, DeleteForeverOutlined, ExpandLessOutlined, ExpandMoreOutlined, FilterListOutlined } from '@material-ui/icons';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import IconButton from '@material-ui/core/IconButton';
import Modal from "react-modal";
import ReactDOM from 'react-dom';
import no_data from './no-data1';
import Box from '@material-ui/core/Box';

<link rel="stylesheet" media="screen" href="http://fontlibrary.org/face/poppins" type="text/css"/>



const useStyles = makeStyles((theme) => ({
  main: {
    height: '80vh', 
    width: '100%',
    color: '#113E72',
    padding: '4% 0 0 0'
  },
  inner: {
    height: '64vh',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
        display: 'none'
    }
  },
  inner1: {
    //height: '18%', 
    width: '84%', 
    margin: '2% 0vw 0 4.3vw', 
    background: '#FDFDFD', 
    border: '1px solid rgba(0, 0, 0, 0.2)',
    boxSizing: 'borderBox',
    borderRadius: '15px'
  },
  notchedOutline: {
    //borderWidth: '1px',
    //borderColor: 'black !important',
  },
  txtfld: {
    width: '84%',
    margin: '0% 0 1% 4.3vw',
    border: '1px solid #174A84',
    boxSizing: 'borderBox',
    filter: 'dropShadow(0px 4px 8px rgba(0, 0, 0, 0.1))',
    borderRadius: '10px'
  },
  txtfld1: {
    width: '90%',
    margin: '0% 0 0 0vw',
  },
  inputStyle: {
    fontStyle: 'italic',
    color: '#174A84 !important',
    fontSize: "1.1vw",
    paddingTop: '0%'
  },
  inputStyle1: {
    fontStyle: 'italic',
    color: '#174A84 !important',
    fontSize: "0.9vw",
    background: 'white',
    paddingTop: '2%',
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
    width: '20%',
    color: 'white',
    background: '#174A84',
    textTransform: 'capitalize',
    border: '1px solid #174A84',
    boxSizing: 'border-box',
    filter: 'dropShadow(0px 4px 8px rgba(0, 0, 0, 0.1))',
    borderRadius: '5px',
    margin: '3vh 0vw 0 0vw',
    padding: '1vh 4vw 1vh 4vw'
  },
  elementContainer: {
    height: '65vh', 
    width: '100%', 
    overflow: 'auto',
    '&::-webkit-scrollbar': {
        display: 'none'
    }
    
  },
  innerElements: {
      margin: '0 0vw 0 2vw'
  },
  container: {
      margin: '0 1vw 0 1vw'
  },
  headings: {
      fontWeight: '400'
  }
}));

Modal.setAppElement("#root");

export default function Navigation(props) {
  const classes = useStyles();
  const history = useHistory();
  var text = 'Checker Inbox & Tasks';
  var icon = <SearchOutlinedIcon />;
  var ci = 'Checker Inbox';
  var count_0 = 0;
  var count_1 = 0;
  var count_2 = 0;
  var count_3 = 0;
  var count_4 = 0;
  var symbol = <ExpandMoreOutlined style={{fontSize: '2vw'}}/>;

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


  function offices() {
      count_0++;
      if (count_0%2 == 0){
        var element = [];
        var symbol = <ExpandMoreOutlined style={{fontSize: '2vw'}}/>;

      }
      else{
        var symbol = <ExpandLessOutlined style={{fontSize: '2vw'}}/>;
        var element = [
          <>
        <div style={{width: '98.5%', margin: '0% 0 0 -0.7vw', border: '1px solid rgba(23, 74, 132, 0.3)'}}></div>

        <div style={{width: '100%', margin: '2% 0 0 1vw', display: 'flex', flexDirection:'row'}}>
       <img src={no_data} style={{height: '20vh', width: '16vw', margin: '0 0 0 24vw'}}></img>
       
        </div>    
        <h3 style={{margin: '0 0 4vh 30vw'}}>No data yet!</h3>       
    </>
      ];
    }
    ReactDOM.render(symbol, document.getElementById('cat-0'));
    ReactDOM.render(element, document.getElementById('content-0'));
  }

  function loan_officers() {
    count_1++;
    if (count_1%2 == 0){
      var element = [];
      var symbol = <ExpandMoreOutlined style={{fontSize: '2vw'}}/>;

    }
    else{
      var symbol = <ExpandLessOutlined style={{fontSize: '2vw'}}/>;
      var element = [
        <>
      <div style={{width: '98.5%', margin: '0% 0 0 -0.7vw', border: '1px solid rgba(23, 74, 132, 0.3)'}}></div>

      <div style={{width: '100%', margin: '2% 0 0 1vw', display: 'flex', flexDirection:'row'}}>
     <img src={no_data} style={{height: '20vh', width: '16vw', margin: '0 0 0 24vw'}}></img>
     
      </div>    
      <h3 style={{margin: '0 0 4vh 30vw'}}>No data yet!</h3>       
  </>
    ];
  }
  ReactDOM.render(symbol, document.getElementById('cat-1'));
  ReactDOM.render(element, document.getElementById('content-1'));
}

function centers() {
  count_2++;
  if (count_2%2 == 0){
    var element = [];
    var symbol = <ExpandMoreOutlined style={{fontSize: '2vw'}}/>;

  }
  else{
    var symbol = <ExpandLessOutlined style={{fontSize: '2vw'}}/>;
    var element = [
      <>
    <div style={{width: '98.5%', margin: '0% 0 0 -0.7vw', border: '1px solid rgba(23, 74, 132, 0.3)'}}></div>

    <div style={{width: '100%', margin: '2% 0 0 1vw', display: 'flex', flexDirection:'row'}}>
   <img src={no_data} style={{height: '20vh', width: '16vw', margin: '0 0 0 24vw'}}></img>
   
    </div>    
    <h3 style={{margin: '0 0 4vh 30vw'}}>No data yet!</h3>       
</>
  ];
}
ReactDOM.render(symbol, document.getElementById('cat-2'));
ReactDOM.render(element, document.getElementById('content-2'));
}

function groups() {
  count_3++;
  if (count_3%2 == 0){
    var element = [];
    var symbol = <ExpandMoreOutlined style={{fontSize: '2vw'}}/>;

  }
  else{
    var symbol = <ExpandLessOutlined style={{fontSize: '2vw'}}/>;
    var element = [
      <>
    <div style={{width: '98.5%', margin: '0% 0 0 -0.7vw', border: '1px solid rgba(23, 74, 132, 0.3)'}}></div>

    <div style={{width: '100%', margin: '2% 0 0 1vw', display: 'flex', flexDirection:'row'}}>
   <img src={no_data} style={{height: '20vh', width: '16vw', margin: '0 0 0 24vw'}}></img>
   
    </div>    
    <h3 style={{margin: '0 0 4vh 30vw'}}>No data yet!</h3>       
</>
  ];
}
ReactDOM.render(symbol, document.getElementById('cat-3'));
ReactDOM.render(element, document.getElementById('content-3'));
}

function clients() {
  count_4++;
  if (count_4%2 == 0){
    var element = [];
    var symbol = <ExpandMoreOutlined style={{fontSize: '2vw'}}/>;

  }
  else{
    var symbol = <ExpandLessOutlined style={{fontSize: '2vw'}}/>;
    var element = [
      <>
    <div style={{width: '98.5%', margin: '0% 0 0 -0.7vw', border: '1px solid rgba(23, 74, 132, 0.3)'}}></div>

    <div style={{width: '100%', margin: '2% 0 0 1vw', display: 'flex', flexDirection:'row'}}>
   <img src={no_data} style={{height: '20vh', width: '16vw', margin: '0 0 0 24vw'}}></img>
   
    </div>    
    <h3 style={{margin: '0 0 4vh 30vw'}}>No data yet!</h3>       
</>
  ];
}
ReactDOM.render(symbol, document.getElementById('cat-4'));
ReactDOM.render(element, document.getElementById('content-4'));
}

  return (
      
   <Docks content={
       <div id = 'this_div' className={classes.main}>
           <h1 style={{height: '10%', fontWeight: '500', margin: '0 0 0% 6vw'}}>Navigation</h1>
           <div className={classes.inner}>

           
           <TextField
                        variant="outlined"
                        margin="normal"
                        size="normal"
                        required
                        id="firstname"
                        placeholder="Filter by name"
                        InputLabelProps={{
                            classes: {
                            root: classes.textColor
                            },
                        }}
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                                <FilterListOutlined style={{fontSize: '2.2vw'}}/>
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
           <div className={classes.inner1}>
           
               <div style={{display: 'flex', flexDirection: 'row', margin: '0% 0 0 0'}}>
                <h3 style={{margin: '1.5% 0 0% 2vw'}}>Offices</h3>
                <IconButton id='cat-0' style={{margin: '0 0 0 61vw'}} onClick={offices}>
                    {symbol}
                </IconButton>
               </div>

               

        <div id='content-0' className={classes.innerElements}>

        </div>
           
                </div>

                <div className={classes.inner1}>
           
               <div style={{display: 'flex', flexDirection: 'row', margin: '0% 0 0 0'}}>
                <h3 style={{margin: '1.5% 0 0% 2vw'}}>Loan Officers</h3>
                <IconButton id='cat-1' style={{margin: '0 0 0 57.7vw'}} onClick={loan_officers}>
                    {symbol}
                </IconButton>
               </div>

               

        <div id='content-1' className={classes.innerElements}>

        </div>
           
                </div>

                <div className={classes.inner1}>
           
           <div style={{display: 'flex', flexDirection: 'row', margin: '0% 0 0 0'}}>
            <h3 style={{margin: '1.5% 0 0% 2vw'}}>Centers</h3>
            <IconButton id='cat-2' style={{margin: '0 0 0 60.7vw'}} onClick={centers}>
                {symbol}
            </IconButton>
           </div>

           

    <div id='content-2' className={classes.innerElements}>

    </div>
       
            </div>

            <div className={classes.inner1}>
           
           <div style={{display: 'flex', flexDirection: 'row', margin: '0% 0 0 0'}}>
            <h3 style={{margin: '1.5% 0 0% 2vw'}}>Groups</h3>
            <IconButton id='cat-3' style={{margin: '0 0 0 61vw'}} onClick={groups}>
                {symbol}
            </IconButton>
           </div>

           

    <div id='content-3' className={classes.innerElements}>

    </div>
       
            </div>

            <div className={classes.inner1}>
           
           <div style={{display: 'flex', flexDirection: 'row', margin: '0% 0 0 0'}}>
            <h3 style={{margin: '1.5% 0 0% 2vw'}}>Clients</h3>
            <IconButton id='cat-4' style={{margin: '0 0 0 61.2vw'}} onClick={clients}>
                {symbol}
            </IconButton>
           </div>

           

    <div id='content-4' className={classes.innerElements}>

    </div>
       
            </div>
            </div>
       </div>
   }/>
  );
}