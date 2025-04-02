export default class LoginPage {
    private Elements = {
        userNameInput: "//input[@name='username']",
        passwordInput: "//input[@name='password']",
        loginBtn: "//*[@id='app']/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button"
    }

    async navigateOrangePage() {
        await global.page.goto(process.env.BASEURL); 
        await global.page.waitForLoadState('networkidle');
    }

    async login(user: string, password: string) {
        await global.page.waitForSelector(this.Elements.userNameInput);
        await global.page.type(this.Elements.userNameInput, user);
        await global.page.type(this.Elements.passwordInput, password);
        await global.page.click(this.Elements.loginBtn);
    }
}