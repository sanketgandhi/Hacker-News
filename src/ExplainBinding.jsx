import React, { Component } from "react";

class ExplainBinding extends Component {
	constructor(props) {
		super(props);

		this.state = {
			time: new Date()
		};

		this.onClick = this.onClick.bind(this);
	}

	/**
	 * Using bind Method
	 */
	onClick() {
		console.log("in onClick");
		console.log("this ", this);
		this.setState({
			time: new Date()
		});
		// console.log(this.state.time);
	}

	/**
	 * Arrow function bind this automatically
	 */
	doSomethingElse = () => {
		console.log('I"m doing somthing else');
		console.log("this ", this);
	};

	/**
	 * Inline binding
	 */
	doSuperNothing() {
		console.log("Nah!!! Wrong approach");
	}

	render() {
		return (
			<div>
				<button type="button" onClick={this.doSomethingElse}>
					Arrow Function
				</button>
				<button type="button" onClick={this.onClick}>
					Bind Method
				</button>
				<button type="button" onClick={this.doSuperNothing.bind(this)}>
					InternalBind Method
				</button>
			</div>
		);
	}
}

export default ExplainBinding;
