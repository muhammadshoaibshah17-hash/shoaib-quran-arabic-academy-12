import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923045103458"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-2xl hover:bg-green-600 transition duration-300 animate-bounce"
    >
      <MessageCircle size={32} />
    </a>
  );
}