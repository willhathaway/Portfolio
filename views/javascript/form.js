$(document).ready(function() {

    $("#submitBtn").on("click", function(event) {

        event.preventDefault();

        var messageData = {
            author: $("#name").val().trim(),
            body: $("#email").val().trim(),
            message: $("#message").val().trim()
          };

        $.post("/api/message", messageData, function(data, status) {
            alert("Data: " + data + "\nStatus: " + status);
        })


    })

})