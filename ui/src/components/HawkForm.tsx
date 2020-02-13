import React, { Component } from 'react';
import './HawkTable.css';
import IAppState from '../models/IAppState';
import IHawk from '../models/IHawk';
import { connect } from 'react-redux';

type HawkFormProps = {
  hawk: IHawk
}

class HawkForm extends Component<HawkFormProps> {
  constructor(props:HawkFormProps) {
    super(props);
    console.log('HawkTable::constructor')
  }

  render() {
    console.log('HawkForm::render');

    return <div></div>;
  }
}

function mapStateToProps(store: IAppState, ownProps: HawkFormProps) {
  return {
    hawk: store.selectedHawk,
    ...ownProps
  };
};

export default connect(mapStateToProps)(HawkForm);