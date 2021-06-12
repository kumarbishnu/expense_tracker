import {Alert, Card} from "react-bootstrap";
import ExpenseItem from "./ExpenseItem";
import {useState} from "react";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = props => {

    const [filterYear, setFilterYear] = useState('2021');
    const yearChange = year => {setFilterYear(year);}

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    })


    return (
        <Card bg={"secondary"} className="shadow px-3 py-2">
            <ExpenseFilter year={filterYear} onYearChange={yearChange} />
            {filteredExpenses.length === 0 && <Alert variant={"info"}>No expenses found!</Alert>}
            {filteredExpenses.map(expense => <ExpenseItem expense={expense} key={expense.id} />)}
        </Card>
    );

}

export default Expenses;
