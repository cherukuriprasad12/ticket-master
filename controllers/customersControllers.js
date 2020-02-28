const Customer = require('../models/customer')

const Ticket = require('../models/ticket')

module.exports.list = (req, res) => {
    Customer.find()
        .then((customer) => {
            res.json(customer)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const customer = new Customer(body)
    customer.save()
        .then((customers) => {
            res.json(customers)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Customer.findById(id)
        .then((customer) => {
            if (customer) {
                Ticket.find().populate('customer', ['_id', 'name']).populate('department', ['_id', 'name']).populate('employees', ['_id', 'name'])
                    .then(ticket => {
                        let tickets = ticket
                        tickets = ticket.filter(tic => tic.customer._id == id)
                        console.log(tickets)
                        res.json({ customer, tickets })
                    })
                    .catch(err=>tic = [])
                console.log(tic)
            }
            else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {

    const id = req.params.id
    const body = req.body
    Customer.findByIdAndUpdate(id, body, { new: true, runValidator: true })
        .then((customer) => {
            if (customer) {
                res.json(customer)
            }
            else {
                res.json(err)
            }
        })
        .catch((err) => {
            res.json(err)
        })
}
module.exports.destroy = (req, res) => {
    const id = req.params.id
    Customer.findByIdAndDelete(id)
        .then((customer) => {
            if (customer) {
                res.json(customer)
            }
            else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}