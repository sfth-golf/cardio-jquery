
function initTable() {
    $('.user-message').html('');
    $('.table-body').hide();
    $('.table-body-results').html('');
}

function noResults(keyword) {
    $('.table-head').hide();
    $('.table-body-results').html('');
    $('.feedback').hide();
    $('#alert-message').html('');
    $('.form-field').focus();
    let keywordCapp = keyword.toUpperCase();
    $('#alert-message').html(`
        <strong>No results for ${keywordCapp}</strong>
    `);
    $('#alert').animate({height: "200px"});
    $('#alert').show();
    console.log('no results');
    $('.results-section').show();
}

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function createTable(number, keyword) {
    initTable();
    let currentStore = eval('STORE' + number);
    for (var i=0; i<currentStore.length; i++) {
        $('.table-body-results').append(`
            <tr class="result-row">
                <td class="left">${currentStore[i].code}</td>
                <td class="center">${currentStore[i].description}</td>
                <td class="color clipboard right"><strong>${currentStore[i].acuity}</strong></td>                
            </tr>
        `);
    }
    $('.table-wrapper').animate({ scrollTop: 0 }, "fast");
    let keywordCaps = keyword.toUpperCase();
    $('.feedback').html(`
        <span>Displaying results for: <strong>${keywordCaps}</strong></span>
    `)
    $('.feedback').show();
    $('.feedback').animate({height: "40px"});
    $('.table-head').show();
    setTimeout(function(){
        $('.table-body').show();
    }, 400);
    $('.results-section').css({height: "64px"});
    $('.results-section').show();
    $('.results-section').animate({height: "400px"});
}

function findTable(keyword) {
    
    let resultsFound = 0;

    $('.form-field').val('');

    for (var i=0 ; i < STORE1keywords.length ; i++) {
        if (STORE1keywords[i] === keyword) {
            resultsFound = 1;
            createTable(1, keyword);
        }
    }

    for (var i=0 ; i < STORE2keywords.length ; i++) {
        if (STORE2keywords[i] === keyword) {
            resultsFound = 1;
            createTable(2, keyword);
        }
    }

    for (var i=0 ; i < STORE3keywords.length ; i++) {
        if (STORE3keywords[i] === keyword) {
            resultsFound = 1;
            createTable(3, keyword);
        }
    }

    for (var i=0 ; i < STORE4keywords.length ; i++) {
        if (STORE4keywords[i] === keyword) {
            resultsFound = 1;
            createTable(4, keyword);
        }
    }

    for (var i=0 ; i < STORE5keywords.length ; i++) {
        if (STORE5keywords[i] === keyword) {
            resultsFound = 1;
            createTable(5, keyword);
        }
    }

    for (var i=0 ; i < STORE6keywords.length ; i++) {
        if (STORE6keywords[i] === keyword) {
            resultsFound = 1;
            createTable(6, keyword);
        }
    }

    for (var i=0 ; i < STORE7keywords.length ; i++) {
        if (STORE7keywords[i] === keyword) {
            resultsFound = 1;
            createTable(7, keyword);
        }
    }

    for (var i=0 ; i < STORE8keywords.length ; i++) {
        if (STORE8keywords[i] === keyword) {
            resultsFound = 1;
            createTable(8, keyword);
        }
    }

    for (var i=0 ; i < STORE9keywords.length ; i++) {
        if (STORE9keywords[i] === keyword) {
            resultsFound = 1;
            createTable(9, keyword);
        }
    }

    for (var i=0 ; i < STORE10keywords.length ; i++) {
        if (STORE10keywords[i] === keyword) {
            resultsFound = 1;
            createTable(10, keyword);
        }
    }

    for (var i=0 ; i < STORE11keywords.length ; i++) {
        if (STORE11keywords[i] === keyword) {
            resultsFound = 1;
            createTable(11, keyword);
        }
    }

    for (var i=0 ; i < STORE12keywords.length ; i++) {
        if (STORE12keywords[i] === keyword) {
            resultsFound = 1;
            createTable(12, keyword);
        }
    }

    for (var i=0 ; i < STORE13keywords.length ; i++) {
        if (STORE13keywords[i] === keyword) {
            resultsFound = 1;
            createTable(13, keyword);
        }
    }

    for (var i=0 ; i < STORE14keywords.length ; i++) {
        if (STORE14keywords[i] === keyword) {
            resultsFound = 1;
            createTable(14, keyword);
        }
    }

    for (var i=0 ; i < STORE15keywords.length ; i++) {
        if (STORE15keywords[i] === keyword) {
            resultsFound = 1;
            createTable(15, keyword);
        }
    }

    for (var i=0 ; i < STORE16keywords.length ; i++) {
        if (STORE16keywords[i] === keyword) {
            resultsFound = 1;
            createTable(16, keyword);
        }
    }

    for (var i=0 ; i < STORE17keywords.length ; i++) {
        if (STORE17keywords[i] === keyword) {
            resultsFound = 1;
            createTable(17, keyword);
        }
    }

    for (var i=0 ; i < STORE18keywords.length ; i++) {
        if (STORE18keywords[i] === keyword) {
            resultsFound = 1;
            createTable(18, keyword);
        }
    }

    for (var i=0 ; i < STORE19keywords.length ; i++) {
        if (STORE19keywords[i] === keyword) {
            resultsFound = 1;
            createTable(19, keyword);
        }
    }

    if (resultsFound === 0) {
        noResults(keyword);
    }

    else {
        //
    }
}

function watchSubmit() {
    $('#keyword-search-form').submit(function(event) {
        event.preventDefault();
        $('#alert').hide();
        let keyword = $('.form-field').val().toLowerCase();
        $('.results-section').hide();
        findTable(keyword);
    })
}

function watchClick() {
    $('.clipboard').click(function() {
        console.log('ok');
    });
}

function watchAlertOk() {
    $('.alert-ok').click(function() {
        $('#alert').hide();
        $('.form-field').val('');
        $('.form-field').focus();
    });
}

function initApp() {
    watchSubmit();
    watchClick();
    watchAlertOk();
    console.log('App loaded.')
}

$(initApp);