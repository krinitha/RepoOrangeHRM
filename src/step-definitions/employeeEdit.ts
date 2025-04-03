import { When } from "@cucumber/cucumber";
import EmployeePage from "../pages/employeePage";

const employeePage = new EmployeePage();

When(`El sistema genera un ID de empleado`, async function () {
    this.employeeId = await employeePage.getEmployeeId();
})

When(`Ingresa la nacionalidad {string}`, async (nacionality)=> {
    await employeePage.setNacionality(nacionality);
})

When(`En la sección "Detalles Personales" ingresa la licencia de conducir {string} con fecha de expiración {string}`, async (license, expirationDate)=> {
    await employeePage.setLicense(license, expirationDate);
})

When('Ingresa la fecha de nacimiento {string}', async (birthDate)=> {
    await employeePage.setBirthday(birthDate);     
})

When(`Selecciona la opción "Guardar" para actualizar los detalles personales`, async ()=> {
    await employeePage.saveDetails();
})
