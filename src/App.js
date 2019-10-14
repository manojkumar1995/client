import React, { Fragment, Component } from 'react';
import Navbar from './layouts/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Add from './layouts/Add';
import Users from './layouts/Users';
import Posts from './layouts/Posts';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:80/test/api/users').then(res => console.log(res.data));
  }
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar title='Terabiz' />
          <div className='container' >
            <Switch>
              <Route exact path='/' component={Add} />
              <Route exact path='/users' component={Users} />
              <Route exact path='/posts' component={Posts} />

            </Switch>
          </div>
        </Fragment>
      </Router>
    );

  }
}

// function App() {
//   return (
//     <Router>
//       <Fragment>
//         <Navbar title='Terabiz' />
//         <div className='container' >
//           <Switch>
//             <Route exact path='/' component={Add} />
//             <Route exact path='/users' component={Users} />
//             <Route exact path='/posts' component={Posts} />

//           </Switch>
//         </div>
//       </Fragment>
//     </Router>
//   );
// }

export default App;
