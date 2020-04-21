import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainTamplate from 'templates/MainTamplate';

import Notes from 'views/Notes';
import Articles from 'views/Articles';
import Twitters from 'views/Twitters';

// import Button from 'components/atoms/Button/Button';
// import Card from 'components/molecules/Card/Card';

const Root = () => (
  <BrowserRouter>
    <MainTamplate>
      <Switch>
        <Route exact path="/" component={Notes} />
        <Route path="/articles" component={Articles} />
        <Route path="/twitters" component={Twitters} />
      </Switch>
    </MainTamplate>
  </BrowserRouter>
);
export default Root;
