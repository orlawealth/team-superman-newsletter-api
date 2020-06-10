import React, {useState, useEffect, useReducer} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';import {
  Grid,
  Paper,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  TextField,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Snackbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Alert } from '@material-ui/lab';

//axios.defaults.baseURL = `http${secure}://${domain}`;
axios.defaults.baseURL = `http://localhost:8000/api/news/`;
axios.defaults.headers.common = {
  "Content-Type": "application/json",
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function postsReducer(state, action) {
  switch (action.type) {
    case 'setPosts':
      Object.assign(state, action.posts);
      return {...state};
    
    default:
      throw new Error();
  }
}

function Message(props) {
  return <Alert elevation={6} variant="filled" {...props} />;
}

function App() {
  const [message, setMessage] = useState({popup: false, message: "", type: "error"})
  const [expanded, setExpanded] = useState(false);
  const [posts, postsDispatch] = useReducer(postsReducer, {})

  useEffect(() => {
    getPost()
  },[])

  const className = useStyles();

  const getPost = () => {
    axios.get("/ajdelgados/all").then(response => {
      if(response.data != null) {
        console.log(response.data)
        postsDispatch({type: 'setPosts', posts: response.data})
      } else {
        postsDispatch({type: 'setPosts', posts: []})
      }
    }).catch(error => {
      setMessage({popup: true, message: "Sin conexión!", type: "error"});
    })
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  }
  
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Grid container spacing={1}>
      <React.Fragment>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card> 
            <CardHeader
              subheader="Create Channel" />
            <Divider />
            <CardContent>
              <TextField fullWidth id="name" label="Channel name" variant="outlined" className={className.form}/>
            </CardContent>
            <CardActions>
              <Button variant="contained" color="primary" className={className.button}>
                Create
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {Object.keys(posts).map(post => {
          return <ExpansionPanel key={post} expanded={expanded === `panel${post}`} onChange={handleChange(`panel${post}`)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={className.heading}>{posts[post].title}</Typography>
          <Typography className={className.secondaryHeading}>{posts[post].homeText}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {posts[post].bodyText}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
          })}
        </Grid>
      </React.Fragment>
      <Snackbar open={message.popup} autoHideDuration={5000} onClose={handleClose}>
        <Message onClose={handleClose} severity={message.type}>
        {message.message}
        </Message>
      </Snackbar>
    </Grid>
  );
}

export default App;
