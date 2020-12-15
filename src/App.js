import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


import Navigation from './components/Navigation'
import Home from './components/Home'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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
        </Switch>
      </main>
    </div>
  );
}

export default App;
