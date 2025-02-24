var waveBtn = (function () {
  'use strict';
  var btn = document.querySelectorAll('.wave'),
      tab = document.querySelector('.tab-bar'),
      indicator = document.querySelector('.indicator'),
      indi = 0;
  indicator.style.marginLeft = indi + 'px';

  for(var i = 0; i < btn.length; i++) {
    btn[i].onmousedown = function (e) {
      var newRound = document.createElement('div'),x,y;

      newRound.className = 'cercle';
      this.appendChild(newRound);

      x = e.pageX - this.offsetLeft;
      y = e.pageY - this.offsetTop;

      newRound.style.left = x + "px";
      newRound.style.top = y + "px";
      newRound.className += " anim";

      indicator.style.marginLeft = indi + (this.dataset.num-1) * 241.5 + 'px';

      setTimeout(function() {
        newRound.remove();
      }, 1200);
    };
  }
}());

function tab1(){
  document.getElementById("contenido").innerHTML = `
  <h1>La mejor combinación para crear una página web</h1>
  <h2>React + Vite + Python + Chakra UI v2 </h2>
  <p>En el mundo del desarrollo web moderno, la combinación de React, Vite, Python y Chakra UI v2 se ha convertido en una 
    de las opciones más eficientes para construir aplicaciones rápidas, escalables y con una excelente experiencia de usuario. 
    En este artículo, exploraremos las razones por las cuales esta tecnología es una elección inteligente para el desarrollo web.
  </p>
  <h2>React</h2>
  <div class="div-img">
    <img src="../img/React.png" alt="">
  </div>
  <p>React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de 
    facilitar el desarrollo de aplicaciones en una sola página. Es mantenido por Facebook y la comunidad de software libre.
    En el proyecto hay más de mil desarrolladores libres.</p>
  <h3>Características de React</h3>
  <ul>
    <li><h4>Permite construir interfaces de usuario a partir de componentes individuales</h4></li>
    <li><h4>Utiliza JSX, una extensión de JavaScript que facilita la creación de componentes</h4></li>
    <li><h4>Permite añadir interactividad a los componentes</h4></li>
    <li><h4>Permite combinar componentes escritos por diferentes personas</h4></li>
    <li><h4>Minimiza los errores que ocurren cuando los desarrolladores construyen interfaces de usuario</h4></li>
  </ul> 
  <h3>Usos de React</h3>
  <ul>
    <li><h4>Se puede usar para desarrollar aplicaciones web, móviles, de realidad virtual, entre otras  </h4></li>
    <li><h4>Se puede utilizar en conjunto con ReactDOM para desarrollar para la web </h4></li>
    <li><h4>Se puede utilizar con React Native para desarrollar aplicaciones móviles para iOS y Android</h4></li>
    <li><h4> Se puede utilizar con React 360 para crear aplicaciones de realidad virtual</h4></li>
  </ul>
  <h3>Ventajas de React</h3>
  <ul>
    <li><h4>Permite crear interfaces de usuario dinámicas y sin problemas de actualización</h4></li>
    <li><h4>Permite crear aplicaciones con un rendimiento y una velocidad de carga más rápida que el promedio</h4></li>
    <li><h4>Permite personalizar la configuración y el código</h4></li>
  </ul>

  <h2>Vite</h2>
  <div class="div-img">
    <img src="../img/vite.svg" alt="">
  </div>
  <p>Vite es un servidor de desarrollo local escrito por Evan You, el creador de Vue.js, y utilizado de forma
     predeterminada por Vue y para las plantillas de proyectos de React. 
    Tiene soporte para TypeScript y JSX. Utiliza Rollup y esbuild internamente para agrupar.</p>
`;

}

function tab2(){
  document.getElementById("contenido").innerHTML=""
}
function tab3(){
  document.getElementById("contenido").innerHTML=""
}
function tab4(){
  document.getElementById("contenido").innerHTML=""
}
function tab5(){
  document.getElementById("contenido").innerHTML=""
}
function tab6(){
  document.getElementById("contenido").innerHTML=""
}
