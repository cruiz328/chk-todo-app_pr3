const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new Schema({
	firstName: String,
	password: String,
});
// hooks
// in order to do something before data is saved to the database  using mongoose
// we can make use of the 'pre' hook
/*
* {
*   name: 'Chris',
// *   lastName: 'Ruiz',
*   password: '328'
* }
*
* * {
*   name: 'Ken',
// *   lastName: 'Eversley',
*   password: '1028'
* }
* * {
*   name: 'Hamed',
// *   lastName: 'Sayah',
*   password: '906'
* }
*
* */
userSchema.pre('save', async function(next) {
	// this = the user about to be saved in the database
	// or a user that's already in the database
	if (this.isNew || this.isModified('password')) {
		const saltRounds = 10;
		// hashing is a 1 way street
		this.password = await bcrypt.hash(this.password, saltRounds);
	}
	next();
});


module.exports = model('User', userSchema);