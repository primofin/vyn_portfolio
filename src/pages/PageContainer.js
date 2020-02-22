import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Me from './Me/Me';
import Projects from './Projects/Projects';
import Education from './Education/Education';

const PageContainer = ({user}) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Me user={user} />
        </Route>
        <Route path="/projects">
          <Projects user={user} />
        </Route>
        <Route path="/education">
          <Education user={user} />
        </Route>
      </Switch>
    </Router>
  );
};

PageContainer.propTypes = {
  user: PropTypes.object,
};
export default PageContainer;
