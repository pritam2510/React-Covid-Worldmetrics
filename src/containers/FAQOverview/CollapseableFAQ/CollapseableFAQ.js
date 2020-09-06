import React, { useState } from 'react';

import {
  Collapse,
  Button,
  CardBody,
  Card
} from 'reactstrap';

import './CollapseableFAQ.css';

const CollapseableFAQ = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="CollapseableFAQ">
      <Button onClick={toggle} >
        {props.question}
      </Button>
      <Collapse isOpen={isOpen}>
        <Card className="CollapseableFAQCard">
          <CardBody>
            {props.answer}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default CollapseableFAQ;