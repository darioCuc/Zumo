# Task 1 - Test Suite Modifications

## Overview

This document describes the enhancements made to the testing approach in the `index.js` and `api-test.js` files.

## Modifications

### `index.js`

- **Function Added**: `getRandomUserId`
  - **Purpose**: To dynamically generate user IDs for testing, enhancing the variability and coverage of the test suite.
  - **Behavior**: Generates a random user ID between 1 and 10.

### `api-test.js`

- **Change in `USER_ID` Usage**:
  - **Code**:

    ```javascript
    const USER_ID = 0 || getRandomUserId();
    ```

  - **Options**:
    - **Hardcoded**: Directly assign `USER_ID` a number between 1 and 10 to test a specific user.
    - **Randomized**: Set `USER_ID` to 0, enabling the `getRandomUserId()` function to select a user ID randomly.

## Implementation Note

This approach aims to mimic more realistic testing scenarios by ensuring different user data are tested in each run, thereby enhancing the robustness of our test suite.
