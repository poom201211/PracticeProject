let myFunction = function(){
    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.th:1515",
            data: "text",
            success: function (response) {

            },
            fail: function(response){
                console.log(response)
            }
        });
    }, 5000)

    

}

$(myFunction)