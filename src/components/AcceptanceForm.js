import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './NewOrder.css';
import constants from '../Constants/constants';
import OrderDetails from './OrderDetails/OrderDetails'
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import {Link} from 'react-router-dom';
import {
    TextField,
    Grid,
    FormControlLabel,
    Checkbox,
    Card,
    Button,
    Divider,
    InputAdornment
  } from '@material-ui/core'
const useStyles = makeStyles({
    root: {
        // minWidth: 275,
    },
    title: {
        fontSize: 20,
        height: 50,
        padding: 10,
        paddingLeft: 55,
        color: 'white'
    },
    formHeadings: {
        margin: 20,
        marginBottom: 0
    },
    formControl: {
        marginTop:'1%'
    },
    button:{
        marginRight:"10px"
    }

});

const AcceptanceForm = (props) => {
    const classes = useStyles();

    //State Variables for form fields
    return (
                    <div>    
                        <Card className={classes.root}>  
                            <CardContent style={{ padding: 0 }}>
                                <Typography className={classes.title} gutterBottom style={{ backgroundColor: '#66bb6a' }}>
                                    Order Acceptance Form
                                </Typography>
                                <form>
                                    <Grid container spacing={3} style={{ padding: 50, paddingTop: 10, paddingBottom: 30 }}>
                                        
                                        <Grid item xs={12} sm={8}>
                                            <TextField
                                                required
                                                id="availableCapacity"
                                                name="availableCapacity"
                                                label="Your Available Capacity"
                                                value="100 tonnes"
                                                disabled
                                                fullWidth
                                                autoComplete="available capacity"
                                                
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={8}>
                                            <TextField
                                                required
                                                id="requiredCapacity"
                                                name="requiredCapacity"
                                                label="Required Capacity"
                                                value="50 tonnes"
                                                disabled
                                                fullWidth
                                                autoComplete="available capacity"
                                                
                                            />
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    margin: 20,
                                    padding:10
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    component={Link} to='/my-orders'
                                    className={classes.button}
                                    startIcon={<CheckIcon />}
                                    >
                                    Accept
                                </Button> 
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<ClearIcon/>}
                                    >
                                    Reject
                                </Button>                     
                            </div>
                        </Card>
                        
                        <OrderDetails/>

                        


                        
                    </div>
    )
}

export default AcceptanceForm;


