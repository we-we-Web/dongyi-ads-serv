import { Schema, model } from "mongoose";

const AdsSchema = new Schema(
    {
        id: { type: String, required: true, unique: true },
        img: { type: String, required: true },
        target: { type: String, required: true },
        create_at: { type: String, required: true },
        update_at: { type: String, required: true },
    },
    { versionKey: false }
);

export const AdsModel = model("Ads", AdsSchema);