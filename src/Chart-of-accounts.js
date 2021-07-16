import React from 'react';
import { AddIcon, DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Button from '@material-ui/core/Button';
import { TextField, InputAdornment } from "@material-ui/core";
import Docks from './Docks';
import Checker_buttons from './Checker_buttons';
import IconButton from '@material-ui/core/IconButton';
import { AccountTree, CheckOutlined, CloseOutlined, DeleteForeverOutlined, ExpandMoreOutlined, FilterListOutlined } from '@material-ui/icons';
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
    height: '70%', 
    width: '90%',
    margin: '-1% 0vw 0 4.3vw', 
    background: '#FDFDFD', 
    border: '1px solid rgba(0, 0, 0, 0.2)',
    boxSizing: 'borderBox',
    borderRadius: '15px'
  },
  startArea: {
    overflow: 'auto', 
    width: '100%', 
    height: '7%', 
    display: 'flex', 
    flexDirection: 'row', 
    margin: '2% 0 0 2vw'
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#174A84',
    borderLeft: '2px solid white'
  },
  txtfld: {
    height: '10%',
    width: '30%',
    margin: '0 0 0 2vw',
  },
  button: {
    '&:hover': {
        background: '#174A84',
       },
    background: '#174A84',
    color: 'white',
    fontStyle: 'italic',
    textTransform: 'capitalize',
    border: '1px solid #174A84',
    boxSizing: 'border-box',
    filter: 'dropShadow(0px 4px 8px rgba(0, 0, 0, 0.1))',
    borderRadius: '5px',
    margin: '0 0vw 0 54vw',
    padding: '0 0.5vw 0 0.5vw'
  },
  inputStyle: {
    color: '#174A84 !important',
    fontSize: "0.9vw",
    background: 'white',
    padding: '0% 0 0% 5%'
  },
  button1: {
    '&:hover': {
        color: 'white',
        textTransform: 'capitalize',
       },
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
    borderRadius: '5px',
    color: 'white',
    width: '10%',
    textTransform: 'capitalize',
    fontStyle: 'italic',
    margin: '0% 0vw 0 0vw'
  },
  button2: {
    '&:hover': {
        color: '#174A84',
        textTransform: 'capitalize',
        background: '#E8F2FE'
       },
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', 
    background: '#E8F2FE',
    borderRadius: '5px',
    color: '#174A84',
    width: '10%',
    textTransform: 'capitalize',
    fontStyle: 'italic',
    margin: '0 0vw 0 31vw',
  }
}));

export default function Chart_of_accounts(props) {
  const classes = useStyles();
  const history = useHistory();
  var text = 'Checker Inbox & Tasks';
  var icon = <SearchOutlinedIcon />;
  var ci = 'Checker Inbox';

  const columns = [
    { field: 'account', headerName: 'Account', width: 210 },
    { field: 'gl_code', headerName: 'GL Code', width: 230 },
    { field: 'account_type', headerName: 'Account Type', width: 230 },
    { field: 'manual_entries_allowed', headerName: 'Manual Entries Allowed', width: 250 },
    { field: 'used_as', headerName: 'Used as', width: 230 }
  ];

  const rows = [
    
  ];
  

  return (
   <Docks content={
       <div className={classes.main}>
           <h1 style={{ height: '10%',margin: '0% 0vw 0 6vw', fontWeight: '500'}}>Chart of Accounts</h1>
           <h4 style={{ height: '10%',margin: '-2% 0vw -2% 6vw', fontWeight: '500'}}>Accounting / Chart of Accounts</h4>
           <div className={classes.inner}>
              <div className={classes.startArea}>
                <h3 style={{margin: '1% 0 0 0', color: 'black', fontWeight: '500'}}>Chart of Accounts</h3>
                <Button className={classes.button}><AddIcon style={{margin: '0 0.3vw 0 0vw'}} />Add Account</Button>
              </div>

               <div style={{height: '6.7%', margin: '2% 0 0 0', display: 'flex', flexDirection: 'row'}}>
               <TextField
                        variant="outlined"
                        margin="normal"
                        size="small"
                        required
                        id="firstname"
                        placeholder="Filter by accounts/GL code/ account type"
                        InputLabelProps={{
                            classes: {
                            root: classes.textColor
                            },
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                            <FilterListOutlined />
                            </InputAdornment>
                          ),
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

                    <Button className={classes.button1} style={{background: '#14AA8C', marginLeft: '1.5vw'}}>Submit</Button>
                    <Button className={classes.button2}><AccountTree style={{margin: '0 0.3vw 0 0vw'}} />Tree View</Button>


               </div>

                <div style={{ height: '60%', width: '95%', margin: '2% 0 0 2vw' }}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                </div>
              
           </div>
       </div>
   }/>
  );
}