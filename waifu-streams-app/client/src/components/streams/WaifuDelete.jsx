import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import history from "../../history";
import { deleteWaifu, fetchWaifu } from "../../actions";
import Modal from "../Modal";

class WaifuDelete extends React.Component {
	componentDidMount() {
		this.props.fetchWaifu(this.props.match.params.id);
	}

	renderActions() {
		const { id } = this.props.match.params;
		return (
			<React.Fragment>
				<button
					onClick={() => this.props.deleteWaifu(id)}
					className="ui button negative"
				>
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</React.Fragment>
		);
	}

	renderContent() {
		if (!this.props.waifu) {
			return "Are you sure you want to delete this video?";
		}
		return `Are you want to delete the video with the title: ${
			this.props.waifu.title
		}`;
	}

	render() {
		return (
			<Modal
				title="Delete Waifu's Video"
				content={this.renderContent()}
				actions={this.renderActions()}
				onDismiss={() => history.push("/")}
			/>
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
	{ deleteWaifu, fetchWaifu }
)(WaifuDelete);
