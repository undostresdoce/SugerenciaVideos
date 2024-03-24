const patronDeModulo = (() => {
  function privada(url, id) {
    console.log(
      `Configurando el elemento con ID "${id.id}" para reproducir video: ${url}`
    );
    id.setAttribute("src", url);
  }
  return {
    publica: (url, id) => privada(url, id),
  };
})();

class Multimedia {
  constructor(url) {
    console.log(`Creando instancia de Multimedia con URL: ${url}`);
    this._url = url;
  }

  get url() {
    console.log(`Obteniendo URL de Multimedia: ${this._url}`);
    return this._url;
  }

  setInicio(tiempo) {
    console.log("Cambios en el inicio del video");
    return `Esto método realiza cambios al inicio del video`;
  }
}

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    console.log(
      `Creando instancia de Reproductor para el elemento con ID: ${id.id}`
    );
    this.id = id;
  }

  playMultimedia() {
    console.log(
      `Reproduciendo multimedia en el elemento con ID: ${this.id.id}`
    );
    patronDeModulo.publica(this._url, this.id);
  }

  // Método para establecer el inicio del video
  setInicio(tiempo) {
    this._url += `&start=${tiempo}`;
    console.log(`URL con tiempo: ${this._url}`);
    return this._url;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const elementos = [
    {
      url: "https://www.youtube.com/embed/qn6rgisZm1M?si=esek4uFYzJnlgMvd",
      id: "musica",
    }, //jorgitodrexler :3
    {
      url: "https://www.youtube.com/embed/tkBiO4p6UPY?si=tM1WUZgBbl4bHJZd",
      id: "peliculas",
    }, //lamemoriainfinita
    {
      url: "https://www.youtube.com/embed/2wmtL-Lj3BQ?si=dQQOypdYnES_ABgn",
      id: "series",
    }, //modernlove
  ];

  // Iteración
  elementos.forEach((elemento) => {
    // Obtener el elemento del DOM por su ID
    const elementoId = document.getElementById(elemento.id);

    // Verificar si el elemento existe
    if (elementoId) {
      console.log(`Elemento "${elemento.id}" encontrado en el DOM.`);

      const reproductor = new Reproductor(elemento.url, elementoId);

      if (elemento.id === "series") {
        reproductor.setInicio("25");
      }

      reproductor.playMultimedia();
    } else {
      console.log(`Elemento "${elemento.id}" no encontrado en el DOM.`);
    }
  });
});
