const React = require('react');

var MyComponent = React.createClass({
  render: function() {
    return (
      <h2> My name is Yogi Bear </h2>
    );
  }
});

React.render(<MyComponent /> , document.getElementById('bear'));

//Literally creates an object with class bear,
//and HTML of h1
// var bear = React.createClass({
//   render: function(){
//     return <h1> Hello World </h1>
//   }
// });
//
// React.renderDOM(bear , getElementById('bear'));





// const angular = require('angular');
//
// const bearsApp = angular.module('bearsApp', []);
//
// bearsApp.controller('bearsController', ['$scope', '$http', ($scope, $http) => {
//   $scope.greeting = 'hello world';
//   $scope.bears = [];
//
//   $http.get('http://localhost:3000/api/bears')
//     .then((res) => {
//       console.log('success!');
//       $scope.bears = res.data;
//     }, (err) => {
//       console.log(err);
//     });
//
//   $scope.createBear = function(bear) {
//     $http.post('http://localhost:3000/api/bears', bear)
//       .then((res) => {
//         $scope.bears.push(res.data);
//         $scope.newBear = null;
//       }, (err) => {
//         console.log(err);
//       })
//   }
//
//   $scope.deleteBear = function(bear) {
//     $http.delete('http://localhost:3000/api/bears/' + bear._id)
//       .then((res) => {
//         $scope.bears = $scope.bears.filter((i) => i !== bear);
//       }, (err) => {
//         console.log(err)
//       })
//   }
//
//   $scope.updateBear = function(bear) {
//     $http.put('http://localhost:3000/api/bears/' + bear._id, bear)
//       .then((res) => {
//         $scope.bears[$scope.bears.indexOf(bear)] = bear;
//         bear.editting = false;
//       }, (err) => {
//         console.log(err);
//         bear.editting = false;
//       })
//   }
// }]);
//
//
//
//
//
//
