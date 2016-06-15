export default class BikesController {
  constructor(BikeShopService, $http) {
    'ngInject';
    this.BikeShopService = BikeShopService;
    this.data = [];
    this.$http = $http;
  }

  $onInit() {
    this.BikeShopService.show().then(result => {
      this.data = result;
    });
  }


  delete(bike) {
    this.BikeShopService.delete(bike).then(result => {
      this.data = result;
      this.$onInit();
    });
  }

  create(newBike) {
    this.BikeShopService.create(newBike).then(result => {
      this.data = result;
      this.$onInit();
    });

    const inputValue = document.getElementsByClassName('form-control');
    for (let i = 0; i < inputValue.length; i++) {
      inputValue[i].value = '';
    }
    this.newBike = null;
  }

  update(bike) {
    this.BikeShopService.create(bike).then(result => {
      this.data = result;
      this.$onInit();
    });
    this.activeBike = null;
  }

  edit(bike) {
    this.activeBike = bike;
  }

}
