import React from 'react';
import '../styles/dashboard.css';
import PropTypes from 'prop-types';

const Title = ({name}) => {
  return (
    <div className="title">
      {name ? <h1>Bonjour <span>{name}</span></h1> : ''}
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};


Title.propTypes = {
    name: PropTypes.string
  };
export default Title;
