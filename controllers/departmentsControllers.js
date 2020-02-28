const Department = require('../models/department')
const Ticket = require('../models/ticket')

module.exports.list = (req, res) => {
    Department.find()
        .then((departments) => {
            res.json(departments)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const department= new Departmnent(body)
    department.save()
        .then((department) => {
            res.json(department)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    Department.findById(id)
        .then((department) => {
            if (department) {
                Ticket.find().populate('customer', ['_id', 'name']).populate('department', ['_id', 'name']).populate('employee', ['_id', 'name'])
                    .then((ticket) => {
                        let tickets = ticket
                        tickets = ticket.filter(tic => tic.department._id == id)
                        console.log(tickets)
                        res.json({ department, tickets })
                    })
            } else {
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
    Department.findByIdAndUpdate(id, body,{new:true,runValidator:true})
        .then((department) => {
            if (department) {
                res.json(department)
            }
            else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Department.findByIdAndDelete(id)
        .then((department) => {
            if (department) {
                res.json(department)
            }
            else {
                res.json({})
            }
        })

        .catch((err) => {
            res.json(err)
        })
}