import { When } from "@cucumber/cucumber";
import EmployeePage from "../pages/employeePage";

const employeePage = new EmployeePage();

When(`Ingresa los datos del empleado: primer nombre {string}, segundo nombre {string} y apellido {string}`, async (firstName, secondName, lastName)=> {
    await employeePage.setEmployee(firstName, secondName, lastName);
})

When(`Selecciona la opción "Guardar" para registrar al nuevo empleado`, async ()=> {
    await employeePage.saveEmployee();
})