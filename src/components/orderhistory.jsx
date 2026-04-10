import { useEffect, useState } from "react";
import api from "../api/axios";
import { ChevronDown, ChevronUp } from "lucide-react"; // İkonları eklemeyi unutma

export default function OrderHistory() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState(null); // Hangi siparişin açık olduğunu tutar

  useEffect(() => {
    api
      .get("/order")
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Siparişler çekilemedi:", err);
        setLoading(false);
      });
  }, []);

  const toggleOrder = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  if (loading)
    return (
      <div className="text-center mt-10 italic">Siparişler yükleniyor...</div>
    );

  return (
    <div className="w-full px-4 lg:w-4/5 m-auto mt-10 mb-20">
      <h2 className="text-2xl font-bold mb-6">Geçmiş Siparişlerim</h2>

      <div className="flex flex-col gap-4">
        {orders.length === 0 ? (
          <p className="text-gray-500">Henüz bir siparişiniz bulunmuyor.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-lg shadow-sm overflow-hidden bg-white"
            >
              {/* Sipariş Özeti - Tıklanabilir Alan */}
              <div
                className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"
                onClick={() => toggleOrder(order.id)}
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
                  <div>
                    <p className="text-gray-400 uppercase text-[10px] font-bold">
                      Sipariş Tarihi
                    </p>
                    <p className="font-semibold">
                      {new Date(order.order_date).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 uppercase text-[10px] font-bold">
                      Toplam Tutar
                    </p>
                    <p className="font-semibold text-primary">
                      {order.price.toFixed(2)} TL
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 uppercase text-[10px] font-bold">
                      Sipariş No
                    </p>
                    <p className="font-semibold">#ORD-{order.id}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  {expandedOrder === order.id ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
              </div>

              {/* Sipariş Detayları (Sadece expandedOrder id'ye eşitse görünür) */}
              {expandedOrder === order.id && (
                <div className="p-4 bg-white divide-y animate-fadeIn">
                  {order.products.map((p, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-4 first:pt-0 last:pb-0"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-20 bg-gray-100 rounded flex items-center justify-center overflow-hidden">
                          {p.images && p.images.length > 0 ? (
                            <img
                              src={p.images[0].url} // ✅ Doğru erişim yolu: images[0].url
                              alt={p.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="text-[10px] text-gray-400">
                              Resim Yok
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 uppercase tracking-wide">
                            {p.detail}
                          </p>
                          <p className="text-sm text-gray-500">
                            Adet:{" "}
                            <span className="font-semibold">{p.count}</span>
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">
                          {(p.price || 0).toFixed(2)} TL
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
