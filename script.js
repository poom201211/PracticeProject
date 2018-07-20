let storeLight = 0
let storeAir = 0
let storeDoor = 0
let storeBell = 0
let myFunction = function () {
    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/buapalm-light_lux/view/",
            data: "text",
            success: function (response) {
                storeLight = response
                $('#lightstate').html(`<h5>Light state: ${response} lux</h5>`)
            },
            fail: function (response) {
                console.log(response)

            }
        });

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/buapalm-sound/view/",
            data: "text",
            success: function (response) {
                storeBell = response
                let word = ""
                if (storeBell === 1) {
                    word = "off"
                } else if (storeBell === 0) {
                    word = "on"
                }
                $('#buzzerstate').html(`<h5>Buzzer state: ${word}</h5>`)
            },
            fail: function (response) {
                console.log(response)

            }
        });

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/buapalm-door/view/",
            data: "text",
            success: function (response) {
                storeDoor = response
                $('#peoplestate').html(`<h5>People state: ${response}</h5>`)

            },
            fail: function (response) {
                console.log(response)

            }
        });

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/buapalm-openair/view/",
            data: "text",
            success: function (response) {
                storeAir = response
                $('#temperaturestate').html(`<h5>Temperature state: ${response}</h5>`)

            },
            fail: function (response) {
                console.log(response)

            }
        });
    }, 5000)

    $("#light").on("click", function () {
        let state = 0
        if (storeLight === 0) {
            state = 1;
        } else {
            state = 0;
        }
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/buapalm-light_lux/set/",
            data: {
                value: state
            },
        });
    });

    $("#bell").on("click", function () {
        let state = 0
        if (storeBell === 0) {
            state = 1;
        } else {
            state = 0;
        }
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/buapalm-sound/set/",
            data: {
                value: state
            },
        });
    });

    $("#door").on("click", function () {
        let state = 0
        if (storeDoor === 0) {
            state = 1;
        } else {
            state = 0;
        }
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/buapalm-door/set/",
            data: {
                value: state
            },
        });
    });

    $("#openair").on("click", function () {
        let state = 0
        if (storeAir === 0) {
            state = 1;
        } else {
            state = 0;
        }
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/buapalm-openair/set/",
            data: {
                value: state
            },
        });
    });

}

$(myFunction)