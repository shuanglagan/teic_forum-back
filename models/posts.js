import mongoose from 'mongoose'

const Schema = mongoose.Schema

const postSchema = new Schema({
  title: {
    type: String,
    required: [true, '缺少文章內容']
  },
  contents: {
    type: String,
    required: [true, '缺少文章內容']
  },
  follows: {
    type: Boolean,
    default: false
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
  image: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now,
    required: [true, '']

  },
  author: {
    type: String
  }
}, { versionKey: false })

export default mongoose.model('posts', postSchema)
