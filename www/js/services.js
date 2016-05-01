angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('PetService', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var pets = [
    { id: 0, title: 'Libertas', description: 'Red ale' },
    { id: 1, title: 'Segua', description: 'Red ale' },
    { id: 2, title: 'Pelona', description: 'Pale ale' },
    { id: 3, title: 'Lagarta', description: 'Green pale ale' }
  ];

  return {
    all: function() {
      return pets;
    },
    get: function(petId) {
      // Simple index lookup
      return pets[petId];
    }
  }
});