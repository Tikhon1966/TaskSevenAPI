import users from "../fixtures/users";

Cypress.Commands.add("createUser", (userData) => {
  cy.request("POST", "/user", userData).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).be.eqls({
      code: 200,
      type: "unknown",
      message: `${users.userOne.id}`,
    });
  });
});