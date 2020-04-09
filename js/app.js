$(document).ready(function() {

    // $('#loadDataOneBtn').click(function() {
    //     $('#dataOneHere').toggle('slow', function() {
    //     });
    // });

    // $('#loadDataTwoBtn').click(function() {
    //     $('#dataTwoHere').toggle('slow', function() {
    //     });
    // });

    $.ajax({
        url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/united_states_cases.php',
        method: "GET",
        dataType: 'text json',
        headers: {
 		    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "d6d5052e97msha26bbf207eed7eap16dcbdjsnf01baf31a985"
 	    },
      
    success: function(dataOne) {
        var byStateUSA = dataOne['united_states_stat'];
        var states = byStateUSA.map(function(state) { 
            return state.state;
        });
        states = states.filter(Boolean);
        var filteredStates = states.filter(function(state, index) {
            return states.indexOf(state) === index;
        });

        // $("#dataOneHere").append('<p>' + filteredStates.join(' -- ') + '</p>');
        }
    });

    $.ajax({
        url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php',
        method: "GET",
        dataType: 'text json',
        headers: {
 		    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
 		    "x-rapidapi-key": "d6d5052e97msha26bbf207eed7eap16dcbdjsnf01baf31a985"
 	    },
      
        success: function(dataTwo) {
            var totalCases = dataTwo['total_cases'];
    
            $("#dataTwoHere").append('<p>' + totalCases + '</p>');
        }
    });

    setInterval(function() {
        location.reload('#dataOneHere');
        location.reload('#dataTwoHere');
      }, 10000);

});

$(document).ready(function() {
    
    var ctx1 = document.getElementById('barChart');

    var barChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Oregon', 'Washington', 'Illinois', 'California', 'Massachusettes', 'Arizona', 'Wisconsin'],
            datasets: [{
                label: 'Cases by US State',
                data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                backgroundColor: [
                    'rgba(0, 0, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 0, 0, 0.5)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })

    var ctx2 = document.getElementById('otherChart');

    var otherChart = new Chart(ctx2, {
        type: 'horizontalBar',
        data: {
            labels: ['Total Cases'],
            datasets: [{
                label: 'Total Cases Worldwide',
                data: [100],
                backgroundColor: [
                    'rgba(0, 0, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 0, 0, 0.5)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })

});
