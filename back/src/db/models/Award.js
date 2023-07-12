import { AwardModel } from "../schemas/award";

class Award {
    static async create(newAward) {
        const createdNewAward = await AwardModel.create(newAward);
        return createdNewAward;
    }
    static async find(userId) {
        const awards = await AwardModel.find({ author: userId });
        return awards;
    }
    static async findById(awardId) {
        const award = await AwardModel.findOne({ _id: awardId });
        return award;
    }

    static async update(shortId, fieldToUpdate, newValue) {
        const filter = { shortId: shortId };
        const update = { [fieldToUpdate]: newValue };
        const option = { returnOriginal: false };

        const updateAward = await AwardModel.findOneAndUpdate(
            filter,
            update,
            option
        );
        return updateAward;
    }
}

export { Award };
