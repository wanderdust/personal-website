import dataReducer from '../../reducers/data';
import data from '../../pabloData.json';

describe('should set the correct dataReducer status', () => {
  test('should set the correct default state for data', () => {
    expect(dataReducer(data, '@@INIT')).toEqual({
      ...data
    });
  });
});
