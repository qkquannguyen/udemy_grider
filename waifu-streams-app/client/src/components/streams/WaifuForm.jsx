import React from "react";
import { Field, reduxForm } from "redux-form";

class WaifuForm extends React.Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">{error}</div>
				</div>
			);
		}
	}

	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? "error" : ""}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" />
				<div>{this.renderError(meta)}</div>
			</div>
		);
	};

	onSubmit = formValues => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<form
				onSubmit={this.props.handleSubmit(this.onSubmit)}
				className="ui form error"
			>
				<Field
					name="title"
					component={this.renderInput}
					label="Enter Waifu's video name."
				/>
				<Field
					name="description"
					component={this.renderInput}
					label="Describe your Waifu's video."
				/>
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}

const validate = formValues => {
	const errors = {};

	if (!formValues.title) {
		errors.title = "You must enter your waifu's video name.";
	}

	if (!formValues.description) {
		errors.description = "You must enter your waifu's video description.";
	}

	return errors;
};

export default reduxForm({
	form: "waifuForm",
	validate
})(WaifuForm);
