//------ Intern Tests ------ //
const Intern = require("../lib/Intern");

    //------- Intern Object & Role Tests ------- //
test("Can instantiate Intern instance", () => {
  const e = new Intern();
  expect(typeof(e)).toBe("object");
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

    //------- Intern Name Tests ------- //
test("Can set name via constructor arguments", () => {
  const name = "Bill";
  const e = new Intern(name);
  expect(e.name).toBe(name);
});

test("Can get name via getName()", () => {
  const testValue = "Bill";
  const e = new Intern(testValue);
  expect(e.getName()).toBe(testValue);
});

    //------- Intern ID Tests ------- //
test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Intern("Bill", testValue);
  expect(e.id).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Intern("Bill", testValue);
  expect(e.getId()).toBe(testValue);
});

    //------- Intern Email Tests ------- //
test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Intern("Bill", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Intern("Bill", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

    //------- Intern School Tests ------- //
test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Bill", 1, "test@test.com", testValue);
  expect(e.getSchool).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Bill", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});