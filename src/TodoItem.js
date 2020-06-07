import React from "react"

class TodoItem extends React.Component {
	
	constructor(props) {
		super(props)
		this.state = {checked: false}
	}
	
	changeCh() {
		const oldState = this.state.checked
		this.setState({checked: !oldState})
		console.log(this.props.isHidden)
	}
	
	render() {
		return (
			<div className="todoitem" style={{display: (this.props.isHidden && this.state.checked)? "none" : "block"}}>
				<label style={{textDecoration: this.state.checked? "line-through": "none"}}>
					<input type="checkbox" onChange={this.changeCh.bind(this)}/>
					{this.props.text}
				</label><br/>
			</div>
		)
	}
}

export default TodoItem