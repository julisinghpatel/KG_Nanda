import { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const nanda_REPLIES = {
  default: "Namaste! Main KG Nanda Hospital Chandauli ka virtual assistant hoon. Aap appointment, timings, emergency, departments ya facilities ke baare mein pooch sakte hain.",
  appointment: "Appointment ke liye aap humari website par 'Book Now' use kar sakte hain, ya direct call karein 09628300438 par. OPD timings: 9 AM - 8 PM.",
  book: "Booking ke liye Book Now page par jayein ya helpline (09628300438) par call karein. Online slot bhi available hai.",
  doctor: "KG Nanda Hospital mein experienced doctors hain. Humare paas General Medicine, Cardiology, Pediatrics, Gynaecology aur Orthopedics jaise kai departments hain. Aapko kis department ke doctor se milna hai?",
  emergency: "Emergency care 24/7 khuli rehti hai. Turant 24/7 Emergency ward aayein (Ward No.11 Sanjay Nagar, Infront of Chaurashia Petrol Pump, Chandauli). Helpline: 09628300438.",
  time: "OPD timings: 9 AM - 8 PM. Emergency, ICU, NICU/PICU, aur Ambulance services 24/7 available hain.",
  timing: "OPD timings: 9 AM - 8 PM. Emergency aur Ambulance services 24/7 khuli rehti hain.",
  address: "Humara Address: Ward No.11 Sanjay Nagar, Infront of Chaurashia Petrol Pump, Bichhiya Kala, Chandauli, Jasori, Uttar Pradesh 232104.",
  location: "Aap Chaurashia Petrol Pump, Jasori, Chandauli ke theek samne aakar humein asani se dhoond sakte hain.",
  contact: "Contact ke liye phone number: 09628300438 hai. Emergency helpline 24/7 active hai.",
  phone: "Helpline number 09628300438 hai. Emergency aur booking ke liye kabhi bhi call karein.",
  facilities: "KG Nanda Hospital ki mukhya facilities hain: Emergency Care, OPD, Diagnostic Center, ICU, NICU & PICU, Digital X-Ray, Pathology, aur OT & Surgery.",
  facility: "Humare yahan 24/7 Emergency, Advanced ICU, NICU & PICU, Digital X-Ray, Pathology, aur modern Operation Theatre (OT) ki suvidha uplabdh hai.",
  icu: "Humara ICU aur NICU/PICU unit advanced life support systems aur critical care experts ke sath 24/7 chalu rehta hai.",
  diagnostic: "Diagnostic Center mein Digital X-Ray aur advanced Pathology lab ki suvidha available hai.",
  pathology: "Pathology lab mein sabhi tarah ke blood tests aur diagnostic tests ki accurate reports milti hain.",
  department: "KG Nanda Hospital ke major departments:\n• Emergency Care\n• OPD\n• Gynecology & Obstetrics\n• General Surgery & Urology\n• Pediatrics\n• Orthopedics\n• ENT & Dental Care\n• General Medicine & Cardiology",
  cardiology: "Cardiology department mein heart care se jude sabhi consults aur checkups ki suvidha available hai.",
  gynaecology: "Gynaecology & Obstetrics department mein pregnancy care, delivery, aur mahilaon ki bimariyon ka vishesh ilaaj hota hai.",
  orthopedics: "Orthopedics department haddiyon, jodon (joints) aur fractures ke ilaaj ke liye visheshagya se yukt hai.",
  pediatrics: "Pediatrics aur NICU/PICU chote bachhon ki dekhbhal aur neonatal emergency ke liye 24/7 taiyar hai.",
  surgery: "OT & Surgery department mein General Surgery aur Urology ki surgeries modern equipment ke sath ki jaati hain.",
  hi: "Namaste! KG Nanda Hospital Chandauli mein aapka swagat hai. Aaj main aapki kya sahayata kar sakta hoon?",
  hello: "Hello! Main KG Nanda Hospital ka virtual assistant hoon. Kya aapko koi appointment, doctor consultation ya medical jaankari chahiye?",
  thanks: "Aapka dhanyavaad! Aur koi sawal ho to zaroor poochh sakte hain. Wish you a speedy recovery!",
  thank: "Koi baat nahi! KG Nanda Hospital ki team hamesha aapke acche swasthya ke liye tatpar hai.",
};

function getReply(userMessage) {
  const msg = (userMessage || '').toLowerCase().trim();
  if (!msg) return nanda_REPLIES.default;

  for (const [keyword, reply] of Object.entries(nanda_REPLIES)) {
    if (keyword === 'default') continue;
    if (msg.includes(keyword)) return reply;
  }
  return nanda_REPLIES.default;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Namaste! Main KG Nanda Hospital Chandauli ka assistant hoon. Aap appointment, timings ya facilities ke baare mein pooch sakte hain.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    setMessages((prev) => [...prev, { role: 'user', text }]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = getReply(text);
      setMessages((prev) => [...prev, { role: 'bot', text: reply }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <div className="chatbot-wrap">
      {/* Premium Chat window */}
      <div className={`chatbot-window ${open ? 'chatbot-window--open' : ''}`}>
        <div className="chatbot-header">
          <div className="header-logo-container">
            <div className="logo-bubble item-1"></div>
            <div className="logo-bubble item-2"></div>
            <div className="logo-bubble item-3"></div>
          </div>
          <div className="header-text-container">
            <span className="chatbot-title">KG Nanda Hospital</span>
            <span className="chatbot-subtitle"><span className="online-indicator"></span> 24/7 Active Support</span>
          </div>
          <button
            type="button"
            className="chatbot-close"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            ×
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((m, i) => (
            <div key={i} className={`chatbot-msg chatbot-msg--${m.role}`}>
              <span className="chatbot-msg-text" style={{ whiteSpace: 'pre-line' }}>{m.text}</span>
            </div>
          ))}

          {isTyping && (
            <div className="chatbot-msg chatbot-msg--bot typing-loader-container">
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
              <div className="typing-dot"></div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="chatbot-quick-chips">
          <button type="button" onClick={() => handleSend('Appointment')}>📅 Appointment</button>
          <button type="button" onClick={() => handleSend('Timing')}>⏰ Timings</button>
          <button type="button" onClick={() => handleSend('Facilities')}>🏥 Facilities</button>
          <button type="button" onClick={() => handleSend('Emergency')}>🚨 Emergency</button>
          <button type="button" onClick={() => handleSend('Address')}>📍 Address</button>
        </div>

        <form className="chatbot-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="chatbot-input"
            placeholder="Type your question here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="chatbot-send" aria-label="Send">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </form>
      </div>

      {/* Toggle icon */}
      <button
        type="button"
        className={`chatbot-toggle ${open ? 'active' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        <img 
          src="/Logo/Chatbot.png" 
          alt="ChatBot" 
          className="chatbot-img-icon" 
        />
      </button>
    </div>
  );
}