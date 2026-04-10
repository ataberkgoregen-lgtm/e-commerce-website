import { useState, useEffect } from "react";
import api from "../api/axios";

export function useCard() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  // Kartları getir
  async function fetchCards() {
    setLoading(true);
    const { data } = await api.get("/user/card");
    setCards(data);
    setLoading(false);
  }

  // Kart ekle
  async function addCard(formData) {
    await api.post("/user/card", formData);
    fetchCards();
  }

  // Kart güncelle
  async function updateCard(formData) {
    await api.put("/user/card", formData);
    fetchCards();
  }

  // Kart sil
  async function deleteCard(id) {
    await api.delete(`/user/card/${id}`);
    fetchCards();
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return { cards, loading, addCard, updateCard, deleteCard };
}
