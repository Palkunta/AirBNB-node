import { NextFunction, Request, Response } from "express";
import { createHotelService, getAllHotelsService, getHotelbyIDService } from "../service/hotel.service";
import { StatusCodes } from "http-status-codes";

// import Hotel from "../db/models/hotel";
// import logger from "../config/logger.config";
// import { Not_FOUND_error } from "../utils/errors/app.error";
// import { getAllHotels } from "../repositories/hotel.repository";



export async function createHotelHandler( req : Request , res : Response , next : NextFunction){
    //1. call the service layer

    const hotelResponse = await createHotelService(req.body);

    //2. send the response

    res.status(StatusCodes.CREATED).json({
        message : "Hotel created successfully..",
        data : hotelResponse,
        success : true
    })
}

export async function getHotelbyIDHandler( req : Request , res : Response , next : NextFunction){
    //1. call the service layer

    const hotelResponse = await getHotelbyIDService(Number(req.params.id));

    //2. send the response

    res.status(StatusCodes.OK).json({
        message : "Hotel found successfully..",
        data : hotelResponse,
        success : true
    })
}

export async function getAllHotelsHandler(req : Request , res : Response , next : NextFunction ){
    
    const hotelsResponse = await getAllHotelsService();

    res.status(StatusCodes.OK).json({
        message : "Hotels found successfully..",
        data : hotelsResponse,
        success : true 
    });
    
}

export async function deleteHotelsHandler( req : Request , res : Response , next : NextFunction){
    
    res.status(StatusCodes.NOT_IMPLEMENTED);

}


export async function updateHotelsHandler( req : Request , res : Response , next : NextFunction){
    
    res.status(StatusCodes.NOT_IMPLEMENTED);

}