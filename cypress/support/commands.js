import { faker } from '@faker-js/faker';
/**
 * @type {Cypress.Commands}
 */
Cypress.Commands.add('login', (email, password) => {
  cy.request('POST', '/login', { email, password });
});


Cypress.Commands.add("sentRequest", (endpoint, method, body = null) => {
  cy.request({
    method: method,
    url: endpoint,
    body: body,
    headers: {
      Authorization: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
      "Content-type": 'application/json',
    },
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('getGoal', () => {
  cy.sentRequest("/team/90151285552/goal", "GET")}
)

Cypress.Commands.add('createGoal', () => {
  cy.sentRequest("/team/90151285552/goal", "POST", {"name": faker.company.name()})
});

Cypress.Commands.add('updateGoal',() => {
  cy.createGoal()
      .then((responseObject) => {
        cy.wrap(responseObject.body.goal.id).as('goalId')
      })

  cy.get('@goalId').then((id => {
    cy.sentRequest("/goal/" + id, "PUT", {"name": faker.animal.petName()})
  }))
})

Cypress.Commands.add('deleteGoal', () => {
  cy.createGoal()
    .then((responseObject) => {
      cy.wrap(responseObject.body.goal.id).as('goalId')
    })
  cy.get('@goalId').then(id => {
    cy.sentRequest("/goal/" + id, "DELETE")
  })
})