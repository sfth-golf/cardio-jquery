"use strict";

function initTable() {
  $('.user-message').html('');
  $('.table-body').css('visibility','hidden');
  $('.table-body-results').html('');
}

function noResults(keyword) {
  $('.table-head').css('visibility','hidden');
  $('.table-body-results').html('');
  $('.feedback').css({
    height: "0px"
  });
  $('.feedback').css('visibility','hidden');
  $('#alert-message').html('');
  $('.form-field').focus();
  var keywordCapp = keyword.toUpperCase();
  $('#alert-message').html("\n        <strong>No results for \"".concat(keywordCapp, "\"</strong>\n    "));
  $('#alert').css('visibility','visible');
  $('#alert').animate({
    "max-height": "200px"
  });
  $('.results-section').css('visibility','visible');
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
  var currentStore = eval('STORE' + number);

  for (var i = 0; i < currentStore.length; i++) {
    $('.table-body-results').append("\n            <tr class=\"result-row\">\n                <td class=\"left\">".concat(currentStore[i].code, "</td>\n                <td class=\"center\">").concat(currentStore[i].description, "</td>\n                <td class=\"color clipboard right\"><strong>").concat(currentStore[i].acuity, "</strong></td>                \n            </tr>\n        "));
  }
  $('#alert').css({
    "max-height": "0px"
  });
  $('.table-wrapper').animate({
    scrollTop: 0
  }, "fast");
  var keywordCaps = keyword.toUpperCase();
  $('.feedback').html("\n        <span>Displaying <strong>".concat(currentStore.length, "</strong> results for: \"<strong>").concat(keywordCaps, "</strong>\"</span>\n    "));  $('.feedback').css('visibility', 'visible');
  $('.feedback').animate({height: "40px"});
  $('.table-head').css('visibility','visible');
  setTimeout(function () {
    $('.table-body').css('visibility','visible');
  }, 400);
  $('.results-section').css({
    "max-height": "64px"
  });
  $('.results-section').css('visibility','visible');
  $('.results-section').animate({
    "max-height": "500px"
  });
  $('.form-field').focus();
}

function findTable(keyword) {
  var resultsFound = 0;
  $('.form-field').val('');

  for (var i = 0; i < STORE1keywords.length; i++) {
    if (STORE1keywords[i] === keyword) {
      resultsFound = 1;
      createTable(1, keyword);
    }
  }

  for (var i = 0; i < STORE2keywords.length; i++) {
    if (STORE2keywords[i] === keyword) {
      resultsFound = 1;
      createTable(2, keyword);
    }
  }

  for (var i = 0; i < STORE3keywords.length; i++) {
    if (STORE3keywords[i] === keyword) {
      resultsFound = 1;
      createTable(3, keyword);
    }
  }

  for (var i = 0; i < STORE4keywords.length; i++) {
    if (STORE4keywords[i] === keyword) {
      resultsFound = 1;
      createTable(4, keyword);
    }
  }

  for (var i = 0; i < STORE5keywords.length; i++) {
    if (STORE5keywords[i] === keyword) {
      resultsFound = 1;
      createTable(5, keyword);
    }
  }

  for (var i = 0; i < STORE6keywords.length; i++) {
    if (STORE6keywords[i] === keyword) {
      resultsFound = 1;
      createTable(6, keyword);
    }
  }

  for (var i = 0; i < STORE7keywords.length; i++) {
    if (STORE7keywords[i] === keyword) {
      resultsFound = 1;
      createTable(7, keyword);
    }
  }

  for (var i = 0; i < STORE8keywords.length; i++) {
    if (STORE8keywords[i] === keyword) {
      resultsFound = 1;
      createTable(8, keyword);
    }
  }

  for (var i = 0; i < STORE9keywords.length; i++) {
    if (STORE9keywords[i] === keyword) {
      resultsFound = 1;
      createTable(9, keyword);
    }
  }

  for (var i = 0; i < STORE10keywords.length; i++) {
    if (STORE10keywords[i] === keyword) {
      resultsFound = 1;
      createTable(10, keyword);
    }
  }

  for (var i = 0; i < STORE11keywords.length; i++) {
    if (STORE11keywords[i] === keyword) {
      resultsFound = 1;
      createTable(11, keyword);
    }
  }

  for (var i = 0; i < STORE12keywords.length; i++) {
    if (STORE12keywords[i] === keyword) {
      resultsFound = 1;
      createTable(12, keyword);
    }
  }

  for (var i = 0; i < STORE13keywords.length; i++) {
    if (STORE13keywords[i] === keyword) {
      resultsFound = 1;
      createTable(13, keyword);
    }
  }

  for (var i = 0; i < STORE14keywords.length; i++) {
    if (STORE14keywords[i] === keyword) {
      resultsFound = 1;
      createTable(14, keyword);
    }
  }

  for (var i = 0; i < STORE15keywords.length; i++) {
    if (STORE15keywords[i] === keyword) {
      resultsFound = 1;
      createTable(15, keyword);
    }
  }

  for (var i = 0; i < STORE16keywords.length; i++) {
    if (STORE16keywords[i] === keyword) {
      resultsFound = 1;
      createTable(16, keyword);
    }
  }

  for (var i = 0; i < STORE17keywords.length; i++) {
    if (STORE17keywords[i] === keyword) {
      resultsFound = 1;
      createTable(17, keyword);
    }
  }

  for (var i = 0; i < STORE18keywords.length; i++) {
    if (STORE18keywords[i] === keyword) {
      resultsFound = 1;
      createTable(18, keyword);
    }
  }

  for (var i = 0; i < STORE19keywords.length; i++) {
    if (STORE19keywords[i] === keyword) {
      resultsFound = 1;
      createTable(19, keyword);
    }
  }

  if (resultsFound === 0) {
    noResults(keyword);
  } else {//
  }
}

function watchSubmit() {
  $('#keyword-search-form').submit(function (event) {
    event.preventDefault();
    $('.results-section').css({
      "max-height": "0px"
    });
    $('#alert').css('visibility','hidden');
    var keyword = $('.form-field').val().toLowerCase();
    $('.results-section').css('visibility','hidden');
    findTable(keyword);
  });
}

function watchClick() {
  $('.clipboard').click(function () {
    //
  });
}

function watchAlertOk() {
  $('.alert-ok').click(function () {
    $('#alert').animate({
      "max-height": "0px"
    });
    $('.form-field').val('');
    $('.form-field').focus();
    setTimeout(function () {
      $('#alert').css('visibility','hidden');
    }, 300);
  });
}

function initApp() {
  watchSubmit();
  watchClick();
  watchAlertOk();
  console.log('App loaded.');
}

$(initApp);