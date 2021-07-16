import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Button from '@material-ui/core/Button';
import { TextField, InputAdornment } from "@material-ui/core";
import Docks from './Docks';
import { ArrowForward, CheckOutlined, CloseOutlined, DeleteForeverOutlined, ExpandLessOutlined, ExpandMoreOutlined } from '@material-ui/icons';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import IconButton from '@material-ui/core/IconButton';
import Modal from "react-modal";
import ReactDOM from 'react-dom';
import Box from '@material-ui/core/Box';

<link rel="stylesheet" media="screen" href="http://fontlibrary.org/face/poppins" type="text/css"/>



const useStyles = makeStyles((theme) => ({
  main: {
    height: '90%', 
    width: '100%',
    color: '#113E72',
    padding: '4% 0 0 0'
  },
  inner: {
    width: '90%', 
    margin: '0% 0vw 0 4.3vw', 
    background: '#FDFDFD', 
    border: '1px solid rgba(0, 0, 0, 0.2)',
    boxSizing: 'borderBox',
    borderRadius: '15px',
  },
  inner1: {
    //height: '18%', 
    width: '90%', 
    margin: '2% 0vw 0 4.3vw', 
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
    marginTop: '-5%'
    
  },
  txtfld1: {
    width: '90%',
    margin: '0% 0 0 0vw',
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

export default function Frequent_posting(props) {
  const classes = useStyles();
  const history = useHistory();
  var text = 'Checker Inbox & Tasks';
  var icon = <SearchOutlinedIcon />;
  var ci = 'Checker Inbox';
  var count = 0;
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


  function clicker() {
      count++;
      if (count%2 == 0){
        var element = [];
        var symbol = <ExpandMoreOutlined style={{fontSize: '2vw'}}/>;

      }
      else{
        var symbol = <ExpandLessOutlined style={{fontSize: '2vw'}}/>;
        var element = [
          <>
        <div style={{width: '95%', margin: '0% 0 0 0vw', border: '1px solid rgba(23, 74, 132, 0.3)'}}></div>

        <div style={{width: '100%', margin: '2% 0 0 1vw', display: 'flex', flexDirection:'row'}}>
        <div className={classes.container} style={{margin: '0 0vw 0 0vw'}}>
            <h4 className={classes.headings}>Payment Type</h4>
            <TextField
                variant="outlined"
                size="normal"
                required
                id="firstname"
                placeholder="Select Payment Type"
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

        <div className={classes.container}>
            <h4 className={classes.headings}>Account</h4>
            <TextField
                variant="outlined"
                size="normal"
                required
                id="firstname"
                placeholder="Enter Account"
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

        <div className={classes.container} style={{margin: '0 0vw 0 0vw'}}>
            <h4 className={classes.headings}>Cheque</h4>
            <TextField
                variant="outlined"
                size="normal"
                required
                id="firstname"
                placeholder="Enter Cheque"
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

        <div className={classes.container} >
            <h4 className={classes.headings}>Routine Code</h4>
            <TextField
                variant="outlined"
                size="normal"
                required
                id="firstname"
                placeholder="Enter routing code"
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

       </div>

       <div style={{ width: '100%', margin: '2% 0 0 1vw', display: 'flex', flexDirection:'row'}}>
        <div className={classes.container} style={{margin: '0 0vw 5vh 0vw'}}>
            <h4 className={classes.headings}>Receipt</h4>
            <TextField
                variant="outlined"
                size="normal"
                required
                id="firstname"
                placeholder="Enter receipt"
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

        <div className={classes.container}>
            <h4 className={classes.headings}>Bank</h4>
            <TextField
                variant="outlined"
                size="normal"
                required
                id="firstname"
                placeholder="Enter bank"
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
        <div>

        </div>
        </div>           
    </>
      ];
    }
    ReactDOM.render(symbol, document.getElementById('button'));
    ReactDOM.render(element, document.getElementById('content'));
  }

  return (
      
   <Docks content={
       <div id = 'this_div' className={classes.main}>
           <h1 style={{ height: '6.7vh',margin: '0% 0vw 0% 6vw', fontWeight: '500'}}>Frequent Postings</h1>
           <div className={classes.elementContainer}>
           <div className={classes.inner}>
               <div className={classes.innerElements}>
                   <div style={{width: '100%', margin: '2% 0 0 1vw', display: 'flex', flexDirection:'row'}}>
                    <div className={classes.container} style={{margin: '0 0vw 0 0vw'}}>
                        <h4 className={classes.headings} >Branch Office</h4>
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

                    <div className={classes.container}>
                        <h4 className={classes.headings}>Accounting Rules</h4>
                        <TextField
                            variant="outlined"
                            size="normal"
                            required
                            id="firstname"
                            placeholder="Select accounting rules"
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

                    <div className={classes.container} style={{margin: '0 0 0 0vw'}}>
                        <h4 className={classes.headings}>Currency</h4>
                        <TextField
                            variant="outlined"
                            size="normal"
                            required
                            id="firstname"
                            placeholder="Select currency"
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
                   </div>

                   <div style={{width: '100%', margin: '2% 0 0 1vw', display: 'flex', flexDirection:'row'}}>
                    <div className={classes.container} style={{margin: '0 0 0 0vw'}}>
                        <h4 className={classes.headings}>Reference Number</h4>
                        <TextField
                            variant="outlined"
                            size="normal"
                            required
                            id="firstname"
                            placeholder="Enter Ref. number"
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

                    <div className={classes.container} style={{marginBottom: '5vh'}}>
                        <h4 className={classes.headings}>Repayment Date</h4>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                            style={{margin:'-5% 0 3vh 0', width: '83%'}}
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
                    <div>

                    </div>
                   </div>
                   
               </div>

           </div>


           <div className={classes.inner1}>
               <div style={{display: 'flex', flexDirection: 'row'}}>
                <h3 style={{margin: '2% 0 1.5% 2vw'}}>Payment Details</h3>
                <IconButton id='button' style={{margin: '0 0 0 60vw'}} onClick={clicker}>
                    {symbol}
                </IconButton>
               </div>

        <div id='content' className={classes.innerElements}>

        </div>
           
                </div>
                <div style={{margin: '2% 0 0 0vw'}}>
                <h3 style={{margin: '0% 0 0 8vw', fontWeight: '400'}}>Comments</h3>
                </div>
                <div style={{margin: '0.5% 0 0 8vw'}}>
                <TextField
                            variant="outlined"
                            size="normal"
                            required
                            multiline
                            rows={7}
                            rowsMax={7}
                            id="firstname"
                            placeholder="Enter comment"
                            InputLabelProps={{
                                classes: {
                                root: classes.textColor
                                },
                            }}
                            InputProps={{
                                classes: {
                                root: classes.inputStyle1,
                                notchedOutline: classes.notchedOutline,
                                }
                            }}
                            name="name"
                            autoComplete="name"
                            className={classes.txtfld1}
                            />

                    </div>
                    <div style={{margin: '0% 0 0 69.5vw'}}>
                    <Button className={classes.button}>Submit</Button>

                </div>
           </div>
          
       </div>
   }/>
  );
}