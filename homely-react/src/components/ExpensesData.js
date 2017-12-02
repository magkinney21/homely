import React, { Component } from 'react';
import axios from 'axios';

class ExpensesData extends Component {
    constructor(props){
        super(props)
        this.state = {
            expenses: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3001/api/v1/expenses')
        .then(response => {
            console.log(response)
            this.setState({expenses: response.data})
        })
        .catch(error => console.log(error))
    }
    render() {
        return (
            <div>
                {this.state.expenses.map((expense)=> {
                    return(
                        <div key={expense.id} >
                        <h4>{expense.name}</h4>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ExpensesData;