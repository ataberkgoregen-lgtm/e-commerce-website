import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
export default function Register() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  return <div></div>;
}
