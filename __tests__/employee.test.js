//------ Employee Tests ------ //
const Employee = require("../lib/Employee");

    //------- Employee Object & Role Tests ------- //
test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Jerry", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});

    //------- Employee Name Tests ------- //
test("Can set name via constructor arguments", () => {
  const name = "Jerry";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can get name via getName()", () => {
  const testValue = "Jerry";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

    //------- Employee ID Tests ------- //
test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Jerry", testValue);
  expect(e.id).toBe(testValue);
});

test("Can get employee ID via getId()", () => {
  const testValue = 100;
  const e = new Employee("Jerry", testValue);
  expect(e.getId()).toBe(testValue);
});

    //------- Employee Email Tests ------- //
test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Jerry", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Jerry", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});