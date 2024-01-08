# TASK 2: Zumo App Test Scenarios

## Feature: `Login`

### Scenario: Existing User Login

- **Priority**: High
- **Description**: Ensure the login process is smooth for existing users.
- **Objective**: To ensure the login process for existing users is secure, user-friendly, and functions as intended.
- **Steps**:

  1. From the app's initial screen, the user selects "I already have an account."
  2. User is prompted to enter their registered email address.
  3. If an incorrect email is entered, a "User Not Found" error message is displayed.
  4. Upon entering a valid email, the user is informed that a verification email has been sent.
  5. The user has options to open their email app or resend the verification email.
  6. Clicking the link in the verification email navigates the user back to the app.
  7. User is then required to enter their 6-digit passcode.
  8. Correct passcode entry allows access to the app's home page.

- **Acceptance Criteria**:

  - Correct and incorrect email entries must trigger appropriate responses.
  - The verification email process functions correctly.
  - The passcode entry grants access to the app upon successful verification.

## Feature: `Registration`

### Scenario: New User Registration Flow

- **Priority**: High
- **Description**: Validate the complete registration process for new users in the Zumo app.
- **Steps**:

  1. User selects "Create an account" from the main screen.
  2. User is required to view and agree to the terms & conditions.
  3. Entry of a unique username.
  4. Input of a valid email address and activation of the "Create an Account" button.
  5. User receives an email with a verification link.
  6. Clicking the verification link authenticates the user and redirects back to the app.
  7. User selects their country from a list; non-supported countries trigger an error message.
  8. User sets up a PIN, entering it twice for confirmation.
  9. Optional face recognition setup for devices that support it.
  10. Successful completion of these steps grants access to the app's home page.

- **Acceptance Criteria**:

  - Terms & conditions link opens and requires user acknowledgment to proceed.
  - Username and email fields accept valid entries and lead to account creation.
  - Email verification process works seamlessly.
  - Country selection functionality is accurate, with appropriate handling of non-supported countries.
  - PIN setup is secure and user-friendly.
  - Facial recognition setup is offered on compatible devices and functions correctly.

## Feature: `Wallet Creation`

### Scenario 1: Wallet Setup for Registered Users

- **Priority**: Medium
- **Description**: Validate the wallet creation process for authenticated users in the Zumo app.
- **Steps**:

  1. User logs into the app and selects the "Smartfolio" option from the bottom navigation bar.
  2. In the Smartfolio, user views the Total assets section and the Crypto Wallet section.
  3. User clicks on the Crypto Wallet section.
  4. A prompt appears requiring ID verification with a "Start verification" button.
  5. User proceeds with the ID verification to activate the Zumo account wallet.

- **Acceptance Criteria**:

  - Users are able to initiate and successfully create a wallet post-registration in.
  - Wallet creation process includes necessary security and verification steps.
  - The Crypto Wallet section in Smartfolio is accessible and interactive.
  - The ID verification prompt appears correctly and functions as intended.
  - Completion of ID verification enables the wallet creation process.
