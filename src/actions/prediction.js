import axios from 'axios';

export const setCoinPrediction = (prediction = '') => ({
  type: 'SET_COIN_PREDICTION',
  prediction
});

export const setLoadingState = () => ({
  type: 'SET_LOADING_STATE',
  prediction: 'loading'
});

export const startSetCoinPrediction = imageFile => (dispatch, getState) => {
  dispatch(setLoadingState());
  console.log(imageFile.type)

  axios.post('http://ec2-18-130-255-142.eu-west-2.compute.amazonaws.com/api/predict', imageFile,
    {
      headers: {
        'Content-Type': imageFile.type
      }
    }
  ).then((response) => {
    dispatch(setCoinPrediction(response.data));
  }).catch((error) => {
    dispatch(setCoinPrediction('Error while making a prediction'));
  });
};
