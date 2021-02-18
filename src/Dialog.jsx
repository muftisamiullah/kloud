import React,{useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(0),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(0),
    paddingTop:"0",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(0),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({...props}) {
const classes = useStyles();
   const  [name, setName] = useState('');
   const  [email, setEmail] = useState('');
   const  [password, setPassword] = useState('');


   const handleEmailChange= (e) =>{
        setEmail(e.target.value);
    }
 
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value);
    }

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const handleData = (e) => {
        console.log("name", name)
        console.log("email", email)
        console.log("password", password)
        props.closeDialog();
        props.data('sign-out')
    }

  return (
    <div>
      <Dialog onClose={props.closeDialog}  aria-labelledby="max-width-dialog-title" open={props.openDialog}  fullWidth={true}
        maxWidth="md">
        {/* <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Modal title
        </DialogTitle> */}
        <DialogContent style={{paddingTop:"0px"}}>
            <Grid container>
                <Grid item lg={4} style={{backgroundColor:'blue'}}>
                    <p style={{position: 'absolute',bottom: '0',left:'75px'}}>www.levencross.com</p>
                </Grid>
                <Grid item lg={8}>
                    <h1>Sign Up Now</h1>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Full Name" name="name" onChange={handleNameChange}/>
                    <TextField id="standard-basic" label="Email" name="email" type="email" onChange={handleEmailChange}/>
                    <TextField id="standard-basic" label="Password" name="password" type="password" onChange={handlePasswordChange}/>
                    <Button variant = "outlined" fullWidth onClick={handleData}>SignUp </Button>
                    <p>by signing up you are agreeing to the <a href="#">terms and conditions</a></p>
                </form>
                <p>Already have an account? <a href="#">Log in</a></p>
                </Grid>
            </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}