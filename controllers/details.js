const FlightModel = require('../models/flight')

module.exports = {
    create
}



async function create(req, res) {


    try {
        const flightDocs = await FlightModel.findById(req.params.id)
        flightDocs.flights.push(req.body)
        await flightDocs.save()
        res.redirect(`/flights/${flightDocs._id}`)
    }

    catch {
        res.send(err)
    }

}

