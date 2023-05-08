import { Express, Request, Response } from "express"
import asyncWrapper from "./heplers/asyncWrapper"
import { addPetCTRL } from "./controllers/petController"

const routes = (app: Express) => {
    app.get('/lol', (req: Request, res: Response)=> res.sendStatus(200))
    app.post('/api/pets', asyncWrapper(addPetCTRL))
}
export default routes