import express from "express";
import { createHotelHandler, deleteHotelsHandler, getAllHotelsHandler, getHotelbyIDHandler } from "../../controllers/hotel.controller";
import { validateRequestBody } from "../../validators";
import { hotelSchema } from "../../validators/hotel.validator";

const hotelRouter = express.Router();



hotelRouter.post(
    '/' , 
    validateRequestBody(hotelSchema),
    createHotelHandler
); // this will define a route for the GET method on the /ping endpoint. When a request is made to this endpoint, the middleware1 and middleware2 functions will be called in order, and then the pingHandler function will be called to handle the request and send a response back to the client.

hotelRouter.get('/:id', getHotelbyIDHandler );


hotelRouter.get('/',getAllHotelsHandler);

hotelRouter.delete('/:id',deleteHotelsHandler);


export default hotelRouter;

