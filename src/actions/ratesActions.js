import { FETCH_RATES } from "./actionTypes";
import { getRates } from "./utils";

export function fetchExchangeRates() {
  return async function fetchExchangeRateThunk(dispatch, getState) {
    try {
      const { exchange } = getState();
      const response = await getRates(exchange.originCurrency);
      dispatch({ type: FETCH_RATES, payload: response.data.rates });
    } catch (error) {
      console.error(error);
    }
  };
}
