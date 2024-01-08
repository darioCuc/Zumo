import {
  getUsers,
  getUser,
  getPostsForUser,
  createPostForUser,
  getRandomUserId,
} from "../index";
import { expectedUserData, expectedPostResponse } from '../userData';

// change this value to test with different userId
// should be a number between 1 and 10

/* 
* You can either hardcode the user ID here (1-10) or 
* set value to 0 which will then use the getRandomUserId() function 
* to randomly pick an ID for you.
*/
const USER_ID = 0 || getRandomUserId();

describe("Mock API tests", () => {
  // Example test using jest
  it("should get list of all users", async () => {
    const users = await getUsers();
    expect(users.length).toEqual(10);
  });

  it("should get user by id", async () => {
    const user = await getUser(USER_ID);
    expect(user.id).toEqual(USER_ID);
  });
});

describe('Task 1 API tests', () => {
  it("Should return expected user data", async () => {
    const user = await getUser(USER_ID);
    expect(user).toEqual(expectedUserData[USER_ID]);
  });

  it("Should verify posts for a user have valid IDs", async () => {
    const posts = await getPostsForUser(USER_ID);
    expect(Array.isArray(posts)).toBe(true);
    posts.forEach((post) => {
      expect(post.userId).toEqual(USER_ID);
      expect(post.id).toBeGreaterThanOrEqual(1);
      expect(post.id).toBeLessThanOrEqual(100);
    });
  });

  it("Should create a post and verify the response", async () => {
    const response = await createPostForUser(USER_ID);
    expect(response.status).toEqual(201);
    const responseData = await response.json();
    expect(responseData).toHaveProperty("id");
    expect(responseData.title).toEqual(expectedPostResponse.title);
    expect(responseData.body).toEqual(expectedPostResponse.body);
    expect(responseData.userId).toEqual(USER_ID);
  });
});
