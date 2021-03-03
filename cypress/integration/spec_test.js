const { describe } = require("mocha");

describe("New test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })
    it.only("assert input are already there", () => {
        let selector;
        let value;
        const data = [
            {
                selector: "#searchInput", 
                value: "Roger Federer"  
            }
        ];
        data.forEach( (obj) => {
            selector = obj.selector;
            value = obj.value;
            cy.get(selector)
                .clear()
                .type(value)
                .should("have.value", value);
        })
        
    })
})