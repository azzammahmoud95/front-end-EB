# Project Overview

Welcome to Stitches Studios where we aim to implement a sleek and modern user interfaces

# Task at Hand

Your mission, should you choose to accept it, is to transform the provided design into a fully functional and visually appealing user interface. Some components, such as buttons, date pickers, and checkboxes, are ready for use. Focus on implementing the remaining design elements and ensuring a seamless user experience.

# Project Description

### Career Test

- Based on the provided design available here https://xd.adobe.com/view/f2cd48d1-572e-454d-9f8b-05b0c86454c1-a79e/grid

- The career test comprises 50 questions categorized into:

  1. Creative and Artistic
  2. Analytical and Investigative
  3. Social and Helping
  4. Enterprising and Leadership
  5. Conventional and Organizational Interests

- Each category is linked to multiple majors, each with its top careers.
- The result page will display the category with the highest cumulative grade, its majors, and the top careers.

- The career test begins with the user entering their name and email. Questions are presented randomly, each with 5 options:

  1.  Not In The Least (grade: 1)
  2.  Slightly (grade: 2)
  3.  Moderately (grade: 3)
  4.  Very Much (grade: 4)
  5.  Extremely (grade: 5)

- After each question submission, a request is sent with the test id, question id, and grade. In between questions, the user is prompted for gender and date of birth, updating user data.
- Users can go back, edit their answers, and continue.
- Upon completing the questions, the user is asked to acknowledge that the choice of major based on the career test results is their responsibility, and Stitches Studios is not liable for the outcomes.

- Upon pressing the "Check Results" button, the result page displays the recommended majors and their top careers.

### Addition Task

- Fix the Button component in order to use it as follows:
  > < Button props>
  > This is a button
  > </ Button>
- Implement the triangle animation as presented in page 11, and add it to the right part of the page as shown in page 2

# API Integration

To fetch data from the backend, use the following API:
IP Address: 192.168.18.111
**To launch the test:**

> Endpoint: /career-test/launch-test
> Request Type: POST
> Payload:
> {
> "email": "user@example.com",
> "name": "Stitches Studios"
> }

**To get the test's questions:**

> Endpoint: /career-test/:careerTestId/questions
> Request Type: GET

**To send the questions' answer:**

> Endpoint: /career-test/:careerTestId
> Request Type: PATCH
> Payload:
> {
> "category": "Creative and Artistic",
> "value": "5",
> "question": "b0ff5ff9-4d77-4c13-a8e2-90d8b249519f"
> }

**To get the test results:**

> Endpoint: /career-test/result/:careerTestId
> Request Type: GET

**To get the examinee data:**

> Endpoint: /examinee/:exameniId
> Request Type: GET

**To update the examinee data:**

> Endpoint: /examinee/:exameniId
> Request Type: PATCH
> Payload:
> {
> "birthdate": "2000-5-2",
> "gender": "Female",
> }

# Optimization Guidelines

Efficiency is crucial! Follow these guidelines for optimal results:

- _Performance_: Prioritize efficient algorithms and practices for smooth user interactions.
- _Modularity_: Break down your code into modular components for better maintainability and reusability.
- _Responsiveness_: Ensure the user interface is responsive across different devices and screen sizes.
- _API Calls_: Handle API calls asynchronously to prevent blocking the user interface.

_Feel free to reach out for clarifications or assistance. Let's craft a fantastic user interface that aligns seamlessly with the provided design!_

# Happy coding! 🚀
