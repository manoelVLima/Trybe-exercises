// ./App.js
import './App.css';
import React from 'react';
import ColorBox from './components/ColorBox';
import ColorBoxProvider from './context/ColorBoxProvider.jsx'

class App extends React.Component {
  render() {
    return (
      <ColorBoxProvider>
        <ColorBox />
      </ColorBoxProvider>
    );
  }
}
export default App;
