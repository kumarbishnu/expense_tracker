import {Button, Card, Col, Form, InputGroup, Row} from "react-bootstrap";

const NewExpense = () => {

    return <Card body bg={"dark"} className="mb-3 w-75 mx-auto">
        <Row as={"form"} >
            <Col md={6} className="mb-3">
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Title</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        type="text"
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
                    />
                </InputGroup>
            </Col>
        </Row>
        <Button variant="success" className="float-end px-5" type="submit">Add</Button>
    </Card>
}

export default NewExpense;
