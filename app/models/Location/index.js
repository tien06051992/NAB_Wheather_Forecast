import isNil from 'lodash/fp/isNil';
import ClientObject from '../ClientObject';

class Location extends ClientObject {
  title: string;

  locationType: string;

  woeid: number;

  lattLong: string;

  constructor(entity) {
    super(entity);

    /* istanbul ignore else */
    if (!isNil(entity)) {
      const { title, locationType, woeid, lattLong } = entity;
      this.title = title;
      this.locationType = locationType;
      this.woeid = woeid;
      this.lattLong = lattLong;
    }
  }
}

export default Location;
