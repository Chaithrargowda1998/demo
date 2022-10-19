Feature: Testing ecommerce application to understand data driven
Scenario:  Filling the form
Given I open Ecommerce page
    When I filled the details 
            |name     |gender|
            |Chaithraa|Female|
    Then Validate the form behaviour
   And Select the shop page

   