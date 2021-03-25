import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact />
        <Route path='/edit/:id' component={EditExpensePage} />
        <Route path='/create' component={AddExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
