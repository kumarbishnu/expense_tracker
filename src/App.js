import ExpenseItem from "./components/ExpenseItem";
import {Container} from "react-bootstrap";

function App() {

    const expense = {
        'date': new Date(),
        'title': 'Car Insurance',
        'amount': 249.7
    }

    return (
        <Container style={{width: "40vw"}}>
            <ExpenseItem expense={expense} />
        </Container>
    );
}

export default App;
