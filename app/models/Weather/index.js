import isNil from 'lodash/fp/isNil';
import ClientObject from '../ClientObject';

class Weather extends ClientObject {
  id: number;

  applicableDate: string;

  minTemp: number;

  maxTemp: number;

  constructor(entity) {
    super(entity);

    /* istanbul ignore else */
    if (!isNil(entity)) {
      const { id, applicableDate, minTemp, maxTemp } = entity;
      this.id = id;
      this.applicableDate = applicableDate;
      this.minTemp = minTemp;
      this.maxTemp = maxTemp;
    }
  }
}

export default Weather;
