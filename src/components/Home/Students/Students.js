import React from 'react';
import { Card,CardGroup} from 'react-bootstrap';
import cover from "../../../images/student-1.png";
import cover1 from "../../../images/student-2.png";
import cover2 from "../../../images/student-3.png";
import "./Students.css";


const Students = () => {
 return (
      <div className="students-section">
          <h3 className='text-center mb-5'>
             Some of our <big>Success Students</big>
          </h3>
        
          <CardGroup> 
            <Card>
              <Card.Img className="img-size" variant="top" src= {cover} />
              <Card.Body>
                <Card.Title className="text-center">Robert Guerin</Card.Title>
                <Card.Text className="text-color text-justify">
                Robert Guerin is a Clinical Assistant Professor, Bioethics, at the School of Medicine of Case Western Reserve and a Clinical Ethicist at University Hospitals Cleveland Medical Center (formerly a Fellow at the Cleveland Clinic program in Advanced Bioethics). He entered the Ph.D. program in philosophy at the University of Kentucky in 2009 with a B.A. in philosophy from Duquesne University. He explains his experience with philosophy and his time at UK as follows.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 2 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img className="img-size" variant="top" src={cover1} />
              <Card.Body>
                <Card.Title className="text-center">Peter Antich</Card.Title>
                <Card.Text className="text-color text-justify">
                Peter Antich is a Visiting Assistant Professor at Trinity College in Hartford, CT. He entered the Ph.D. program at the University of Kentucky in 2012 with a B.A. in Philosophy from the University of Dallas:
 
                "I chose to enter UK because I had a broad interest in the History of Philosophy, and in particular in 19th and 20th Century Continental Philosophy. I ended up writing my dissertation of Phenomenology, in particular the work of Maurice Merleau-Ponty, and Epistemology, focusing on the relation between perception and knowledge.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 4 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img className="img-size" variant="top" src={cover2} />
              <Card.Body>
                <Card.Title className="text-center">Charles Joshua Horn</Card.Title>
                <Card.Text className="text-color text-justify">
                Charles Joshua Horn is an Associate Professor of Philosophy at the University of Wisconsin, Stevens Point. He entered the Ph.D. program at the University of Kentucky in 2007 with a B.A. in Philosophy and Government from Morehead State University. He offers the following on his time at UK:
 
                "My plan since I started at Morehead State was to attend law school when I graduated, but the more philosophy courses I took, the deeper my infatuation with the discipline became. As my time at MSU came to a close, I welcomed my acceptance.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 10 mins ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
      </div>
  );
};

export default Students;