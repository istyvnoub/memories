import React from "react";
import { Container,Typography,Grow,Grid, AppBar } from "@material-ui/core";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from "./images/memories.png";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { useEffect,useState } from "react";
import { getPosts } from "./actions/posts";

const App =()=>{
    const classes = useStyles();
    const [currentId, setcurrentid]=useState(null);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch])

    return (<Container maxwidth="lg">
        <AppBar  className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
            <img className={classes.image} src={memories} alt="memories" height="60"/>
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm ={7} >
                     <Posts setCurrentId={setcurrentid}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                       <Form currentId={currentId} setCurrentId={setcurrentid}/> 
                    </Grid>
                </Grid>
            </Container>

        </Grow>

    </Container>)
}

export default App;
