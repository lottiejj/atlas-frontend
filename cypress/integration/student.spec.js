describe("Students", function() {
    beforeEach(function() {
      cy.intercept("http://localhost:5000/api/students", { fixture: 'students.json' })
    })
    it("Shows a list of students", function() {
      cy.visit('/students')
      cy.get('#students-list').should("contain", "MOCK student name")
    })
  })
  