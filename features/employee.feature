Feature: Employee Management

  @add
  Scenario: Adding a new employee
    Given I am logged in as an admin
    When I navigate to the employee management page
    And I add the following new employee:
      | First Name | Middle Name | Last Name | Employee ID |
      | John       | D.          | Doe       | 12345       |
    Then I should see "12345" in the employee list

  @error
  Scenario: Adding a new employee with missing fields
    Given I am logged in as an admin
    When I navigate to the employee management page
    And I add the following new employee:
      | First Name | Last Name | Employee ID |
      | John       | Doe       |             |
    Then I should see an error message indicating missing fields

