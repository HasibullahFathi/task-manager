document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialized
    var sidenav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidenav);

    // modal initialized
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    // datepicker initialized
    let datepicker = document.querySelectorAll(".datepicker");
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // select initialized
    let selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);

    // collapsible initialized
    let collapsibles = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapsibles);
  });
