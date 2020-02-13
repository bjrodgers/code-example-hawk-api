import React, { Component } from 'react';
import './HawkTable.css';
import IAppState from '../models/IAppState';
import IHawk from '../models/IHawk';
import { connect } from 'react-redux';

type HawkTableProps = {
  hawks: IHawk[]
}

class HawkTable extends Component<HawkTableProps> {
  constructor(props:HawkTableProps) {
    super(props);
    console.log('HawkTable::constructor')
  }

  static defaultProps:HawkTableProps = {
    hawks: []
  }

  render() {
    console.log('HawkTable::render');

    let hawkRows = this.props.hawks.map(_renderHawkRow);

    return <table className='hawk-table'>
    <thead>
      <tr className='header-row'>
        <th>Name</th>
        <th>Size</th>
        <th>Gender</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {hawkRows}
    </tbody>
  </table>
  }
}

function _renderHawkRow(hawk:IHawk) {
  return <tr className='data-row' key='{hawk.id}'>
    <td>{hawk.name}</td>
    <td>{hawk.size}</td>
    <td>{hawk.gender}</td>
    <td>View</td>
  </tr>;
}

function mapStateToProps(store: IAppState, ownProps: HawkTableProps) {
  return {
    hawks: store.hawks,
    ...ownProps
  };
};

export default connect(mapStateToProps)(HawkTable);