import users from "../fixtures/users"

describe('pet store api', () => {
    it('should create user', () => {
        cy.createUser(users.userOne)
    })

    it('should update user', () => {
        cy.createUser(users.userOne)
        cy.request('PUT', `/user/${users.userOne.username}`, users.userUpdate
        ).then((response) => {
            expect(response.status).be.eq(200)
            expect(response.body).be.eqls({
                "code": 200,
                "type": "unknown",
                "message": "101",
            })
        })
    })

    it('should delete user', () => {
        cy.createUser(users.userOne)
        cy.request('DELETE', `/user/${users.userOne.username}`)
        .then((response) => {
            expect(response.status).be.eq(200);
         })
    })
})