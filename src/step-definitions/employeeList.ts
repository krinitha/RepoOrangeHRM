import { Then, When } from "@cucumber/cucumber";
import PimPage from "../pages/pimPage";
import EmployeePage from "../pages/employeePage";

const pimPage = new PimPage();
const employeePage = new EmployeePage();

When(`El usuario selecciona la opción "Añadir nuevo empleado"`, async ()=> {
    await pimPage.addNewEmployee();
})

When('Ingresa el id del empleado {string}', async function (employeeId) {
    employeeId = employeeId === "0" ? this.employeeId : employeeId;
    await pimPage.setEmployeeId(employeeId);
})

When('Selecciona la opcion "Search"', async ()=> {
    await pimPage.searchEmployee();
})

Then('El sistema muestra el perfil del empleado con el ID correspondiente {string}', async function (employeeId)  {
    employeeId = employeeId === "0" ? this.employeeId : employeeId;
    await pimPage.checkEmployeeId(employeeId);
})

When('Selecciona la opcion editar de la grilla', async ()=> {
    await pimPage.editEmployee();
})