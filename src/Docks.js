import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import { InputAdornment } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import img from './Chatbot-img.png';
import { EventBusyOutlined, GroupAddOutlined, GroupOutlined, LocationOnOutlined, NotificationsNoneRounded, PieChartOutlined } from '@material-ui/icons';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LibraryBooksOutlinedIcon from '@material-ui/icons/LibraryBooksOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import CachedOutlinedIcon from '@material-ui/icons/CachedOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';

<link rel="stylesheet" media="screen" href="http://fontlibrary.org/face/poppins" type="text/css"/>



const useStyles = makeStyles((theme) => ({
  textColor: {
    color: 'white !important',
    fontSize: '1vw',
    textAlign: 'center'
  },
    color: {
        color: 'black',
        fontSize: '1vw'
      },
      main: {
        width: '100%',
        height: '100%',
        background: '#F1F4F9'
      },
  root: {
    width: '96%',
    marginLeft: '3%',
  },
  iconButton: {
    '&:hover': {
      color: 'white',
      background: '#113E72',
      borderRadius: '8px'
     },
     color: '#113E72',
     width: '50%',
     height: '10%',
     margin: '0% 0% 0% 0%',
     padding: '10% 2% 5% 2%'
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'black !important',
    borderLeft: '2px solid white'
  },
  txtfld: {
    height: '10%',
    width: '22%',
    margin: '-0.5vh 0 0 8vw',
  },
  inputStyle: {
    fontStyle: 'italic',
    color: 'black !important',
    fontSize: "0.9vw",
    background: 'white',
  },
  avatar: {
    width: '3.2vw',
    height: '3.2vw',
    border: '2px solid #1B182B 50%',
    float: 'right',
    margin: '-0.5vh 0 0 2.2vw'
  },
  first: {
    marginTop: '1%', 
    height:'91%',
    width: '100%',
    color:'black', 
    textAlign:'center',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none'
  }
  }
}));

export default function Docks(props) {
  const classes = useStyles();
  const history = useHistory();
  var text = 'Checker Inbox & Tasks';
  var icon = <SearchOutlinedIcon />;

  function goto_navig() {
    history.push('/navigation');
  }

  function goto_checker() {
    history.push('/checker_inbox');
  }

  function goto_collection() {
    history.push('/collection_sheet');
  }

  function goto_individual() {
    history.push('/individual_collection');
  }

  function goto_closing_ent() {
    history.push('/closing_entries');
  }

  function goto_frequent_pst() {
    history.push('/frequent_posting');
  }

  function goto_chart_accts() {
    history.push('/chart_of_accounts');
  }

  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <Grid container spacing={0} style={{height:'100vh'}}>
            <Grid  item xs={12} style={{height: '10%'}}>
                <div style={{marginTop: '4vh', marginRight: '3%', marginLeft: '0%', height:'5%', width: '100%', display: 'flex', flexDirection: 'row', paddingLeft: '0%', color: '#113E72'}}>
                      <h1 style={{margin: '1vh 0 0 0', fontSize: '2.5vw', width: '12%', fontWeight: '500'}}>LOGO</h1>

                      <div style={{marginRight: '3%', display: 'flex', flexDirection: 'row'}}>
                        <PersonOutlineOutlinedIcon style={{marginTop: '13%', fontSize: '2.1vw'}}/>
                      <h1 style={{fontSize: '1.5vw', fontWeight: '400'}}>Clients</h1>
                      </div>

                      <div style={{marginRight: '3%', display: 'flex', flexDirection: 'row'}}>
                      <MonetizationOnOutlinedIcon style={{marginTop: '9%', fontSize: '2vw'}}/>
                      <h1 style={{ fontSize: '1.5vw', fontWeight: '400'}}>Accounting</h1>
                      </div>
                     
                      <div style={{marginRight: '3%', display: 'flex', flexDirection: 'row'}}>
                      <AssessmentOutlinedIcon style={{marginTop: '13%', fontSize: '2vw'}}/>
                      <h1 style={{fontSize: '1.5vw', fontWeight: '400'}}>Reports</h1>
                      </div>

                      <div style={{marginRight: '0%', display: 'flex', flexDirection: 'row'}}>
                      <TuneOutlinedIcon style={{marginTop: '15%', fontSize: '2vw'}}/>
                      <h1 style={{fontSize: '1.5vw', fontWeight: '400'}}>Admin</h1>
                      </div>

                     <TextField
                       variant="outlined"
                       margin="normal"
                       //size="small"
                       required
                       id="firstname"
                       placeholder="Search your order"
                       InputLabelProps={{
                         classes: {
                          root: classes.textColor
                         },
                       }}
                       InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchOutlinedIcon />
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
                       <NotificationsNoneRounded style={{fontSize: '2.8vw', marginLeft: '3vw'}}/>
                       <Avatar alt="Nothing" className={classes.avatar} src={img} />
         
                       <ExpandMoreIcon style={{fontSize: '2vw', marginTop: '1vh'}}/>
                     

                </div>
                     
                  
            </Grid>
              
            <Grid item xs={12} style={{display: 'flex', flexDirection: 'row', height: '85%'}}>
              <Grid container spacing={3}>
              <Grid item xs={2} id='first' className={classes.first}>

                <div className={classes.iconButton}>
                  <KeyboardIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Keyboard Shortcuts</h4>
                </div>
                <div className={classes.iconButton} onClick={goto_navig}>
                  <NavigationOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Navigation</h4>
                </div>
                <div className={classes.iconButton} onClick={goto_checker}>
                  <CheckCircleOutlineIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>{text}</h4>
                </div>
                <div className={classes.iconButton} onClick={goto_collection}>
                  <LibraryBooksOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Collection Sheet</h4>
                </div>
                <div className={classes.iconButton} onClick={goto_individual}>
                  <ListAltOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Individual Collection Sheets</h4>
                </div>
                <div className={classes.iconButton} onClick={goto_frequent_pst}>
                  <CachedOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Frequent Posting</h4>
                </div>
                <div className={classes.iconButton}>
                  <PostAddOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Add Journal Entries</h4>
                </div>
                <div className={classes.iconButton} onClick={goto_closing_ent}>
                  <EventBusyOutlined style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Closing Entries</h4>
                </div>
                <div className={classes.iconButton}>
                  <PieChartOutlined style={{marginTop: '0%', fontSize: '2vw'}} onClick={goto_chart_accts}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Chart of Accounts</h4>
                </div>
                <div className={classes.iconButton}>
                  <PersonOutlineOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Clients</h4>
                </div>
                <div className={classes.iconButton}>
                  <GroupOutlined style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Group</h4>
                </div>
                <div className={classes.iconButton}>
                  <LocationOnOutlined style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Center</h4>
                </div>


              </Grid>

              <Grid item xs={10} >
                      <Grid style={{margin: '0 0 0 -7.5vw', background: '#FFFFFF', height:'96%',width: '107%', boxShadow: '-4px -2px 16px rgba(0, 0, 0, 0.05)', borderRadius: '40px'}}>
                      {props.content}
                      </Grid>

              </Grid>
              </Grid>
             
            </Grid>
              
        </Grid>
    </div>
    </div>
    
  );
}