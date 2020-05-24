// @flow
import map from 'lodash/fp/map';
import flow from 'lodash/fp/flow';
import set from 'lodash/fp/set';
import get from 'lodash/fp/get';

export function mapToModel({ data, Model }: { data: Array, Model: Object }) {
  return map(
    item =>
      flow(
        set('applicableDate', get('applicable_date', item)),
        set('minTemp', get('min_temp', item)),
        set('maxTemp', get('max_temp', item)),
        set('id', get('id', item)),
      )(new Model()),
    data,
  );
}
