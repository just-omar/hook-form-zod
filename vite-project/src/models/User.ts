import { z } from "zod";

export const BasicUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be 2 or more characters long" }),
  username: z
    .string()
    .trim()
    .toLowerCase()
    .min(4, { message: "Name must be 4 or more characters long" }),
  email: z.string().email().trim().toLowerCase(),
  phone: z
    .string()
    .min(10, { message: "Phone numbers are minimum of 10 digits" }),
  // .regex(/^[0-9]+$/, { message: "Only numbers are allowed" })
  // .length(10, { message: "10 numbers are required" })
  // .transform(
  //   (val) => `${val.slice(0, 3)} - ${val.slice(3, 6)} - ${val.slice(6)}`
  // ),
  website: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, { message: "URLs must be minimum of 5 characters" })
    .refine((val) => val.indexOf(".") !== -1, { message: "Invalid URL" })
    .optional(),
  company: z.object({
    name: z
      .string()
      .trim()
      .min(5, { message: "Company name must be 5 or more characters long" }),
    catchPhrase: z.string().optional(),
  }),
});

const UserAddressSchema = z.object({
  street: z
    .string()
    .trim()
    .min(5, { message: "Street must be 5 or more characters long" }),
  suite: z.string().trim().optional(),
  city: z
    .string()
    .trim()
    .min(2, { message: "City must be 2 or more characters long" }),
  zipcode: z.string().regex(/^\d{5}(?:[-\s]\d{4})?$/, {
    message: "Must be 5 digit zip.Optional 4 digit allowed",
  }),
});

const UserAddressSchemaWithGeo = UserAddressSchema.extend({
  geo: z.object({
    lat: z.string(),
    lng: z.string(),
  }),
});

const HasIDSSchema = z.object({ id: z.number().int().positive() });

export const UserSchemaWithAddress = BasicUserSchema.extend({
  address: UserAddressSchema,
}).merge(HasIDSSchema);

export const UserSchemaWithGeo = BasicUserSchema.extend({
  address: UserAddressSchemaWithGeo,
}).merge(HasIDSSchema);

export type BasicUser = z.infer<typeof BasicUserSchema>;
export type UserWithAddress = z.infer<typeof UserSchemaWithAddress>;
export type UserWithGeo = z.infer<typeof UserAddressSchemaWithGeo>;
