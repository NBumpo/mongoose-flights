const FlightModel = require("../models/flight");

module.exports = {
    new: newFlight,
   index,
   create,
   show
   
}

async function show(req, res) {
  try {
    const flightDocuments = await FlightModel.findById(req.params.id)
    res.render('flights/show', {flight: flightDocuments})
  }

  catch {
    res.send(err)
  }
}





async function index(req, res) {


try {
		const flightDocuments = await FlightModel.find({});
		console.log('flightDocuments', flightDocuments)
		res.render('flights/index', {flightDocs: flightDocuments})

	} catch(err){
		res.send(err)
	}
}


function newFlight(req, res) {
    res.render("flights/new");
  }


async function create(req, res, next) {
    console.log(req.body, " <--- contents of the form");
    // forcing the value to its boolean
    // 'on' -> . true (box is checked)
    // undefined -> false (box is not checked)
  
  
    // remove any whitespace at start and end of cast
    
  
    console.log(req.body, " <--- contents of the form");
  
    // Await is saying, wait for this line of code to finish,
    // before run the code afterwards
  
    try {
      const flightDocs = await FlightModel.create(req.body);
      // put it in the database, then respond client
      console.log(flightDocs, " <0 this is the flight created in db");
      res.redirect("/flights"); // < this will 404 currently because
      // we haven't defined that route yet!
      console.log(flightDocs.airline)
      console.log(flightDocs.airport)
    } catch (err) {
      res.send(err);
      // optionally
      //next(err);
    }
  }

  
 