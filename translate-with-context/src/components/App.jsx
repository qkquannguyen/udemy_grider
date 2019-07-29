import React from "react";

import UserCreate from './UserCreate'

class App extends React.Component {
	state = { language: "english" };

	onLanguageChange = language => {
		this.setState({ language });
	};

	render() {
		return (
			<div className="ui container">
				<div>
					Select a Language:
					<i
						className="flag us"
						onClick={() => this.onLanguageChange("english")}
					/>
					<i
						className="flag mx"
						onClick={() => this.onLanguageChange("spanish")}
					/>
				</div>
				<UserCreate />
			</div>
		);
	}
}

export default App;
