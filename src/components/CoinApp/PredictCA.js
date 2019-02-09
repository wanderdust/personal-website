import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { startSetCoinPrediction } from '../../actions/prediction';
import PredictionData from './PredictionDataCA';
import Loader from './LoaderCA';

export const Predict = ({ startSetCoinPrediction, imageFile, prediction }) => {
  const handleOnClick = () => {
    startSetCoinPrediction(imageFile);
  };

  return (
    <div className="predict">
      <button
        onClick={handleOnClick}
        type="button"
        disabled={!imageFile}
        className={`button ${!imageFile && 'button--disabled'} button--prediction`}
      >
        Make Prediction
      </button>

      {!!prediction && prediction !== 'loading' && <PredictionData prediction={prediction} />}
      {prediction === 'loading' && <Loader />}
    </div>
  );
};

Predict.propTypes = {
  startSetCoinPrediction: PropTypes.func.isRequired,
  imageFile: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]).isRequired,
  prediction: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  prediction: state.prediction.prediction
});

const mapDispatchToProps = dispatch => ({
  startSetCoinPrediction: imageFile => dispatch(startSetCoinPrediction(imageFile))
});

export default connect(mapStateToProps, mapDispatchToProps)(Predict);
