
import { IService } from "../interfaces/IService"
import Service from "../models/services.model"
export const addService = async (body: IService, path: string) => {
    console.log(path);
    
    const newService = new Service({...body, logo: path})
    await newService.save()
    return newService
}
export const getAllServices = async () => {
    const response = Service.find({})
    return response
}