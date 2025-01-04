import { Router } from "express";
import { createAd, deleteAd, getAllAds, updateAdImage, updateAdTarget } from "../controllers/ads.controller";

const router = Router();

router.post("/ads-create", createAd);
router.get("/ads-getall", getAllAds);
router.patch("/img-upd", updateAdImage);
router.patch("/target-upd", updateAdTarget);
router.delete("/ads-del", deleteAd);

export default router;