import React, { Component } from 'react';
import axios from 'axios';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  
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
                        <div>
                        <h4>Expense</h4>
                        <Table key={expense.id}>
                        <TableHeader>
                          <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Price</TableHeaderColumn>
                            <TableHeaderColumn>Due Date</TableHeaderColumn>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableRowColumn>{expense.name}</TableRowColumn>
                            <TableRowColumn>$ {expense.price}</TableRowColumn>
                            <TableRowColumn>{expense.due_date}</TableRowColumn>
                          </TableRow>
                        </TableBody>
                      </Table>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ExpensesData;