import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css'

// const Task = (value) => {
//   return (
//     <li>{value}</li>
//   );
// }
// const tasks = ['Acorda','Lavar o rosto','Tomar Café','Ligar o computador'];
      // <ol>
      //   {tasks.map((task) => Task(task))} 
      // </ol>
class App extends React.Component {
  render() {
    return <div>
    <Header/>
    <Content/>
    <Footer/>
    </div> 
  }
}

export default App;
