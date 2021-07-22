import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from 'shared/constants/ROUTES';
import { HomePage, LoginPage, RegisterPage, CounterPage } from 'pages';
import { Layout } from 'components';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path={ROUTES.ROOT} component={HomePage} />
        <Route exact path={ROUTES.LOGIN} component={LoginPage} />
        <Route exact path={ROUTES.REGISTER} component={RegisterPage} />
        <Route exact path={ROUTES.HOME} component={CounterPage} />
      </Layout>
    </Switch>
  );
};

export default Routes;
