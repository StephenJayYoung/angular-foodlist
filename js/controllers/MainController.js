app.controller('MainController', ['$scope', function($scope) {
  $scope.food = [
    {
      icon: 'img/weights-image.jpeg',
      info: 'Pushups',
      details:  function(){
        alert('this was gud');
      }
    },
    {
      icon: 'img/weights-image.jpeg',
      info: 'Squats',
      details:  function(){
        alert('this was more gud');
      }
    },
    {
      icon: 'img/weights-image.jpeg',
      info: 'Pullups',
      details:  function(){
        alert('this was more gudder');
      }
    },
    {
      icon: 'img/weights-image.jpeg',
      info: 'Rows',
      details:  function(){
        alert('this was more gudderest');
      }
    },
    {
      icon: 'img/weights-image.jpeg',
      info: 'Lunges',
      details:  function(){
        alert('this was the mostest gud');
      }
    },
    {
      icon: 'img/weights-image.jpeg',
      info: 'Step Ups',
      details:  function(){
        alert('this was mostest guggest');
      }
    },
    {
      icon: 'img/weights-image.jpeg',
      info: 'Sit Ups',
       details:  function(){
        alert('this was the best');
      }
    }
  ],
$scope.test = function(foods) {
  console.log(food.details);
}


// $scope.popup = function(){  
// 	$window.alert("food.details");
// };
//   $scope.decrease = function(index){  
// 	$scope.food[index].count -= 1;
// }
}]);

// app.controller('AppCtrl', function($scope, $mdDialog) {
//   $scope.status = '  ';
//   $scope.customFullscreen = false;

//   $scope.showAdvanced = function(ev) {
//     $mdDialog.show({
//       controller: DialogController,
//       templateUrl: 'dialog1.tmpl.html',
//       parent: angular.element(document.body),
//       targetEvent: ev,
//       clickOutsideToClose:true,
//       fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
//     })
//     .then(function(answer) {
//       $scope.status = 'You said the information was "' + answer + '".';
//     }, function() {
//       $scope.status = 'You cancelled the dialog.';
//     });
//   };

//   function DialogController($scope, $mdDialog) {
//     $scope.hide = function() {
//       $mdDialog.hide();
//     };

//     $scope.cancel = function() {
//       $mdDialog.cancel();
//     };

//     $scope.answer = function(answer) {
//       $mdDialog.hide(answer);
//     };
//   }
// });





