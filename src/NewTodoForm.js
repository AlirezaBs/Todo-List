import React, { Component } from "react";
import "./NewTodoForm.css";

export default class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = { todoText: "", writing: false };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleNewTodo = this.handleNewTodo.bind(this);
		this.handleWriting = this.handleWriting.bind(this);
	}

	handleChange(evt) {
		this.setState({ todoText: evt.target.value });
	}
	handleNewTodo(evt) {
		this.setState({ writing: true });
	}
	handleSubmit(evt) {
		evt.preventDefault();
		if (this.state.todoText === "") {
			alert("Write something to add!");
		} else {
			this.props.addTodo(this.state);
			this.setState({ todoText: "", writing: false });
		}
	}
	handleWriting(evt) {
		this.setState({ writing: false });
	}

	render() {
		let resault;
		if (!this.state.writing) {
			resault = (
				<button
					className="fa fa-plus newBtn"
					onClick={this.handleNewTodo}
				></button>
			);
		} else {
			resault = (
				<form className="NewTodoForm" onSubmit={this.handleSubmit}>
					<button
						onClick={this.handleWriting}
						className="fa-solid fa-x newClose"
					></button>
					<input
						type="text"
						id="todoText"
						placeHolder="New Task"
						onChange={this.handleChange}
						value={this.state.todoText}
					/>
					<button className='newAdd'>Add!</button>
				</form>
			);
		}
		return resault;
	}
}
