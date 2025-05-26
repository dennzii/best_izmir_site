import { useState } from "react";

const events = [
  { id: 1, name: "Etkinlik 1", date: "2024-01-15", images: ["/img1.jpg", "/img2.jpg"] },
  { id: 2, name: "Etkinlik 2", date: "2025-01-01", images: ["/img3.jpg"] },
  { id: 3, name: "Etkinlik 3", date: "2025-06-01", images: ["/img4.jpg"] },
];

const now = new Date();

export default function Timeline() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">📅 Zaman Çizelgesi</h2>

      {/* Yatay zaman çizelgesi */}
      <div className="relative w-full h-40 flex items-center">
        <div className="absolute w-full border-t-2 border-dashed border-gray-300 top-1/2 transform -translate-y-1/2" />

        {events.map((event) => {
          const eventDate = new Date(event.date);
          const totalDuration =
            new Date(events[events.length - 1].date).getTime() -
            new Date(events[0].date).getTime();
          const offset =
            (eventDate.getTime() - new Date(events[0].date).getTime()) / totalDuration;

          const isPast = eventDate < now;
          const isFuture = eventDate > now;

          return (
            <div
              key={event.id}
              className="absolute text-center group"
              style={{ left: `${offset * 100}%`, transform: "translateX(-50%)" }}
            >
              <p
                className={`text-sm font-semibold mb-1 ${
                  isPast ? "text-gray-400" : isFuture ? "text-blue-500" : "text-black"
                } group-hover:scale-105 transition`}
              >
                {event.name}
              </p>
              <p className="text-xs text-gray-400 mb-1 group-hover:text-gray-600">
                {event.date}
              </p>
              <div
                className={`w-5 h-5 rounded-full mx-auto border-2 ${
                  isPast ? "bg-gray-300 border-gray-400" : isFuture ? "bg-blue-400 border-blue-500" : "bg-black border-black"
                } group-hover:scale-110 transition shadow-md`}
                onClick={() => setSelectedEvent(event)}
              />
            </div>
          );
        })}

        {/* Şimdi */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <div className="w-1 h-10 bg-black mx-auto"></div>
          <div className="text-xs text-center mt-1 font-semibold text-black">Şimdi</div>
        </div>
      </div>

      <div className="flex justify-between text-gray-400 text-sm px-2">
        <span>⬅️ Geçmiş Etkinlikler</span>
        <span>Yaklaşan Etkinlikler ➡️</span>
      </div>

      {/* Albüm Gösterimi */}
      {selectedEvent && (
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900">{selectedEvent.name}</h3>
            <button
              onClick={() => setSelectedEvent(null)}
              className="text-sm text-red-500 hover:underline"
            >
              ✖ Kapat
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {selectedEvent.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="etkinlik"
                className="w-full h-40 object-cover rounded-lg shadow-sm border border-gray-200"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
