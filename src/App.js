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

class App extends React.Component {

  constructor(){
    super();
    this.state ={joke:null};
   
    this.onTellJoke=this.onTellJoke.bind(this);
  }

   
 onTellJoke(){
    fetch('https://icanhazdadjoke.com/',{
      method: 'GET',
        headers: {
          Accept: 'application/json'
        }
    })
    .then(response=> response.json())
    .then(data =>{
       this.setState({joke:data.joke});
      console.log('joke  :',this.joke);
    });
      //data=>console.log(data));
  }

render(){
  return (
    <div>
  <button onClick={this.onTellJoke}>tell me a joke</button>
  <p>{this.state.joke}</p>
  </div>
  );
};}

export default App;
