const motos = [
  { id: 1, model: "ER6N", brand: "kawasaki" },
  { id: 2, model: "CBR-650R", brand: "honda" },
  { id: 3, model: "Vulcan-650", brand: "kawasaki" },
  { id: 4, model: "Breakout", brand: "harley-davidson" },
];

// ----------- GET every motos in the list --------------
export function sayHello(req, res) {
  res.send("Hello Client !!! Welcome on MotoFactory :)");
}
// -----------------------------------------------------

// ----------- GET every motos in the list -------------
export function getAllBikes(req, res) {
  const limit = req.query.limit !== undefined ? parseInt(req.query.limit) : 10;

  const slicedMotos = motos.slice(0, limit);

  res.json(slicedMotos);
}
// --------------------------

// ------------ GET motos by brandName with query ---------
export function getBikesByBrand(req, res) {
  const wantedBrand = req.query.brand;

  const moto = motos.filter((moto) => moto.brand === wantedBrand);
  res.json(moto);
}
// --------------------------

// ------------- GET a moto by id with params (ex: /moto/1, /motos/2...)
export function getBikeById(req, res) {
  const wantedId = parseInt(req.params.id);

  const moto = motos.find((moto) => moto.id === wantedId);
  console.log(moto);

  if (moto != null) {
    res.json(moto);
  } else {
    res.send("pas de moto trouvé").status(404);
  }
}
// ----------------------------------------------------------
