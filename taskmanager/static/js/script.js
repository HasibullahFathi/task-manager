document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialized
    var sidenav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidenav);
    
    // modal initialized
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
  });
