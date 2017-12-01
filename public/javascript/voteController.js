(angular.module('vote').controller('voteCtrl', ['$scope', function($scope) {

    console.log("Inside vote controller");

    $scope.people = [{name: 'Tyler'}, {name: 'Ben C'}, {name: 'Ben W'}];

    $scope.selected = [];

    $scope.submit = function () {
        angular.forEach($scope.people, function(person) {
            if(person.selected) {
                console.log("Person selected: ", person);
                $scope.addVote(person);
            }
        });
    }
    
    $scope.addVote = function (person) {
        var route = 'vote';
        $http.post(route, person).then(function (resp) {
            console.log("Response: ", resp);
        });
    }

}]));