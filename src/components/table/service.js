/* global API */

export default class BikeShopService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  show() {
    return this.$http.get(`${API}/bikes`)
    .then(response => response.data)
    .catch(e => console.log(JSON.stringify(e)));
  }

  delete(bike) {
    return this.$http.delete(`${API}/bikes/${bike.id}`)
      .then(response => response.data)
      .catch(e => console.log(JSON.stringify(e)));
  }

  create(newBike) {
    return this.$http.post(`${API}/bikes`, newBike)
    .then(response => response.data)
    .catch(e => console.log(JSON.stringify(e)));
  }

  update(bike) {
    return this.$http.put(`${API}/bikes/${bike.id}`)
    .then(response => response.data)
    .catch(e => console.log(JSON.stringify(e)));
  }
}
