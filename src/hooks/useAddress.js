// hooks/useAddress.js
import { useState, useEffect } from "react";
import api from "../api/axios"; // senin axios instance'ın

export function useAddress() {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchAddresses() {
    setLoading(true);
    const { data } = await api.get("/user/address");
    setAddresses(data);
    setLoading(false);
  }

  async function addAddress(formData) {
    await api.post("/user/address", formData);
    fetchAddresses();
  }

  async function updateAddress(formData) {
    await api.put("/user/address", formData);
    fetchAddresses();
  }

  async function deleteAddress(id) {
    await api.delete(`/user/address/${id}`);
    fetchAddresses();
  }

  useEffect(() => {
    fetchAddresses();
  }, []);

  return { addresses, loading, addAddress, updateAddress, deleteAddress };
}
