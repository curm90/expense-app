import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NotFoundPage from '../components/NotFoundPage';
import HelpPage from '../components/HelpPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route path='/' component={LoginPage} exact />
          <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
          <PrivateRoute path='/edit/:id' component={EditExpensePage} />
          <PrivateRoute path='/create' component={AddExpensePage} />
          <Route path='/help' component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
