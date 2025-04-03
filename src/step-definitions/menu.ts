import { When } from "@cucumber/cucumber";
import MenuPage from "../pages/menuPage";

const menuPage = new MenuPage();

When(`El usuario ingresa al módulo "PIM" desde el menú`, async ()=> {
    await menuPage.navigateToPIM();
})