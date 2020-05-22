// @flow
import fetch, { notApplyCacheHeader, handleGeneralError } from '../Fetch';

class MetaWeatherFetcher {
  fetchLocation = ({ location }: { location: string }) => {
    const url = `https://www.metaweather.com/api/location/search/?query=${location}`;
    return fetch(url, notApplyCacheHeader())
      .get()
      .then(response => response.json())
      .then(data => ({ response: data }))
      .catch(handleGeneralError);
  };

  fetchWeather = ({ woeid }: { woeid: number }) => {
    const url = `https://www.metaweather.com/api/location/${woeid}`;
    return fetch(url, notApplyCacheHeader())
      .get()
      .then(response => response.json())
      .then(data => ({ response: data }))
      .catch(handleGeneralError);
  };
}

export default MetaWeatherFetcher;
