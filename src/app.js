import 'bootstrap/less/bootstrap.less';
import './assets/css/style.css';

import ng from 'angular';
import 'angular-ui-router';
import Components from './components';
import AppConfig from './app.config.js';


ng.module('app', ['ui.router', Components])
  .config(AppConfig);
