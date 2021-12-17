# Prototype - Buefy Field Validation using JSON Schema and AJV

A prototype example to use JSON Schema as the validation rules for Buefy input components.

The example here uses the `Input` component in [Buefy](https://buefy.org/documentation/input) and also uses the popular JSON schema validator [AJV](https://ajv.js.org/).

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

## What is this about?

This is a very simple Vue 2 app I was using to work out how to do dynamic validation of Buefy inputs using JSON schema.

What to be aware of:

- JSON Schema sample is in the `src/schemas` folder. It doesn't have all schema options but a few
- The array isn't done correctly in this prototype
- it's not super neat but it is more to work out the right flows

There are three different examples. They can be switched over in the main component to mount in `App.vue` to look at the different versions:

1. `InputExample.vue` a simple example which parses the right field json schema from the full schema and applies that
2. `InputExample2.vue` that uses the full schema as a validator and assembles the value into key value pair to validate. This means the same validator can be used for all field validations
3. `InputExample3.vue` takes this one level further and moves the validator to an import (like doing it in a Vuex store as part of an action once the schema is fetched). The AJV compile stage might take a bit of time so we compile this once for the full schema and then we use this (function) to validate in the component. The code for the validator to be imported is in `validator.ts`

## What are the steps to embed validation Vue.js app

Broadly the following steps need to happen:

1. Load the JSON schema from somewhere
2. Create a validator from the AJV package simply - move this to a Vuex store
3. Now within the Vue component where the field is housed, in a computed property, pass the v-model value through the validator to validate it. (Consider debouncing it using `.lazy` to avoid having heavy processing on every keystroke?)
4. The validator returns `true` or `false` for the validation result and it also contains any error messages in the `validator.errors` property as a list of error objects, each with a `message` property that gives a human-readable error message. If here are no errors then the validator returns `true` and `validator.errors` is `null`
5. Computed properties can parse the valid and error messages. I'm just parsing the first error message if there are multiple as no-one particularly wants to see lots of errors at once!
6. Wire the valid into the field type with `is-danger` on Buefy or similar on other frameworks.
7. Pass any error message to the `Field.message` prop to be rendered

Simples!

## What are the lessons for me from this prototype?

1. We need to parse arrays and numbers and text differently. Suggest we use separate input widgets for that as the `v-model.number` casting does not seem to be dynamic. Also the `type='number'` does not seem to work dynamically either. The JSON schema `type` field needs to be parsed to work out the type of variable expected
2. If the validator is created at the global level then do this once in the Vuex store and make it available. If not then use it locally using just the specific field schema in each component. If we render a lot of fields, this might get quite heavy
3. Wiring into the Buefy components are pretty standard and simple using the simple example of the error format in the [Buefy docs](https://buefy.org/documentation/input)
