import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  comment: {
    type: String,
    required: [true, '缺少留言內容']
  },
  emoji: {
    // 0 = 沒動作
    // 1 = 按讚
    // 2 = 笑臉
    // 3 = 懷疑
    // 4 = 反對
    type: Number,
    default: 0
  },
  date: {
    type: Date
  }
}, { versionKey: false })

export default mongoose.model('comments', commentSchema)
