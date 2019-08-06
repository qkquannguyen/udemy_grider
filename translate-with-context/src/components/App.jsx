import React from "react";

import ColorContext from "../context/ColorContext";
import { LanguageStore } from "../context/LanguageContext.jsx";

import LanguageSelector from "./LanguageSelector";
import UserCreate from "./UserCreate";

class App extends React.Component {
	render() {
		return (
			<div className="ui container">
				<LanguageStore>
					<LanguageSelector />
					<ColorContext.Provider value="red">
						<UserCreate />
					</ColorContext.Provider>
				</LanguageStore>
			</div>
		);
	}
}

export default App;
