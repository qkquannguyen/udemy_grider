import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchWaifus } from "../../actions";

class WaifuList extends React.Component {
	componentDidMount() {
		this.props.fetchWaifus();
	}

	renderAdminButtons(waifu) {
		if (waifu.userId === this.props.currentUserId) {
			return (
				<div className="right floated content">
					<Link
						to={`/waifus/edit/${waifu.id}`}
						className="ui button primary"
					>
						Edit
					</Link>
					<Link
						to={`/waifus/delete/${waifu.id}`}
						className="ui button negative"
					>
						Delete
					</Link>
				</div>
			);
		}
	}

	renderWaifuList() {
		return this.props.waifus.map(waifu => {
			return (
				<div className="item" key={waifu.id}>
					{this.renderAdminButtons(waifu)}
					<i className="large middle aligned icon camera" />
					<div className="content">
						{waifu.title}
						<div className="description">{waifu.description}</div>
					</div>
				</div>
			);
		});
	}

	renderCreateButton() {
		if (this.props.isSignedIn) {
			return (
				<div style={{ textAlign: "right" }}>
					<Link to="/waifus/new" className="ui button primary">
						Create Waifu
					</Link>
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				<h2>Waifus</h2>
				<div className="ui celled list">{this.renderWaifuList()}</div>
				{this.renderCreateButton()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		waifus: Object.values(state.waifus),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn
	};
};

export default connect(
	mapStateToProps,
	{ fetchWaifus }
)(WaifuList);
