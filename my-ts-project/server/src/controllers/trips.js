import Trip from "../models/tripsModel.js";

export const create = async (req,res) => {
    const trip = await Trip.create(req.body);
    res.status(201).json(trip);
}

export const getAll = async (req,res) => {
    res.json(await Trip.find());
};

export const getOne = async (req,res) => {
    const trip = await Trip.findById(req.params.id);
    if (!trip) {
        return res.status(404).json({ message: "Trip not found" });
    }
    res.json(trip);
}

export const update = async (req,res) => {
    const trip = await Trip.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!trip) {
        return res.status(404).json({ message: "Trip not found" });
    }
    res.json(trip);
}

export const remove = async (req,res) => {
    const trip = await Trip.findByIdAndDelete(req.params.id);
    if (!trip) {
        return res.status(404).json({ message: "Trip not found" });
    }
    res.status(204).end();
}