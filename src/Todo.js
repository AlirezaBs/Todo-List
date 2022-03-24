import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
	constructor(props) {
		super(props);
		this.state = { edditing: false, task: this.props.todoText };
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.updateTodo = this.updateTodo.bind(this);
		this.toggleTodo = this.toggleTodo.bind(this);
	}

	handleEdit(evt) {
		this.setState({ edditing: true });
	}
	handleDelete(evt) {
		this.props.deleteTodo(this.props.id);
	}
	handleChange(evt) {
		this.setState({ task: evt.target.value });
	}
	updateTodo(evt) {
		evt.preventDefault();
		this.props.updateTodo(this.props.id, this.state.task);
		this.setState({ edditing: false });
	}
	toggleTodo(evt) {
		this.props.toggleTodo(this.props.id);
	}

	render() {
		let resault;
		if (this.state.edditing) {
			resault = (
				<form className='Todo' onSubmit={this.updateTodo}>
					<input
						type="text"
						value={this.state.task}
						onChange={this.handleChange}
					/>
					<button className="fa-solid fa-check TodoEddited"></button>
				</form>
			);
		} else {
			resault = (
				<div className="Todo">
					<p
						className={this.props.completed ? "completed" : ""}
						onClick={this.toggleTodo}
					>
						{this.props.todoText}
					</p>
					<div className='todoButtons'>
						<button
							className="fas fa-edit"
							onClick={this.handleEdit}
						></button>
						<button
							className="fa fa-trash"
							onClick={this.handleDelete}
						></button>
					</div>
				</div>
			);
		}

		return resault;
	}
}
