(angular.module('vote').controller('adminCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.submit = function () {
        var route = 'candidate';
        var newCandidate = {
            name: $scope.candidateName,
            vote: 0
        }

        console.log(newCandidate);

        $http.post(route, newCandidate).then(function (resp) {
            // console.log("Response: ", resp);
        });

        $scope.candidateName = '';

    }

}]));