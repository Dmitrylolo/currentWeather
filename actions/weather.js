import axios from 'axios';
import qs from 'qs';

import { REFRESH_WEATHER, LOADING, CLEAR, ERROR } from './types';

import api from '../helpers/api';

const WEATHER_QUERY_PARAMS = {
  appid: api.appid
};

const buildWeatherUrl = (lat, lon) => {
  const query = qs.stringify({ ...WEATHER_QUERY_PARAMS, lat, lon });
  return `${api.url}${query}`;
};

export const refreshWeather = (lat, lon) => async dispatch => {
  dispatch({ type: LOADING });
  try {
    const url = buildWeatherUrl(lat, lon);
    const timestamp = new Date();

    let { data } = await axios.get(url);
    dispatch({ type: REFRESH_WEATHER, data, timestamp });
  } catch (e) {
    dispatch({ type: ERROR, payload: e.message });
  }
};

export const onClear = () => dispatch => {
  dispatch({ type: CLEAR });
};
