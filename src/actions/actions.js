import axios from 'axios';
import URL from '../utils/url';


// get historical data of some country
export const getHistoricalDataByCountry = ({ country, lastdays = 30 }) => async (dispatch) => {
  try {
    dispatch({ type: 'HISTORY_LOADING' });

    const res = await axios.get(`${URL}/v3/covid-19/historical/${country}?lastdays=${lastdays}`);
    const { data } = res;

    dispatch({ type: 'HISTORY_FETCH_SUCCESS', payload: data });

  } catch (error) {
    dispatch({
      type: 'HISTORY_FETCH_ERROR',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    });
  }
};