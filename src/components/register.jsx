import { useForm } from "react-hook-form";
import { fetchRegister } from "../store/index";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function sumbitHandler(formData) {
    dispatch(
      fetchRegister({
        role_id: "3",
        name: formData.name,
        email: formData.email,
        password: formData.password,
      }),
    )
      .then(() => {
        toast.success("Register başarılı!");
        history.push("/");
      })
      .catch(() => {
        toast.error("Formu Hatalı doldurdunuz !");
      });
  }

  return (
    <div className="w-3/5 m-auto mt-15 mb-25">
      <form action="" onSubmit={handleSubmit(sumbitHandler)}>
        <div className="flex flex-col m-auto w-fit gap-6 justify-center">
          <div className="flex justify-between gap-1 flex-col">
            <label htmlFor="email">Name*</label>
            <input
              className="border-1 border-border bg-bg-gray rounded-md md:w-[450px] w-full py-2 px-2"
              id="name"
              type="text"
              {...register("name", {
                required: "Ad zorunlu",
                pattern: {
                  value: /^[a-z ,.'-]+$/i,
                  message: "Geçerli bir ad giriniz!",
                },
              })}
              placeholder="Name*"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div className="flex justify-between gap-1 flex-col">
            <label htmlFor="email">E-mail adress*</label>
            <input
              className="border-1 border-border bg-bg-gray rounded-md md:w-[450px] w-full py-2 px-2"
              id="email"
              type="email"
              {...register("email", {
                required: "Email zorunlu",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
                pattern: {
                  value: /(?=.*\d)(?=.*[A-Z]).{6,}/,
                  message: "Geçerli bir şifre girin",
                },
                minLength: {
                  value: 8,
                  message: "Şifre en az 8 haneli olmalı",
                },
              })}
              placeholder="Password*"
              className="border-1 border-border bg-bg-gray rounded-md md:w-[450px] w-full py-2 px-2"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div className="flex justify-between gap-1 flex-col">
            <label htmlFor="validate">Confirm Password</label>
            <input
              id="validate"
              type="password"
              {...register("confirmPassword", {
                required: "Şifre tekrarı zorunlu",
                validate: (value) =>
                  value === watch("password") || "Şifreler eşleşmiyor",
              })}
              placeholder="Confirm Password*"
              className="border-1 border-border bg-bg-gray rounded-md md:w-[450px] w-full py-2 px-2"
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-primary text-white rounded-md px-6 py-2 w-fit cursor-pointer"
          >
            Kayıt Ol
          </button>
        </div>
      </form>
    </div>
  );
}
