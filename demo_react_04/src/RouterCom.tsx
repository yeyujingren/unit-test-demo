import React from 'react';
import { Route, Switch } from 'react-router-dom'
import PageHeader from './routerTest/PageHeader';
import HomePage from './routerTest/HomePage'
import ArticlePage from './routerTest/ArticlePage'
import AuthorPage from './routerTest/AuthorPage'
import PageNotFound from './routerTest/PageNotFound'

function RouterCom() {
  return (
    <>
      <PageHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/article/:articleId" component={ArticlePage} />
        <Route exact path="/author/:authorId" component={AuthorPage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
}

export default RouterCom;
