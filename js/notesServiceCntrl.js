var app = angular.module("MyApp", []);

app.service("notesService",function($http){
    return{
        getNotes: function(){
            $http.get('http://localhost:8000/api/notes');
        }
    }
});