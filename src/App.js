import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

import { useHistory } from 'react-router-dom';
import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import img from './Chatbot-img.png';
import { NotificationsNoneRounded } from '@material-ui/icons';
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
  parts: {
      height: '100%',
      margin: '0 0 0 0'
  },
  parts1: {
    margin: '0vh 0 0 0vw'
  },
  rounded: {
    color: 'grey',
    backgroundColor: 'grey',
    width: '18.5vw',
    height: '18.5vw',
    margin: '0 0 2vh 3.4vw'
  },
  button: {
    border: '2px solid #33065B', boxSizing: 'border-box', borderRadius: '10px',
    margin: '0 0 0 3.4vw',
    height: '6vh',
    width: '18vw',
    fontSize: '1.3vw',
    textTransform: 'capitalize',
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
    borderColor: 'black !important'
  },
  txtfld: {
    color: 'red !important',
    width: '25%',
    height: '10%',
    //border:'1px solid white',
    margin: '-0.5vh 0 0 3vw',
  },
  h: {
      margin: '0 0 0 0.8vw',
      fontSize: '1vw'
  },
  input: {
    display: 'none'
  },
  inputStyle: {
    fontStyle: 'italic',
    color: 'black !important',
    fontSize: "1vw",
    background: 'white',
  },
  avatar: {
    width: '3.2vw',
    height: '3.2vw',
    border: '2px solid grey',
    float: 'right',
    margin: '-0.5vh 0 0 3.8vw'
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

export default function App(props) {
  const classes = useStyles();
  const history = useHistory();
  var imgFile='';
  var imagePreviewUrl='';
  var text = 'Checker Inbox & Tasks';

  var types=['text', 'password', 'text', 'text'];

  function handleClick_ctg() {
    history.push("/category");
  }

  /*function imageHandler(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
        console.log(file)
        //console.log(reader.result)
    }
    ReactDOM.render(<div><p>Image</p><img src={reader.result} /></div>, document.getElementById('main'));
    reader.readAsDataURL(file)
  } */

 /* function getData (){
    const token = localStorage.getItem("user");
    axios.get('http://65.0.20.129/auth/users/me/', {
        headers: {
            'Authorization': `Token ${token}`
        }
    })
        .then((response) => {
            var result = response.data;
            console.log(result);
            var element = document.getElementById('email');
            element.value = result.email;
            var element1 = document.getElementById('firstname');
            element1.value = result.username;

        }).then(() => {
          for(var i=0; i<types.length; i++){
            var division = document.getElementById('first');
            console.log(division);
            var element = document.createElement("input");
            console.log(element);
            element.type = types[i];
            element.id = 'input-'+ i;
            console.log(element.id);
            element.style.float = "right";
            element.value = "hello";
            division.append(element);
          }
          
        })
        .catch(error=>{
              console.log(error);
              alert("Please Enter Valid Username And Password");


        }) */


  return (
    <div className={classes.main}>
      <div className={classes.root}>
        <Grid container spacing={0} style={{height:'100vh'}}>
            <Grid  item xs={12} style={{height: '10%'}}>
                <div style={{marginTop: '4vh', marginRight: '3%', marginLeft: '0%', height:'5%', width: '100%', display: 'flex', flexDirection: 'row', paddingLeft: '0%', color: '#113E72'}}>
                      <h1 style={{margin: '1vh 0 0 0', fontSize: '2.5vw', width: '12%', fontWeight: '500'}}>LOGO</h1>
                      <h1 style={{marginRight: '4%', fontSize: '1.5vw', fontWeight: '400'}}>Clients</h1>
                      <h1 style={{marginRight: '4%', fontSize: '1.5vw', fontWeight: '400'}}>Accounting</h1>
                      <h1 style={{marginRight: '4%', fontSize: '1.5vw', fontWeight: '400'}}>Reports</h1>
                      <h1 style={{marginRight: '4%', fontSize: '1.5vw', fontWeight: '400'}}>Admin</h1>

                     
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
                         classes: {
                           root: classes.inputStyle,
                           notchedOutline: classes.notchedOutline,
                         }
                       }}
                       name="name"
                       autoComplete="name"
                       className={classes.txtfld}
                     />
                       <NotificationsNoneRounded style={{fontSize: '2.8vw', marginLeft: '4vw'}}/>
                       <Avatar alt="Nothing" className={classes.avatar} src={img} />
         
                       <ExpandMoreIcon style={{fontSize: '2vw', marginTop: '1vh'}}/>
                     

                </div>
                     
                  
            </Grid>
              
            <Grid item xs={12} style={{display: 'flex', flexDirection: 'row', height: '85%'}}>
              <Grid container spacing={3}>
              <Grid item xs={2} id='first' className={classes.first}>

                <div className={classes.iconButton}>
                  <NavigationOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Keyboard Shortcuts</h4>
                </div>
                <div className={classes.iconButton}>
                  <NavigationOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Navigation</h4>
                </div>
                <div className={classes.iconButton}>
                  <NavigationOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>{text}</h4>
                </div>
                <div className={classes.iconButton}>
                  <NavigationOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Collection Sheet</h4>
                </div>
                <div className={classes.iconButton}>
                  <NavigationOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Individual Collection Sheets</h4>
                </div>
                <div className={classes.iconButton}>
                  <NavigationOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Frequent Posting</h4>
                </div>
                <div className={classes.iconButton}>
                  <NavigationOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Closing Entries</h4>
                </div>
                <div className={classes.iconButton}>
                  <NavigationOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Chart of Accounts</h4>
                </div>
                <div className={classes.iconButton}>
                  <NavigationOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Clients</h4>
                </div>
                <div className={classes.iconButton}>
                  <NavigationOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Group</h4>
                </div>
                <div className={classes.iconButton}>
                  <NavigationOutlinedIcon style={{marginTop: '0%', fontSize: '2vw'}}/>
                  <h4 style={{marginTop: '0%', fontWeight: '400', fontSize: '0.9vw'}}>Center</h4>
                </div>


              </Grid>

              <Grid item xs={10} >
                      <Grid style={{margin: '0 0 0 -6vw', background: '#FFFFFF', height:'95%',width: '104%', boxShadow: '-4px -2px 16px rgba(0, 0, 0, 0.05)', borderRadius: '40px'}}>
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