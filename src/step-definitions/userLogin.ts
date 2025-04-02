import { Given, Then, When } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

Given('El usuario ingresa a la página de OrangeHRM', async () => {
    await loginPage.navigateOrangePage();
})
When('Ingreso mis credenciales username {string} y password {string}', async (user, password)=> {
    await loginPage.login(user, password);
})
Then('el usuario ingresa satisfactoriamente.', async ()=> {
    await dashboardPage.loginSuccess(); 
})