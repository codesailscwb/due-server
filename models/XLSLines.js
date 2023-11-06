import mongoose from "mongoose";

const Schema = mongoose.Schema;

const XLSLinesSchema = new Schema(
  {
    fullName: { type: String, },
    question01: { type: Number, },
    question02: { type: Number, },
    question03: { type: Number, },
    question04: { type: Number, },
    question05: { type: Number, },
    question06: { type: Number, },
    question07: { type: Number, },
    question08: { type: Number, },
    question09: { type: Number, },
    question10: { type: Number, },
    question11: { type: Number, },
    question12: { type: Number, },
    question13: { type: Number, },
    question14: { type: Number, },
    question15: { type: Number, },
    question16: { type: Number, },
    question17: { type: Number, },
    question18: { type: Number, },
    question19: { type: Number, },
    question20: { type: Number, },
    question21: { type: Number, },
    question22: { type: Number, },
    question23: { type: Number, },
    question24: { type: Number, },
    question25: { type: Number, },
    question26: { type: Number, },
    question27: { type: Number, },
    question28: { type: Number, },
    question28: { type: Number, },
  },
  { timestamps: true }
);

const XLSLines = mongoose.model("XLSLines", XLSLinesSchema);

export default XLSLines;