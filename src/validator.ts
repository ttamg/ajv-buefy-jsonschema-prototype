// JSON schema to load
import schema1 from "@/schemas/schema1.js";

// AJV setup
import Ajv from "ajv";
const ajv = new Ajv();

// Compile it once now and export
const validator = ajv.compile(schema1);
export default validator;
