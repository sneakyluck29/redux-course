import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'Please type any to-do list.',
      cat: 0
    }
    this.update = this.update.bind(this);
  }
  update(e){
      this.setState({txt: e.type});
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title text={this.state.txt} />
          <div className="Todo-App">
            <form>
              <Widget update={this.update}/>
            </form>
            <Button>I <Heart/> React</Button>
            <div className="Todo-List">
              <ul>
                <li>
                  <input type="checkbox" /> Create Static UI
                </li>
                <li>
                  <input type="checkbox" /> Create Initial State
                </li>
                <li>
                  <input type="checkbox" /> Usde State to Render UI
                </li>
              </ul>
            </div>
          </div>
  
        </header>
      </div>
    );
  }

}
const Title = props => <h2 className="header-title">Title: {props.text}</h2>
const Widget = props => <input type="text" 
          onKeyDown={props.update}
          onChange={props.update}
          onCopy={props.update}
          onFocus={props.update}
          onBlur={props.update}
          onDoubleClick={props.update}
          onPaste={props.update}
          onCut={props.update}
          onTouchStart={props.update}
          onTouchMove={props.update}
          onTouchEnd={props.update}
          />
const Button = props => <button>{props.children}</button>
class Heart extends React.Component{
  render(){
    return <span>&hearts;</span>
  }
}
Title.propTypes = {
  text(props, propName, component){
      if(!(propName in props)){
        return new Error (`missing ${propName}`)
      }
      if(props[propName].length < 6){
        return new Error (`${propName} is too short`);
      }
  }
}

export default App;
