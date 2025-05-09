import { useState } from "react";
import toast from "react-hot-toast";
import { ADMIN_EMAIL, API_URL_SEND_EMAIL } from "../../lib/constant";

export default function ContactSection({ t }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return toast.error(t.errors.name);
    if (!email.trim()) return toast.error(t.errors.email);
    if (!validateEmail(email)) return toast.error(t.errors.invalidEmail);
    if (!message.trim()) return toast.error(t.errors.message);

    try {
      setLoading(true);
      const res = await fetch(API_URL_SEND_EMAIL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: {
            email: [ADMIN_EMAIL],
            subject: `Consulta de cliente - ${name}`,
            title: "Un cliente desea comunicarse con la empresa",
            body: `Hola equipo de TTN Company,\n\nUn cliente ha enviado un mensaje a través del formulario de contacto del sitio web.\n\nNombre: ${name}\nCorreo electrónico: ${email}\n\nMensaje del cliente:\n${message}`,
            footer:
              "Este mensaje fue generado automáticamente desde la página web de TTN Company.",
          },
        }),
      });

      if (!res.ok) throw new Error();

      toast.success(t.errors.success);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      toast.error(t.errors.failure);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="slide-up">
            <h2 className="mb-6 text-accent-500 dark:text-white">
              {t.sectionTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {t.sectionDescription}
            </p>
            {/* Información de contacto omitida por brevedad */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">📧</div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-accent-500 dark:text-white">
                    {t.emailLabel}
                  </h3>
                  <p className="text-accent-500 dark:text-gray-300">
                    gerencia@ttncompany.com
                  </p>
                </div>
              </div>
              {/* Teléfono */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">📞</div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-accent-500 dark:text-white">
                    {t.phoneLabel}
                  </h3>
                  <p className="text-accent-500 dark:text-gray-300">
                    +57 304 3783126
                  </p>
                </div>
              </div>
              {/* Dirección */}
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">📍</div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-accent-500 dark:text-white">
                    {t.visitLabel}
                  </h3>
                  <p className="text-accent-500 dark:text-gray-300">
                    Cra 51B #87-50, piso 3 local 337 VIVA Barranquilla
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-accent-500 dark:text-white mb-4">
                {t.followLabel}
              </h3>
              {/* redes sociales */}
              <div className="flex space-x-4 items-center">
                <a
                  href="https://www.linkedin.com/company/ttn-company/"
                  className="text-gray-400 hover:text-primary-400 transition-colors w-6 h-6 flex items-center justify-center"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6 text-accent-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/ttncompany_col/"
                  className="text-gray-400 hover:text-primary-400 transition-colors w-6 h-6 flex items-center justify-center"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-6 h-6 scale-125 text-accent-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="slide-up" style={{ animationDelay: "150ms" }}>
            <div className="card p-6 border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-accent-500 dark:text-white">
                {t.sendMessage}
              </h3>
              {submitted ? (
                <div className="text-center p-6 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
                  <h3 className="text-xl font-semibold text-accent-500 dark:text-white mb-2">
                    {t.sentTitle}
                  </h3>
                  <p className="text-accent-500 dark:text-gray-300">
                    {t.sentMessage}
                  </p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t.placeholders.name}
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border dark:border-accent-500 bg-white dark:bg-gray-800"
                      placeholder={t.placeholders.name}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t.placeholders.email}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border dark:border-accent-500 bg-white dark:bg-gray-800"
                      placeholder={t.placeholders.email}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      {t.placeholders.message}
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border dark:border-accent-500 bg-white dark:bg-gray-800"
                      placeholder={t.placeholders.message}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary"
                    disabled={loading}
                  >
                    {loading ? "..." : t.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
