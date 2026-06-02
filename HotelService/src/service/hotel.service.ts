
import { createHotelDTO } from "../dto/hotel.dto";
import { createHotel, getAllHotels, getHotelById, softDeleteHotel } from "../repositories/hotel.repository";

//service layer is responsible for handling the business logic of the application. It acts as an intermediary between the controller and the repository layers. The service layer receives data from the controller, processes it according to the business rules, and then interacts with the repository layer to perform database operations. It also handles any necessary transformations of data before sending it back to the controller for response.

export async function createHotelService(hotelData : createHotelDTO) {
    const hotel = await createHotel(hotelData);
    return hotel;
}

export async function getHotelbyIDService(id : number ){
    const hotel = await getHotelById(id);
    return hotel;
}

export async function getAllHotelsService( ){
    const hotel = await getAllHotels();
    return hotel;
}

export async function deleteHotelsService( id : number){
    const response = await softDeleteHotel(id);
    return response;
}