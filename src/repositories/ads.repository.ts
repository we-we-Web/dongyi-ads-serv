import { AdsModel } from "../domain/ads.model";

export class AdsRepository {
    async createAd(ad: any) {
        const newAd = new AdsModel(ad);
        return await newAd.save();
    }

    async getAllAds() {
        return await AdsModel.find();
    }

    async updateAd(id: string, updates: Partial<any>) {
        return await AdsModel.findOneAndUpdate({ id }, updates, { new: true });
    }

    async deleteAd(id: string) {
        return await AdsModel.findOneAndDelete({ id });
    }
}