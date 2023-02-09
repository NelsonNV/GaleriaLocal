document.addEventListener("DOMContentLoaded", function() {
//    Ajustes mosaicos
    var elem = document.querySelector('.grid');
    var msnry = new Masonry( elem, {
      // Opciones de Masonry aquí
      itemSelector: '.grid-item',
      columnWidth: '.grid-item.is-one-third',
      percentPosition: true
    });
//   ajustes segun cambio en size de ventana y movimiento por scroll
    window.addEventListener("resize", function() {
    msnry.layout();
  });
  window.addEventListener("scroll", function() {
    msnry.layout();
  });
  
//   Buscador de videos que ajusta aun la ventana
    const input = document.getElementById('search-input');
    const columns = document.querySelectorAll('.grid .grid-item');
  
    input.addEventListener('keyup', function() {
      const value = this.value.toLowerCase();
      columns.forEach(column => {
        if (column.textContent.toLowerCase().includes(value)) {
          column.style.display = 'block';
        } else {
          column.style.display = 'none';
        }
      });
      // ajustar grid-item
      msnry.layout();
    });
  });
  //ajustes de los titulos
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('h3').forEach(function(h3) {
      h3.textContent = h3.textContent.replace(/_/g, ' ');
      h3.textContent = h3.textContent.replace(/(\.mp4|\.mkv|\.webm)$/g, '');
    });
  });