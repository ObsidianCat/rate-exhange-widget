import React from "react";
import { connect } from "react-redux";
import { fetchExchangeRates, swapCurrencyType } from "../../actions";
import CurrencySelect from "./CurrencySelect";
import AmountInputOrigin from "./AmountInputOrigin";
import AmountInputTarget from "./AmountInputTarget";
import { CURRENCY_ORIGIN, CURRENCY_TARGET } from "./constants";
import { Button, Radio, Icon } from "antd";

class Exchanger extends React.Component {
  componentDidMount() {
    this.props.fetchExchangeRates();
  }

  handleSwap = ()=>{
    this.props.swapCurrencyType()
    this.props.fetchExchangeRates()
  }
  render() {
    return (
      <div>
        <CurrencySelect
          exchangeRates={this.props.exchangeRates}
          selected={this.props.exchange.originCurrency}
          curType={CURRENCY_ORIGIN}
        />
        <AmountInputOrigin />
        <div>
          <Button
            type="primary"
            icon="swap"
            size={"small"}
            onClick={this.handleSwap}
          >
            Swap
          </Button>
        </div>
        <CurrencySelect
          exchangeRates={this.props.exchangeRates}
          selected={this.props.exchange.targetCurrency}
          curType={CURRENCY_TARGET}
        />
        <AmountInputTarget
          originAmount={this.props.exchange.amount}
          exchangeRate={
            this.props.exchangeRates[this.props.exchange.targetCurrency]
          }
        />
      </div>
    );
  }
}

const mapStateToProps = ({ exchangeRates, exchange }) => ({
  exchangeRates,
  exchange
});

export default connect(
  mapStateToProps,
  { fetchExchangeRates, swapCurrencyType,  }
)(Exchanger);