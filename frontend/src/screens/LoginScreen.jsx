import { useEffect,useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Form, Button, Row, Col } from "react-bootstrap";

import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { GlobalContext } from "../context/GlobalState";

import { useLoginMutation } from "../slices/usersApiSlice";

import { toast } from "react-toastify";

const LoginScreen = () => {
  const { setUser } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usr, setUsr] = useState();

  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get("redirect") || "/home";

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      setUsr(res);
      setUser(res);
      localStorage.setItem("userInfo", JSON.stringify(res));
      console.log(res.isAdmin.toString());
      console.log(res.isActive.toString());
    //   if(res.isActive){
    //   navigate("/home");
    // }else{
    //   navigate("/");
    // }
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  useEffect(() => {
    if (usr?.isActive) {
      navigate("/home");
    }else{
      navigate("/");
    }
      }, [usr]);
  return (
    <FormContainer>
          <Card>
        <h5>
        This application is developed with questions and answers from various topics such as Ages, Averages, Trains etc.. of Quantitative Aptitude.
        The objective is that the students can practice their knowledge in this subjects when they have completed the study of that particular subject. 
        Once they have completed all subjects then they can take the actual practice tests that have 30 questions from various topics.
        </h5>
        <h4 className="text-danger ">For testing the Email Address: tester1@email.com Password: 123456. 
          You can also register with an email and continue.</h4>
      </Card>
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className="my-2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="my-2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button disabled={isLoading} type="submit" variant="primary">
          Sign In
        </Button>

        {isLoading && <Loader />}
      </Form>

      <Row className="py-3">
        <Col>
          New Customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
      <Row className="py-3">
        <Col>
          Forgot Password?{" "}
          <Link to={redirect ? `/forgot?redirect=${redirect}` : "/forgot"}>
            Reset Password
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
