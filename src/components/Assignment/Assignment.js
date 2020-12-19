import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import OrderDetails from '../OrderDetails/OrderDetails';
import constants from '../../Constants/constants';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import {
    TextField,
    Grid,
    FormControlLabel,
    FormControl,
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
        marginTop:'1%',
        width:"50%"
    },
});


const Assignment = (props) => {
    const classes = useStyles();
    const [numberOfTrucks, setNumberOfTrucks]=useState(1);

    const truckCapacityChangeController=(event)=>{
        if(event.target.value== "17 tonne")
        {
            setNumberOfTrucks(3);
            console.log(3);
        }
        else if(event.target.value== "25 tonne")
        {
            setNumberOfTrucks(2);
            console.log(2);
        }
    }

    var truckInfo=Array.apply(null, { length:numberOfTrucks }).map((e, i) => (
    <React.Fragment>
        <Typography className={classes.formHeadings}>Truck Number {i+1}:</Typography>
        <Grid container spacing={3} style={{ paddingLeft:30, paddingTop:10, paddingBottom:20 }}>
            <Grid item xs={12} sm={8}>
                <TextField
                    required
                    id="TruckNumber"
                    name="TruckNumber"
                    label={constants.truckNumber}
                    fullWidth
                    autoComplete="truckNumber"
                    //onChange={(event)=>onDriverNameChangeController(event)}
                />
            </Grid>
        </Grid>
    </React.Fragment>
      ));

                

    return (
        <div>
                    <Card className={classes.root}>  
                            <CardContent style={{ padding: 0 }}>
                                <Typography className={classes.title} gutterBottom style={{ backgroundColor: '#66bb6a' }}>
                                    Truck Assigning Form
                                </Typography>
                                <form>
                                    <Grid container spacing={3} style={{ padding: 50, paddingTop: 10, paddingBottom: 30 }}>
                                        
                                        <Grid item xs={12} sm={12}>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel htmlFor="age-native-simple">Truck Capacity</InputLabel>
                                                <Select
                                                    native
                                                    //value="inches"
                                                    onChange={truckCapacityChangeController}
                                                    
                                                >
                                                    <option aria-label="None" value="" />
                                                    <option value={"17 tonne"}>17 tonne</option>
                                                    <option value={"25 tonne"}>25 tonne</option>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        
                                        {truckInfo}
                                    </Grid>
                                </form>

                            </CardContent>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                    margin: 20
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="primary">
                                    
                                    Submit
                                </Button>                      
                            </div>
                        </Card>
                        <OrderDetails/>
                                        
                </div>


    )
}
export default Assignment