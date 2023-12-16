import React from 'react';
import {
  Row, Col,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

export default function ProfileCard(props) {
  const {
    name,
    image,
    phone,
    facebook,
    father,
    mother,
    position,
  } = props.profile;
  return (
    <Row>
      <Col>
        <Row className="pt-3">
          <Col>
            <img className="img-fluid rounded-circle profile-image" src={image} alt={`${name}`} />
          </Col>
        </Row>
        <Row className="pt-4">
          <Col>
            <p className="mb-1">{position} of {father}, {mother}</p>
            <h4>{name}</h4>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
