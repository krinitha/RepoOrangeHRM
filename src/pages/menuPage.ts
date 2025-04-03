
export default class MenuPage{
    private Elements = {
        menuPim: "//*[@id='app']/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a",
    }
    
    async navigateToPIM() {
        await global.page.setDefaultTimeout(60000);
        await global.page.waitForSelector(this.Elements.menuPim);
        await global.page.click(this.Elements.menuPim);
        await global.page.waitForLoadState('networkidle');
    }

}

