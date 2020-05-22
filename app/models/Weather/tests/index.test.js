import Weather from '..';

describe('Weather', () => {
  it('Has entity', () => {
    const id = 'dummyId';

    const entity = {
      id,
    };

    const result = new Weather(entity);

    expect(result.id).toEqual(id);
  });
});
