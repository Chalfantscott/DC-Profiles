$(function() {

    $.get('https://s3.amazonaws.com/dc-profiles/Students.json', function (data) {
        data.sort(function(){
            return 0.5 - Math.random();
        });
        var finalHTML = renderStudents(data);
        $('.student-container').append(finalHTML);
    });

    

    function renderStudents(studentArray) {
		var finalHTML = "";
		studentArray.forEach(function(currentStudent){
        finalHTML += '<div class="card" style="width: 18rem;">'
        finalHTML += '<img class="card-img-top" src="img/david-3120475_960_720.jpg" alt="Card image cap">'
        finalHTML += '<div class="card-body">'
        finalHTML += '<h5 class="card-title">' + currentStudent.fullName + '</h5>'
        finalHTML += '<p class="card-text">' + currentStudent.email +'</p>'
        finalHTML += '<a href="#" class="btn btn-primary">Learn more</a>'
        finalHTML += '</div>'
        finalHTML += '</div>'
		});
		return finalHTML;
	}

});