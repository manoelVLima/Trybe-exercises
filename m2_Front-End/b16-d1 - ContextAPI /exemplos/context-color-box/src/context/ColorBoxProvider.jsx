import { Component } from "react";
import ColorBoxContext from "./ColorBoxContext";

class ColorBoxProvider extends Component{
  constructor(props) {
    super(props)

    this.state = {
      colors: ['red','blue','yellow'],
      colorIndex: 0,
      change: this.changeColor,
    }
  }

  changeColor = () => {
    const {colors, colorIndex} = this.state;

    if(colorIndex <= colors.length -1) {
      this.setState((prevState) => ({
        colorIndex: prevState.colorIndex + 1
      }))
    } else {
      this.setState({
        colorIndex: 0,
      })
    }
    console.log(colorIndex);

  }
  render() {
    const { Provider } = ColorBoxContext;
    const { children } = this.props;
    return (
      <Provider value={{...this.state,}}>
        {children}
      </Provider>
    )
  }
}

export default ColorBoxProvider;