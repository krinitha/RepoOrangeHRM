import { Given, Then, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import PimPage from "../pages/pimPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const pimPage = new PimPage();


Given('El usuario ingresa a las página de OrangeHRM', async ()=> {
    await loginPage.navigateOrangePage();
})

When('inicia sesión con el usuario {string} y el password {string}', async (user, password)=> {
    await loginPage.login(user, password);
})

When(`carga la página de PIM`, async ()=> {
    await pimPage.navigateToPIM();
})

When(`selecciona la opción "Añadir nuevo empleado"`, async ()=> {
    await pimPage.addNewEmployee();
})

When(`ingresa el primer nombre {string}, segundo nombre {string} y apellido {string}`, async (firstName, secondName, lastName)=> {
    await pimPage.setEmployee(firstName, secondName, lastName);
})

When(`obtiene el ID del empleado`, async ()=> {
    await pimPage.getEmployeeId();
})

When(`presiona el botón "Guardar"`, async ()=> {
    await pimPage.saveEmployee();
})

When(`en la sección "Detalles Personales", ingresa la licencia de conducir {string} con fecha de expiración {string}`, async (license, expirationDate)=> {
    await pimPage.setLicense(license, expirationDate);
})

When('ingresa la fecha de nacimiento {string}', async (birthDate)=> {
    await pimPage.setBirthday(birthDate);     
})

When(`se debe presionar el botón "Guardar"`, async ()=> {
    await pimPage.saveDetails();
})

Then('regresa a la pantalla de PIM y busca que exista el empleado con el "CODE ID"', async ()=> {
    await pimPage.navigateToPIM();
    await pimPage.searchEmployeeId(pimPage.Values.employeeId);
    await pimPage.checkEmployeeId(pimPage.Values.employeeId);
})


