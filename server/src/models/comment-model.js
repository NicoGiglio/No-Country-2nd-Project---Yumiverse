import { Schema, model } from "mongoose";

const commentSchema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: "users",
			required: false,
		},
		restaurantId: {
			type: Schema.Types.ObjectId,
			ref: "restaurants",
			required: true,
		},
		comment: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true, versionKey: false }
);

const CommentModel = model("comments", commentSchema);

export default CommentModel;
