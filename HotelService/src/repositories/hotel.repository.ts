// Repository layer is responsible for interacting with the database. It contains methods for performing CRUD operations on the Hotel model. It uses the Hotel model defined in the db/models/hotel.ts file to perform database operations. The repository layer is used by the service layer to perform business logic and return data to the controllers.

import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import { createHotelDTO } from "../dto/hotel.dto";
import { Not_FOUND_error } from "../utils/errors/app.error";

export async function createHotel( hotelData : createHotelDTO){
    const hotel = await Hotel.create({
        name : hotelData.name,
        address : hotelData.address,
        location :hotelData.location,
        rating : hotelData.rating,
        ratingCount : hotelData.ratingCount
    });

    logger.info(`Hotel Created: ${hotel.id}`);

    return hotel;
}

export async function getHotelById( id : number){
    const hotel = await Hotel.findByPk(id);

    if(!hotel){
        logger.error(`Hotel not found: ${id}`);
        throw new Not_FOUND_error(`Hotel wit id ${id} not found `);
    }

    logger.info(`Hotel found : ${hotel.id}`);
    return hotel ;
}

export async function getAllHotels(){
     const hotels = await Hotel.findAll();

    if(!hotels){
        logger.error(`No Hotels found `);
        throw new Not_FOUND_error(`No Hotels found `);
    }
    logger.info(`Hotels found : ${hotels.length}`);
    return hotels ;
}

