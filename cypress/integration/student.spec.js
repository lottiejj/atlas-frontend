describe("Students - display: ", function() {
    beforeEach(function() {
      cy.intercept("http://localhost:5000/api/students", { fixture: 'students.json' })
    })

    it("Headers correctly displayed", async function() {
      await cy.visit('/students')
      cy.get('#lastNameHeader').should("contain", "Last Name")
      cy.get('#firstNameHeader').should("contain", "First Name")
      cy.get('#githubUsernameHeader').should("contain", "Github Username")
      cy.get('#emailHeader').should("contain", "email")
    })

    it("Data Correctly Stored", async function() {
      await cy.visit('/students')
      cy.get('#student-list').should("contain", "Test")
      cy.get('#student-list').should("contain", "afred")
      cy.get('#student-list').should("contain", "vt-al@email.com")
      cy.get('#student-list').should("contain", "Imaginary")
    })
})

describe("Students - Sort Table:", function() {
  beforeEach( function() {
    cy.intercept("http://localhost:5000/api/students", { fixture: 'students.json' })
    
  })

  it("Last Name Alpabetical Order",async function() {
    await cy.visit("/students")
    cy.get("#lastNameHeader").click()
    cy.get("td:first").should("contain", "Person")
  })

  it("Last Name Reverse Alpabetical Order", async function() {
    await cy.visit("/students")
    cy.get("#lastNameHeader").click()
    cy.get("#lastNameHeader").click()
    cy.get("td:first").should("contain", "Von Test")
  })

  it("First Name Reverse Alpabetical Order", async function() {
    await cy.visit("/students")
    cy.get("#firstNameHeader").click()
    cy.get("td:first").should("contain", "Von Test")
  })

  it("First Name Reverse Alpabetical Order", async function() {
    await cy.visit("/students")
    cy.get("#firstNameHeader").click()
    cy.get("#firstNameHeader").click()
    cy.get("td:first").should("contain", "Testerson")
  })

  it("GH Username Reverse Alpabetical Order", async function() {
    await cy.visit("/students")
    cy.get("#githubUsernameHeader").click()
    cy.get("td:first").should("contain", "Von Test")
  })

  it("GH Username Reverse Alpabetical Order", async function() {
    await cy.visit("/students")
    cy.get("#githubUsernameHeader").click()
    cy.get("#githubUsernameHeader").click()
    cy.get("td:first").should("contain", "User")
  })

  it("Email Reverse Alpabetical Order", async function() {
    await cy.visit("/students")
    cy.get("#emailHeader").click()
    cy.get("td:first").should("contain", "User")
  })

  it("Email Reverse Alpabetical Order", async function() {
    await cy.visit("/students")
    cy.get("#emailHeader").click()
    cy.get("#emailHeader").click()
    cy.get("td:first").should("contain", "Von Test")
  })


})
  