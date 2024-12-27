import { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, ListGroup, Card, Button } from "react-bootstrap";

import Message from "../components/Message";
import Loader from "../components/Loader";
import { useGetOrderResultsQuery } from "../slices/ordersApiSlice";
import { GlobalContext } from "../context/GlobalState";

const ResultDetailsScreen = () => {
  const { id: resultId } = useParams();

  const {
    data: result,
    refetch,
    isLoading,
    error,
  } = useGetOrderResultsQuery(resultId);

  const [dummy, setDummy] = useState(false);

  const { user } = useContext(GlobalContext);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <h1>Result {result._id}</h1>
      <Row>
        <Col md={12}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <p>
                <strong>Name: </strong> {result.user.name}
              </p>

              <p>
                <strong>Total Questions:</strong>
                {result.total},<strong>Number of Correct Answers:</strong>
                {result.result},<strong>Percentage:</strong>
                {result.percentage},
              </p>
              {/* {order.isDelivered ? (
                <Message variant="success">
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger">Not Delivered - Delivered within 2 Hours</Message>
              )} */}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Questions</h2>
              {result.questions.length === 0 ? (
                <Message>Exam is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {result.questions.map((q, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={2}>{q.qno}</Col>
                        <Col md={10}>₹{q.question}</Col>
                      </Row>
                      <Row>
                        <Col md={6}>{q.optionA}</Col>
                        <Col md={6}>₹{q.optionB}</Col>
                      </Row>
                      <Row>
                        <Col md={6}>{q.optionC}</Col>
                        <Col md={6}>₹{q.optionD}</Col>
                      </Row>
                      <Row>
                        <Col md={3}>Correct Option</Col>
                        <Col md={1}>₹{q.currectOption}</Col>
                        <Col md={3}>Selected Option</Col>
                        <Col md={1}>₹{q.selectedOption}</Col>
                        <Col md={3}>Is Correct</Col>
                        <Col md={1}>₹{q.correct.toString()}</Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ResultDetailsScreen;
