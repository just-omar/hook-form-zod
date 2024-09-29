import { z } from "zod";

const mySchema = z.string();

mySchema.parse("omar"); // => "omar"
mySchema.parse(42); // => throws ZodError

mySchema.safeParse("omar"); // => {success:true;data:"omar"}
mySchema.safeParse(42); // => {success:false;error:ZodError}

const schema = z.coerce.string();
schema.parse("Dave"); // => "Dave"
schema.parse(42); // => "42"
schema.parse(true); // => "true"
