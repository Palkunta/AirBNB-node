import { createHotelDTO } from "../dto/hotel.dto";
import { createHotel, getHotelById } from "../repositories/hotel.repository";

export async function createHotelService(hotelData : createHotelDTO) {
    const hotel = await createHotel(hotelData);
    return hotel;
}

export async function getHotelbyIDService(id : number ){
    const hotel = await getHotelById(id);
    return hotel;
}