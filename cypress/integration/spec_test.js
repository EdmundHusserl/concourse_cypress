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
                selector: "input[name=firstName]", 
                value: "Jorge"  
            },
            {
                selector: "input[name=lastName]",
                value: "Pemjean-Letelier"
            },
            {
                selector: "input[name=age]",
                value: 36
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