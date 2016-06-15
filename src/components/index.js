import ng from 'angular';

import Table from './table';
import addForm from './form';
import bikeList from './bikes';

export default ng.module('app.components', [Table, addForm, bikeList])
  .name;
