import {Button, Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import {useState} from "react";

const NewExpense = () => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleChange = event => {setTitle(event.target.value);}
    const amountChange = event => {setAmount(event.target.value);}
    const dateChange = event => {setDate(event.target.value);}

    const submitHandler = event => {
        event.preventDefault();
        const expense = {
            title: title,
            amount: amount,
            date: date,
        }
        console.log(expense);
        clearForm()
    }

    const clearForm = () => {
        setTitle('');
        setAmount('');
        setDate('');
    }

    return <Card as={"form"} onSubmit={submitHandler} body bg={"dark"} className="mb-3 w-75 mx-auto">
            <Row>
                <Col md={6} className="mb-3">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Title</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="text"
                            value={title}
                            onChange={titleChange}
                        />
                    </InputGroup>
                </Col>
                <Col md={6} className="mb-3">
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>Amount</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            type="number"
                            min="0.01"
                            step="0.01"
                            value={amount}
                            onChange={amountChange}
                        />
                    </InputGroup>
                </Col>
                <Col md={6} className="mb-3">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Date</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={date}
                        onChange={dateChange}
                    />
                </InputGroup>
            </Col>
            </Row>
            <Button variant="success" className="float-end px-5" type="submit">Add</Button>
    </Card>
}

export default NewExpense;
