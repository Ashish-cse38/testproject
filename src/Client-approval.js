import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Button from '@material-ui/core/Button';
import { TextField, InputAdornment } from "@material-ui/core";
import Docks from './Docks';
import Checker_buttons from './Checker_buttons';
import { CheckOutlined, CloseOutlined, DeleteForeverOutlined, ExpandMoreOutlined, FilterListOutlined } from '@material-ui/icons';
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
    height: '80%', 
    width: '90%', 
    margin: '-1% 0vw 0 4.3vw', 
    background: '#FDFDFD', 
    border: '1px solid rgba(0, 0, 0, 0.2)',
    boxSizing: 'borderBox',
    borderRadius: '15px'
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#174A84',
    borderLeft: '2px solid white'
  },
  txtfld: {
    height: '10%',
    width: '24%',
    margin: '0.2% 0 0 2vw',
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
    textTransform: 'capitalize',
    fontStyle: 'italic',
    margin: '0.1% 0.3vw 0.2% 0.3vw'
  }
}));

export default function Client_approval(props) {
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
  

  return (
   <Docks content={
       <div className={classes.main}>
           <h1 style={{ height: '10%',margin: '0% 0vw 0 6vw', fontWeight: '500'}}>Checker Inbox & Tasks</h1>
           <div className={classes.inner}>
              <Checker_buttons />

               <div style={{height: '6.7%', margin: '2% 0 0 0', display: 'flex', flexDirection: 'row'}}>
                <TextField
                        variant="outlined"
                        margin="normal"
                        size="small"
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
                                <FilterListOutlined />
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

                    <Button className={classes.button1} style={{background: '#14AA8C', marginLeft: '1.5vw'}}><CheckOutlined style={{margin: '0 0.2vw 0 0'}}/>Approve</Button>

               </div>

                <div style={{ height: '60%', width: '95%', margin: '2% 0 0 2vw' }}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                </div>
              
           </div>
       </div>
   }/>
  );
}