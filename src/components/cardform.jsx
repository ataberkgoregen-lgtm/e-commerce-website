// components/CardForm.jsx
import { useState } from "react";

// Boş form başlangıç değerleri
const emptyForm = {
  card_no: "",
  expire_month: "",
  expire_year: "",
  name_on_card: "",
  ccv: "",
};

export function CardForm({ onSubmit, onCancel, initialData = null }) {
  // initialData varsa düzenleme modu, yoksa yeni kart ekleme modu
  const [form, setForm] = useState(initialData || emptyForm);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Ay ve yılı sayıya çevirip gönderiyoruz
    onSubmit({
      ...form,
      expire_month: parseInt(form.expire_month),
      expire_year: parseInt(form.expire_year),
      ccv: parseInt(form.ccv),
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 border p-4 rounded-md mt-4"
    >
      {/* Kart Sahibi */}
      <input
        name="name_on_card"
        placeholder="Kart Üzerindeki İsim"
        value={form.name_on_card}
        onChange={handleChange}
        className="border p-2 rounded text-sm w-full"
        required
      />

      {/* Kart Numarası */}
      <input
        name="card_no"
        placeholder="Kart Numarası (16 hane)"
        value={form.card_no}
        onChange={handleChange}
        maxLength={16}
        className="border p-2 rounded text-sm w-full"
        required
      />

      {/* Son Kullanma Tarihi ve CCV */}
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          name="expire_month"
          placeholder="Ay (12)"
          type="number"
          min={1}
          max={12}
          value={form.expire_month}
          onChange={handleChange}
          className="border p-2 rounded text-sm w-full"
          required
        />
        <input
          name="expire_year"
          placeholder="Yıl (2028)"
          type="number"
          min={2024}
          value={form.expire_year}
          onChange={handleChange}
          className="border p-2 rounded text-sm w-full"
          required
        />
        <input
          name="ccv"
          placeholder="CCV (321)"
          type="number"
          value={form.ccv}
          onChange={handleChange}
          className="border p-2 rounded text-sm w-full"
          required
        />
      </div>

      {/* Butonlar */}
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-md w-full text-sm"
        >
          {initialData ? "Güncelle" : "Kaydet"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="border px-4 py-2 rounded-md w-full text-sm"
        >
          İptal
        </button>
      </div>
    </form>
  );
}
