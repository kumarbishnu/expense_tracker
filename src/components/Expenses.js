import {Card} from "react-bootstrap";
import ExpenseItem from "./ExpenseItem";

const Expenses = props => {

    return (
        <Card bg={"secondary"} className="shadow px-3 py-2">
            {props.expenses.map(expense =>
                <ExpenseItem expense={expense} key={expense.id} />
            )}
        </Card>
    );

}

export default Expenses;
