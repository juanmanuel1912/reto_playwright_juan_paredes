Feature: Login

  @success
  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I log in as an admin with username "admin" and password "admin123"
    Then I should be redirected to the dashboard

  @failure
  Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I log in as an admin with username "admin" and password "wrongpassword"
    Then I should see an error message indicating incorrect credentials
