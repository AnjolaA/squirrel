const sum = require("../../sum");
const superagent = require("superagent");
// Tests
const url = "https://sf9ozma95k.execute-api.us-east-1.amazonaws.com/Stage/sam";
const path = "/1";
test("Response should be 200", async () => {
  const res = await superagent.get(url);
  expect(res.status).toBe(200);
});

test("Result should be 1", async () => {
  const res = await superagent.get(url);
  expect(res.body).toBe(1);
});
