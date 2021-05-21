import { Switch, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Home} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
