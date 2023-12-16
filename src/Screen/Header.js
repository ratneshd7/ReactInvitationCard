import React from 'react';
import moment from 'moment';
import {
  Row,
  Col,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import 'moment/locale/en-in';

export default function Header(props) {
  const {
    bridal, groom, image, wedding, title,
  } = props.config;
  moment.locale('en-in');
  return (
    <Row>
      <Col>
        <Row>
          <Col className="app-fluid">
            <div className="app-header d-flex justify-content-center align-items-center">
              <h2 className="mb-0">{title}</h2>
            </div>
            <img className="img-fluid" src={image.header} alt="header" />
          </Col>
        </Row>
        <Row>
          <Col className="pt-5">
            <h3>
              {bridal.name}&nbsp;
              <small>
                <span className="text-middle" style={{ color: 'red' }}>
                  <FontAwesome name="heart" />
                </span>
              </small>
              &nbsp;{groom.name}
            </h3>
            <h3>We invite you to the Engagement.</h3>
            <p className="lead pt-3">{moment(wedding.at, 'YYYY-MM-DD HH:mm').format('llll')}</p>
            <p className="lead">{wedding.place.name}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

