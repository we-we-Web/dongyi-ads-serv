import type { Request, Response } from "express";
import { AdsUsecase } from "../../usecases/ads.usecase";

const adsUsecase = new AdsUsecase();

export const createAd = async (req: Request, res: Response) => {
    try {
        const result = await adsUsecase.createAd(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Failed to create ad" });
    }
};

export const getAllAds = async (_req: Request, res: Response) => {
    try {
        const result = await adsUsecase.getAllAds();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve ads" });
    }
};

export const updateAdImage = async (req: Request, res: Response) => {
    const { id, img } = req.body;
    if (!id || !img) {
        return res.status(400).json({ error: "Missing 'id' or 'img'" });
    }

    try {
        const result = await adsUsecase.updateAd(id, { img });
        if (result) {
            res.status(200).json({ message: "Image updated successfully" });
        } else {
            res.status(404).json({ error: "Ad not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to update ad image" });
    }
};

export const updateAdTarget = async (req: Request, res: Response) => {
    const { id, target } = req.body;
    if (!id || !target) {
        return res.status(400).json({ error: "Missing 'id' or 'target'" });
    }

    try {
        const result = await adsUsecase.updateAd(id, { target });
        if (result) {
            res.status(200).json({ message: "Target updated successfully" });
        } else {
            res.status(404).json({ error: "Ad not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to update ad target" });
    }
};

export const deleteAd = async (req: Request, res: Response) => {
    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ error: "Missing 'id'" });
    }

    try {
        const result = await adsUsecase.deleteAd(id);
        if (result) {
            res.status(200).json({ message: "Ad deleted successfully" });
        } else {
            res.status(404).json({ error: "Ad not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to delete ad" });
    }
};