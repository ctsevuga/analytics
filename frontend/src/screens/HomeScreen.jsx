import { Row, Col, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import {  resetState } from "../slices/examSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetState());
  }, [dispatch]);
  return (
    <>

      <Row>
     
      <Col sm={12} md={6}>

      
          <h5 className=" text-secondary  ">COURSE SUBJECTS</h5>
          {/* <hr></hr> */}
          <p className=" text-secondary  ">Click and Continue</p>
          <div class="d-grid gap-2 col-6 mx-auto">
          <Row>
            <LinkContainer to={`/subjects/1`} style={{ marginRight: "10px" }}>
            <Button variant="secondary my-small-btn mb-3">1. Ages</Button>
            </LinkContainer>
          </Row>

          <Row>
            <LinkContainer to={`/subjects/2`} style={{ marginRight: "10px" }}>
            <Button variant="secondary my-small-btn mb-3">
                2. Allegation and Mixture
              </Button>
            </LinkContainer>
          </Row>

          <Row>
            <LinkContainer to={`/subjects/3`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                3. Area and Volume
              </Button>
            </LinkContainer>
          </Row>

          <Row>
            <LinkContainer to={`/subjects/4`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                4. arithmetic-progression
              </Button>
            </LinkContainer>
          </Row>

          <Row>
            <LinkContainer to={`/subjects/5`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">5. Averages</Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/6`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                6. Blood Relations
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/7`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                7.Boats and Stream
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/8`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                8. Coding Decoding
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/9`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                9. Compound Interest
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/10`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                10. Geometric Progress
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/11`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                11.Height and Distance
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/12`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">12. Numbers</Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/13`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                13. Partnership
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/14`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                14. Percentage
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/15`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                15. Permutations and Combinations
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/16`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                16. Pipes and Cistern
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/17`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                17. Probability
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/18`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                18. Profit and Loss
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/19`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                19. Ratio Proportion
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/20`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                20. Simple Interest
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/21`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                21. Time and Distance
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/22`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">
                22. Time and Work
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/subjects/23`} style={{ marginRight: "10px" }}>
              <Button variant="secondary my-small-btn mb-3">23. Train</Button>
            </LinkContainer>
          </Row>
          </div>
        </Col>
        
        <Col sm={12} md={6}>
          <h5 className=" text-primary  ">Practice Tests</h5>
          {/* <hr></hr> */}
          <p className=" text-primary  ">Click and Continue</p>
          <div class="d-grid gap-2 col-6 mx-auto">
          <Row>
            <LinkContainer to={`/practice/1`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">1. Practice Test 1</Button>
            </LinkContainer>
          </Row>

          <Row>
            <LinkContainer to={`/practice/2`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                2.  Practice Test 2
              </Button>
            </LinkContainer>
          </Row>

          <Row>
            <LinkContainer to={`/practice/3`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                3.  Practice Test 3
              </Button>
            </LinkContainer>
          </Row>

          <Row>
            <LinkContainer to={`/practice/4`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                4.  Practice Test 4
              </Button>
            </LinkContainer>
          </Row>

          <Row>
            <LinkContainer to={`/practice/5`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">5.  Practice Test 5</Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/6`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                6.  Practice Test 6
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/7`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                7. Practice Test 7
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/8`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                8.  Practice Test 8
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/9`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                9.  Practice Test 9
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/10`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                10.  Practice Test 10
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/11`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                11. Practice Test 11
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/12`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">12.  Practice Test 12</Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/13`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                13.  Practice Test 13
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/14`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                14.  Practice Test 14
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/15`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                15.  Practice Test 15
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/16`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                16.  Practice Test 16
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/17`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                17.  Practice Test 17
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/18`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                18.  Practice Test 18
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/19`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                19.  Practice Test 19
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/20`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                20.  Practice Test 20
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/21`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                21. Practice Test 21
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/22`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">
                22. Practice Test 22
              </Button>
            </LinkContainer>
          </Row>
          <Row>
            <LinkContainer to={`/practice/23`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">23. Practice Test 23</Button>
            </LinkContainer>
            
          </Row>
          <Row>
            <LinkContainer to={`/practice/23`} style={{ marginRight: "10px" }}>
              <Button variant="primary my-small-btn mb-3">24. Practice Test 24</Button>
            </LinkContainer>
            
          </Row>
          </div>
        </Col>
       
      </Row>
    </>
  );
};

export default HomeScreen;
