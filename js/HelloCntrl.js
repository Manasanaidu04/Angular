var app = angular.module("MyApp", []);

app.controller("bindingCntrl", function ($http) {
    this.name = "Manasa";
    this.notes = [
        {
            'name': 'sa'
        },
        {
            'name': 'ri'
        },
        {
            'name': 'ga'
        },
        {
            'name': 'ma'
        },
    ];

    this.getNotes = function () {
        $http.get('http://localhost:8000/api/notes').
            then(function (result) {
                this.notes = result.data;
            }, function error(result){
                this.name = result;
            })
    };

});
 

