import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import {Container} from "react-bootstrap";
import {useState} from "react";

const App = () => {

    const examples = [
        {id: '1', date: new Date(2021, 2, 14), title: 'Toilet Paper', amount: 94.12},
        {id: '2', date: new Date(2021, 4, 6), title: 'New TV', amount: 294.67},
        {id: '3', date: new Date(2021, 4, 28), title: 'New Desk', amount: 450},
        {id: '4', date: new Date(2021, 5, 10), title: 'Car Insurance', amount: 249.7},
    ]

    const [expenses, setExpenses] = useState(examples)

    const onSave = expense => {
        const newExpense = {...expense, id: Math.random().toString()}
        setExpenses([...expenses, newExpense])
    }

    return <Container className="w-50 mt-5">
        <NewExpense onSave={onSave} />
        <Expenses expenses={expenses} />
    </Container>;

}

export default App;
