$(document).ready(function () {
  setTimeout(function () {
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({ overflow: "visible" });
  }, 600);
});

function start() {
  var btnYes = document.querySelector(".btn--yes");
  var btnNo = document.querySelector(".btn--no");
  var popup = document.querySelector(".modal");
  var overlay = document.querySelector(".modal__overlay");
  var btnClose = document.querySelector(".btn-close");
  var headerModar = document.querySelector(".heading-name");
  var desccriptionModar = document.querySelector(".message");

  window.onload = () => {
    document.querySelector(".music").play();
    document.querySelector(".music").volume = 1;
  };
  window.onkeypress = (e) => {
    if (e.charCode === 32) {
      document.querySelector(".music").play();
    }
  };

  document.querySelector(".header").innerHTML = `
        <h1 class="header-name">
            ${CONFIGDATA.titleHeader}
            <i class="ti-heart"></i>
        </h1>
        <p class="header-description">${CONFIGDATA.descriptionHeader}
            <i class="ti-face-smile"></i>
        </p>`;
  btnYes.innerHTML = `<i class="ti-thumb-up"></i> ${CONFIGDATA.buttonYes}`;
  btnNo.innerHTML = `<i class="ti-thumb-down"></i> ${CONFIGDATA.buttonNo}`;
  headerModar.innerHTML = `${CONFIGDATA.titleModar} <i class="ti-heart"></i>`;
  desccriptionModar.innerHTML = `${CONFIGDATA.descriptionModar}`;

  btnYes.onclick = () => {
    popup.classList.add("show");
  };
  btnClose.onclick = () => {
    popup.classList.remove("show");
  };

  overlay.onclick = () => {
    popup.classList.remove("show");
  };

  // Guardamos la posición inicial del botón al cargar la página
  let initialX = btnNo.offsetLeft;
  let initialY = btnNo.offsetTop;
  console.log(initialX, initialY);
  btnNo.onmouseover = () => {
      let moveRange = 500; // Rango de movimiento en píxeles

      // Generar nuevas posiciones relativas al punto de inicio
      let newX = initialX + (Math.random() * moveRange - moveRange / 2);
      let newY = initialY + (Math.random() * moveRange - moveRange / 2);

      // Asegurar que no se salga de la pantalla
      let screenWidth = window.innerWidth;
      let screenHeight = window.innerHeight;
      let btnWidth = btnNo.offsetWidth;
      let btnHeight = btnNo.offsetHeight;

      newX = Math.max(10, Math.min(newX, screenWidth - btnWidth - 10));
      newY = Math.max(10, Math.min(newY, screenHeight - btnHeight - 10));

      // Aplicar nueva posición sin perder la referencia inicial
      btnNo.style.position = "absolute";
      btnNo.style.left = `${newX}px`;
      btnNo.style.top = `${newY}px`;
  };

}

start();
