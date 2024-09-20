const TILE_SIZE = 60;
const MAGIC_OFFSET = 0.01;

function WorldToGrid(eixo, tileSize) {
  return Math.floor(eixo / tileSize);
}

function GridToWorld(gridAx, tileSize) {
  return gridAx * tileSize;
}

function WorldToScreen1D(entCoord, camWCoord) {
  let screenCoord = entCoord - camWCoord;
  return screenCoord;
}

function limitateUp(variable, limit) {
  if (variable > limit) {
    return limit;
  }
  return variable;
}

function limitateDown(variable, limit) {
  if (variable < limit) {
    return limit;
  }
  return variable;
}

function mirrorar(contexto) {
  contexto.translate(canvas.width, 0);
  contexto.scale(-1, 1);
}

function zoomIn(contexto) {
  contexto.scale(2, 2)
}

function zoomOut(contexto) {
  contexto.scale(0.5, 0.5)
}

function desenharParte(parteCortar, x, y, w, h, rad = 0) {
  ctx.translate(x, y);
  ctx.rotate(rad);
  ctx.drawImage(personagemAtual.grapho, parteCortar[0], parteCortar[1], parteCortar[2], parteCortar[3], 0, 0, w, h);
  ctx.rotate(-rad);
  ctx.translate(-x, -y);
}