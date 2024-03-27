import PropTypes from "prop-types";
import React from "react";
// custom components
import { Card } from "react-bootstrap";

/**
 * Name:Card
 * Desc: Render card
 * @param {string} src
 * @param {string} title
 * @param {string} className
 * @param {string} text
 */
const Cards = ({ src, title, className = "", text, ...rest }) => {
  return (
    <div className="cardBox">
      <Card>
        <div className={`cardImgWrap ${className}`}>
          <Card.Img src={src} className="img-fluid" />
        </div>

        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

Cards.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  text: PropTypes.string,
};

export default Cards;
