class LoginPage {

    constructor(page){
        this.signInbutton = page.locator('#send2');
        this.email = page.locator('#email');
        this.password = page.locator('#pass');
    }


    async validLogin(email,password)
    {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.signInbutton.click();

    }
}

module.exports={LoginPage};