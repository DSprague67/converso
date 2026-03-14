import { useState } from "react";

export default function LanguageConversationLandingPage() {
  const [lang, setLang] = useState("en");

  const t = {
    en: {
      badge: "Practice speaking with real people",
      heroTitle: "Become fluent through real conversations.",
      heroText:
        "Book short, guided language conversations with native speakers. No awkward silence, no random matching, just structured speaking practice that helps you improve faster.",
      joinWaitlist: "Join the waitlist",
      joinDiscord: "Join our Discord",
      seeHowItWorks: "See how it works",
      quick1: "10 - 60 minute sessions",
      quick2: "Native speakers",
      quick3: "Guided prompts",
      sampleLabel: "Sample Session",
      sampleTitle: "Spanish Conversation · Travel",
      sample1: "Describe your favorite place you have visited.",
      sample2: "Ask your partner where they would travel if money were no object.",
      sample3: "Debate: beach trip or mountain trip?",
      sampleFooter: "10 - 60 minutes · Beginner to Intermediate",
      samplePrice: "From $8",
      howTitle: "How it works",
      howText:
        "We make speaking practice simple, structured, and low-pressure.",
      how1Title: "Choose your language",
      how1Text:
        "Pick Spanish, English, or another supported language and filter by topic, accent, and level.",
      how2Title: "Book a guided conversation",
      how2Text:
        "Each session includes prompts and vocabulary support so you always know what to say next.",
      how3Title: "Build fluency fast",
      how3Text:
        "Practice consistently with real people instead of memorizing endless vocabulary lists.",
      diffTitle: "Why this is different",
      diff1Title: "No random chat roulette",
      diff1Text:
        "Every session is focused, paid, and designed for people who actually want to improve.",
      diff2Title: "Guided prompts reduce anxiety",
      diff2Text: "You are never stuck wondering what to say next.",
      diff3Title: "Short sessions fit real life",
      diff3Text:
        "Practice for 10 to 60 minutes instead of committing to long tutoring calls.",
      discordTitle: "Join our founding speaker community",
      discordText:
        "Our Discord is where early speakers can help shape the platform from the ground up. Share ideas, connect with other founding speakers, and get updates as we build.",
      discordPoint1: "Suggest features and share ideas",
      discordPoint2: "Chat with other founding speakers",
      discordPoint3: "Receive updates on startup progress",
      discordButton: "Enter the Discord community",
      earlyAccess: "Early access",
      earlyTitle: "Join the first wave of learners",
      earlyText:
        "We are building the easiest way to practice speaking with native speakers. Join the waitlist to get early access and discounted first sessions.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      learnSpanish: "I want to learn Spanish",
      learnEnglish: "I want to learn English",
      becomeSpeaker: "I want to become a speaker",

      heardPlaceholder: "How did you hear about Converso?",
      heardDiscord: "Discord",
      heardReddit: "Reddit",
      heardFriend: "Friend",
      heardSocial: "Social Media",
      heardGoogle: "Google",
      heardOther: "Other",

      waitlistButton: "Join waitlist",
      toggleButton: "Español",
    },

    es: {
      badge: "Practica hablando con personas reales",
      heroTitle: "Hazte fluido con conversaciones reales.",
      heroText:
        "Reserva conversaciones guiadas y breves con hablantes nativos. Sin silencios incómodos, sin emparejamientos aleatorios, solo práctica estructurada para ayudarte a mejorar más rápido.",
      joinWaitlist: "Únete a la lista de espera",
      joinDiscord: "Únete a nuestro Discord",
      seeHowItWorks: "Ver cómo funciona",
      quick1: "Sesiones de 10 - 60 minutos",
      quick2: "Hablantes nativos",
      quick3: "Guías de conversación",
      sampleLabel: "Sesión de ejemplo",
      sampleTitle: "Conversación en español · Viajes",
      sample1: "Describe tu lugar favorito que hayas visitado.",
      sample2:
        "Pregúntale a tu compañero a dónde viajaría si el dinero no fuera un problema.",
      sample3: "Debate: ¿playa o montaña?",
      sampleFooter: "10 - 60 minutos · Principiante a intermedio",
      samplePrice: "Desde $8",
      howTitle: "Cómo funciona",
      howText:
        "Hacemos que practicar hablando sea simple, guiado y sin presión.",
      how1Title: "Elige tu idioma",
      how1Text:
        "Escoge español, inglés u otro idioma disponible y filtra por tema, acento y nivel.",
      how2Title: "Reserva una conversación guiada",
      how2Text:
        "Cada sesión incluye temas y apoyo de vocabulario para que siempre sepas qué decir después.",
      how3Title: "Mejora tu fluidez rápido",
      how3Text:
        "Practica con personas reales en vez de memorizar listas interminables de vocabulario.",
      diffTitle: "Por qué esto es diferente",
      diff1Title: "Sin chats aleatorios",
      diff1Text:
        "Cada sesión es enfocada, pagada y diseñada para personas que de verdad quieren mejorar.",
      diff2Title: "Las guías reducen la ansiedad",
      diff2Text: "Nunca te quedas sin saber qué decir después.",
      diff3Title: "Sesiones cortas para la vida real",
      diff3Text:
        "Practica de 10 a 60 minutos en vez de comprometerte con llamadas largas de tutoría.",
      discordTitle: "Únete a nuestra comunidad de hablantes fundadores",
      discordText:
        "Nuestro Discord es el lugar donde los primeros hablantes pueden ayudar a dar forma a la plataforma desde el inicio.",
      discordPoint1: "Sugerir funciones y compartir ideas",
      discordPoint2: "Hablar con otros hablantes fundadores",
      discordPoint3: "Recibir actualizaciones del progreso del proyecto",
      discordButton: "Entrar a la comunidad de Discord",
      earlyAccess: "Acceso anticipado",
      earlyTitle: "Únete a la primera ola de usuarios",
      earlyText:
        "Estamos construyendo la manera más fácil de practicar hablando con hablantes nativos.",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu correo electrónico",
      learnSpanish: "Quiero aprender español",
      learnEnglish: "Quiero aprender inglés",
      becomeSpeaker: "Quiero ser hablante",

      heardPlaceholder: "¿Cómo supiste de Converso?",
      heardDiscord: "Discord",
      heardReddit: "Reddit",
      heardFriend: "Amigo",
      heardSocial: "Redes sociales",
      heardGoogle: "Google",
      heardOther: "Otro",

      waitlistButton: "Unirme",
      toggleButton: "English",
    },
  };

  const text = t[lang];

  return (
    <div className="relative min-h-screen bg-white text-slate-900">

      <header className="flex flex-col items-center py-10">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center">
          Converso
        </h1>

        <p className="mt-4 text-lg md:text-xl text-slate-600 text-center max-w-xl">
          Real conversations. Real fluency.
        </p>
      </header>

      <div className="absolute right-6 top-6 z-10">
        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-slate-50"
        >
          {text.toggleButton}
        </button>
      </div>

      {/* WAITLIST SECTION */}

      <section className="border-t border-slate-100 px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">

          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {text.diffTitle}
            </h2>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
              {text.earlyAccess}
            </p>

            <h3 className="mt-3 text-3xl font-bold">
              {text.earlyTitle}
            </h3>

            <p className="mt-4 max-w-lg text-slate-300">
              {text.earlyText}
            </p>

            <form id="waitlist" className="mt-8 space-y-4">

              <input
                type="text"
                placeholder={text.namePlaceholder}
                className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 outline-none"
              />

              <input
                type="email"
                placeholder={text.emailPlaceholder}
                className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 outline-none"
              />

              <select className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none">
                <option>{text.learnSpanish}</option>
                <option>{text.learnEnglish}</option>
                <option>{text.becomeSpeaker}</option>
              </select>

              <select className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none">
                <option>{text.heardPlaceholder}</option>
                <option>{text.heardDiscord}</option>
                <option>{text.heardReddit}</option>
                <option>{text.heardFriend}</option>
                <option>{text.heardSocial}</option>
                <option>{text.heardGoogle}</option>
                <option>{text.heardOther}</option>
              </select>

              <button
                type="button"
                className="w-full rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:opacity-90"
              >
                {text.waitlistButton}
              </button>

            </form>
          </div>

        </div>
      </section>

    </div>
  );
}