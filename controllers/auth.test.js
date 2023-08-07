import auth from "./auth.js";

describe("test login function", () => {
  test("Test", () => {
    const result = auth.signin({
      password: "13234",
      email: "42dsfdsf1@ukr.net",
    });
    expect(result).toBe({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZDBjZWRjMWRiOGFhNTA5ODIwODExOCIsImlhdCI6MTY5MTQwOTMyNSwiZXhwIjoxNjkxNDkyMTI1fQ.nAF-QfDJToqjLXeorSAxg7uB1Kg5YrWYyU32L6uur-4",
      user: {
        email: "42dsfdsf1@ukr.net",
        subscription: "starter",
      },
    });
  });
});
