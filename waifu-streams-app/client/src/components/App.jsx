import React from "react";
import { Router, Route } from "react-router-dom";

import Header from "./Header.jsx";
import history from "../history";

import WaifuCreate from "./streams/WaifuCreate.jsx";
import WaifuDelete from "./streams/WaifuDelete.jsx";
import WaifuEdit from "./streams/WaifuEdit.jsx";
import WaifuList from "./streams/WaifuList.jsx";
import WaifuShow from "./streams/WaifuShow.jsx";

// --- NOTE: Do not use anchor tags with react-router.
// --------- It essentially sends a request to a server and the server will respond back with a
// --------- index.html file. The browser will dump all the code, and files. Due to this, thats
// --------- why we don't use anchor tag.
// --------- TLDR: Don't use anchor tags because it requests a new requests, any data you receive
// --------- or fetch will be wiped!

// --- NOTE: Single Page App comes from you only wanting to render one html document.

// --- NOTE: Three different Routers in this library
// --------- 1. BrowserRouter   --> Looks for everything at that top level domain
// --------- 2. HashRouter      --> Uses everything a '#' as the 'path'
// --------- 3. MemoryRouter    --> Doesn't use the URL to track navigation

const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Route path="/" exact component={WaifuList} />{" "}
					<Route path="/waifus/new" exact component={WaifuCreate} />{" "}
					<Route
						path="/waifus/edit/:id"
						exact
						component={WaifuEdit}
					/>{" "}
					<Route
						path="/waifus/delete"
						exact
						component={WaifuDelete}
					/>{" "}
					<Route path="/waifus/show" exact component={WaifuShow} />{" "}
				</div>{" "}
			</Router>{" "}
		</div>
	);
};

export default App;
