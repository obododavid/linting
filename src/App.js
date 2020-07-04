import React from 'react';
// import { Counter } from './features/counter/Counter';
import TodoWithStatusObject from './components/todo/TodoWithStatus-object';
import TodoWithStatusArray from './components/todo/TodoWithStatus-array';

const App = () => {
	return (
		<div>
			<TodoWithStatusObject />
			<TodoWithStatusArray />
		</div>
	);
};
// function increaseScore(state, props) {
//   return { score: state.score + 1 }
// }
// class user {
//   handleIncreaseScore() {
//     this.setState(increaseScore)
//   }
// }
// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       valueOne: 1,
//       valueTwo: 2,
//       valueThree: ''
//     }
//   }
//   componentDidMount() {
//     this.setState({
//       valueThree: this.state.valueOne + this.state.valueTwo
//     })
//   }
//   increaseValue = () => {
//     this.setState({
//       ...this.state,
//       valueOne: this.state.valueOne + 1
//     }, () => {
//       this.setState({
//         ...this.state,
//         valueThree: this.state.valueOne + this.state.valueTwo
//       })
//     })
//   }
//   render() {
//     return (
//       <div>
//         <p>value 1 = {this.state.valueOne}</p>
//         <p>value 2 = {this.state.valueTwo}</p>
//         <p>value 3 = {this.state.valueThree}</p>
//         <button onClick={this.increaseValue}>Increase</button>
//       </div>
//     )
//   }
// }
export default App;
