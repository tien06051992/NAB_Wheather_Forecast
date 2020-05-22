import Location from '..';

describe('Location', () => {
  it('Has entity', () => {
    const title = 'dummyTitle';

    const entity = {
      title,
    };

    const result = new Location(entity);

    expect(result.title).toEqual(title);
  });
});
