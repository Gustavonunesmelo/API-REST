import express, { Request, Response } from "express"
import { routes } from "./routes/index"
import { error } from "console"

const PORT = 3333

const app = express()
app.use(express.json())

app.use(routes)

app.use((error:any, request: Request, response: Response) => {
  response.status(500).json({ message: error.message})
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))