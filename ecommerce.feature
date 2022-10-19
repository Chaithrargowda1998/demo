Feature: Testing ecommerce application
Scenario: End to end testing ecommerce application
Given I opened Ecommerce page
    When I add items to cart
    Then Click on checkout, Select the country click on purchase
    And verify thank you message

