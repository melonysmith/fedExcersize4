$(document).ready(function() {

    $('#loadDataOneBtn').click(function() {
        $('#dataOneHere').toggle('slow', function() {
        });
    });

    $('#loadDataTwoBtn').click(function() {
        $('#dataTwoHere').toggle('slow', function() {
        });
    });

    $.ajax({
        dataType: "json",
        url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/usastates.php',
        method: "GET",
        dataType: 'text json',
        headers: {
 		    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key": "d6d5052e97msha26bbf207eed7eap16dcbdjsnf01baf31a985"
 	    },
      
    success: function(dataOne) {
        var byStateUSA = dataOne['united_states_stat'];
        // console.log(byStateUSA);
        $("#dataOneHere").append('<p>' + byStateUSA + '</p>');
        }
    });

    $.ajax({
        dataType: "json",
        url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
        method: "GET",
        dataType: 'text json',
        headers: {
 		    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
 		    "x-rapidapi-key": "d6d5052e97msha26bbf207eed7eap16dcbdjsnf01baf31a985"
 	    },
      
    success: function(dataTwo) {
        var byCountry = dataTwo['countries_stat'];
        // console.log(byCountry);
            $("#dataTwoHere").append('<p>' + byCountry + '</p>');
        }
    });

});
