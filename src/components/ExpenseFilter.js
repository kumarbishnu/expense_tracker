import {Form} from "react-bootstrap";

const ExpenseFilter = props => {

    const changeYear = event => {
        props.onYearChange(event.target.value);
    }

    return <div className="d-flex justify-content-between mb-3 mt-2">
        <div>Filter by Year</div>
        <div>
            <Form.Control as={"select"} value={props.year} onChange={changeYear} className="px-5">
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </Form.Control>
        </div>
    </div>

}

export default ExpenseFilter;
