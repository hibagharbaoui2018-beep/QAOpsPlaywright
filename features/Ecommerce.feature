Feature: Ecommerce validations
    @validation
    Scenario: Placing the Order
        Given a login to Ecommerce application with "anshika@gmail.com" and "Iamking@000"
        When Add "zara coat 3" to Cart
        Then Verify "zara coat 3" is displayed
        When Enter valid details and Place the order
        Then Verify the order is present in the OrderHistory


#npx cucumber-js --tags "validation" --exit