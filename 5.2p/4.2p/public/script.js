$(document).ready(function(){
    // Function to fetch and display data from the DB
    const displayData = () => {
        $.get('/api/projects', (response) => {
            if (response.statusCode === 200) {
                $('#userList').empty();
                response.data.forEach(user => {
                    $('#userList').append(`<li class="collection-item">${user.first_name} ${user.last_name}</li>`);
                });
            }
        });
    };

    // Handle form submission
    $('#userForm').submit((e) => {
        e.preventDefault();
        let firstName = $('#first_name').val();
        let lastName = $('#last_name').val();
        
        let formData = {
            first_name: firstName,
            last_name: lastName
        };

        $.post('/api/projects', formData, (response) => {
            if (response.statusCode === 201) {
                alert('Data saved to MongoDB!');
                displayData(); // Refresh the list
            }
        });
    });

    // Initial load
    displayData();
});