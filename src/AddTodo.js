import React from "react"
import TodoItem from "./TodoItem"

class AddTodo extends React.Component {
	constructor(props) {
		super(props)
	}
	
	componentDidMount() {
		let input = document.getElementById("textfield");
		
		input.addEventListener("keyup", function(event) {
		  if (event.keyCode === 13) {
			event.preventDefault();
			document.getElementById("addButton").click();
		  }
		});
	}
	
	addValue() {
		let someText = document.getElementById("textfield").value
		document.getElementById("textfield").value = ""
		document.getElementById("textfield").focus()
		let array = [...this.state.items]
		let max = 0
		for (let el of array) {
			if (el.key > max) {
				max = parseInt(el.key)
			}
		}
		max += 1
		array.push(<TodoItem key={max} text={someText} isHidden={this.state.hidden}/>)
		this.setState({items: array})
	}

	render() {
		return (
			<div className="addtodo">
				<input type="button" id="addButton" value="Add" onClick={this.addValue.bind(this.props.todoListContext)}/>
				<input type="text" id="textfield"/>
			</div>
		)
	}
}

export default AddTodo