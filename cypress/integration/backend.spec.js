/// <reference types="cypress" />

describe('Validando produtos', () => {

    before(() => {
        cy.visit('http://automationpractice.com')
    })

    it('Blouse', () => {
        cy.request({
            method: 'POST',
            url:'http://automationpractice.com/index.php?rand=',
            body: {
                name: 'Blouse',
                price: '$27.00',
                link: 'http://automationpractice.com/index.php?id_product=2&controller=product#/size-s/color-black'
            }

        }).then(res => console.log(res))
    })
    it('Faded Short Sleeve T-shirts', () => {
        cy.request({
            method: 'POST',
            url:'http://automationpractice.com/index.php?rand=',
            body: {
                name: 'Faded Short Sleeve T-shirts',
                price: '$33.02',
                link: 'http://automationpractice.com/index.php?id_product=1&controller=product#/size-s/color-orange'
            }

        }).then(res => console.log(res))
    })
    it('Printed Dress', () => {
        cy.request({
            method: 'POST',
            url:'http://automationpractice.com/index.php?rand=',
            body: {
                name: 'Printed Dress',
                price: '$26.00',
                link: 'http://automationpractice.com/index.php?id_product=3&controller=product#/size-s/color-orange'
            }

        }).then(res => console.log(res))
    })

    it('Printed Dress', () => {
        cy.request({
            method: 'POST',
            url:'http://automationpractice.com/index.php?rand=',
            body: {
                name: 'Printed Dress',
                price: '$50.99',
                link: 'http://automationpractice.com/index.php?id_product=4&controller=product#/size-s/color-beige'
            }

        }).then(res => console.log(res))
    })

    it('Printed Summer Dress', () => {
        cy.request({
            method: 'POST',
            url:'http://automationpractice.com/index.php?rand=',
            body: {
                name: 'Printed Summer Dress',
                price: '$28.98',
                link: 'http://automationpractice.com/index.php?id_product=5&controller=product#/size-s/color-yellow'
            }

        }).then(res => console.log(res))
    })

    it('Printed Summer Dress', () => {
        cy.request({
            method: 'POST',
            url:'http://automationpractice.com/index.php?rand=',
            body: {
                name: 'Printed Summer Dress',
                price: '$30.50',
                link: 'http://automationpractice.com/index.php?id_product=6&controller=product#/size-s/color-yellow'
            }

        }).then(res => console.log(res))
    })

    it('Printed Chiffon Dress', () => {
        cy.request({
            method: 'POST',
            url:'http://automationpractice.com/index.php?rand=',
            body: {
                name: 'Printed Chiffon Dress',
                price: '$16.40',
                link: 'http://automationpractice.com/index.php?id_product=6&controller=product#/size-s/color-yellow'
            }

        }).then(res => console.log(res))
    })


})