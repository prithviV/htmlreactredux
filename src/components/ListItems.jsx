import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const ListItems = (props) => {
  const [count, setCount] = useState(0);
  const stateItems = useSelector(state => state.items.length);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      console.log('Unmount ListItems');
    }
  }, []);

  const listItems = () => {
    const items = [];
    for (let i = 0;  i < count; i++) {
      items.push(<li key={i} className="list-group-item">
        { i + 1 } Redux state count <span className="badge bg-primary">{stateItems}</span> / Component state count <span className="badge bg-primary">{count}</span>
      </li>);
    }
    return items;
  }

  const dispatchAddItems = () => {
    dispatch({type: 'ADDLIST', payload: count});
  }
  return <div>
    <button onClick={() => {setCount(count+1); dispatchAddItems()}} className="btn btn-success">Add +</button>
    { count > 0 &&
      <ul className="list-group mt-3">
        {listItems()}
      </ul>
    }
    
  </div>;
}

export default ListItems;



// export default class Hello extends React.Component {
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