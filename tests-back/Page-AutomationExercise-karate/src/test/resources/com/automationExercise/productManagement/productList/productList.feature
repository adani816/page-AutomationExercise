@ms_productManag
Feature: API to query the product list

  Background:
    * url baseUrl

  Scenario: API 1: Get All Products List
    Given path "/api/productsList"
    When method GET
    Then status 200

  Scenario: API 2: POST To All Products List
    Given path "/api/productsList"
    When method POST
    Then status 200
    And match response.responseCode == 405
    And match response.message == "This request method is not supported."

  Scenario: API 3: Get All Brands List
    Given path "/api/brandsList"
    When method GET
    Then status 200

  Scenario: API 4: PUT To All Brands List
    Given path "/api/brandsList"
    When method PUT
    Then status 200
    And match response.responseCode == 405
    And match response.message == "This request method is not supported."

  Scenario: API 5: POST To Search Product
    Given path "/api/searchProduct"
    * param search_product = "TOP"
    When method POST
    Then status 200
    And match response.responseCode == 400
    And match response.message == "Bad request, search_product parameter is missing in POST request."