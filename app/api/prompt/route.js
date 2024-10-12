import Prompt from "@models/Prompt";
import { connectToDB } from "@utils/database";

export const GET = async _req => {
  try {
    await connectToDB();
    const prompts = await Prompt.find({}).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};
