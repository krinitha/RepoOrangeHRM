import { Given, Then, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

Given('El usuario ingresa a la página de OrangeHRM', async () => {
    await loginPage.navigateOrangePage();
})
When('El usuario ingresa el nombre de usuario {string}, contraseña {string} e inicia sesión', async (user, password)=> {
    await loginPage.login(user, password);
})
Then('El usuario ingresa satisfactoriamente.', async ()=> {
    await dashboardPage.checkTitleDashboard(); 
})