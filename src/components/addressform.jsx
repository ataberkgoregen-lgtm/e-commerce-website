import { useState } from "react";
import { turkishCities } from "../cities"; // şehir listesi

const emptyForm = {
  title: "",
  name: "",
  surname: "",
  phone: "",
  city: "",
  district: "",
  neighborhood: "",
  address: "",
};

export function AddressForm({ onSubmit, onCancel, initialData = null }) {
  const [form, setForm] = useState(initialData || emptyForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 border p-4 rounded-md"
    >
      <input
        name="title"
        placeholder="Adres Başlığı"
        value={form.title}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <div className="flex gap-2">
        <input
          name="name"
          placeholder="Ad"
          value={form.name}
          onChange={handleChange}
          className="border p-2 rounded w-1/2"
          required
        />
        <input
          name="surname"
          placeholder="Soyad"
          value={form.surname}
          onChange={handleChange}
          className="border p-2 rounded w-1/2"
          required
        />
      </div>
      <input
        name="phone"
        placeholder="Telefon"
        value={form.phone}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <select
        name="city"
        value={form.city}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      >
        <option value="">İl Seçiniz</option>
        {turkishCities.map((city) => (
          <option key={city} value={city.toLowerCase()}>
            {city}
          </option>
        ))}
      </select>
      <input
        name="district"
        placeholder="İlçe"
        value={form.district}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <input
        name="neighborhood"
        placeholder="Mahalle"
        value={form.neighborhood}
        onChange={handleChange}
        className="border p-2 rounded"
        required
      />
      <textarea
        name="address"
        placeholder="Adres Detayı"
        value={form.address}
        onChange={handleChange}
        className="border p-2 rounded"
        rows={3}
        required
      />
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md w-full"
        >
          {initialData ? "Güncelle" : "Kaydet"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border px-4 py-2 rounded-md w-full"
        >
          İptal
        </button>
      </div>
    </form>
  );
}
