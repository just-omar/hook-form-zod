import { SubmitHandler, useForm } from "react-hook-form";
import {
  BasicUser,
  BasicUserSchema,
  //   UserSchemaWithAddress,
  //   UserWithAddress,
} from "../models/User";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Form() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm<BasicUser>({
    resolver: zodResolver(BasicUserSchema),
  });

  const onSubmit: SubmitHandler<BasicUser> = (data) => {
    console.log(data);
  };
  console.log(isValid);

  return (
    <>
      <button onClick={() => trigger()}>Display data requirements</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*  */}
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" {...register("name")} />
        {errors.name && <p>{errors.name?.message}</p>}
        {/*  */}
        <label htmlFor="username">username:</label>
        <input type="text" id="username" {...register("username")} />
        {errors.username && <p>{errors.username?.message}</p>}
        {/*  */}
        <label htmlFor="phone">phone:</label>
        <input type="text" id="phone" {...register("phone")} />
        {errors.phone && <p>{errors.phone?.message}</p>}
        {/*  */}
        <label htmlFor="email">email:</label>
        <input type="text" id="email" {...register("email")} />
        {errors.email && <p>{errors.email?.message}</p>}
        {/*  */}
        <label htmlFor="website">website:</label>
        <input type="text" id="website" {...register("website")} />
        {errors.website && <p>{errors.website?.message}</p>}
        {/*  */}
        <label htmlFor="company">company:</label>
        <input type="text" id="company" {...register("company.name")} />
        {errors.company?.name && <p>{errors.company?.name.message}</p>}
        {/*  */}
        <label htmlFor="catchPhrase">catchPhrase:</label>
        <input
          type="text"
          id="catchPhrase"
          {...register("company.catchPhrase")}
        />
        {errors.company?.catchPhrase && (
          <p>{errors.company?.catchPhrase?.message}</p>
        )}
        {/*  */}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
