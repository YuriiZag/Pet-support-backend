import { Express, Request, Response } from "express"
import asyncWrapper from "./heplers/asyncWrapper"
import { addPetCTRL, getAllPetsCTRL } from "./controllers/petController"

const routes = (app: Express) => {
    app.get('/api/pets', asyncWrapper(getAllPetsCTRL))
    app.get('/lol', (req: Request, res: Response) => res.sendStatus(200).json())
    app.post('/api/pets', asyncWrapper(addPetCTRL))
}
export default routes