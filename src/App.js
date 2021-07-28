import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home';
import SignIn from './components/signin/SignIn';
import Tags from './components/tags/Tags';
import YourQuestions from './components/yourQuestions/YourQuestions';
import Answer from './components/answer/Answer'
import Ask from './components/ask/Ask';
import { auth, signInWithGoogle, db } from './firebase/firebase.utils';

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
      // console.log("user: ",user.displayName) ;

      username = this.state.currentUser.displayName ;
    });
    // db.collection('questions').get().then(snapshot=>{
    //   snapshot.forEach(doc=>{
    //     const data=doc.data() ;
    //     questions.push(data)
    //   })
    //   console.log(questions[0].question,questions[0].askedBy) ;
    //   this.setState({questions : questions})
    // }).catch(error=>console.log(error)) ;
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth() ;
  }

  render(){
    return (
      <>
        <Router>
          <Navbar currentUser={this.state.currentUser} />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/signin' component={SignIn} />

            <Route path={this.state.currentUser ? '/ask' : '/signin'  }  render={(props) => ( <Ask {...props} userName={this.state.currentUser.displayName} /> )} />
            <Route path='/tags' component={Tags} />
            <Route path='/answer' component={Answer} />
            <Route path='/yourQuestions' component={YourQuestions} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
export {username} ;

