import createHttpError from 'http-errors';

export const getCurrentUser = async (req, res, next) => {
    try {
        if(!req.user) {
            throw createHttpError(401, "Unauthorized");
        }

        const {_id, name, email} = req.user;

        res.status(200).json({
            _id,
            name,
            email
        })
    } catch (error) {
        next(error);
    }

};