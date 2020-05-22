import User from '..';

describe('Weather', () => {
  it('Has entity', () => {
    const id = 'dummyId';

    const entity = {
      id,
    };

    const result = new User(entity);

    expect(result.id).toEqual(id);
  });
});
