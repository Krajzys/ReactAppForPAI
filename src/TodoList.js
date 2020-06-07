import React from "react"
import TodoItem from "./TodoItem"
import AddTodo from "./AddTodo"

class TodoList extends React.Component {
	
	constructor(props) {
		super(props)
		let todoItems = []
		this.state = {items: todoItems, hidden: false}
	}

	hideCompleted() {
		const hid = this.state.hidden
		this.setState({hidden: !hid})
		let newItems = []
		for (let i = 0; i < this.state.items.length; i++) {
			newItems.push(<TodoItem key={i} text={this.state.items[i].props.text} isHidden={!hid}/>)
		}
		this.setState({items: newItems})
	}
	
	render() {
		return (
			<div className="todolist">
				<h1 className="header">What you should do</h1>
				<p className="myhr"></p>
				<input className="togglebutton" type="button" value="Show/Hide completed actions" onClick={this.hideCompleted.bind(this)}/>
				{this.state.items}
				<AddTodo todoListContext={this}/>
			</div>
		)
	}
}

export default TodoList