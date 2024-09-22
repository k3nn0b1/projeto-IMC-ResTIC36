
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (!peso || !altura) {
        document.getElementById('resultado-imc').textContent = 'Por favor, insira valores válidos.';
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    let categoria;

    if (imc < 18.5) {
        categoria = 'Baixo peso';
    } else if (imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc < 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

    document.getElementById('resultado-imc').textContent = `Seu IMC é ${imc} (${categoria}).`;
}

function mostrarSeccao(id) {
  const secoes = document.querySelectorAll('section');
  secoes.forEach(secao => {
      if (secao.id === id) {
          secao.style.display = 'block';
      } else {
          secao.style.display = 'none'; 
      }
  });
}


document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault(); 
      const secaoId = this.getAttribute('href').slice(1); 
      mostrarSeccao(secaoId);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  mostrarSeccao('inicio');
});
