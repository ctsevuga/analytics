import { useEffect, useState } from "react";
import { useGetPracticesQuery } from "../slices/practicesApiSlice";
import { useGetPracticesExamQuery } from "../slices/practicesExamApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, Row, Col } from "react-bootstrap";

import Message from "../components/Message";
import Loader from "../components/Loader";
import { addToExam, saveSubject, saveTest, clearExam } from "../slices/examSlice";


const PracticeScreen = () => {
  const { examNo } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [display, setDisplay] = useState(true);
  const [display2, setDisplay2] = useState(true);
  const [practice, setPractice] = useState();
  const subject = useSelector((state) => state.subject);
  const { questionsFetched } = subject;

  const [optionA, setOptionA] = useState(false);
  const [optionB, setOptionB] = useState(false);
  const [optionC, setOptionC] = useState(false);
  const [optionD, setOptionD] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [secondsLeft = 0, setSecondsLeft] = useState(0);
  const [duration, setDuration] = useState(0);
  const [totalQ, setTotalQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState();
  const [timeUp, setTimeUp] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  let [qNo, setQNo] = useState(1);
  const {
      data: practices,
      refetch,
      
    } = useGetPracticesQuery(examNo);
  const { data: details } = useGetPracticesExamQuery(examNo);
  const [questionList, setQuestionList] = useState([]);
console.log(details);
  useEffect(() => {
    if (practices) {
      setQuestions(practices);
      setPractice(Number(examNo));
      dispatch(saveSubject("Practice"));
      dispatch(saveTest(practice));
    }
  }, [practices, questions, practice]);
  const startHandler = () => {
    const ques = questions?.filter((question) => question?.qno === qNo);
    setSelectedQuestion(ques[0]);
    startTimer();
    setDisplay(false);
  };
  useEffect(() => {
    if (details) {
      setSecondsLeft(details[0].seconds);
      setDuration(details[0].minutes);
      setTotalQ(details[0].TotalQuestion);
      setTimeLeft(TimeDisplay(secondsLeft));
    }
  }, [details]);

  useEffect(() => {
    if (secondsLeft) {
      setTimeLeft(TimeDisplay(secondsLeft));
    }
  }, [secondsLeft]);

  const startTimer = () => {
    let totalSeconds = secondsLeft;
    const intervalId = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds = totalSeconds - 1;
        setSecondsLeft(totalSeconds);
      } else {
        setTimeUp(true);
      }
    }, 1000);
    setIntervalId(intervalId);
  };
  useEffect(() => {
    if (timeUp) {
      clearInterval(intervalId);
    }
  }, [timeUp]);

  const navigationHandler = () => {
    const ques = questions?.filter((question) => question?.qno === qNo);
    setSelectedQuestion(ques[0]);
  };

  useEffect(() => {
    navigationHandler();
  }, [qNo]);

  const addToExamHandler = () => {
    const newQuestion = (({
      _id,
      qno,
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      currectOption,
    }) => ({
      _id,
      qno,
      question,
      optionA,
      optionB,
      optionC,
      optionD,
      currectOption,
    }))(selectedQuestion);
    newQuestion.selectedOption = selectedOption;
    newQuestion.correct = selectedQuestion.currectOption === selectedOption;
    dispatch(addToExam({ ...newQuestion }));
    // console.log(questionsArray);
    setDisplay2(false);
    setOptionA(false);
    setOptionB(false);
    setOptionC(false);
    setOptionD(false);
  };

  const selectedOptionHandler = (option) => {
    setSelectedOption(option);

    if (option === "A") {
      setOptionA(true);
      setOptionB(false);
      setOptionC(false);
      setOptionD(false);
    }
    if (option === "B") {
      setOptionA(false);
      setOptionB(true);
      setOptionC(false);
      setOptionD(false);
    }
    if (option === "C") {
      setOptionA(false);
      setOptionB(false);
      setOptionC(true);
      setOptionD(false);
    }
    if (option === "D") {
      setOptionA(false);
      setOptionB(false);
      setOptionC(false);
      setOptionD(true);
    }
  };
  const completeHandler = () => {
    navigate("/result");
  };
  const TimeDisplay = (seconds) => {
    // Function to format the remaining time in HH:MM format
    const formatTime = (seconds) => {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
        2,
        "0"
      )}`;
    };
    return <div>{formatTime(seconds)}</div>;
  };
  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <Row>
      <Col xs={12} md={4}>
      <Card>
            <Row>
              <Col md={6}>
                <h2>Time Left:</h2>
              </Col>
              <Col className="text-danger " md={6}>
                <h2>{timeLeft}</h2>
              </Col>
            </Row>
            <h6>Total Number of Questions: {totalQ}</h6>
            <h6>Total Duration: {duration} Minutes</h6>
          </Card>
          <h4>Importance of Quantitative Practice Mock Tests</h4>
          <hr />
          <h6>Revisiting quantitative practice mock tests repeatedly can significantly enhance your chances of securing a job, especially in roles that involve problem-solving, data analysis, or other skills requiring numerical proficiency.</h6>

          <hr />
          <h6>Repeated practice helps cement mathematical concepts and problem-solving techniques, making it easier to recall solutions under pressure during the actual test or interview.</h6>
          <hr />
          <h6>The more mock tests you take, the faster and more accurate you'll become at solving problems, which is crucial for time-bound assessments or interviews.</h6>
          
        </Col>
        <Col xs={12} md={8}>
          {display && (
            <Button
              className="btn-block mx-2"
              type="button"
              onClick={startHandler}
            >
              Start
            </Button>
          )}
          {!display && qNo <= questions?.length && (
            <div>
              <h4>Question No - {selectedQuestion?.qno} </h4>
              <hr />
              <h4>{selectedQuestion?.question}</h4>

              <Row className="mt-5 mb-3 ">
                <Button
                  disabled={optionA}
                  className="btn-secondary mx-2"
                  type="button"
                  onClick={() => selectedOptionHandler("A")}
                >
                  {selectedQuestion?.optionA}
                </Button>
              </Row>

              <Row className=" mb-3">
                <Button
                  disabled={optionB}
                  className="btn-secondary mx-2"
                  type="button"
                  onClick={() => selectedOptionHandler("B")}
                >
                  {selectedQuestion?.optionB}
                </Button>
              </Row>
              <Row className=" mb-3">
                <Button
                  disabled={optionC}
                  className="btn-secondary mx-2"
                  type="button"
                  onClick={() => selectedOptionHandler("C")}
                >
                  {selectedQuestion?.optionC}
                </Button>
              </Row>
              <Row className=" mb-3">
                <Button
                  disabled={optionD}
                  className="btn-secondary mx-2"
                  type="button"
                  onClick={() => selectedOptionHandler("D")}
                >
                  {selectedQuestion?.optionD}
                </Button>
              </Row>
              <div className=" col-md-6 mx-auto center-block">
                <Row className=" mb-3">
                  <Button
                    className="btn-danger  mt-3"
                    type="button"
                    onClick={() => addToExamHandler()}
                  >
                    Submit
                  </Button>
                </Row>
              </div>
              {/* </Col> */}
              {/* </Row> */}
            </div>
          )}
          ;
          <div>
            <Row className="justify-content-md-center">
              <Col xs={12} md={6}>
                {qNo > 1 && !display2 && (
                  <Button
                    className="btn-secondary mx-2"
                    type="button"
                    onClick={() => {
                      setQNo(qNo - 1);
                      setDisplay2(true);
                    }}
                  >
                    Previous
                  </Button>
                )}

                {qNo < questions?.length + 1 && !display2 && (
                  <Button
                    className="btn-secondary mx-2"
                    type="button"
                    onClick={() => {
                      setQNo(qNo + 1);
                      setDisplay2(true);
                    }}
                  >
                    Next
                  </Button>
                )}
                {qNo === questions?.length + 1 && !display && (
                  <Button
                    className="btn-success mx-2"
                    type="button"
                    onClick={() => {
                      completeHandler();
                    }}
                  >
                    Complete
                  </Button>
                )}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default PracticeScreen;
