let myFunction = function(){
    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/buapalm-light_lux/view/",
            data: "text",
            success: function (response) {
                
            },
            fail: function(response){
                console.log(response)
            }
        });
    }, 5000)

    $("#light").on("click", function () {
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/buapalm-light_lux/set/",
            data: {
                // value: $(response).val()
                value: 0
                
            },
            dataType: "json",
            success: function (response) {
                console.log(response)
                if(response === 0){
                    response = 1;
                }else{
                    response = 0;
                }
            }
        });
    });

}

$(myFunction)