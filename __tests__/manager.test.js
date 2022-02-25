//------ Manager Tests ------ //
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

    //------- Manager Object & Role Tests ------- //
test("Can instantiate Employee instance", () => {
  const e = new Manager();
  expect(typeof(e)).toBe("object");
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Bill", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

    //------- Manager Name Tests ------- //
test("Can set name via constructor arguments", () => {
  const name = "Bill";
  const e = new Manager(name);
  expect(e.name).toBe(name);
});

test("Can get name via getName()", () => {
  const testValue = "Bill";
  const e = new Manager(testValue);
  expect(e.getName()).toBe(testValue);
});

    //------- Manager ID Tests ------- //
test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Bill", testValue);
  expect(e.id).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Manager("Bill", testValue);
  expect(e.getId()).toBe(testValue);
});

    //------- Manager Email Tests ------- //
test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Manager("Bill", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Manager("Bill", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

    //------- Manager Office Phone Tests ------- //
test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Bill", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Bill", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});