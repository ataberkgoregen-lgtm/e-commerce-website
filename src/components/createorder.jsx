// pages/CreateOrder.jsx
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useAddress } from "../hooks/useAddress";
import { useCard } from "../hooks/useCard";
import { toast } from "react-toastify";
import { AddressForm } from "../components/addressform";
import { CardForm } from "../components/cardform";
import { setCart } from "../store/shoppingCartAction";
import api from "../api/axios";

export default function CreateOrder() {
  const dispatch = useDispatch();
  const history = useHistory();

  // Sepetteki ürünleri redux'tan al
  const cart = useSelector((store) => store.cart.cart);

  // Adres hook'u
  const { addresses, addAddress, updateAddress, deleteAddress } = useAddress();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [selectedShipping, setSelectedShipping] = useState(null);
  const [selectedBilling, setSelectedBilling] = useState(null);

  // Kart hook'u
  const { cards, addCard, updateCard, deleteCard } = useCard();
  const [showCardForm, setShowCardForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);

  // Hangi adımda olduğumuzu tutuyoruz
  const [step, setStep] = useState(1);

  // Sipariş gönderilirken loading göstermek için
  const [loading, setLoading] = useState(false);

  // Toplam fiyatı hesapla
  const total = cart.reduce(
    (acc, item) => acc + item.product.price * item.count,
    0,
  );

  // Adres formu gönderilince
  async function handleAddressSubmit(formData) {
    if (editingAddress) {
      // Mevcut adresi güncelle
      await updateAddress({ ...formData, id: editingAddress.id });
    } else {
      // Yeni adres ekle
      await addAddress(formData);
    }
    setShowAddressForm(false);
    setEditingAddress(null);
  }

  // Kart formu gönderilince
  async function handleCardSubmit(formData) {
    if (editingCard) {
      // Mevcut kartı güncelle
      await updateCard({ ...formData, id: editingCard.id });
    } else {
      // Yeni kart ekle
      await addCard(formData);
    }
    setShowCardForm(false);
    setEditingCard(null);
  }

  // Siparişi tamamla butonuna basınca
  async function handleCompleteOrder() {
    setLoading(true);
    try {
      const payload = {
        address_id: Number(selectedShipping.id), // Sayı olmalı
        order_date: new Date().toISOString().slice(0, 19), // "YYYY-MM-DDTHH:MM:SS" formatı
        // Kart numarasındaki boşlukları temizle ve sayıya çevir
        card_no: Number(selectedCard.card_no.toString().replace(/\s/g, "")),
        card_name: selectedCard.name_on_card,
        card_expire_month: Number(selectedCard.expire_month),
        card_expire_year: Number(selectedCard.expire_year),
        card_ccv: Number(selectedCard.ccv),
        price: Number(total.toFixed(2)),
        products: cart.map((item) => ({
          product_id: Number(item.product.id),
          count: Number(item.count),
          detail: item.product.name,
        })),
      };

      console.log("Gönderilen Payload:", payload);

      await api.post("/order", payload);

      // Başarılı olduğunda state'i ve sepeti sıfırla
      dispatch(setCart([]));
      localStorage.removeItem("cart");

      toast.success("Siparişiniz başarıyla oluşturuldu! Tebrikler.");
      history.push("/order/success");
    } catch (err) {
      console.error(
        "Sipariş hatası detayı:",
        err.response?.data || err.message,
      );
      alert("Sipariş oluşturulamadı. Lütfen bilgilerinizi kontrol edin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:w-4/5 m-auto mt-6 mb-20">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">Sipariş Oluştur</h2>

      {/* Adım Göstergesi */}
      <div className="flex items-center gap-3 mb-8">
        <span
          className={`font-bold text-sm sm:text-base ${step === 1 ? "text-primary" : "text-gray-400"}`}
        >
          1. Adres Bilgileri
        </span>
        <span className="text-gray-400">→</span>
        <span
          className={`font-bold text-sm sm:text-base ${step === 2 ? "text-primary" : "text-gray-400"}`}
        >
          2. Ödeme
        </span>
      </div>

      {/* ADIM 1: Adres Seçimi */}
      {step === 1 && (
        <div>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Teslimat Adresi */}
            <div className="flex-1">
              <h3 className="font-bold text-base sm:text-lg mb-3">
                Teslimat Adresi
              </h3>
              <div className="flex flex-col gap-3">
                {addresses.map((addr) => (
                  <div
                    key={addr.id}
                    onClick={() => setSelectedShipping(addr)}
                    className={`border-2 p-3 rounded-md cursor-pointer transition-colors ${
                      selectedShipping?.id === addr.id
                        ? "border-primary"
                        : "border-border"
                    }`}
                  >
                    <p className="font-bold text-sm">{addr.title}</p>
                    <p className="text-sm">
                      {addr.name} {addr.surname}
                    </p>
                    <p className="text-sm">{addr.phone}</p>
                    <p className="text-sm text-gray-500">
                      {addr.neighborhood}, {addr.district}, {addr.city}
                    </p>
                    <div className="flex gap-3 mt-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingAddress(addr);
                          setShowAddressForm(true);
                        }}
                        className="text-xs text-blue-500 hover:underline"
                      >
                        Düzenle
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteAddress(addr.id);
                        }}
                        className="text-xs text-red-500 hover:underline"
                      >
                        Sil
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fatura Adresi */}
            <div className="flex-1">
              <h3 className="font-bold text-base sm:text-lg mb-3">
                Fatura Adresi
              </h3>
              <div className="flex flex-col gap-3">
                {addresses.map((addr) => (
                  <div
                    key={addr.id}
                    onClick={() => setSelectedBilling(addr)}
                    className={`border-2 p-3 rounded-md cursor-pointer transition-colors ${
                      selectedBilling?.id === addr.id
                        ? "border-primary"
                        : "border-border"
                    }`}
                  >
                    <p className="font-bold text-sm">{addr.title}</p>
                    <p className="text-sm">
                      {addr.name} {addr.surname}
                    </p>
                    <p className="text-sm text-gray-500">
                      {addr.neighborhood}, {addr.district}, {addr.city}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Yeni Adres Ekle */}
          {!showAddressForm && (
            <button
              onClick={() => {
                setEditingAddress(null);
                setShowAddressForm(true);
              }}
              className="mt-4 border-2 border-dashed border-primary text-primary px-4 py-2 rounded-md w-full hover:bg-primary hover:text-white transition-colors text-sm"
            >
              + Yeni Adres Ekle
            </button>
          )}

          {showAddressForm && (
            <AddressForm
              onSubmit={handleAddressSubmit}
              onCancel={() => {
                setShowAddressForm(false);
                setEditingAddress(null);
              }}
              initialData={editingAddress}
            />
          )}

          {/* İleri Butonu */}
          <button
            onClick={() => setStep(2)}
            disabled={!selectedShipping || !selectedBilling}
            className="mt-6 bg-primary text-white px-6 py-3 rounded-md w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            İleri →
          </button>
        </div>
      )}

      {/* ADIM 2: Ödeme */}
      {step === 2 && (
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-3">Ödeme Yöntemi</h3>

          {/* Kayıtlı Kartlar */}
          <div className="flex flex-col gap-3">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className={`border-2 p-3 rounded-md cursor-pointer transition-colors ${
                  selectedCard?.id === card.id
                    ? "border-primary"
                    : "border-border"
                }`}
              >
                <p className="font-bold text-sm">{card.name_on_card}</p>
                <p className="text-sm">
                  **** **** **** {card.card_no.slice(-4)}
                </p>
                <p className="text-sm text-gray-500">
                  {card.expire_month}/{card.expire_year}
                </p>
                <div className="flex gap-3 mt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditingCard(card);
                      setShowCardForm(true);
                    }}
                    className="text-xs text-blue-500 hover:underline"
                  >
                    Düzenle
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteCard(card.id);
                    }}
                    className="text-xs text-red-500 hover:underline"
                  >
                    Sil
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Yeni Kart Ekle */}
          {!showCardForm && (
            <button
              onClick={() => {
                setEditingCard(null);
                setShowCardForm(true);
              }}
              className="mt-4 border-2 border-dashed border-primary text-primary px-4 py-2 rounded-md w-full hover:bg-primary hover:text-white transition-colors text-sm"
            >
              + Yeni Kart Ekle
            </button>
          )}

          {showCardForm && (
            <CardForm
              onSubmit={handleCardSubmit}
              onCancel={() => {
                setShowCardForm(false);
                setEditingCard(null);
              }}
              initialData={editingCard}
            />
          )}

          {/* Sipariş Özeti */}
          <div className="mt-6 border p-4 rounded-md bg-gray-50">
            <p className="font-bold text-sm mb-2">Sipariş Özeti</p>
            <p className="text-sm text-gray-600">
              Toplam: {total.toFixed(2)} TL
            </p>
            <p className="text-sm text-gray-600">
              Teslimat: {selectedShipping?.title} - {selectedShipping?.city}
            </p>
          </div>

          {/* Geri / Siparişi Tamamla */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <button
              onClick={() => setStep(1)}
              className="border px-6 py-3 rounded-md text-sm w-full sm:w-auto"
            >
              ← Geri
            </button>
            <button
              onClick={handleCompleteOrder}
              disabled={!selectedCard || loading}
              className="bg-primary text-white px-6 py-3 rounded-md w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              {loading ? "Sipariş Oluşturuluyor..." : "Siparişi Tamamla"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
