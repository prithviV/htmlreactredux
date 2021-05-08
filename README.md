# htmlreactredux

This simple html application demonstrates how a html page can load React components(outside React Ecossytem) and use Redux.

> React injecting components into DOM outside react ecosystem is considered to be an `anti-pattern` and should be carefully considered before implementing this approach.

1. Webpack 
2. HTML pages (using default ejs templates)
3. React to load components in target elements in an html page(s)
4. Redux to show that state management can be implemented in a non React Ecosystem
5. Boostrap for styling the pages, react components and more ()

Getting started
```javascript
npm i
npm run serve
```
runs at localhost:3000

Unfortunately no tests are added for this repo as this was experimental

---

## React Ecosystem:
The mounting /unmounting is taken care of by the framework ecosystem

## Non React Ecosystem:
The mounting/unmounting is up to the developer to handle and avoid memory leaks. [Read more...](https://reactjs.org/blog/2015/10/01/react-render-and-top-level-api.html)

