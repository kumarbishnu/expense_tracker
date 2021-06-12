import {Badge, Card, Col} from "react-bootstrap";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

    return <Card bg={"dark"} className="my-2 shadow-sm border-0">
        <Card.Body className="row align-items-center">
            <Col lg={3}><ExpenseDate date={props.expense.date} /></Col>
            <Col lg={5}><h3 className="mb-0">{props.expense.title}</h3></Col>
            <Col lg={4} className="text-end"><Badge className="bg-secondary py-2 px-3"><h5 className="mb-0">$ {props.expense.amount}</h5></Badge></Col>
        </Card.Body>
    </Card>

}

export default ExpenseItem;
