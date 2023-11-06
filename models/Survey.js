import mongoose from "mongoose";

const Schema = mongoose.Schema;

const SurveySchema = new Schema(
  {
    university: { type: String, },
    wave: { type: String, },
    rows: [
      {
        type: mongoose.Schema.Types.Array,
        ref: "XLSLines",
      },
    ],
  },
  { timestamps: true },
)

const Survey = mongoose.model("Survey", SurveySchema);

export default Survey;