import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Row, Col, ListGroup, Card } from "react-bootstrap";
import { useCreateResultMutation } from "../slices/resultsApiSlice";
import { GlobalContext } from "../context/GlobalState";
import { useContext  } from "react";
import {  resetState } from "../slices/examSlice";
import FormContainer from "../components/FormContainer";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
const ResultScreen = () => {
  const navigate = useNavigate();
  const exam = useSelector((state) => state.exam);
  
  console.log(exam.questionsArray);
  const successArray = exam.questionsArray?.filter(
    (question) => question?.correct === true
  );
  
  
  const { user } = useContext(GlobalContext);
  const userId = user._id;
  const dispatch = useDispatch();
  const [createResult, { isLoading, error }] = useCreateResultMutation();
  
  // useEffect(() => {
  //     if (exam.questionsArray) {
        
  //       setFilteredArray(exam.questionsArray.filter((val) => val.examNo === Number(exam.Test)));
  //       setSuccessArray(filteredArray?.filter(
  //         (question) => question?.correct === true
  //       ));
        
  //       setTotal(filteredArray.length);
  //       setNoOfCorrect(successArray.length);
  //       Setpercentage((noOfCorrect / total) * 100)
  //     }
  //   }, [exam.questionsArray, filteredArray,successArray, exam.Test]);

    const total = exam.questionsArray.length
    const noOfCorrect = successArray.length
    const percentagetemp = ((noOfCorrect / total) * 100);
    const percentage = Math.round(percentagetemp);

        
  const placeResultHandler = async () => {
    try {
      const res = await createResult({
        user: userId,
        // questions: exam.questionsArray,
        subject: exam.Subject,
        practice: exam.Test,

        total: total,

        noOfCorrect: noOfCorrect,
        percentage: percentage,
      }).unwrap();
      // dispatch(clearExam());
      dispatch(resetState());
      navigate(`/home/`);
    } catch (err) {
      toast.error(err);
    }
  };
  return (
    <>
    
      <Row className="justify-content-md-center mt-2">

        <Col md={6}>
          <h5>View the result of the examination Just Completed</h5>
        </Col>
      </Row>
      <FormContainer>
      {exam.questionsArray?.length === 0 ? (
        <h2>Restart the exam</h2>
      ) : (
        <ListGroup variant="flush">
          <Row className="justify-content-md-center mt-auto">
            <h2 className="justify-content-md-center mt-auto">Result</h2>;
          </Row>
          <Row>
            <h5>Subject: {exam.Subject}</h5>;
          </Row>
          <Row>
            <h5>Practice Exam: {exam.Test}</h5>;
          </Row>
          <Row>
            <h5>Total Questions: {total}</h5>;
          </Row>
          <Row>
            <h5>Correct Answers: {noOfCorrect}</h5>;
          </Row>
          <Row>
            <h5>Percentage: {percentage} %</h5>;
          </Row>
          
          <ListGroup.Item>
            <Button
              type="button"
              className="btn-block"
              onClick={placeResultHandler}
            >
              Save Result
            </Button>
            
            {isLoading && <Loader />}
          </ListGroup.Item>
          {exam.questionsArray?.map((q, index) => (
            <ListGroup.Item key={index}>
              <Card>
                <Row>
                  <Col className="justify-content-md-center mt-2" md={2}>
                    {q.qno})
                  </Col>
                  <Col className="justify-content-md-center mt-2" md={10}>
                    {q.question}
                  </Col>
                </Row>

                <Row>
                  <Col className="justify-content-md-center mt-2" md={6}>
                    {q.optionA}
                  </Col>
                  <Col className="justify-content-md-center mt-2" md={6}>
                    {q.optionB}
                  </Col>
                </Row>
                <Row>
                  <Col className="justify-content-md-center mt-2" md={6}>
                    {q.optionC}
                  </Col>
                  <Col className="justify-content-md-center mt-2" md={6}>
                    {q.optionD}
                  </Col>
                </Row>
                <hr></hr>
                <Row>
                  <Col
                    className="text-primary justify-content-md-center mt-2"
                    md={3}
                  >
                    correct Option
                  </Col>
                  <Col
                    className="text-primary fs-5 justify-content-md-center mt-2"
                    md={1}
                  >
                    {q.currectOption}
                  </Col>
                  <Col
                    className="text-success justify-content-md-center mt-2"
                    md={3}
                  >
                    selected Option
                  </Col>
                  <Col
                    className="text-success fs-5 justify-content-md-center mt-2"
                    md={1}
                  >
                    {q.selectedOption}
                  </Col>
                  <Col
                    className="text-danger justify-content-md-center mt-2"
                    md={2}
                  >
                    is it correct
                  </Col>
                  <Col
                    className="text-danger fs-5 justify-content-md-center mt-2"
                    md={2}
                  >
                    {q.correct.toString()}
                  </Col>
                </Row>
              </Card>
            </ListGroup.Item>
          ))}
          <ListGroup.Item>
            <Button
              type="button"
              className="btn-block"
              onClick={placeResultHandler}
            >
              Save Result
            </Button>
            {isLoading && <Loader />}
          </ListGroup.Item>
        </ListGroup>
      )}
      </FormContainer>
    </>
  );
};

export default ResultScreen;
