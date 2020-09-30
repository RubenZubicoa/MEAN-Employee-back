const Employee = require('../models/Employee');

const employeeCtrl = {}

// Obtiene la lista completa de empleados
employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find()
    res.json(employees);
}

// introduce un nuevo empleado en la base de datos
employeeCtrl.createEmployee = async (req, res) => {
    console.log(req.body)
    const employee = new Employee(req.body);
    await employee.save();
    res.json({Message:'Employee created'})
}

// Obtiene un solo empleado
employeeCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
}

// modifica la informacion de un empleado
employeeCtrl.editEmployee = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body)
    res.json({Message:'Employee updated'})
}

// elimina un empleado
employeeCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({Message:'Employee deleted'})
}

module.exports = employeeCtrl;