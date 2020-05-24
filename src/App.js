import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.util.js';

const HatsPage = () => (
  <div>
    <h>Hats Page</h>
  </div>
)
class App extends React.Component {


  constructor(props) {
    super(props);

    this.state= {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null
  componentDidMount() {
   this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
     this.setState({currentUser:user})
     console.log('user: ', user);
   })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div >
      <Header currentUser={this.state.currentUser}/>
       <Switch>
      <Route exact  path='/' component= {HomePage} />
      <Route exact  path='/shop' component= {ShopPage} />
      <Route excat path='/signin' component={SignInAndSignUpPage} />
       </Switch>
    </div>
  );
}
}

export default App;
