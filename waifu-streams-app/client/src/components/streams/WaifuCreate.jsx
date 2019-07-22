import React from "react";
import { connect } from "react-redux";

import { createWaifu } from "../../actions";
import WaifuForm from "./WaifuForm";

class WaifuCreate extends React.Component {
	onSubmit = formValues => {
		this.props.createWaifu(formValues);
	};

	render() {
		return (
			<div>
				<h3>Create a Waifu Video</h3>
				<WaifuForm onSubmit={this.onSubmit} />
			</div>
		);
	}
}

export default connect(
	null,
	{ createWaifu }
)(WaifuCreate);
