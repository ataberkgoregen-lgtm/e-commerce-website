// pages/OrderSuccess.jsx
import { useHistory } from "react-router-dom";

export default function OrderSuccess() {
  const history = useHistory();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      {/* Emoji */}
      <div className="text-6xl mb-4">🎉</div>

      {/* Başlık */}
      <h2 className="text-2xl sm:text-3xl font-bold mb-3">
        Siparişiniz Alındı!
      </h2>

      {/* Açıklama */}
      <p className="text-gray-500 mb-6 text-sm sm:text-base">
        Siparişiniz başarıyla oluşturuldu. En kısa sürede kargoya verilecektir.
      </p>

      {/* Ana Sayfaya Dön */}
      <button
        onClick={() => history.push("/")}
        className="bg-primary text-white px-6 py-3 rounded-md text-sm"
      >
        Alışverişe Devam Et
      </button>
    </div>
  );
}
