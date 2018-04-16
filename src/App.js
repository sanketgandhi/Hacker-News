import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const list = [
	{
		title: "React",
		url: "https://facebook.github.io/react/",
		author: "Jordan Walke",
		num_comments: 3,
		points: 4,
		objectID: 1
	},
	{
		title: "Redux",
		url: "https://github.com/reactjs/redux",
		author: "Dan Abramov, Andrew Clark",
		num_comments: 2,
		points: 5,
		objectID: 2
	}
];

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			list,
			shop: "cookies"
		};

		this.onDismiss = this.onDismiss.bind(this);
	}

	onDismiss(id) {
		console.log("awesome");
	}

	render() {
		return (
			<div className="App">
				{this.state.list.map(item => (
					<div key={item.objectID}>
						<span>
							<a href={item.url}>{item.title}</a>
						</span>
						<span>{item.author}</span>
						<span>{item.num_comments}</span>
						<span>{item.points}</span>
						<span>{this.state.shop}</span>
						<span>
							<button
								type="button"
								onClick={() => this.onDismiss(item.objectID)}
							/>
						</span>
					</div>
				))}
			</div>
		);
	}
}

export default App;
