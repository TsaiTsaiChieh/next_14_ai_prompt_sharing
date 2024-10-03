import mongoose from "mongoose";

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "share_prompt",
      connectTimeoutMS: 20000,
    });
    console.info("MongoDB is already connected.");
  } catch (error) {
    console.error(error);
  }
};
