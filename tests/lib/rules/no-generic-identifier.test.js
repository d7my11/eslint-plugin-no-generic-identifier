const rule = require("../../../lib/rules/no-generic-identifier")
const RuleTester = require("eslint").RuleTester

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run("no-generic-identifier", rule, {
  valid: [
    {            
      code: "var foo = true"
    }
  ],
  invalid: [
    {
      code: "var Presentation = true",
      errors: [{ message: "Avoid using 'Presentation' as an identifier" }]
    },
    {
      code: "const Presentation = true",
      errors: [{ message: "Avoid using 'Presentation' as an identifier" }]
    },
    {
      code: "let Presentation = true",
      errors: [{ message: "Avoid using 'Presentation' as an identifier" }]
    },
    {
      code: "class Presentation {}",
      errors: [{ message: "Avoid using 'Presentation' as an identifier" }]
    },
    {
      code: "const Presentation = () => {}",
      errors: [{ message: "Avoid using 'Presentation' as an identifier" }]
    },
    {
      code: "let presentation = () => {}",
      errors: [{ message: "Avoid using 'presentation' as an identifier" }]
    },
  ],
});