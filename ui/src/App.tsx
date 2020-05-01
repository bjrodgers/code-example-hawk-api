import React, { Component } from 'react';
import HawkForm from './components/HawkForm';
import HawkTable from './components/HawkTable';
import './styles/App.css';
import './styles/global.css';

type AppProps = {}

export default class App extends Component<AppProps> {
  render() {
     return <div className='App v-flex'>
      <div className='h-flex'>
        <input className='filter-text'></input>
        <button className='filter-button'>Filter</button>
        <button className='add-hawk-button'>Add Hawk</button>
      </div>
      <div className='v-flex'>
        <HawkTable/>
        <HawkForm/>
      </div>

    </div>
  }
}
