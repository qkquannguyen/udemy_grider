import React from "react";

import ColorContext from "../context/ColorContext";
import LanguageContext from "../context/LanguageContext";

import LanguageSelector from './LanguageSelector'
import UserCreate from "./UserCreate";

class App extends React.Component {
	state = { language: "english" };

	onLanguageChange = language => {
		this.setState({ language });
	};

	render() {
		return (
			<div className="ui container">
				<LanguageSelector onLanguageChange={this.onLanguageChange} />
				<ColorContext.Provider value="red">
					<LanguageContext.Provider value={this.state.language}>
						<UserCreate />
					</LanguageContext.Provider>
				</ColorContext.Provider>
			</div>
		);
	}
}

export default App;
