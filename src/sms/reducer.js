import { initialState } from './state';

export default function(state = initialState, action) {
  console.log('reducer', state, action);
  switch(action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'ADDLIST':
      const items = state.items;
      items.push({
        labe: 'some label',
        id: action.payload,
      });
      return {
        ...state,
        items,
      };
    default:
      return state;
  }
}