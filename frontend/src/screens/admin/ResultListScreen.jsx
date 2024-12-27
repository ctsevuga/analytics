import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button } from 'react-bootstrap';
import { FaTimes } from 'react-icons/fa';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import { useEffect,useContext } from 'react';
import { useGetResultsQuery } from '../../slices/resultsApiSlice';
import { GlobalContext } from "../../context/GlobalState";
import { useNavigate } from "react-router-dom";

const ResultListScreen = () => {
  const navigate = useNavigate();
  const { data: results, isLoading, error } =useGetResultsQuery();
  const { user } = useContext(GlobalContext);

  useEffect(() => {
    if (!user.isAdmin) {
      navigate("/");
    }
  }, [navigate. user]);

  return (
    <>
    
      <h1>Users Performance</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Table striped bordered hover responsive variant="dark" className='table-sm'>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>NAME</th>
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
                <td>{result.user && result.user.name}</td>
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
      
    </>
  );
};

export default ResultListScreen;
