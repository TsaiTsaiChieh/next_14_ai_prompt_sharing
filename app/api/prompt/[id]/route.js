import Prompt from "@models/Prompt";
import { connectToDB } from "@utils/database";

export const GET = async (_req, { params }) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt not found", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to fetch the prompt", { status: 500 });
  }
};

export const PATCH = async (req, { params }) => {
  const { prompt, tag } = await req.json();
  try {
    await connectToDB();
    const existPrompt = await Prompt.findById(params.id).populate("creator");
    if (!existPrompt) return new Response("Prompt not found", { status: 404 });
    existPrompt.prompt = prompt;
    existPrompt.tag = tag;
    await existPrompt.save();
    return new Response(JSON.stringify(existPrompt), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to fetch patch prompt", { status: 500 });
  }
};

export const DELETE = async (_req, { params }) => {
  try {
    await connectToDB();
    await Prompt.findByIdAndDelete(params.id).populate("creator");
    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to fetch delete prompt", { status: 500 });
  }
};
