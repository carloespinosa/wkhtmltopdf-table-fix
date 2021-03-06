/*Carlo Espinosa 2012*/

/*global $, jQuery*/
var tableSplitter = {
  split: function (tableClass, perPage, theadRepeat) {
    "use strict";
    var pages, mainTable;
    $('table.' + tableClass).each(function (i, table) {
      pages = Math.ceil($('tbody tr').length / perPage);
      mainTable = $(table);
      if (pages === 1) {
        return;
      }
      for (var p = 1; p <= pages; p++) {
        var copy = mainTable.clone();
        if (!theadRepeat) {
          copy.find('thead:first').css('visibility', 'hidden');
        }
        $('tbody tr', mainTable).each(function(i, tr) {
          if (i >= perPage) {
            $(tr).remove();
          }
        });
        $('tbody tr', copy).each(function(i, tr) {
          if (i < perPage) {
            $(tr).remove();
          }
        });
        if (p < pages) {
          copy.insertAfter(mainTable);
        }
        copy.css('page-break-before', 'always');
        mainTable = copy;
      }
    });
  }
};