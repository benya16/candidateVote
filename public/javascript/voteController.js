(angular.module('vote').controller('voteCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.selected = [];

    $scope.getCandidates = function () {
        var route = 'candidates';
        $http.get(route).then(function (resp) {
            $scope.people = resp.data;
        });
    }

    $scope.submit = function () {
        angular.forEach($scope.people, function(person) {
            if(person.selected) {
                $scope.addVote(person);
            }
        });
    }
    
    $scope.addVote = function (person) {
        var route = 'vote';
        $http.post(route, person).then(function (resp) {
            // console.log("Response: ", resp);
            $scope.people = $scope.getCandidates();
        });
    }

    $scope.getCandidates();

}]));