
import { IService } from "../interfaces/IService"
import Service from "../models/services.model"
export const addService = async (body: IService) => {
    const newService = new Service(body)
    await newService.save()
    return newService
}
export const getAllServices = async () => {
    const response = Service.find({})
    return response
}