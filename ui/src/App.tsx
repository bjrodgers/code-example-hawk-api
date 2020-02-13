import React, { Component } from 'react';
import './App.css';
import HawkTable from './components/HawkTable';

type AppProps = {}

export default class App extends Component<AppProps> {
  static defaultProps = {}

  render() {
     return <div className='App v-flex'>
      <button className='add-hawk-button'>Add Hawk</button>
      <div className='h-flex'>
        <input className='filter-text'></input>
        <button className='filter-button'>Filter</button>
      </div>
      <div className='h-flex'>
        <HawkTable/>
      </div>
    </div>
  }
}

