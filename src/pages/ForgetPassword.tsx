import React, { useState } from "react";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Invalid email address");
      return;
    }
    setError("");
    setSuccess(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-white">
      {/* Header avec logo et langue */}
      <div className="flex justify-between items-center p-4 md:px-6 md:py-4">
        <img src="src/assets/images/logo.svg" alt="Logo" className="w-32 h-auto md:w-[168px] h-[42px]" />
        <select className="border rounded-lg font-[lufga] px-2 py-1 md:px-3 md:py-1 text-sm md:text-base text-gray-700 shadow-sm">
          <option>Français</option>
          <option>Anglais</option>
          <option>Espagnol</option>
        </select>
      </div>

      {/* Contenu principal */}
      <div className="flex flex-col items-center justify-center flex-grow text-center px-4 md:px-6">
        {!success ? (
          <>
            <img src="src/assets/images/icon-logo.svg" alt="Logo Icon" className="w-12 h-auto md:w-[60px]" />
            <h2 className="text-2xl font-[lufga] md:text-3xl lg:text-4xl font-bold text-gray-800 mt-4 mb-2">
              Mot de passe oublié !
            </h2>
            <p className="text-gray-500 font-[lufga] text-sm md:text-base mb-6">Entrez votre email pour continuer</p>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 px-4">
              <div className="text-left">
                <label className="block text-sm font-[lufga] font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-1 block w-full rounded-lg border ${
                    error ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:border-blue-500 focus:ring-blue-500 px-3 py-2 font-[lufga] md:px-4 md:py-3`}
                  placeholder="Entrez votre email"
                />
                {error && <p className="text-red-500 font-[lufga] text-sm mt-2">{error}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-2 md:py-3 font-[lufga] rounded-lg bg-gray-400 text-white text-base md:text-lg hover:bg-gray-500 transition-all"
              >
                Continuer
              </button>
            </form>

            {error && <p className="text-red-500 mt-4 text-sm">Désolé, cet utilisateur n'existe pas !</p>}
          </>
        ) : (
          <>
            <img src="src/assets/images/icon-logo.svg" alt="Logo Icon" className="w-12 h-auto md:w-[60px]" />
            <h2 className="text-2xl font-[lufga] md:text-3xl lg:text-4xl font-bold text-gray-800 mt-4 mb-2">
              Lien de récupération envoyé !
            </h2>
            <p className="text-gray-500 font-[lufga] text-sm md:text-base mb-6 px-4">
              Le lien de récupération a été envoyé à votre email,<br/> veuillez vérifier et revenir pour réinitialiser<br className="md:hidden"/> votre mot de passe.
            </p>

            <button className="w-full font-[lufga] max-w-md py-2 md:py-3 rounded-lg bg-[#193AF9] text-white text-base md:text-lg hover:bg-blue-600 transition-all mx-4">
              ← Retour à la connexion
            </button>
          </>
        )}
      </div>

      {/* Footer */}
      <p className="text-gray-400 font-[lufga] text-xs md:text-sm text-center py-4 md:py-6">
        Copyright © Proway 2025. Tous droits réservés.<br />
        <span className="underline cursor-pointer font-[lufga]">Conditions générales</span>
      </p>
    </div>
  );
};

export default ForgotPassword;
