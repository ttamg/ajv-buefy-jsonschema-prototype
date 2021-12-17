<template>
  <div class="section content">
    <h1>Input validation example uses field schema for each field in turn</h1>

    <div class="box">
      <b-field
        label="Input value to validate here"
        :type="isError"
        :message="errorMessage"
      >
        <b-input
          v-model.number="value"
          type="number"
          placeholder="number input"
        />
        <b-input v-model="value" placeholder="text input" />
      </b-field>

      <div>Value = {{ value }}</div>
      <div>Type = {{ typeof value }}</div>
      <div>Field type = {{ fieldType }}</div>
      <div>AJV validation = {{ valid }}</div>
      <div>isError = {{ isError }}</div>
      <div>errorMessage = {{ errorMessage }}</div>
    </div>

    <div class="box">
      <b-field label="Select field for validation rules">
        <b-select placeholder="Select a field to test" v-model="field">
          <option v-for="option in fields" :value="option" :key="option">
            {{ option }}
          </option>
        </b-select>
      </b-field>

      <div>Field type = {{ fieldType }}</div>

      <h4>Field JSON Schema</h4>
      <div><vue-json-pretty :data="fieldSchema" /></div>
    </div>

    <div class="box">
      <h4>Full schema</h4>
      <div><vue-json-pretty :data="schema" /></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import _ from "lodash";
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";

// JSON schema to load
import schema1 from "@/schemas/schema1.js";

// AJV setup
import Ajv from "ajv";
const ajv = new Ajv();

export default Vue.extend({
  name: "Input",
  components: { VueJsonPretty },
  data() {
    return {
      schema: { properties: {} },
      field: "",
      value: null,
    };
  },
  computed: {
    fields: function () {
      return Object.keys(this.schema.properties);
    },
    fieldSchema: function () {
      if (this.field) {
        return this.schema.properties[this.field];
      } else {
        return {};
      }
    },
    fieldType: function () {
      if (this.fieldSchema == {}) {
        return false;
      } else if ("type" in this.fieldSchema) {
        return this.fieldSchema.type;
      } else {
        return false;
      }
    },
    valid: function () {
      const validator = ajv.compile(this.fieldSchema);
      const valid = validator(this.value);
      if (valid == true) {
        return valid;
      } else {
        return validator.errors;
      }
    },
    isError: function () {
      if (this.valid == true) {
        return "";
      } else {
        return "is-danger";
      }
    },
    errorMessage: function () {
      // Just returns the top message
      if (_.isArray(this.valid) == true) {
        return this.valid[0].message;
      } else {
        return "";
      }
    },
  },
  mounted() {
    this.schema = schema1;
  },
});
</script>
