const Employee = require('../models/employee')
const Ticket = require('../models/ticket')

module.exports.list = (req, res) => {
    Employee.find().populate('department', ['_id', 'name'])
        .then((employees) => {
            res.json(employees)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const employee = new Employee(body)
    employee.save()
        .then((employee) => {
            res.json(employee)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    employee.findById()
        .then((employee) => {
            if (employee) {
                Ticket.find().populate('customer', ['_id', 'name']).populate('department', ['_id', 'name']).populate('employee', ['_id', 'name'])
                    .then(ticket => {
                        let tickets = ticket
                        console.log(tickets)
                        tickets = tickets.filter(tic => tic.employees.find(emp => emp._id == id))
                        console.log(tickets)
                        res.json({ employee, ticket })
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
    Employee.findByIdAndUpdate(id, body, { new: true, runValidator: true })
        .then((employee) => {
            if (employee) {
                res.json(employee)
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
    employee.findByIdAndDelete(id)
        .then((employee) => {
            if (employee) {
                res.json(employee)
            }
            else {
                res.json(employee)
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

