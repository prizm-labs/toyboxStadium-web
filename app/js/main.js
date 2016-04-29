import angular from 'angular';

//import 'firebase';

import 'angularfire';

// angular modules -- looking for the source folder so you must specify the folder name you are trying to access.
import constants from './constants';
import onConfig  from './on_config';
import onRun     from './on_run';
import 'angular-route';
import 'angular-ui-router';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';



// create and bootstrap application also these are injected modules -- that also need to be require by the parent object.
const requires = [
	'ngRoute',
  'firebase',
  'ui.router',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', constants);

angular.module('app').config(onConfig);

angular.module('app').run(onRun);

angular.bootstrap(document, ['app'], {
  strictDi: true
});
