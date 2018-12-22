import { InputNumber } from 'antd';
import React from "react";
import connect from "react-redux/es/connect/connect";
import {updateOriginAmount} from "../../actions";

class AmountInputOrigin extends React.Component{

  render(){
    return (
      <InputNumber min={1} defaultValue={this.props.exchange.amount} onChange={this.props.updateOriginAmount} />
    )
  }
}

const mapStateToProps = ({exchange }) => ({
  exchange
});

export default connect(
  mapStateToProps,
  { updateOriginAmount }
)(AmountInputOrigin);