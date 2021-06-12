import {Badge, Card, Col} from "react-bootstrap";

function ExpenseItem(props) {

    return <Card bg={"dark"}>
        <Card.Body className="row align-items-center text-nowrap">
            <Col>{props.expense.date.toDateString()}</Col>
            <Col>{props.expense.title}</Col>
            <Col md={3} className="text-end"><Badge className="bg-primary p-2">$ {props.expense.amount}</Badge></Col>
        </Card.Body>
    </Card>

}

export default ExpenseItem;
