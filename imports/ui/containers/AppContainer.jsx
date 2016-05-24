import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

// creates a container around the app conponenet
// & feeds in all the data sources
export default createContainer(() => {
  return {   
  };
}, App);
