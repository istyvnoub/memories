import React from 'react'
import useStyles from "./styles";
import {Card,CardActions,CardContent , Typography,CardMedia, Button} from "@material-ui/core";
import moment from "moment";
import MoreHorizIcon from "@material-ui/core/MoreHoriz"


function Post({post}) {
    const classes=useStyles();
    return (
       <Card className={classes.card}>
           <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
           <div className={classes.overlay}>
             <Typography variant ="h6">{post.creator}</Typography>
             <Typography variant ="body2">{moment(post.createdAt).fromNow()}</Typography>
                        </div>
                        <div className={classes.overlay2}>
                            <Button style={{color:"white"}} size="small" onClick={()=>{}}>
                                <MoreHorizIcon fontSize="default"/>

                            </Button>
                        </div>
                        <div className={classes.details}>
                            <Typography variant="body2" color="textSecondary">{post.tags.map(())}</Typography >

                        </div>

       </Card>
    )
}

export default Post
