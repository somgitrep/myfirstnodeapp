const express = require("express")
const app = express()
const emp_data = require('../db/employee.json')

// using json middlewire
app.use(express.json())

// main root
app.get('/', (req, res) => {
    res.json(emp_data)
})
// make query with id like "http://localhost:3000/100"
app.get('/:id', (req, res) => {
    const id = req.params.id
    let result = []
    for (let i in emp_data.emp) {
        if (emp_data.emp[i].ID == id) {

            result.push(emp_data.emp[i])
        }
    }
    res.json(result.length > 0 ? result : 'No employee record found!!')
})

const port = 3000
app.listen(port, console.log(`App is listening to port: ${port}`))