module.exports = function (mongoose){
	var Schema = mongoose.Schema;

	var personaSchema = new Schema({
        usuario     :   String,
	    direccion    : 	String
	})
	return mongoose.model('persona', personaSchema);
}
