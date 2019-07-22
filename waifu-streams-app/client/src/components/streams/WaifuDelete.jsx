import React from "react";

import history from '../../history'
import Modal from "../Modal";

const WaifuDelete = () => {
	const actions = (
		<React.Fragment>
			<button className="ui button negative">Delete</button>
			<button className="ui button">Cancel</button>
        </React.Fragment>
	);

	return (
		<div>
			Waifu Video WaifuDelete
			<Modal
				title="Delete Waifu"
				content="Are you sure you want to delete this waifu video?"
                actions={actions}
                onDismiss={() => history.push('/')}
			/>
		</div>
	);
};

export default WaifuDelete;
