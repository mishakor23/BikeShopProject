import ng from 'angular';

import Component from './component';
import BikeShopService from './service';

export default ng.module('app.components.addForm', [])
  .service('BikeShopService', BikeShopService)
  .component('addForm', Component)
  .name;
