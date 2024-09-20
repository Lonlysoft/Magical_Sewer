//arquivo usado para desenhar textos 

function escreva(texto, x, y, scale = 0) {
  HUD_ctx.font = "bold " + (16 + scale) + "px kindSans";
  HUD_ctx.fillStyle = "#000000"
  HUD_ctx.fillText(texto, x, y + 2);
  HUD_ctx.fillStyle = "#FFFFFF"
  HUD_ctx.fillText(texto, x, y);
}


function fale(texto, x, y, scale = 0, color = "#FFFFFF") {
  HUD_ctx.font = "" + (16 + scale) + "px classicalComic";
  HUD_ctx.fillStyle = "#000000"
  HUD_ctx.fillText(texto, x, y + 2);
  HUD_ctx.fillStyle = color;
  HUD_ctx.fillText(texto, x, y);
}

//assets de texto

const DialogWindow = {
  width: undefined,
  height: undefined,
  coords: { x: undefined, y: undefined },
  curr: undefined,
  graph: document.querySelector(".graphDialog"),
  animationDone: false,
  padding: 12,
  calculateDialogBoxWidth(lenDeTexto) {
    if (lenDeTexto < 18) {
      return 16 * lenDeTexto + this.padding * 2;
    }
    else if (lenDeTexto > 18) {
      return 16 * 18 + this.padding * 2;
    }

  },
  calculateDialogBoxHeight(lenDeTexto) {
    if (lenDeTexto < 18) {
      return 16 + this.padding * 2;
    }
    else if (lenDeTexto > 18) {
      return 16 * this.numDeLinhas(lenDeTexto) + this.padding * 2;
    }
  },
  create(x, y, text) {

    this.width = this.calculateDialogBoxWidth(text.length);
    this.height = this.calculateDialogBoxHeight(text.length);
    HUD_ctx.drawImage(this.graph, x, y, this.width)
  },
  remove() {

  }
}