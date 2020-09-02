import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import Issue from '../pages/Issue';

const Routes: React.FunctionComponent = () => (
	<Switch>
		<Route path="/" exact component={Dashboard} />
		<Route path="/explorer/:repository+" component={Repository} />
		<Route path="/:repository+/issue/:issueId" component={Issue} />
	</Switch>
);

export default Routes;
