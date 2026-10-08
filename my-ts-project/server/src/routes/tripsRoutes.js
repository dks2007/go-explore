import { Router } from "express";
import {
    create,
    getAll,
    getOne,
    update,
    remove
    } from "../controllers/trips.js";

import {
    createTripValidation,
    updateTripValidation, 
    tripIdValidation
    } from '../middleware/tripsValidation.js'

const router = Router();

router.post('/', createTripValidation,create);
router.get('/', getAll);
router.get('/id', getOne);
router.put('/id', updateTripValidation,update);
router.delete('/id', tripIdValidation,remove);

export default router;