
function initTable() {
    $('.user-message').html('');
    $('.table-body').hide();
    $('.table-body').html('');
    $('.table-body').html(`
        <tr>
            <th>ICD-10</th>
            <th>Description</th>
            <th>Accuity</th>
        </tr>
    `);
}

function noResults() {
    $('.table-body').html('');
    $('.user-message').html(`
        <p>no results found</p>
    `);
    $('.results-section').show();
}

function createTable(number) {
    initTable();
    let currentStore = eval('STORE' + number);
    for (var i=0; i<currentStore.length; i++) {
        if (currentStore[i].accuity >= 1.4) {
            classColor = "colorify-3"
        }
        else if (currentStore[i].accuity >= 1) {
            classColor = "colorify-2"
        }
        else {
            classColor = "colorify-1"
        }
        $('.table-body').append(`
            <tr>
                <td>${currentStore[i].code}</td>
                <td>${currentStore[i].description}</td>
                <td class="color ${classColor}"><strong>${currentStore[i].accuity}</strong></td>                
            </tr>
        `);
    }
    setTimeout(function(){
        $('.table-body').show();
    }, 400);
    $('.results-section').show();
    $('.results-section').animate({height: "400px"});
}

function findTable(keyword) {
    
    let resultsFound = 0;

    for (var i=0 ; i < STORE1keywords.length ; i++) {
        if (STORE1keywords[i] == keyword) {
            resultsFound = 1;
            createTable(1);
        }
    }

    for (var i=0 ; i < STORE2keywords.length ; i++) {
        if (STORE2keywords[i] == keyword) {
            resultsFound = 1;
            createTable(2);
        }
    }

    if (resultsFound === 0) {
        noResults();
    }

    else {
        //
    }
}

function watchSubmit() {
    $('#keyword-search-form').submit(function(event) {
        event.preventDefault();
        let keyword = $('.form-field').val().toLowerCase();
        $('.results-section').animate({height: "65px"}, '1200ms');
        $('.results-section').hide();
        findTable(keyword);
    })
}

$(watchSubmit);