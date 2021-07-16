import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Button from '@material-ui/core/Button';
import { TextField, InputAdornment } from "@material-ui/core";
import Docks from './Docks';
import { CheckOutlined, CloseOutlined, DeleteForeverOutlined, ExpandMoreOutlined } from '@material-ui/icons';
import Box from '@material-ui/core/Box';

<link rel="stylesheet" media="screen" href="http://fontlibrary.org/face/poppins" type="text/css"/>



const useStyles = makeStyles((theme) => ({
    button: {
        '&:hover': {
            color: 'white',
            background: '#174A84',
            borderRadius: '5px'
           },
        color: '#174A84',
        fontStyle: 'italic',
        textTransform: 'capitalize',
        border: '1px solid #174A84',
        boxSizing: 'border-box',
        filter: 'dropShadow(0px 4px 8px rgba(0, 0, 0, 0.1))',
        borderRadius: '5px',
        margin: '0 0vw 0 1vw'
      },
      innerButtons: {
          margin: '0 0vw 0 2vw'
      }
}));

export default function Checker_buttons(props) {
  const classes = useStyles();
  const history = useHistory();
  var ci = 'Checker Inbox';

  function checker_inbox() {
    history.push("/checker_inbox");
  }

  function client_approval() {
    history.push("/client_approval");
  }
  

  return (
       <>
               <div className={classes.innerButtons}>
                    <h3 style={{fontWeight: '500', color: '#1E1E1E'}}>Pending Tasks</h3>
                    <Button className={classes.button} style={{marginLeft: '0vw'}} onClick={checker_inbox}>{ci}</Button>
                
                    <Button className={classes.button} onClick={client_approval}>Client Approval</Button>
                
                    <Button className={classes.button}>Loan Approval</Button>
                
                    <Button className={classes.button}>Loan Disbural</Button>
                
                    <Button className={classes.button}>Reschedule Loan</Button>
               </div>

               <div style={{width: '95%', margin: '1.5% 0 0 2vw', border: '1px solid rgba(23, 74, 132, 0.3)'}}>

               </div>
        </>
  );
}