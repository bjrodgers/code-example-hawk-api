import React, { Component, ReactElement } from 'react';
import { connect } from 'react-redux';
import IAppState from '../models/IAppState';
import IHawk from '../models/IHawk';
import '../styles/HawkTable.css';

type HawkTableProps = {
  hawks: IHawk[]
}

class HawkTable extends Component<HawkTableProps> {
  static defaultProps:HawkTableProps = {
    hawks: []
  }

  static mapStateToProps(store: IAppState, ownProps: HawkTableProps) {
    return {
      hawks: store.hawks,
      ...ownProps
    };
  }

  constructor(props:HawkTableProps) {
    super(props);
  }

  render():any {
    let hawkRows = this.props.hawks.map(this._renderHawkRow);

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

  _renderHawkRow(hawk:IHawk): ReactElement {
    return <tr className='data-row' key={hawk.id}>
      <td>{hawk.name}</td>
      <td>{hawk.size}</td>
      <td>{hawk.gender}</td>
      <td>View</td>
    </tr>;
  }
}

export default connect(HawkTable.mapStateToProps)(HawkTable);