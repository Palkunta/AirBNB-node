import { NextFunction, Request, Response } from "express";
import { createHotelService, getHotelbyIDService } from "../service/hotel.service";


export async function createHotelHandler( req : Request , res : Response , next : NextFunction){
    //1. call the service layer

    const hotelResponse = await createHotelService(req.body);

    //2. send the response

    res.status(201).json({
        message : "Hotel created successfully..",
        data : hotelResponse,
        success : true
    })
}

export async function getHotelbyIDHandler( req : Request , res : Response , next : NextFunction){
    //1. call the service layer

    const hotelResponse = await getHotelbyIDService(Number(req.params.id));

    //2. send the response

    res.status(200).json({
        message : "Hotel found successfully..",
        data : hotelResponse,
        success : true
    })
}