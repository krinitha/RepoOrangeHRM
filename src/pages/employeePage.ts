export default class EmployeePage{

    private Elements = {
        firstName: "//input[@name = 'firstName']",
        middleName: "//input[@name = 'middleName']",
        lastName: "//input[@name = 'lastName']",
        employeeId: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[1]/div[1]/div/div[2]/input",
        btnSaveEmployee: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[2]/button[2]",
        numLicencia: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[1]/div/div[2]/input",
        fecExpLicencia: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[2]/div[2]/div[2]/div/div[2]/div/div/input",
        dateBirth: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[2]/div[1]/div/div[2]/div/div/input",
        nacionality: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[3]/div[1]/div[1]/div/div[2]/div",
        btnSaveDetails: "//*[@id='app']/div[1]/div[2]/div[2]/div/div/div/div[2]/div[1]/form/div[4]/button",
                        
    }

    async setEmployee(firstName, middleName, lastName) {
        await global.page.waitForSelector(this.Elements.firstName);
        await global.page.type(this.Elements.firstName, firstName);
        await global.page.type(this.Elements.middleName, middleName);
        await global.page.type(this.Elements.lastName, lastName);
    }

    async getEmployeeId(): Promise<string> {
        await global.page.waitForSelector(this.Elements.employeeId);
        const employeeControl = global.page.locator(this.Elements.employeeId);
        return await employeeControl.inputValue();
    }

    async saveEmployee() {
        await global.page.waitForSelector(this.Elements.btnSaveEmployee);
        await global.page.click(this.Elements.btnSaveEmployee);
        await global.page.waitForLoadState('networkidle');
    }

    async setLicense(license, expirationDate) {
        await global.page.waitForSelector(this.Elements.numLicencia);
        await global.page.type(this.Elements.numLicencia, license);
        await global.page.waitForSelector(this.Elements.fecExpLicencia);
        await global.page.click(this.Elements.fecExpLicencia);
        await global.page.fill(this.Elements.fecExpLicencia, expirationDate);
    }

    async setBirthday(birthDate) {
        await global.page.waitForSelector(this.Elements.dateBirth);
        await global.page.click(this.Elements.dateBirth);
        await global.page.type(this.Elements.dateBirth, birthDate);
        await global.page.waitForTimeout(2000);
    }

    async setNacionality(nacionality) {
        await global.page.waitForSelector(this.Elements.nacionality);
        await global.page.click(this.Elements.nacionality);
        const nacionalityControl = await global.page.locator(this.Elements.nacionality);
        await nacionalityControl.locator("div[role='option']").filter({ hasText: nacionality }).click();
        await global.page.waitForTimeout(2000);
    }

    async saveDetails() {
        await global.page.waitForSelector(this.Elements.btnSaveDetails);
        await global.page.click(this.Elements.btnSaveDetails);
        await global.page.waitForLoadState('networkidle');
    }

}