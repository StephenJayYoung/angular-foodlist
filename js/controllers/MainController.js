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




