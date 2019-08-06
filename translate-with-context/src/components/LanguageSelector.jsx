import React from "react";

import LanguageContext from "../context/LanguageContext.jsx";

class LanguageSelector extends React.Component {
	static contextType = LanguageContext;

	render() {
		return (
			<div>
				Select a Language:
				<i
					className="flag us"
					onClick={() => this.context.onLanguageChange("english")}
				/>
				<i
					className="flag mx"
					onClick={() => this.context.onLanguageChange("spanish")}
				/>
			</div>
		);
	}
}

export default LanguageSelector;
