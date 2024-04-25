import { Button } from "@mui/material";
import React, { useState } from "react";
import { addTodo } from "../redux/todoReducer";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function TaskInput() {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  //adding data functonality
  const addData = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputVal));
    if (inputVal !== "") {
      alert("Data Successfully Added");
    }
  };

  return (
    <>
      <Container>
        <Row className="d-flex vh-100 justify-content-center align-items-center">
          <Col md={5} className="mx-auto">
            <div className="border p-4 rounded-2">
            <h4 className="text-center">Add Todo List</h4>
            <div>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter text here"
                name="textinput"
                aria-describedby="basic-addon1"
                onChange={handleChange}
              />
            </div>
            <div className="d-flex justify-content-between">
              <Button variant="contained" onClick={addData}>
                Add
              </Button>
              <NavLink to="/">
                <Button variant="contained">View</Button>
              </NavLink>
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TaskInput;
