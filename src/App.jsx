import { useState } from "react";
import { text } from "./translations/text";

export default function LanguageConversationLandingPage() {
  const [lang, setLang] = useState("en");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    interestType: "Learner",
    languageInterest: "Spanish",
    joinedDiscord: "",
    heardAbout: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  const t = text[lang];

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitStatus({ loading: true, success: "", error: "" });

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setSubmitStatus({
        loading: false,
        success: t.successMessage,
        error: "",
      });

      setFormData({
        fullName: "",
        email: "",
        interestType: "Learner",
        languageInterest: "Spanish",
        joinedDiscord: "",
        heardAbout: "",
      });
    } catch (error) {
      setSubmitStatus({
        loading: false,
        success: "",
        error: t.errorMessage,
      });
    }
  }

  return (
    <div className="relative min-h-screen bg-white text-slate-900">
      <header className="flex flex-col items-center py-10">
        <img
          src="/Converso-logo2.png"
          alt="Converso Logo"
          className="h-48 md:h-64"
        />

        <p className="mt-4 text-lg md:text-xl text-slate-600 text-center max-w-xl">
          Real conversations. Real fluency.
        </p>
      </header>

      <div className="absolute right-6 top-6 z-10">
        <button
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-slate-50"
        >
          {t.toggleButton}
        </button>
      </div>

      <section className="px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600">
                {t.badge}
              </div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                {t.heroTitle}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                {t.heroText}
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#waitlist"
                  className="rounded-2xl bg-slate-900 px-6 py-3 text-center text-white shadow-sm transition hover:opacity-90"
                >
                  {t.joinWaitlist}
                </a>
                <a
                  href="#discord-community"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-center transition hover:bg-slate-50"
                >
                  {t.joinDiscord}
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-center transition hover:bg-slate-50"
                >
                  {t.seeHowItWorks}
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-500">
                <span>{t.quick1}</span>
                <span>{t.quick2}</span>
                <span>{t.quick3}</span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-slate-500">
                  {t.sampleLabel}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  {t.sampleTitle}
                </h3>
                <div className="mt-4 space-y-3 text-slate-600">
                  <div className="rounded-xl bg-slate-50 p-3">
                    {t.sample1}
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    {t.sample2}
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    {t.sample3}
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
                  <span className="text-slate-500">{t.sampleFooter}</span>
                  <span className="font-semibold">{t.samplePrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="border-t border-slate-100 px-6 py-20 md:px-12 lg:px-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {t.howTitle}
            </h2>
            <p className="mt-4 text-lg text-slate-600">{t.howText}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 p-6">
              <div className="text-sm font-semibold text-slate-500">01</div>
              <h3 className="mt-3 text-xl font-semibold">{t.how1Title}</h3>
              <p className="mt-3 text-slate-600">{t.how1Text}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <div className="text-sm font-semibold text-slate-500">02</div>
              <h3 className="mt-3 text-xl font-semibold">{t.how2Title}</h3>
              <p className="mt-3 text-slate-600">{t.how2Text}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6">
              <div className="text-sm font-semibold text-slate-500">03</div>
              <h3 className="mt-3 text-xl font-semibold">{t.how3Title}</h3>
              <p className="mt-3 text-slate-600">{t.how3Text}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="discord-community"
        className="border-t border-slate-100 px-6 py-20 md:px-12 lg:px-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-slate-50 p-8 md:p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  {t.discordTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-slate-600">
                  {t.discordText}
                </p>
                <div className="mt-6 space-y-3 text-slate-700">
                  <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                    {t.discordPoint1}
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                    {t.discordPoint2}
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                    {t.discordPoint3}
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
                  Discord
                </p>
                <h3 className="mt-3 text-3xl font-bold">
                  {t.joinDiscord}
                </h3>
                <p className="mt-4 text-slate-300">
                  Join the community and help shape the platform early.
                </p>
                <a
                  href="https://discord.gg/SvMfBK2Sxe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block w-full rounded-2xl bg-white px-6 py-3 text-center font-semibold text-slate-900 transition hover:opacity-90"
                >
                  {t.discordButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 px-6 py-20 md:px-12 lg:px-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {t.diffTitle}
            </h2>
            <div className="mt-8 space-y-5 text-slate-600">
              <div>
                <h3 className="font-semibold text-slate-900">
                  {t.diff1Title}
                </h3>
                <p className="mt-1">{t.diff1Text}</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  {t.diff2Title}
                </h3>
                <p className="mt-1">{t.diff2Text}</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">
                  {t.diff3Title}
                </h3>
                <p className="mt-1">{t.diff3Text}</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
              {t.earlyAccess}
            </p>
            <h3 className="mt-3 text-3xl font-bold">{t.earlyTitle}</h3>
            <p className="mt-4 max-w-lg text-slate-300">{t.earlyText}</p>

            <form id="waitlist" onSubmit={handleSubmit} className="mt-8 space-y-4">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={t.namePlaceholder}
                className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 outline-none"
                required
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.emailPlaceholder}
                className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-400 outline-none"
                required
              />

              <select
                name="interestType"
                value={formData.interestType}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
              >
                <option value="Learner">{t.interestLearner}</option>
                <option value="Speaker">{t.interestSpeaker}</option>
              </select>

              <select
                name="languageInterest"
                value={formData.languageInterest}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
              >
                <option value="Spanish">{t.languageSpanish}</option>
                <option value="English">{t.languageEnglish}</option>
              </select>

              <select
                name="joinedDiscord"
                value={formData.joinedDiscord}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
              >
                <option value="">{t.joinedDiscordPlaceholder}</option>
                <option value="Yes">{t.yes}</option>
                <option value="No">{t.no}</option>
              </select>

              <select
                name="heardAbout"
                value={formData.heardAbout}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
                required
              >
                <option value="">{t.heardPlaceholder}</option>
                <option value="Discord">{t.heardDiscord}</option>
                <option value="Reddit">{t.heardReddit}</option>
                <option value="Friend">{t.heardFriend}</option>
                <option value="Social Media">{t.heardSocial}</option>
                <option value="Google">{t.heardGoogle}</option>
                <option value="Other">{t.heardOther}</option>
              </select>

              <button
                type="submit"
                disabled={submitStatus.loading}
                className="w-full rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:opacity-90 disabled:opacity-70"
              >
                {submitStatus.loading ? t.submitting : t.waitlistButton}
              </button>

              {submitStatus.success && (
                <p className="text-sm text-green-400">{submitStatus.success}</p>
              )}

              {submitStatus.error && (
                <p className="text-sm text-red-400">{submitStatus.error}</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}