import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default (props) => {
  const [count, setCount] = useState(0);
  const stateCount = useSelector(state => state.count);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      console.log('Unmount');
    }
  }, []);

  return <div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Card inrement {count}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <div className="alert alert-primary" role="alert">
          Total items from Redux state: <span className="badge bg-primary">{stateCount}</span>
        </div>
        <div className="alert alert-success" role="alert">
          Total items from component state <span className="badge bg-primary">{count}</span>
        </div>
        <button onClick={() => {setCount(count+1); dispatch({type: 'INCREMENT'})}} className="btn btn-primary">Increment</button>
      </div>
    </div>
  </div>;
}

// export default class CardComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {count: 0};
//   }
//   setCount () {
//     this.setState({count: this.state.count + 1});
//   }
//   componentDidMount() {
//     console.log('componentDidMount')
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount')
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.count}.</h2>
//         <button onClick={() => {this.setCount()}}>Increment</button>
//       </div>
//     );
//   }
// }