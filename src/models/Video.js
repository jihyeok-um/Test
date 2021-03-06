import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
	title: {type: String, required: true, maxLength: 20},
	fileUrl: {type: String, required: true },
	description: {type: String, required: true, maxLength: 80},
	createdAt: {type: Date, default: Date.now},
	hashtags: [{ type: String, required: true}],
	meta: {
			views: { type:Number, default: 0},
			rating: { type:Number, default: 0},
		},
});

videoSchema.static("formatHashtags", function (hashtags) {
	return hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));
  });

const Video = mongoose.model("Video", videoSchema);

export default Video;