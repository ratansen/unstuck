import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home';
import SignIn from './components/signin/SignIn';
import Tags from './components/tags/Tags';
import YourQuestions from './components/yourQuestions/YourQuestions';
import Answer from './components/answer/Answer'
import Ask from './components/ask/Ask';
import Footer from './components/footer/Footer'
import Top from './components/fragments/Top'
import { auth, signInWithGoogle, db } from './firebase/firebase.utils';
import NotLoggedIn from './components/error/NotLoggedIn';
import Loading from './components/error/Loading';


var username ='' ;
class App extends React.Component {
  constructor(){
    super() ;
    this.state = {
      currentUser : null 
    }
  }
  unsubscribeFromAuth = null ;
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user=>{
      this.setState({currentUser : user}) ;
      // console.log("user: ",user.email) ;
      if (user){
        console.log("logged in") ;
      }
      else{
        console.log("not logged in");
      }

      username = this.state.currentUser.displayName ;
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth() ;
  }

  render(){
    return (
      <>
        <Router >
          <Navbar currentUser={this.state.currentUser} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signin' component={SignIn} />

            <Route path='/ask'  render={this.state.currentUser ? (props) => ( <Ask {...props} user={this.state.currentUser} /> ) : ()=><NotLoggedIn/>} />
            <Route path='/tags' component={Tags} />
            <Route path='/answer' render={this.state.currentUser ?(props) => ( <Answer {...props} userName={this.state.currentUser.displayName} /> ): ()=><NotLoggedIn/>} />
            <Route path='/yourQuestions' render={this.state.currentUser ? (props) => ( <YourQuestions {...props} user={this.state.currentUser} /> ) : ()=><NotLoggedIn/>} />
          </Switch>
          <Top />
        </Router>
      </>
    );
  }
}

export default App;
export {username} ;

