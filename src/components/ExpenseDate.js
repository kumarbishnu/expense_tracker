import {Card} from "react-bootstrap";

const ExpenseDate = props => {

    return <Card bg={"success"} className="text-center border-0 shadow-sm p-2">
        <h6 className="mb-0">{props.date.toLocaleString('en-US', {month: 'long'})}</h6>
        <small>{props.date.getFullYear()}</small>
        <h4 className="mb-0">{props.date.toLocaleString('en-US', {day: '2-digit'})}</h4>
    </Card>

}

export default ExpenseDate;
