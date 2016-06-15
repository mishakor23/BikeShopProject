import ng from 'angular';

import Component from './component';
import BikeShopService from './service';

export default ng.module('app.components.bike', [])
  .service('BikeShopService', BikeShopService)
  .component('bike', Component)
  .name;
