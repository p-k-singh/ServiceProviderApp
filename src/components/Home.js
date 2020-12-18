import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    linkText:{
        cursor:"pointer",
        fontSize:"16px",
        color:"white",
        margin:"10px",
        textShadow: "1px 1px #000000"
    }
}));

const Home = () => {
    const classes = useStyles();
    const [p,setP]=useState(false);
    const firstParaHandler=()=>
    {
        setP(true);
    }
    let content=null;
    if(p==true)
        content= <p>Welcome</p>;
    return (
        /*<div>
            <h1>Coming Soon</h1> 
        </div>*/
        
    <div>
        <nav class="navbar navbar-expand-md navbar-light" style={{backgroundColor: "#66bb6a"}}>
            
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="collapsibleNavbar">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <div class="nav-link" onClick={firstParaHandler} className={classes.linkText}>Available Orders</div>
                </li>
                <li class="nav-item">
                    <div class="nav-link" onClick={firstParaHandler} className={classes.linkText}>Open Orders Shipment</div>
                </li>
                <li class="nav-item">
                    <div class="nav-link" onClick={firstParaHandler} className={classes.linkText}>Open Orders Storage</div>
                </li>    
                </ul>
            </div>  
        </nav>
        {content}
    </div>
    )
}

export default Home
