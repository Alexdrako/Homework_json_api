// import { faker } from '@faker-js/faker';
// import {envSetup} from 'env.json'
// envSetup()
//
// describe('Test Goals on clickup', () => {
//
//   it('should send GET request', () => {
//     cy.getGoal()
//       .then((responseObject) => {
//       expect(responseObject.status).to.eq(200);
//       expect(responseObject.body).to.have.property('goals');
//     });
//   });
// })
//
//   it('should send POST request and return 200',() => {
//         cy.createGoal()
//             .then((responseObject) => {
//               expect(responseObject.status).to.eq(200);
//               expect(responseObject.body).to.have.property('goal')
//               cy.wrap(responseObject.body.goal.id).as('goalId')
//               cy.get('@goalId').then(id => {
//                 cy.sentRequest("/goal/" + id, "DELETE")
//               })
//             })
//       })
//
//   it('should send PUT request and return 200',() => {
//     cy.updateGoal()
//     cy.get('@goalId').then(id => {
//       cy.sentRequest("/goal/" + id, "DELETE")
//         .then((responseObject) => {
//           expect(responseObject.status).to.eq(200)
//           cy.sentRequest("/goal/" + id, "GET")
//             .then((responseObject) => {
//               expect(responseObject.status).to.eq(404)
//         })
//     })
//   })})
//
//   it('should send DELETE request and return 200',() => {
//     cy.deleteGoal()
//       .then((responseObject) => {
//         expect(responseObject.status).to.eq(200)
//         cy.get('@goalId').then(id => {
//           cy.sentRequest("/goal/" + id, "GET")
//             .then((responseObject) => {
//               expect(responseObject.status).to.eq(404)
//             })
//         })
//       })
//   })
