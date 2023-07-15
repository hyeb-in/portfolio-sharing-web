import mongoose, { Schema, model } from "mongoose";

const ProjectSchema = new Schema(
	{
		title: {
			type: String,
			optional: true,
		},
		role: {
			type: String,
			optional: true,
		},
		startDate: {
			type: String,
			optional: true,
		},
		endDate: {
			type: String,
			optional: true,
		},

		description: {
			type: String,
			optional: true,
		},
		author: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const ProjectModel = model("Project", ProjectSchema);

export { ProjectModel };
