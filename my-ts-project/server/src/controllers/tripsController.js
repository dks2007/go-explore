import Trip from "../models/tripsModel.js"; 

export async function createTrip(req, res) {
    try {
        const {title, contry, city, description} = req.body;   

        const trip = {
            title,
            contry,
            city,
            description,
        };

        res.status(201).json({
            message: "Trip created successfuly",
            trip
        });

    } catch(err) {
        res.status(500).json({
            message: "Error creating trip",
            error: error.message,
        }); 
    }
}
