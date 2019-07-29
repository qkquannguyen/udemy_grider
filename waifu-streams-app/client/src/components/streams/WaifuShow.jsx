import React from "react";
import { connect } from "react-redux";
import flv from "flv.js";

import { fetchWaifu } from "../../actions";

class WaifuShow extends React.Component {
	constructor(props) {
		super(props);

		this.videoRef = React.createRef();
	}

	componentDidMount() {
		const { id } = this.props.match.params;

		this.props.fetchWaifu(id);
		this.buildPlayer();
	}

	componentDidUpdate() {
		this.buildPlayer()
	}

	componentWillUnmount() {
		this.player.destroy()
	}

	buildPlayer() {
		if (this.player || !this.props.waifu) {
			return;
		}

		const { id } = this.props.match.params;

		this.player = flv.createPlayer({
			type: "flv",
			url: `http://localhost:8000/live/${id}.flv`
		});

		this.player.attachMediaElement(this.videoRef.current);
		this.player.load();
	}

	render() {
		if (!this.props.waifu) {
			return <div>Loading Waifu Video...</div>;
		}

		const { title, description } = this.props.waifu;

		return (
			<div>
				<video
					ref={this.videoRef}
					style={{ width: "100%" }}
					controls={true}
				/>
				<h1>{title}</h1>
				<h5>{description}</h5>
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
	{ fetchWaifu }
)(WaifuShow);
