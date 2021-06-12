import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";
import {Container} from "react-bootstrap";

const App = () => {

    const expenses = [
        {'id': '1', 'date': new Date(2021, 2, 14), 'title': 'Toilet Paper', 'amount': 94.12},
        {'id': '2', 'date': new Date(2021, 4, 6), 'title': 'New TV', 'amount': 294.67},
        {'id': '3', 'date': new Date(2021, 4, 28), 'title': 'New Desk', 'amount': 450},
        {'id': '4', 'date': new Date(2021, 5, 10), 'title': 'Car Insurance', 'amount': 249.7},
    ]

    return <Container className="w-50 mt-5">
        <NewExpense />
        <Expenses expenses={expenses} />
    </Container>;

}

export default App;
