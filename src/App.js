import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home';
import SignIn from './components/signin/SignIn';
import Tags from './components/tags/Tags';
import YourQuestions from './components/yourQuestions/YourQuestions';
import Ask from './components/ask/Ask';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/ask' component={Ask} />
          <Route path='/tags' component={Tags} />
          <Route path='/yourQuestions' component={YourQuestions} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
