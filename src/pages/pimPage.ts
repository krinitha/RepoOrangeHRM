import { expect } from "playwright/test";

export default class PimPage{

    Values = {
        employeeId: 0
    }

    private Elements = {
        menuPim: "//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a",
        btnNewEmployee: "//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[1]/button",
        firstName: "//input[@name = 'firstName']",
        middleName: "//input[@name = 'middleName']",
        lastName: "//input[@name = 'lastName']",
        employeeId: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div[2]/div[1]/div[2]/div/div/div[2]/input",
        btnSaveEmployee: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]",
        numLicencia: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[1]/div/div[2]/input",
        fecExpLicencia: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[2]/div/div[2]/div/div/input",
        dateBirth: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[1]/div/div[2]/div/div/input",
        btnSaveDetails: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/button",
        employeeIdSearch: "//div[@class = 'oxd-table-filter'] //input[@class = 'oxd-input oxd-input--active']",
        btnSearch: "//div[@class = 'oxd-form-actions'] //button[@class = 'oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']",
        idFound: "//div[@class = 'oxd-table-card'] //div[@class = 'oxd-table-cell oxd-padding-cell'][2]"
    }

    async navigateToPIM() {
        await global.page.setDefaultTimeout(60000);
        await global.page.waitForSelector(this.Elements.menuPim);
        await global.page.click(this.Elements.menuPim);
        await global.page.waitForLoadState('networkidle');

    }

    async addNewEmployee() {
        await global.page.waitForSelector(this.Elements.btnNewEmployee);
        await global.page.click(this.Elements.btnNewEmployee);
        await global.page.waitForLoadState('networkidle');
    }

    async setEmployee(firstName, middleName, lastName) {
        await global.page.waitForSelector(this.Elements.firstName);
        await global.page.type(this.Elements.firstName, firstName);
        await global.page.type(this.Elements.middleName, middleName);
        await global.page.type(this.Elements.lastName, lastName);
    }

    async getEmployeeId() {
        await global.page.waitForSelector(this.Elements.employeeId);
        const employeeControl = global.page.locator(this.Elements.employeeId);
        this.Values.employeeId = await employeeControl.inputValue();
    }

    async saveEmployee() {
        await global.page.waitForSelector(this.Elements.btnSaveEmployee);
        await global.page.click(this.Elements.btnSaveEmployee);
    }


    async setLicense(license, expirationDate) {
        await global.page.waitForSelector(this.Elements.numLicencia);
        await global.page.type(this.Elements.numLicencia, license);
        // const bb = await global.page.waitForSelector(this.Elements.fecExpLicencia);
        // await global.page.click(this.Elements.fecExpLicencia);
        // await global.page.type(this.Elements.fecExpLicencia, expirationDate);
    }

    async setBirthday(birthDate) {
        // await global.page.waitForSelector(this.Elements.dateBirth);
        // await global.page.click(this.Elements.dateBirth);
        // await global.page.type(this.Elements.dateBirth, birthDate);
        await global.page.waitForTimeout(2000);
    }

    async saveDetails() {
        await global.page.waitForSelector(this.Elements.btnSaveDetails);
        await global.page.click(this.Elements.btnSaveDetails);
        await global.page.waitForLoadState('networkidle');
    }

    async searchEmployeeId(employeeId) {
        await global.page.waitForSelector(this.Elements.employeeIdSearch);
        await global.page.type(this.Elements.employeeIdSearch, employeeId.toString());
        await global.page.click(this.Elements.btnSearch);
        await global.page.waitForLoadState('networkidle');  
    }

    async checkEmployeeId(employeeId) {
        await global.page.waitForSelector(this.Elements.idFound);
        const employeeControl = global.page.locator(this.Elements.idFound);
        const employeeIdValue = await employeeControl.textContent();
        await expect(employeeIdValue).toBe(employeeId.toString());
    }
}