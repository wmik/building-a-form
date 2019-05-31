> # building a form in react with styled components and hooks

1. Setup a basic react application
2. Think about what **COMPONENTS** I need
   - Input component - captures user input
   - Label component - Describes input field
   - Field component - Container for both a label and an input
   - Checkbox component - self explanatory
   - Button component - Submit button for the form
   - Form component

> Important: Learn to think in components. A component is the simplest unit of an application/website/e.t.c that can be reused, extended or configured independently. If it helps you could use lego blocks as a metaphor. Our goal is to use different independent lego blocks to build a larger lego "thing"

3. Setup data flow
   - Need to listen for `change` event in the input components
   - Need to listen for `submit` event in the form
