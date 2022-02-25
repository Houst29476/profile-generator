//------ Engineer Tests ------ //
const Engineer = require("../lib/Engineer");

    //------- Engineer Object & Role Tests ------- //
test("Can instantiate Engineer instance", () => {
  const e = new Engineer();
  expect(typeof(e)).toBe("object");
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

    //------- Engineer Name Tests ------- //
test("Can set name via constructor arguments", () => {
  const name = "Bill";
  const e = new Engineer(name);
  expect(e.name).toBe(name);
});

test("Can get name via getName()", () => {
  const testValue = "Bill";
  const e = new Engineer(testValue);
  expect(e.getName()).toBe(testValue);
});

    //------- Engineer ID Tests ------- //
test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Engineer("Bill", testValue);
  expect(e.id).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Engineer("Bill", testValue);
  expect(e.getId()).toBe(testValue);
});

    //------- Engineer Email Tests ------- //
test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Engineer("Bill", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Engineer("Bill", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

    //------- Engineer GitHub Tests ------- //
test("Can set GitHub account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Bill", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Bill", 1, "test@test.com", testValue);
  expect(e.getGitHub()).toBe(testValue);
});