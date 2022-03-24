import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";
import * as uuid from "uuid";

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = { todos: [{todoText: 'Do something', id: uuid.v4(), completed: false}] };
		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.updateTodo = this.updateTodo.bind(this);
		this.toggleComplition = this.toggleComplition.bind(this);
	}

	addTodo(item) {
		this.setState((st) => ({
			todos: [
				...st.todos,
				{ todoText: item.todoText, id: uuid.v4(), completed: false },
			],
		}));
	}

	deleteTodo(item) {
		this.setState((st) => ({
			todos: st.todos.filter((el) => el.id !== item),
		}));
	}

	updateTodo(id, task) {
		const updatadTodo = this.state.todos.map((item) => {
			if (item.id === id) {
				return { ...item, todoText: task };
			} else {
				return item;
			}
		});
		this.setState({ todos: updatadTodo });
	}
	toggleComplition(id) {
		const updatadTodo = this.state.todos.map((item) => {
			if (item.id === id) {
				return { ...item, completed: !item.completed };
			} else {
				return item;
			}
		});
		this.setState({ todos: updatadTodo });
	}

	render() {
		const renderTodo = this.state.todos.map((todo) => (
			<li key={todo.id}>
				{
					<Todo
						id={todo.id}
						completed={todo.completed}
						todoText={todo.todoText}
						deleteTodo={this.deleteTodo}
						updateTodo={this.updateTodo}
						toggleTodo={this.toggleComplition}
					/>
				}
			</li>
		));
		return (
			<div className="TodoList-header">
				<div className="header">
					<h1>Todo List !</h1>
					<p>{`${this.state.todos.length} tasks `}</p>
				</div>
				<div className='body'>
					<NewTodoForm addTodo={this.addTodo} />
					<ul>{renderTodo}</ul>
				</div>
			</div>
		);
	}
}
