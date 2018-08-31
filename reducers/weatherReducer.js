import { REFRESH_WEATHER, LOADING, CLEAR, ERROR } from '../actions/types';

INITIAL_STATE = {
  loading: false,
  lat: null,
  lon: null,
  temp: null,
  humidity: null,
  updated: null,
  city: '',
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REFRESH_WEATHER:
      let {
        coord: { lat },
        coord: { lon },
        main: { temp },
        main: { humidity },
        name: city
      } = action.data;
      let { timestamp } = action;

      temp = (temp - 273.15).toFixed(0);

      let updated = timestamp.toLocaleString();

      return {
        lat,
        lon,
        temp,
        humidity,
        city,
        updated,
        loading: false,
        error: null
      };
    case LOADING:
      return { ...state, error: null, loading: true };
    case CLEAR:
      return { ...INITIAL_STATE };
    case ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
