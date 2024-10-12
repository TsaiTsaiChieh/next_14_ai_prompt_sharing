const { Schema, models, model } = require("mongoose");

const promptSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    prompt: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Prompt = models.Prompt || model("Prompt", promptSchema);
export default Prompt;
