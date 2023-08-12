import mongoose from "mongoose";
import request from "supertest";
import "dotenv/config";

import User from "../models/user";

import app from "../app";

const { DB_HOST, PORT } = process.env;

describe("test login function", () => {
  let server = null;

  beforeAll(async () => {
    await mongoose.connect(DB_HOST);
    server = app.listen(PORT);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

  test("test login with correct data", async () => {
    const loginData = {
      email: "namoher431@v1zw.com",
      password: "1111111",
    };
    const { statusCode, body } = await request(app)
      .post("/users/login")
      .send(loginData);

    expect(statusCode).toBe(200);
    expect(body.token).toBeTruthy();
    expect(body.user).toHaveProperty("email", loginData.email);
    expect(body.user).toHaveProperty("subscription");
    expect(typeof body.user.email).toBe("string");
    expect(typeof body.user.subscription).toBe("string");

    const user = await User.findOne({ email: loginData.email });
    expect(user.name).toBe(loginData.name);
  });
});
