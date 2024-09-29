import {
  BasicUserSchema,
  //   UserSchemaWithAddress,
  //   UserSchemaWithGeo,
} from "../models/User";
import { z } from "zod";

const UserResults = z.array(BasicUserSchema);

type UserArray = z.infer<typeof UserResults>;

export default async function fetchUsers(): Promise<UserArray | undefined> {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) return undefined;
    const usersJson: UserArray = await res.json();
    const parsedData = UserResults.parse(usersJson);
    // console.log("full data", usersJson);
    console.log("parsed data", parsedData);
    return parsedData;
  } catch (err) {
    if (err instanceof Error) console.log(err.stack);
  }
}
