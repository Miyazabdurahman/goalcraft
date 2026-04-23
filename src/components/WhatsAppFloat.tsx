import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phoneNumber = "916235791479";

  const message = "Hi! I have a doubt about KnowifyCamp.";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 animate-pulse"
    >
      <MessageCircle size={22} />
      <span className="text-sm font-medium">
        Any doubts?
      </span>
    </a>
  );
}