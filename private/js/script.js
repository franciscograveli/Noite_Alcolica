window.addEventListener('DOMContentLoaded', function() {
    var garrafa = document.getElementById('garrafa');
    garrafa.classList.add('animate');
  
    // adiciona um evento de clique na garrafa
    var bottle = document.querySelector('.bottle');
    bottle.addEventListener('click', function() {
      // move o copo para cima
      var glass = document.querySelector('.glass');
      glass.style.top = '200px';
    });
  });
  