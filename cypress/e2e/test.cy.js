import LoginPage from "./page/login_pages";
import DashboardPage from "./page/dashboardpages";

const URL = "https://www.saucedemo.com/";

describe("Add Category", () => {
  it("Test LOGIN", () => {
    LoginPage.loginsucces();
    LoginPage.elements.assertLogin();
  });

  it("Test Sauce Demo Invalid Password", () => {
    LoginPage.loginfails();
    LoginPage.elements.assertLoginFail();
  });

  it("Test Sauce Demo Sauce labs product backpack", () => {
    LoginPage.loginsucces();
    LoginPage.elements.assertLogin();
    DashboardPage.sauceLabsBackpack();
  });
});
