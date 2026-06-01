//DTO layer is responsible for defining the data transfer objects (DTOs) that are used to transfer data between the client and the server. It defines the shape of the data that is expected to be received from the client and the shape of the data that is sent back to the client. The DTOs are used by the controllers to validate the incoming data and to format the outgoing data.  

export type createHotelDTO = {
    name : string;
    address : string ;
    location : string;
    rating? : number ;
    ratingCount? : number;
}