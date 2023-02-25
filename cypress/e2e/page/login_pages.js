const url = "https://www.saucedemo.com/";

class LoginPage {
  elements = {
    navigate: () => cy.visit(url),

    inputUsername: () => cy.get("#user-name"),

    inputPassword: () => cy.get("#password"),

    clickLogin: () => cy.get("#login-button").click(),

    assertLogin: () => {
      cy.get(".title").should("be.visible"), cy.get(".peek").should("be.visible"), cy.contains("Products").should("contain", "Products");
    },
    assertLoginFail: () => cy.get('[data-test="error"]').should("be.visible"),
  };

  loginsucces() {
    this.elements.navigate();
    this.elements.inputUsername().type("standard_user");
    this.elements.inputPassword().type("secret_sauce");
    this.elements.clickLogin();
  }

  loginfails() {
    this.elements.navigate();
    this.elements.inputUsername().type("standard_user");
    this.elements.inputPassword().type("InvalidPass");
    this.elements.clickLogin();
  }
}

module.exports = new LoginPage();
