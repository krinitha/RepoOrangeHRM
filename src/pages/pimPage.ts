import { expect } from "playwright/test";

export default class PimPage{

    private Elements = {
        btnNewEmployee: "//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[1]/button",
        employeeIdSearch: "//div[@class = 'oxd-table-filter'] //input[@class = 'oxd-input oxd-input--active']",
        btnSearch: "//div[@class = 'oxd-form-actions'] //button[@class = 'oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space']",
        idFound: "//div[@class = 'oxd-table-card'] //div[@class = 'oxd-table-cell oxd-padding-cell'][2]",
        btnEdit: "//div[@class = 'oxd-table-card']//i[@class = 'oxd-icon bi-pencil-fill']"
    }

    async addNewEmployee() {
        await global.page.waitForSelector(this.Elements.btnNewEmployee);
        await global.page.click(this.Elements.btnNewEmployee);
        await global.page.waitForLoadState('networkidle');
    }

    async setEmployeeId(employeeId) {
        await global.page.waitForSelector(this.Elements.employeeIdSearch);
        await global.page.type(this.Elements.employeeIdSearch, employeeId.toString());
    }

    async searchEmployee() {
        await global.page.waitForSelector(this.Elements.btnSearch);
        await global.page.click(this.Elements.btnSearch);
        await global.page.waitForLoadState('networkidle');  
    }

    async checkEmployeeId(employeeId) {
        await global.page.waitForSelector(this.Elements.idFound);
        const employeeControl = global.page.locator(this.Elements.idFound);
        const employeeIdValue = await employeeControl.textContent();
        expect(employeeIdValue).toBe(employeeId.toString());
    }

    async editEmployee() {
        await global.page.waitForSelector(this.Elements.btnEdit);
        await global.page.click(this.Elements.btnEdit);
        await global.page.waitForLoadState('networkidle');
    }

}