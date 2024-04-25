import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { delAllData, removeTodo } from "../redux/todoReducer";
import { Container, Row, Col } from "react-bootstrap";

function TaskList() {
  //Getting data from redux store
  const data = useSelector((state) => state.todoData);
  console.log(data, "todoData");

  const dispatch = useDispatch();

  //Delete one by one  functionality
  const deltodo = (id) => {
    dispatch(removeTodo(id));
  };
  //clear all functionality
  const deleteAll = () => {
    dispatch(delAllData());
  };

  return (
    <div>
      <h3 className="text-center">Todo Data</h3>
      <div className="d-flex flex-column w-100 justify-content-center align-items-center">
        {/* Data mapping */}
        {data.map((todo, id) => {
          return (
            <>
              {" "}
              <Container>
                <Row>
                  <Col lg={6} className="mx-auto">
                    <div className="d-flex justify-content-between align-items-center  border rounded-2 border-dark mb-2 p-2 bg-light">
                      <li className="d-flex  text-capitalize ">
                        <span className="font-weight-bold">{todo}</span>
                      </li>
                      <Button variant="contained" onClick={() => deltodo(id)}>
                        Delete
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </>
          );
        })}
        <Button variant="contained" onClick={deleteAll}>
          Delete All
        </Button>
      </div>
      {/* Navigate Page for Adding Todo Data */}
      <div>
        <NavLink to="/input" className="p-3">
          <Button
            className="position-fixed end-0 bottom-0 rounded-5 fs-2 m-3  "
            variant="contained"
          >
            +
          </Button>
        </NavLink>
      </div>
    </div>
  );
}

export default TaskList;
