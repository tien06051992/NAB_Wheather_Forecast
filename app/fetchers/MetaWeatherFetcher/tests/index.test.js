import MetaWeatherFetcher from '../index';

describe('MetaWeatherFetcher', () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      status: 200,
      json: () => ({ data: 'test' }),
      ok: true,
    }),
  );

  it('fetchLocation', () => {
    const fetcher = new MetaWeatherFetcher();

    const location = 'dummy city';

    fetcher.fetchLocation({ location }).then(({ response }) => {
      expect(response).toEqual({ data: 'test' });
    });
  });

  it('fetchWeather', () => {
    const fetcher = new MetaWeatherFetcher();
    const woeid = 123;
    fetcher.fetchWeather({ woeid }).then(({ response }) => {
      expect(response).toEqual({ data: 'test' });
    });
  });
});
