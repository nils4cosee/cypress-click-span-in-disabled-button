
describe("click reproduction", () => {
  it("clicks", () => {
    cy.visit("index.html")
    cy.contains("span", "Click me").click()
    cy.contains("Button clicked").should('not.exist')
  })
})