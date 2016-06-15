import ng from 'angular';

import Component from './component';
import BikeShopService from './service';

export default ng.module('app.components.bikes', [])
  .service('BikeShopService', BikeShopService)
  .component('bikes', Component)
  .name;
