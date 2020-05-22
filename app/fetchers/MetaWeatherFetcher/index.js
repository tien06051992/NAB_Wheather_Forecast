// @flow
import fetch, { notApplyCacheHeader, handleGeneralError } from '../Fetch';
const CORS_BYPASS = 'https://cors-anywhere.herokuapp.com';
class MetaWeatherFetcher {
  fetchLocation = (location: string) => {
    const url = `${CORS_BYPASS}/https://www.metaweather.com/api/location/search/?query=${location}`;
    return fetch(url, notApplyCacheHeader)
      .get()
      .then(response => response.json())
      .then(data => ({ response: data }))
      .catch(handleGeneralError);
  };

  fetchWeather = (woeid: number) => {
    const url = `${CORS_BYPASS}/https://www.metaweather.com/api/location/${woeid}`;
    return fetch(url, notApplyCacheHeader)
      .get()
      .then(response => response.json())
      .then(data => ({ response: data }))
      .catch(handleGeneralError);
  };
}

export default MetaWeatherFetcher;
