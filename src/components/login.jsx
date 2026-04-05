import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handlesubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="w-3/5">
      <form action="">
        <input
          type="email"
          {...register(email, {
            required: "Email zorunlu",
            pattern: {
              value: "/^[^\s@]+@[^\s@]+\.[^\s@]+$/",
              message: "Geçerli bir email gir!",
            },
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type="password"
          {...register("password", {
            required: "Şifre zorunlu",
            minLength: {
              value: 5,
              message: "Şifre en az 5 haneli olmalı",
            },
          })}
          name="password"
          id=""
        />
      </form>
    </div>
  );
}
