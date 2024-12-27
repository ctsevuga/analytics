import { useEffect, useState } from "react";
import { useGetSubjectsQuery } from "../slices/subjectsApiSlice";
import { useGetTopicsQuery } from "../slices/topicsApiSlice";
import { Link, useParams } from "react-router-dom";
import { Row, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useDispatch } from "react-redux";

import Message from "../components/Message";
import Loader from "../components/Loader";
import { saveQuestions } from "../slices/subjectSlice";
import { saveSubject,saveSubjectNo } from "../slices/examSlice";
import FormContainer from "../components/FormContainer";

const SubjectsScreen = () => {
  const { subject_no } = useParams();
  const dispatch = useDispatch();
  console.log(subject_no);
  const [q1display, setQ1Display] = useState(false);
  const [q2display, setQ2Display] = useState(false);
  const [q3display, setQ3Display] = useState(false);
  const [q4display, setQ4Display] = useState(false);
  const [subjectList, setSubjectList] = useState([]);
  // const [topicSelected, setTopicSelected] = useState("");
  // const [topicArray, setTopicArray] = useState([]);

  const {
    data: subjects,
    refetch,
    isLoading,
    error,
  } = useGetSubjectsQuery(subject_no);

  const {
    data: topics,
    
  } = useGetTopicsQuery(subject_no);

  console.log(topics);
  // console.log(topics[0].Subjects);

  const qArray1 = subjectList.filter((val) => val.examNo === 1);
  const qArray2 = subjectList.filter((val) => val.examNo === 2);
  const qArray3 = subjectList.filter((val) => val.examNo === 3);
  const qArray4 = subjectList.filter((val) => val.examNo === 4);

  useEffect(() => {
    if (subjects) {
      setSubjectList(subjects);
      console.log(subjectList)
      dispatch(saveQuestions(subjects));
      dispatch(saveSubjectNo(Number(subject_no)));
    }
  }, [subjects]);

  useEffect(() => {
    if (topics) {
      // setTopicArray(topics);
      console.log(topics[0].Subjects);
      
      dispatch(saveSubject(topics[0].Subjects));
    }
  }, [topics]);


  useEffect(() => {
    if (qArray1.length > 0) {
      setQ1Display(true);
    }
    if (qArray2.length > 0) {
      setQ2Display(true);
    }
    if (qArray3.length > 0) {
      setQ3Display(true);
    }
    if (qArray4.length > 0) {
      setQ4Display(true);
    }
  }, [qArray1, qArray2, qArray3, qArray4]);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
    <FormContainer>
      <h1> Subjects</h1>
      <>
        {q1display && (
          <Row>
            <LinkContainer to={`/questions/1`} style={{ marginRight: "10px" }}>
              <Button variant="warning my-small-btn mb-3">
                1. Practice Test 1
              </Button>
            </LinkContainer>
          </Row>
        )}
        {q2display && (
          <Row>
            <LinkContainer to={`/questions/2`} style={{ marginRight: "10px" }}>
              <Button variant="warning my-small-btn mb-3">
                2. Practice Test 2
              </Button>
            </LinkContainer>
          </Row>
        )}
        {q3display && (
          <Row>
            <LinkContainer to={`/questions/3`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                2. Practice Test 3
              </Button>
            </LinkContainer>
          </Row>
        )}
        {q4display && (
          <Row>
            <LinkContainer to={`/questions/4`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                2. Practice Test 4
              </Button>
            </LinkContainer>
          </Row>
        )}
      </>
      </FormContainer>
    </>
  );
};

export default SubjectsScreen;
