import { useState, useEffect } from "react";
import api from "../api/axios";

export function useCard() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  // Kartları getir
  async function fetchCards() {
    setLoading(true);
    try {
      const { data } = await api.get("/user/card");
      setCards(data);
    } catch (err) {
      console.error("Kartlar getirilemedi:", err);
    } finally {
      setLoading(false);
    }
  }

  // Kart ekle
  async function addCard(formData) {
    try {
      const payload = {
        card_no: String(formData.card_no).replace(/\s/g, ""), // Boşlukları temizle
        expire_month: Number(formData.expire_month), // Sayıya çevir
        expire_year: Number(formData.expire_year), // Sayıya çevir
        name_on_card: formData.name_on_card, // String
      };

      await api.post("/user/card", payload);
      await fetchCards();
    } catch (err) {
      console.error("Kart eklenemedi:", err.response?.data || err.message);
      throw err;
    }
  }

  // Kart güncelle
  async function updateCard(formData) {
    try {
      const payload = {
        id: formData.id, // Dökümanda id string görünüyor ama sayı da olabilir
        card_no: String(formData.card_no).replace(/\s/g, ""),
        expire_month: Number(formData.expire_month),
        expire_year: Number(formData.expire_year),
        name_on_card: formData.name_on_card,
      };

      await api.put("/user/card", payload);
      await fetchCards();
    } catch (err) {
      console.error("Kart güncellenemedi:", err);
      throw err;
    }
  }

  // Kart sil
  async function deleteCard(id) {
    try {
      await api.delete(`/user/card/${id}`);
      await fetchCards();
    } catch (err) {
      console.error("Kart silinemedi:", err);
    }
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return { cards, loading, addCard, updateCard, deleteCard };
}
