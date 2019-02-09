import React from 'react';
import uuid from 'uuid';
import supportedCurrencies from '../../utils/supportedCurrencies.json';
import arraySplitter from '../../utils/arraySplitter';

export const SupportedCurrencies = () => {
  const currenciesColumns = arraySplitter(supportedCurrencies);

  return (
    <div className="currencies">
      <h2 className="currencies__title">Supported Currencies</h2>
      <div className="section-content currencies__list">
        {currenciesColumns.map((column) => {
          return (
            <div className="currencies__column" key={uuid()}>
              {column.map(currency => (
                <div key={currency}>{currency}</div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SupportedCurrencies;
