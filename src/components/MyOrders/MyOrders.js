import React, {useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import './MyOrders.css'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import TodayIcon from '@material-ui/icons/Today';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import Typography from '@material-ui/core/Typography';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import PersonIcon from '@material-ui/icons/Person';
import ClassTwoToneIcon from '@material-ui/icons/ClassTwoTone';

const useStyles = makeStyles((theme) => ({
    '@keyframes blinker': {
        from: {opacity: 1},
        to: {opacity: 0.2 , color:'#3f51b5',fontWeight:'400'}
    },
    button: {
        marginBottom: theme.spacing(1),
    },
    allocationButton:{
        animationName: '$blinker',
        animationDuration: '0.7s',
        animationTimingFunction: 'linear',
        animationIterationCount:'infinite',
        marginBottom: theme.spacing(1),
        marginRight: theme.spacing(2)
    },
    title: {
        fontSize: 20,
        height: 50,
        padding: 10,
        paddingLeft: 55,
        color: 'white'
    },
  }));
  

const MyOrders=()=>{
    const classes=useStyles();
    const [activeOrders,setActiveOrders] = useState([]);
    useEffect(()=>{
        const someOrders = [
            {
                orderId: 'd52de5b9-0099-4623-b7c7-99369ea58cb6',
                orderDate: '12th may 2020',
                status: 'ASSIGN'
            },
            {
                orderId: '145320b7-c562-42ea-b612-9c519ad739f8',
                orderDate: '12th June 2020',
                status: 'ALLOCATE'
            },
            {
                orderId: '77455960-a39c-4cc0-93d7-ac12eee984a0',
                orderDate: '12th July 2020',
                status: 'TRACK'
            },
            {
                orderId: '2783935c-d4b2-4a91-aa91-9f0c45793515',
                orderDate: '12th Aug 2020',
                status: 'ASSIGN'
            },{
                orderId: 'd52de5b9-0099-4623-b7c7-99369ea58cb6',
                orderDate: '12th Sep 2020',
                status: 'ALLOCATE'
            },
        ]
        setActiveOrders(someOrders);
    },[]);
    
    return(
                <div>
                    <Typography className={classes.title} gutterBottom style={{ backgroundColor: '#66bb6a' }}>
                                    My Active Orders
                    </Typography>  

                   <section className="root">
                        {
                            activeOrders.map((eachOrder) => (
                                <div>
                            <figure>
                                <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjU2IiB4Mj0iMjU2IiB5MT0iNTEyIiB5Mj0iMCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDBiNTljIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOWNmZmFjIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjMwMSIgeDI9IjMwMSIgeTE9IjI3MSIgeTI9IjYxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNjM2ZmZTgiLz48c3RvcCBvZmZzZXQ9Ii45OTczIiBzdG9wLWNvbG9yPSIjZjBmZmY0Ii8+PC9saW5lYXJHcmFkaWVudD48Zz48cGF0aCBkPSJtNTA4Ljk5MyAxNTYuOTkxYy0yLjgzMy0zLjc3Mi03LjI3Ni01Ljk5MS0xMS45OTMtNS45OTFoLTEwNy4yNTdjLTcuMTYzLTQyLjUxMS00NC4yMjctNzUtODguNzQzLTc1cy04MS41OCAzMi40ODktODguNzQzIDc1aC05My4yMzVsLTE5LjYtMTM4LjEwN2MtMS4wNDktNy4zOTYtNy4zOC0xMi44OTMtMTQuODUxLTEyLjg5M2gtNjkuNTcxYy04LjI4NCAwLTE1IDYuNzE2LTE1IDE1czYuNzE2IDE1IDE1IDE1aDU2LjU1bDE5LjU5OSAxMzguMTA0di4wMDEuMDAzbDIyLjY0MyAxNTkuNDk5YzIuNDU3IDE3LjE5NyAxMC44MiAzMi45NzggMjMuNTk4IDQ0LjY4NC0xMC4wMDQgOC4yNi0xNi4zOSAyMC43NTMtMTYuMzkgMzQuNzA5IDAgMjAuNzIzIDE0LjA4NSAzOC4yMDkgMzMuMTgxIDQzLjQxNC0yLjA0NSA1LjEzNy0zLjE4MSAxMC43My0zLjE4MSAxNi41ODYgMCAyNC44MTMgMjAuMTg3IDQ1IDQ1IDQ1czQ1LTIwLjE4NyA0NS00NWMwLTUuMjU4LS45MTUtMTAuMzA1LTIuNTgtMTVoMTI1LjE2Yy0xLjY2NSA0LjY5NS0yLjU4IDkuNzQyLTIuNTggMTUgMCAyNC44MTMgMjAuMTg3IDQ1IDQ1IDQ1czQ1LTIwLjE4NyA0NS00NS0yMC4xODctNDUtNDUtNDVoLTI0MGMtOC4yNzEgMC0xNS02LjcyOS0xNS0xNXM2LjcyOS0xNSAxNS0xNWgyMjQuNzQyYzMzLjMwOSAwIDYyLjk2My0yMi4zNjggNzIuMDk4LTU0LjMzOWw0OC41NjctMTY3LjQ4M2MxLjMxMy00LjUzMS40MTktOS40MTYtMi40MTQtMTMuMTg3eiIgZmlsbD0idXJsKCNTVkdJRF8xXykiLz48Zz48Zz48cGF0aCBkPSJtMzAxIDYxYy01Ny44OTcgMC0xMDUgNDcuMTAzLTEwNSAxMDVzNDcuMTAzIDEwNSAxMDUgMTA1IDEwNS00Ny4xMDMgMTA1LTEwNS00Ny4xMDMtMTA1LTEwNS0xMDV6bTQwLjYwNiAxMDAuNjA3LTQ1IDQ1Yy0yLjkyOCAyLjkyOS02Ljc2NyA0LjM5My0xMC42MDYgNC4zOTNzLTcuNjc4LTEuNDY0LTEwLjYwNi00LjM5NGwtMTUtMTVjLTUuODU4LTUuODU4LTUuODU4LTE1LjM1NSAwLTIxLjIxMyA1Ljg1Ny01Ljg1OCAxNS4zNTUtNS44NTggMjEuMjEzIDBsNC4zOTQgNC4zOTMgMzQuMzk0LTM0LjM5M2M1Ljg1Ny01Ljg1OCAxNS4zNTUtNS44NTggMjEuMjEzIDAgNS44NTcgNS44NTkgNS44NTcgMTUuMzU2LS4wMDIgMjEuMjE0eiIgZmlsbD0idXJsKCNTVkdJRF8yXykiLz48L2c+PC9nPjwvZz48L3N2Zz4=" />
                                <figcaption>
                                    <h6>Order Date <span><TodayIcon/></span></h6>
                                    <h4>{eachOrder.orderDate}</h4>
                                </figcaption>
                            </figure>
                            <div>
                                <Button
                                        component={Link} to="/assignment"
                                        variant="contained"
                                        color="default"
                                        className={classes.allocationButton}
                                        startIcon={<LocalShippingIcon />}>
                                        {eachOrder.status}
                                </Button>
                                <Button
                                        component={Link} to={`order/${eachOrder.orderId}`}
                                        variant="contained"
                                        color="default"
                                        className={classes.allocationButton}
                                        startIcon={<ClassTwoToneIcon />}> 
                                        Details
                                </Button>
                            </div>
                            <Divider/>
                        </div>
                            ))
                        }
                       
                    </section>
                </div>
    )
}

/*const useStyles = makeStyles((theme) => ({
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
}*/

export default MyOrders
{/* <div>
                            <figure>
                                <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMjU2IiB4Mj0iMjU2IiB5MT0iNTEyIiB5Mj0iMCI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDBiNTljIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOWNmZmFjIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjMwMSIgeDI9IjMwMSIgeTE9IjI3MSIgeTI9IjYxIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNjM2ZmZTgiLz48c3RvcCBvZmZzZXQ9Ii45OTczIiBzdG9wLWNvbG9yPSIjZjBmZmY0Ii8+PC9saW5lYXJHcmFkaWVudD48Zz48cGF0aCBkPSJtNTA4Ljk5MyAxNTYuOTkxYy0yLjgzMy0zLjc3Mi03LjI3Ni01Ljk5MS0xMS45OTMtNS45OTFoLTEwNy4yNTdjLTcuMTYzLTQyLjUxMS00NC4yMjctNzUtODguNzQzLTc1cy04MS41OCAzMi40ODktODguNzQzIDc1aC05My4yMzVsLTE5LjYtMTM4LjEwN2MtMS4wNDktNy4zOTYtNy4zOC0xMi44OTMtMTQuODUxLTEyLjg5M2gtNjkuNTcxYy04LjI4NCAwLTE1IDYuNzE2LTE1IDE1czYuNzE2IDE1IDE1IDE1aDU2LjU1bDE5LjU5OSAxMzguMTA0di4wMDEuMDAzbDIyLjY0MyAxNTkuNDk5YzIuNDU3IDE3LjE5NyAxMC44MiAzMi45NzggMjMuNTk4IDQ0LjY4NC0xMC4wMDQgOC4yNi0xNi4zOSAyMC43NTMtMTYuMzkgMzQuNzA5IDAgMjAuNzIzIDE0LjA4NSAzOC4yMDkgMzMuMTgxIDQzLjQxNC0yLjA0NSA1LjEzNy0zLjE4MSAxMC43My0zLjE4MSAxNi41ODYgMCAyNC44MTMgMjAuMTg3IDQ1IDQ1IDQ1czQ1LTIwLjE4NyA0NS00NWMwLTUuMjU4LS45MTUtMTAuMzA1LTIuNTgtMTVoMTI1LjE2Yy0xLjY2NSA0LjY5NS0yLjU4IDkuNzQyLTIuNTggMTUgMCAyNC44MTMgMjAuMTg3IDQ1IDQ1IDQ1czQ1LTIwLjE4NyA0NS00NS0yMC4xODctNDUtNDUtNDVoLTI0MGMtOC4yNzEgMC0xNS02LjcyOS0xNS0xNXM2LjcyOS0xNSAxNS0xNWgyMjQuNzQyYzMzLjMwOSAwIDYyLjk2My0yMi4zNjggNzIuMDk4LTU0LjMzOWw0OC41NjctMTY3LjQ4M2MxLjMxMy00LjUzMS40MTktOS40MTYtMi40MTQtMTMuMTg3eiIgZmlsbD0idXJsKCNTVkdJRF8xXykiLz48Zz48Zz48cGF0aCBkPSJtMzAxIDYxYy01Ny44OTcgMC0xMDUgNDcuMTAzLTEwNSAxMDVzNDcuMTAzIDEwNSAxMDUgMTA1IDEwNS00Ny4xMDMgMTA1LTEwNS00Ny4xMDMtMTA1LTEwNS0xMDV6bTQwLjYwNiAxMDAuNjA3LTQ1IDQ1Yy0yLjkyOCAyLjkyOS02Ljc2NyA0LjM5My0xMC42MDYgNC4zOTNzLTcuNjc4LTEuNDY0LTEwLjYwNi00LjM5NGwtMTUtMTVjLTUuODU4LTUuODU4LTUuODU4LTE1LjM1NSAwLTIxLjIxMyA1Ljg1Ny01Ljg1OCAxNS4zNTUtNS44NTggMjEuMjEzIDBsNC4zOTQgNC4zOTMgMzQuMzk0LTM0LjM5M2M1Ljg1Ny01Ljg1OCAxNS4zNTUtNS44NTggMjEuMjEzIDAgNS44NTcgNS44NTkgNS44NTcgMTUuMzU2LS4wMDIgMjEuMjE0eiIgZmlsbD0idXJsKCNTVkdJRF8yXykiLz48L2c+PC9nPjwvZz48L3N2Zz4=" />
                                <figcaption>
                                    <h6>Order Date <span><TodayIcon/></span></h6>
                                    <h4>20th Dec, 2020</h4>
                                </figcaption>
                            </figure>
                            <div>
                                <Button
                                        component={Link} to="/assignment"
                                        variant="contained"
                                        color="default"
                                        className={classes.allocationButton}
                                        startIcon={<LocalShippingIcon />}>
                                        Assign
                                </Button>
                                <Button
                                        component={Link} to="/details"
                                        variant="contained"
                                        color="default"
                                        className={classes.allocationButton}
                                        startIcon={<ClassTwoToneIcon />}> 
                                        Details
                                </Button>
                            </div>
                        </div> */}