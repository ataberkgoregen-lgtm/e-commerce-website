import { useForm } from "react-hook-form";
import { fetchLogin } from "../store/index";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  async function sumbitHandler(formData) {
    dispatch(
      fetchLogin(
        {
          email: formData.email,
          password: formData.password,
        },
        formData.rememberMe,
      ),
    )
      .then(() => {
        const queryParams = new URLSearchParams(location.search);
        const targetPath = queryParams.get("redirect") || "/";

        toast.success("Giriş başarılı!");
        history.push(targetPath);
      })
      .catch((err) => {
        if (!err.response.data.message) {
          toast.error("Email ya da şifre hatalı !");
        } else {
          toast.error(err.response.data.message);
        }
      });
  }

  return (
    <div className="w-3/5 m-auto mt-25 mb-25">
      <form action="" onSubmit={handleSubmit(sumbitHandler)}>
        <div className="flex flex-col m-auto w-fit gap-6 justify-center">
          <div className="flex justify-between gap-1 flex-col">
            <label htmlFor="email">E-mail adress*</label>
            <input
              className="border-1 border-border bg-bg-gray rounded-md md:w-[450px] w-full py-2 px-2"
              id="email"
              type="email"
              {...register("email", {
                required: "Email zorunlu",
                pattern: {
                  value: "/^[^\s@]+@[^\s@]+\.[^\s@]+$/",
                  message: "Geçerli bir email gir!",
                },
              })}
              placeholder="Email*"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="flex justify-between gap-1 flex-col">
            <label htmlFor="pass">Password</label>
            <input
              id="pass"
              type="password"
              {...register("password", {
                required: "Şifre zorunlu",
                minLength: {
                  value: 5,
                  message: "Şifre en az 8 haneli olmalı",
                },
              })}
              placeholder="Password*"
              name="password"
              className="border-1 border-border bg-bg-gray rounded-md md:w-[450px] w-full py-2 px-2"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <div className="flex flex-row gap-5 justify-end">
            <label htmlFor="rememberMe">Remember Me</label>
            <input
              id="rememberMe"
              type="checkbox"
              {...register("rememberMe")}
              className="border-1 border-border bg-bg-gray rounded-md w-fit py-2 px-2"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-white rounded-md px-6 py-2 w-fit cursor-pointer"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
