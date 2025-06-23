import express, { response } from "express"
import { request } from "http"
import { myMiddlerware } from "./middleware/my-middleware"

const PORT = 3333

const app = express()
app.use(express.json())

app.use(myMiddlerware)

app.get("/products", (request, response) => {
  const {page, limit } = request.query

  response.send(`Pagina ${page} de ${limit}`)
})

app.post("/products", (request, response) => {
  const {name, price } = request.body

  //response.send(`Produto ${name} custa $ ${price}`)
  response.status(201).json({name, price, user_id: request.user_id })
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))