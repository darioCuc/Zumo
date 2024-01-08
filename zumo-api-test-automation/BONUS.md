# Bonus Task: Extended Zumo App Test Scenarios

## Feature: App tour

### Scenario: User Journey - App Tour

- **Priority**: Medium
- **Description**: Assess the app tour experience for new users selecting "Take a tour".
- **Acceptance Criteria**:
  - Seamless navigation through the tour.
  - The app tour provides a guided, view-only experience of the app's features.
  - Relevant sections like "Market Prices" and "Recent Activity" are displayed but non-interactive.
  - Seamless navigation through Home, Smartfolio, Exchange, and Send options.

## Feature: Top bar icons

### Scenario 1: User Icon

- **Priority**: Medium
- **Description**: Ensure accessibility and functionality of the user account settings from the home screen.
- **Steps**:
  1. User accesses account settings by clicking the top right corner button on the home screen.
  2. User's name and profile bubble, along with the logout button, are displayed.
  3. Various options available in Settings: Zumo Account, Security, Identity Check, Notifications, FAQ, Contact Support, What's New, About Zumo, Rate Zumo on the App Store.
  4. Validate each option in Settings for correct functionality and navigation.
- **Acceptance Criteria**:
  - User account settings are accessible and display user details correctly.
  - All options in Settings are interactive and lead to the appropriate sections or features.
  - The settings menu is intuitive and enhances user experience.
  
### Scenario 2: Notification Icon

- **Priority**: Low
**Description**: Verify that the notification screen is accessible to authenticated users and provides multiple notification options.
- **Steps**:
  1. Authenticated users click the notification icon to access the notifications center.
  2. The system prompts for face recognition to open notifications (if applicable).
  3. The notification menu includes an 'X' button for closing, with tabs for Recent, Transactions, and Price Alerts.
  4. Check for the appropriate display of 'No recent activity' in empty states.
- **Acceptance Criteria**:
  - Notification center opens upon icon click and face recognition verification (if enabled).
  - All tabs within the notification center are accessible and display relevant information.
  - Empty state messages are correctly displayed when no notifications are present.

## Feature: Additional Login Screens

### Scenario 1: Interaction with Initial Options

- **Priority**: High
- **Description**: Validate the functionality of the "I'm new here" and "I already have an account" options, along with the animation behavior.
- **Acceptance Criteria**:
  - Two options ("I'm new here", "I already have an account") are visible and functional.
  - Three animations cycle correctly within the 8-12 second timeframe.

### Scenario 2: Error Handling for Unregistered Users

- **Priority**: Medium
- **Acceptance Criteria**:
  - Attempting to log in with an unregistered email triggers an appropriate error message.

### Scenario 3: Terms and Conditions Acknowledgment

- **Priority**: High
- **Acceptance Criteria**:
  - Users must open and acknowledge the terms & conditions before proceeding.
