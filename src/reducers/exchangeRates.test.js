import { FETCH_RATES } from "../actions/actionTypes";
import exchangeRates from "./exchangeRates"

describe('exchangeRates reducer', () => {
  it('should return the initial state', () => {
    expect(exchangeRates(undefined, {})).toMatchSnapshot()
  })

  it('should populate state with received data', () => {
    const mockFetchRatesAction = {
      type: FETCH_RATES,
      payload: {
        "USD": 321.97,
        "CAD": 1.5641,
        }
    }
    expect(exchangeRates({},mockFetchRatesAction)).toMatchSnapshot()
  })
})