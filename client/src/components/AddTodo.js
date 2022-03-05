import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

class AddTodo extends React.Component {
    constructor (props) {
        super(props)
this.state={
    data:''
}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }

    handleSubmit (e) {
        if (e.key === 'Enter') {
            this.props.addTodo(e.target.value)
            e.target.value = ''
        }
       
    }
    handleClick(e)
    {
        console.log('working');
        this.props.addTodo(this.state.data)
        e.target.value = ''

    }

    render () {
        return (
            <div>
                 <input 
                onKeyPress={this.handleSubmit}
                value={this.state.data}
                onChange={(e) => this.setState({data:e.target.value})}
            />
            <button onClick={this.handleClick}>+</button>
            </div>
           
        )
    }
}


export default connect(null, { addTodo })(AddTodo)