import { useEffect, useState } from "react";
import { useGetSubjectsExamQuery } from "../slices/subjectsExamApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Button, Card, Row, Col } from "react-bootstrap";

import Message from "../components/Message";
import Loader from "../components/Loader";
import { addToExam, saveTest, clearExam } from "../slices/examSlice";
import { saveQuestions } from "../slices/subjectSlice";

const QuestionsScreen = () => {
  const { testNo } = useParams();
  const exam = useSelector((state) => state.exam);
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

  let [qNo, setQNo] = useState(1);

  const [questionList, setQuestionList] = useState([]);
  const [secondsLeft = 0, setSecondsLeft] = useState(0);
  const [duration, setDuration] = useState(0);
  const [totalQ, setTotalQ] = useState(0);
  const [timeLeft, setTimeLeft] = useState();
  const [timeUp, setTimeUp] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const subject_no = Number(exam.subject_no);
  const examNo = Number(testNo);

  const { data: details, refetch } = useGetSubjectsExamQuery({
    subject_no,
    examNo,
  });

  useEffect(() => {
    if (questionsFetched) {
      setPractice(Number(testNo));
      setQuestions(questionsFetched.filter((val) => val.examNo === practice));
      const filteredQuestions = questions;
      dispatch(saveTest(practice));

      // dispatch(saveQuestions(filteredQuestions));
    }
  }, [questionsFetched, questions, practice]);

  const startHandler = () => {
    const ques = questions?.filter((question) => question?.qno === qNo);
    setSelectedQuestion(ques[0]);
    startTimer();
    setDisplay(false);
  };

  const navigationHandler = () => {
    const ques = questions?.filter((question) => question?.qno === qNo);
    setSelectedQuestion(ques[0]);
  };

  useEffect(() => {
    navigationHandler();
  }, [qNo]);

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
    saveQuestions(questions);
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
          <h4>Importance of Quantitative Aptitude</h4>
          <hr />
          <h6>
            Aptitude tests have become an integral part of the recruitment
            process for many companies. As a college student or a fresh
            graduate, candidate is likely to face these tests during his/her job
            search.
          </h6>

          <hr />
          <h6>
            Candidates need both math skills and logical thinking for exams
            related to banks, government jobs, and management programs.
          </h6>
          <hr />
          <h6>
            The quantitative aptitude questions and answers resource includes a
            wide range of concepts and test papers covering various topics such
            as averages, numbers, compound interest, partnerships, age-related
            problems, boats and streams, blood relations, height and distance,
            percentages, pipes and cisterns, profit and loss, speed, time and
            distance, simple interest, train problems, and time and work.
          </h6>
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
                  <Card>
                    <h4>Congrats!!! for completing the Test</h4>
                    <hr></hr>
                    <h4>Click the "Complete" Button to view the result</h4>
                    <hr></hr>
                    <h4>After reviewing the result click "Save Result" Button to track your practice history</h4>
                    <hr></hr>
                  <Button
                    className="btn-success mx-2"
                    type="button"
                    onClick={() => {
                      completeHandler();
                    }}
                  >
                    Complete
                  </Button>
                  </Card>
                )}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default QuestionsScreen;
