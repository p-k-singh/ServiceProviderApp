import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import NewOrder from './components/NewOrder'
import OrderDetail from './components/OrderDetail'
import CapacityManagement from './components/CapacityManagement'
import AcceptanceForm from './components/AcceptanceForm'
import MyOrders from './components/MyOrders/MyOrders'
import AllocationForm from './components/Allocation/AllocationForm'
import AssignmentForm from './components/Assignment/Assignment'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },

}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navigation />
      
      <main
        className={classes.content}
      >
        <div className={classes.toolbar} />
        <Switch>
          {/* Home page (DashBoard Content) */}
          <Route exact path="/" component={Home} />
         
          <Route exact path="/accept-order" component={AcceptanceForm} />
          <Route exact path="/allocation" component={AllocationForm} />
          <Route exact path="/assignment" component={AssignmentForm} />
          <Route path='/order/:id' render={(props) => {
                    return ( <OrderDetail {...props } /> )
                }} />
          <Route path='/capacity' component={CapacityManagement}/>
          <Route path='/my-orders' component={MyOrders}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;
