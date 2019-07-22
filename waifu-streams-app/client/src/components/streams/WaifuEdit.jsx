import _ from 'lodash'
import React from "react";
import { connect } from "react-redux";

import { fetchWaifu, editWaifu } from "../../actions";
import WaifuForm from "./WaifuForm";

class WaifuEdit extends React.Component {
	componentDidMount() {
		this.props.fetchWaifu(this.props.match.params.id);
	}

	onSubmit = formValues => {
		this.props.editWaifu(this.props.match.params.id, formValues)
	};

	render() {
		if (!this.props.waifu) {
			return <div> Waifu Loading... </div>;
		}
		return (
			<div>
				<h3>Edit A Waifu Video</h3>
				<WaifuForm
					initialValues={_.pick(this.props.waifu, 'title', 'description')}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		waifu: state.waifus[ownProps.match.params.id]
	};
};

export default connect(
	mapStateToProps,
	{ fetchWaifu, editWaifu }
)(WaifuEdit);
