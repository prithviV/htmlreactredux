import React, { Suspense } from 'react';
import ReactDom from 'react-dom';
import store from '../sms/store';
import { Provider } from 'react-redux';

store.dispatch({type: "INCREMENT"});
store.dispatch({type: "ADDLIST", payload: 1});

export default (element, component) => {
 if(element && element.tagName) {
  if(element.children.length) {
    ReactDom.unmountComponentAtNode(element);
  }
  const OtherComponent = React.lazy(() => import(`../components/${component}.jsx`));
  ReactDom.render(<div>
    <Suspense fallback={<div>Loading...</div>}>
      <Provider store={store}>
        <OtherComponent />
      </Provider>
    </Suspense>
  </div>, element);
    
 } else {
  console.log(`${element} is not a dom element`);
 }
}