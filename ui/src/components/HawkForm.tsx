import React, { Component, ReactElement, FormEvent, ChangeEvent, Dispatch } from 'react';
import { connect } from 'react-redux';
import IAppState from '../models/IAppState';
import IHawk from '../models/IHawk';
import '../styles/HawkForm.css';
import { saveHawkAction } from '../redux/hawkActions';

interface HawkFormOwnProps {
  hawk: IHawk
}

interface HawkFormDispatchProps {
  saveHawk: (hawk:IHawk) => void
}

type HawkFormState = IHawk

type HawkFormProps = HawkFormOwnProps & HawkFormDispatchProps

export class HawkForm extends Component<HawkFormProps, HawkFormState> {
  static defaultProps:HawkFormProps = {
    hawk: {} as IHawk,
    saveHawk: (hawk:IHawk) => {}
  } 

  static mapStateToProps(store: IAppState, ownProps: HawkFormProps): HawkFormProps {
    return {
      ...ownProps,
      hawk: store.selectedHawk
    }
  }

  static mapDispatchToProps(dispatch:any, ownProps: HawkFormProps):HawkFormDispatchProps {
    return {
      saveHawk: (hawk:IHawk) => dispatch(saveHawkAction(hawk))
    }
  }

  constructor(props:HawkFormProps) {
    super(props);
    this.state = {...props.hawk};
  }

  render():ReactElement {
    return <form onSubmit={this._onSubmit.bind(this)}>
      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' onChange={this._onInputValueChange.bind(this)} required />

      <br/>
      <label htmlFor='size'>Size:</label>
      <select className='hawk-select' id='size' defaultValue='' onChange={this._onSelectValueChange.bind(this)} required>
        <option value='' disabled>Select a size...</option>
        <option value='Small'>Small</option>
        <option value='Medium'>Medium</option>
        <option value='Large'>Large</option>
      </select>

      <br/>
      <label htmlFor='gender'>Gender:</label>
      <select className='hawk-select' id='gender' defaultValue='' onChange={this._onSelectValueChange.bind(this)} required>
        <option value='' disabled>Select a gender...</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
      </select>

      <br/>
      <label htmlFor='length'>Length:</label>
      From: <input type='number' min='0' id='lengthBegin' onChange={this._onInputValueChange.bind(this)} required/>
      To: <input type='number' min='0' id='lengthEnd' onChange={this._onInputValueChange.bind(this)} required/>cm

      <br/>
      <label htmlFor='wingspan'>Wingspan:</label>
      From: <input type='number' min='0' id='wingspanBegin' onChange={this._onInputValueChange.bind(this)} required/>
      To: <input type='number' min='0' id='wingspanEnd' onChange={this._onInputValueChange.bind(this)} required/>cm

      <br/>
      <label htmlFor='weight'>Weight:</label>
      From: <input type='number' min='0' id='weightBegin' onChange={this._onInputValueChange.bind(this)} required/>
      To: <input type='number' min='0' id='weightEnd' onChange={this._onInputValueChange.bind(this)} required/>grams

      <br/>
      <label htmlFor='picUrl'>Url:</label>
      <input type='url' id='picUrl' onChange={this._onInputValueChange.bind(this)} required/>

      <br/>
      <label htmlFor='color'>Color Description:</label>
      <textarea id='colorDescription' onChange={this._onTextAreaValueChange.bind(this)} required/>

      <br/>
      <label htmlFor='behavior'>Behavior Description:</label>
      <textarea id='behaviorDescription' onChange={this._onTextAreaValueChange.bind(this)} required/>

      <br/>
      <label htmlFor='habitat'>Habitat Description:</label>
      <textarea id='habitatDescription' onChange={this._onTextAreaValueChange.bind(this)} required/>

      <br/>
      <button type='submit'>Save</button>
    </form>;
  }

  private _onInputValueChange(e:ChangeEvent<HTMLInputElement>):void {
    this.setState({...this.state, ...{[e.target.id]: e.target.value}});
  }

  private _onSelectValueChange(e:ChangeEvent<HTMLSelectElement>):void {
    this.setState({...this.state, ...{[e.target.id]: e.target.value}});
  }

  private _onTextAreaValueChange(e:ChangeEvent<HTMLTextAreaElement>):void {
    this.setState({...this.state, ...{[e.target.id]: e.target.value}});
  }

  private _onSubmit(e:FormEvent<HTMLFormElement>):void {
    console.log(this.state);

    this.props.saveHawk(this.state);

    e.preventDefault();
  }
}

export default connect(HawkForm.mapStateToProps, HawkForm.mapDispatchToProps)(HawkForm);