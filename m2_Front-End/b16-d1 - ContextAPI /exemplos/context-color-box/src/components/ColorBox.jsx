// ./components/ColorBox.js
import React from 'react';
import '../styles/box.css';
import ColorBoxContext from '../context/ColorBoxContext';
class ColorBox extends React.Component {
  render() {
    const {change, colors, colorIndex} = this.context;
    console.log(colors);
    console.log(colorIndex);
    return(
      <button
        onClick={change}
        type="button"
        className="box"
        style={ { backgroundColor: colors[colorIndex] } }
      >
        Click me to change my color!
      </button>
    )
  }
}

ColorBox.contextType = ColorBoxContext;
export default ColorBox;