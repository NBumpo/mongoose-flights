const mongoose = require('mongoose');
const dateFns = require('date-fns')  

const date = Date.now()
const yearFromToday = dateFns.addYears(date, 1)

const destinationSchema = new mongoose.Schema({
    airport: String,
    arrival: Date,

})
const flightSchema = new mongoose.Schema({

	airline: {
         type: String,
         enum: ['American','Southwest','United']
    },
	airport: { 
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
       
    },
	flightNo:{
        type: Number,
      
    },
	departs:{
        type: Date,
        default: yearFromToday,
    },
    
    destinations: [destinationSchema]	
    
    
})





module.exports = mongoose.model('Flight', flightSchema);