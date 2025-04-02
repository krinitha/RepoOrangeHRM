import { expect } from "playwright/test";

export default class DashboardPage{
    private Elements = {
        dashboardTitle: "//span/h6[text()='Dashboard']"    
    }

    async loginSuccess() {
        await global.page.waitForSelector(this.Elements.dashboardTitle);
        await expect(global.page.locator(this.Elements.dashboardTitle)).toBeVisible();
    }
    
}

