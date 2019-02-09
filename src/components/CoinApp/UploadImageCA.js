import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import Predict from './PredictCA';

export const UploadImage = () => {
  const [image, setImage] = useState('');

  const onChange = (data) => {
    setImage(data[0]);
  };

  return (
    <div>
      <ImageUploader
        withIcon={false}
        withPreview={true}
        buttonText="Choose a Coin Image"
        imgExtension={['.jpg', '.png', '.jpeg']}
        onChange={onChange}
        singleImage={true}
      />

      <Predict imageFile={image} />
    </div>
  );
};
export default UploadImage;
