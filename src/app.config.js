export default ($stateProvider, $urlRouterProvider) => {
  'ngInject';


  $urlRouterProvider.otherwise('/table');

  $stateProvider
    .state('table', {
      url: '/table',
      template: '<bikes></bikes>'
    })
    .state('cards', {
      url: '/cards',
      template: '<bike></bike>'
    })
    .state('form', {
      url: '/form',
      template: '<add-form></add-form>'
    });
};
