import mongoose , { Schema, models, Document} from "mongoose";





const NoticeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt automatically
  }
);

export default models.Notice || mongoose.model("Notice", NoticeSchema);