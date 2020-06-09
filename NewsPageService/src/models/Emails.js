import mongoose from 'mongoose';

const EmailSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Please add an Email']
	},
	user: {
	    type: mongoose.Schema.ObjectId,
	    ref: 'Users',
	    required: true
	}
});

module.exports = mongoose.model('Email', EmailSchema);