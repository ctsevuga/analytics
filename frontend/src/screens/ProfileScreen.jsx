import React, { useEffect, useState, useContext } from "react";
import { Table, Form, Button, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";

import { toast } from "react-toastify";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useProfileMutation } from "../slices/usersApiSlice";
import { useGetMyResultsQuery } from "../slices/resultsApiSlice";
// import { setCredentials } from "../slices/authSlice";
import { GlobalContext } from "../context/GlobalState";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { user } = useContext(GlobalContext);
  const user_id = user._id

  console.log(user_id);

  // const { userInfo } = useSelector((state) => state.auth);
  const { data: results, isLoading, error } = useGetMyResultsQuery(user_id);
  console.log(results);
 
  const [updateProfile, { isLoading: loadingUpdateProfile }] =
    useProfileMutation();

  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
  }, [user.email, user.name]);

  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    console.log(address);
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await updateProfile({
          _id: user._id,
          name,
          email,
          password,
          address,
          city,
          postalCode,
          phoneNumber,
        }).unwrap();
        // dispatch(setCredentials({ ...res }));
        toast.success("Profile updated successfully");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
    { user && (
    <Row>
      <Col md={4}>
        <h2>User Profile</h2>

        <Form onSubmit={submitHandler}>
          <Row>
            <Col md={6}>
              <Form.Group className="my-2" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="my-2" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="my-2" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="my-2" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="my-2" controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Row>
            <Col md={6}>
              <Form.Group className="my-2" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="my-2" controlId="postalCode">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter postal code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="my-2" controlId="phoneNumber">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Mobile Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Update
          </Button>
          {loadingUpdateProfile && <Loader />}
        </Form>
      </Col>
      <Col md={8}>
        <h2>My Practice History</h2>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">
            {error?.data?.message || error.error}
          </Message>
        ) : (
          <Table striped table hover responsive className="table-sm">
            <thead>
              <tr>
                <th>SUBJECT</th>
                <th>PRACTICE TEST</th>
                <th>TOTAL Questions</th>
                <th>NO OF CORRECT Questions</th>
                <th>PERCENTAGE %</th>
                <th>DATE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result._id}>
                  {/* <tD>{result._id}</tD> */}
                  <td>{result.subject}</td>
                  <td>{result.practice}</td>
                  <td>{result.total}</td>
                  <td>{result.noOfCorrect}</td>
                  <td>{result.percentage}</td>
                  <td>{result.createdAt.substring(0, 10)}</td>
                  

 
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
    )};
  </>
  );
};

export default ProfileScreen;
