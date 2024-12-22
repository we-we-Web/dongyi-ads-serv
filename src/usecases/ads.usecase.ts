import { AdsRepository } from "../repositories/ads.repository";

export class AdsUsecase {
    private adsRepo: AdsRepository;

    constructor() {
        this.adsRepo = new AdsRepository();
    }

    async createAd(data: { img: string; target: string }) {
        const now = new Date().toISOString();
        return await this.adsRepo.createAd({
            id: crypto.randomUUID(),
            img: data.img,
            target: data.target,
            create_at: now,
            update_at: now,
        });
    }

    async getAllAds() {
        return await this.adsRepo.getAllAds();
    }

    async updateAd(id: string, updates: Partial<any>) {
        return await this.adsRepo.updateAd(id, {
            ...updates,
            update_at: new Date().toISOString(),
        });
    }

    async deleteAd(id: string) {
        return await this.adsRepo.deleteAd(id);
    }
}