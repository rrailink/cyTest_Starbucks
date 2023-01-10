/// <reference types = "Cypress"/>

describe('starbucks', () => {
    // Проверка контента и кастомезации заказа
    it('Проверка контента и кастомезации заказа', () => {
        cy.viewport(1920, 1080)
        // Проверка на стартовой странице
        cy.visit('https://www.starbucks.com/')
        // Провекра url
        cy.url().should('include', 'starbucks')
        // Проверка title
        cy.title().should('include', 'Starbucks Coffee Company')
        cy.get('main[class="relative shell_primaryContent__Aoh08"]')
        .children()
        .should('have.length', 11)
        .eq(4)
        .should('be.visible')
        .as('homePage')
        cy.get('@homePage')
        .contains('Warm and heartyThe Impossible™ Breakfast Sandwich will keep you going with an Impossible Sausage patty made from plants, egg and Cheddar. ****')
        .should('be.visible')
        // Проверка на странице продукта и добавление дефолтного сэндича
        cy.get('a[href$="/product/2123236/single"]').click()
        cy.title().should('include', 'Impossible™ Breakfast Sandwich: Starbucks Coffee Company')
        cy.get('div[class="lg-flex items-center"]')
        .contains('Impossible™ Breakfast Sandwich420calories')
        .should('be.visible')
        cy.get('div[class="flex-grow column___SYa4Y columnRight___3Jdtn "]')
        .contains('CustomizationsSandwich OptionsEdit Sandwich Options')
        .should('be.visible')
        // click ADD TO ORDER
        cy.get('button[class="sb-frap sb-frap--centerSVG"]').first().click()
        // click EDIT
        cy.get('button[class="self-end text-sm sb-editField__button"]').click()
        // Проверка меню кастомизации
        cy.get('div[class="frapPadding optionsSection___1-7w4"]')
        .children()
        .should('have.length', 6)
        .as('menu')
        cy.get('@menu').eq(0).contains('Sandwich Options').should('be.visible')
        cy.get('@menu').eq(1).contains('CheesesCheese').should('be.visible')
        cy.get('@menu').eq(2).contains('EggsNo Eggs').should('be.visible')
        cy.get('@menu').eq(3).contains('MeatsNo Meat').should('be.visible')
        cy.get('@menu').eq(4).contains('SaucesAdd Sriracha').should('be.visible')
        // Выбор с сыром
        cy.get('input[id="Cheese"]').check().should('be.checked')
        // click DONE
        cy.get('button[class="sb-frap sb-frap--centerSVG"]').last().click()
        // click ADD TO ORDER
        cy.get('button[class="sb-frap sb-frap--centerSVG"]').first().click()
        // click EDIT
        cy.get('button[class="self-end text-sm sb-editField__button"]').click()
        // click RESET
        cy.get('button[class="sb-button sb-button--default mr3 lg-mr0"]').click()
        // Выбор без яиц
        cy.get('input[id="No Eggs"]').check().should('be.checked')
        // click DONE
        cy.get('button[class="sb-frap sb-frap--centerSVG"]').last().click()
        // click ADD TO ORDER
        cy.get('button[class="sb-frap sb-frap--centerSVG"]').first().click()
        // click EDIT
        cy.get('button[class="self-end text-sm sb-editField__button"]').click()
        // click RESET
        cy.get('button[class="sb-button sb-button--default mr3 lg-mr0"]').click()
        // Выбор без мяса
        cy.get('input[id="No Meat"]').check().should('be.checked')
        // click DONE
        cy.get('button[class="sb-frap sb-frap--centerSVG"]').last().click()
        // click ADD TO ORDER
        cy.get('button[class="sb-frap sb-frap--centerSVG"]').first().click()
        // Переход в корзину
        cy.get('button[class="relative flex justify-center cursor-pointer"]').click()
    })
    // Проверка корзины
    it('Проверка корзины', () => {
        cy.viewport(1920, 1080)
        // Проверка title
        cy.title().should('include', 'Review order: Starbucks Coffee Company')
        // Переход в корзину
        cy.get('div[class="sb-contentColumn__inner"]')
        .children()
        .should('have.length', 5)
        // Проверка контента в корзине
        cy.get('div[class="size12of12 wrapper___3SstH"]')
        .contains('1 Piece')
        .should('be.visible')
        cy.get('div[class="productDetails___202Jj"]')
        .contains('1 Piece Cheese')
        .should('be.visible')
        cy.get('div[class="productDetails___202Jj"]')
        .contains('1 Piece No Eggs')
        .should('be.visible')
        cy.get('div[class="productDetails___202Jj"]')
        .contains('1 Piece No Meat')
        .should('be.visible')
    })
})