import { Router } from "express";
import { myMiddlerware } from "../middleware/my-middleware";

const productsRoutes = Router()

productsRoutes.get("/", (request, response) => {
  const {page, limit } = request.query

  response.send(`Pagina ${page} de ${limit}`)
})

// Middleware local em uma rota especifica.
productsRoutes.post("/", myMiddlerware, (request, response) => {
  const {name, price } = request.body

  //response.send(`Produto ${name} custa $ ${price}`)
  response.status(201).json({name, price, user_id: request.user_id })
})

export { productsRoutes }