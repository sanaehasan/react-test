import React from 'react';
import logo from './logo.svg';
import './App.css';

// class Add extends React.Component{

//    render(){
//      return <h1>{this.props.a+this.props.b}</h1>;
//    }
// }

// const Layout = props => {
//   return (
//   <React.Fragment>
//     <header>my header</header>
//     <main>{props.children}</main>
//     <footer>footer</footer>
//   </React.Fragment>
//   );
// }

function App() {

  return (
  <button onClick={()=> console.log(hi)}>tell me a jocke</button>
  );
}

export default App;
