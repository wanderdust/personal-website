import React from 'react';
import SectionCA from './SectionCA';
import UploadImage from './UploadImageCA';
import SupportedCurrencies from './SupportedCurrenciesCA';

export const MainPage = () => (
  <div>
    <div className="section section--basic">
      <SectionCA component={UploadImage} />
    </div>

    <div className="section section--light-grey">
      <SectionCA component={SupportedCurrencies} />
    </div>
  </div>
);

export default MainPage;
