import React from "react";

import ColorContext from "../context/ColorContext";
import LanguageContext from "../context/LanguageContext";

class Button extends React.Component {
	static contextType = LanguageContext;

	renderButton(color) {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>
					{value => (value === "english" ? "Submit" : "Enviar")}
				</LanguageContext.Consumer>
			</button>
		);
	}

	render() {
		return (
			<ColorContext.Consumer>
				{color => this.renderButton(color)}
			</ColorContext.Consumer>
		);
	}
}

export default Button;
