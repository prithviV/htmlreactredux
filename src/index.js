import "./styles/main.scss";
import ComponentLoader from './plugin/plugin';

global.loadContent = (elementId, componentName) => {
  console.log('loadContent');
  ComponentLoader(document.getElementById(elementId), componentName);
}
