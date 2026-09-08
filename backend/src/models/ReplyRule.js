import mongoose from 'mongoose';

const replyRuleSchema = new mongoose.Schema({
  keyword: { type: String, required: true, unique: true },
  reply: { type: String, required: true },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.model('ReplyRule', replyRuleSchema);
