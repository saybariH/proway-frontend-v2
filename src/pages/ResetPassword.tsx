import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa"; 

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Vérification des critères du mot de passe
  const isValidPassword = (password: string) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*]/.test(password);
    return password.length >= 8 && hasUppercase && hasNumber && hasSymbol;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidPassword(password)) {
      setError("Votre mot de passe ne répond pas aux critères de sécurité.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    setError("");
    setSuccess(true);
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-between bg-[#F8FAFF] px-2 sm:px-4 md:px-6 lg:px-8">
      {/* Header avec logo et langue */}
      <div className="flex justify-between items-center py-3 sm:py-4 md:py-6">
        <img src="src/assets/images/logo.svg" alt="Logo" className="w-24 h-6 sm:w-32 sm:h-8 md:w-[168px] md:h-[42px]" />
        <select className="border rounded-lg font-[lufga] px-2 py-1 text-xs sm:text-sm md:text-base text-gray-700 shadow-sm bg-white sm:px-3 md:px-4 md:py-2">
          <option>Français</option>
          <option>Anglais</option>
          <option>Espagnol</option>
        </select>
      </div>

      {/* Contenu principal */}
      <div className="flex flex-col items-center justify-center flex-grow text-center px-2 sm:px-4 md:px-0">
        {!success ? (
          <>
            <img src="src/assets/images/icon-logo.svg" alt="Logo Icon" className="w-10 h-12 sm:w-12 sm:h-14 md:w-[60px] md:h-[72px] mb-3 sm:mb-4" />
            <h2 className="text-xl font-[lufga] sm:text-2xl md:text-4xl font-bold text-gray-900 mb-2">Définir un nouveau mot de passe</h2>
            <p className="text-xs font-[lufga] sm:text-sm md:text-base text-gray-50c0 mb-6 sm:mb-8">Entrez votre nouveau mot de passe ci-dessous</p>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="w-full max-w-[320px] sm:max-w-md lg:max-w-lg space-y-3 sm:space-y-4 md:space-y-6">
              <div className="text-left relative">
                <label className="block font-[lufga] text-xs sm:text-sm font-medium text-gray-700">Nouveau mot de passe</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`mt-1 sm:mt-2 block w-full rounded-lg border ${
                      !isValidPassword(password) && password.length > 0 
                        ? "border-red-500 bg-red-100" 
                        : "border-gray-300"
                    } shadow-sm font-[lufga] focus:border-blue-500 focus:ring-blue-500 px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 bg-white appearance-none [&::-ms-reveal]:hidden [&::-ms-clear]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden [&::-webkit-credentials-auto-fill-button]:hidden text-xs sm:text-sm md:text-base`}
                    placeholder="Entrez le nouveau mot de passe"
                  />
                  <img 
                    src={`src/assets/images/icon-password-${!isValidPassword(password) && password.length > 0 ? 'red' : 'blue'}.svg`}
                    alt="État du mot de passe"
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>

              <div className="text-left relative">
                <label className="block text-xs sm:text-sm font-[lufga] font-medium text-gray-700">Confirmer le mot de passe</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`mt-1 sm:mt-2 block w-full rounded-lg border ${
                      confirmPassword && confirmPassword !== password 
                        ? "border-red-500 bg-red-100" 
                        : "border-gray-300"
                    } shadow-sm font-[lufga] focus:border-blue-500 focus:ring-blue-500 px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 bg-white appearance-none [&::-ms-reveal]:hidden [&::-ms-clear]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-outer-spin-button]:hidden [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden [&::-webkit-credentials-auto-fill-button]:hidden text-xs sm:text-sm md:text-base`}
                    placeholder="Confirmez le mot de passe"
                  />
                  <img 
                    src={`src/assets/images/icon-password-${confirmPassword && confirmPassword !== password ? 'red' : 'blue'}.svg`}
                    alt="État du mot de passe"
                    className="absolute font-[lufga] right-2 sm:right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`w-full py-2 sm:py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg transition-all ${
                  isValidPassword(password) && password === confirmPassword
                    ? "bg-gray-700 font-[lufga] text-white hover:bg-gray-800"
                    : "bg-gray-400 font-[lufga] text-gray-200 cursor-not-allowed"
                }`}
                disabled={!isValidPassword(password) || password !== confirmPassword}
              >
                Se connecter
              </button>

              {/* Critères du mot de passe */}
              <div className="bg-red-50 rounded-lg p-2 sm:p-3 md:p-4 shadow-sm w-full flex flex-wrap gap-y-2">
                <div className="w-full sm:w-1/2 flex items-center gap-1 sm:gap-2">
                  <span className={password.length >= 8 ? "text-green-600" : "text-blue-600"}>✗</span>
                  <span className={`${password.length >= 8 ? "text-green-600" : "text-blue-600"} text-xs sm:text-sm`}>Minimum 8 caractères</span>
                </div>

                <div className="w-full sm:w-1/2 flex items-center gap-1 sm:gap-2">
                  <span className={/[A-Z]/.test(password) ? "text-green-600" : "text-red-500"}>✗</span>
                  <span className={`${/[A-Z]/.test(password) ? "text-green-600" : "text-red-500"} text-xs sm:text-sm`}>Au moins 1 MAJUSCULE</span>
                </div>

                <div className="w-full sm:w-1/2 flex items-center gap-1 sm:gap-2">
                  <span className={/\d/.test(password) ? "text-green-600" : "text-blue-600"}>✗</span>
                  <span className={`${/\d/.test(password) ? "text-green-600" : "text-blue-600"} text-xs sm:text-sm`}>Au moins 1 chiffre</span>
                </div>

                <div className="w-full sm:w-1/2 flex items-center gap-1 sm:gap-2">
                  <span className={/[!@#$%^&*]/.test(password) ? "text-green-600" : "text-red-500"}>✗</span>
                  <span className={`${/[!@#$%^&*]/.test(password) ? "text-green-600" : "text-red-500"} text-xs sm:text-sm`}>Au moins 1 symbole</span>
                </div>
              </div>

              {error && <p className="text-red-500 mt-3 sm:mt-4 text-xs sm:text-sm">{error}</p>}
            </form>
          </>
        ) : (
          <>
            <img src="src/assets/images/icon-logo.svg" alt="Logo Icon" className="w-10 h-12 sm:w-12 sm:h-14 md:w-14 mb-3 sm:mb-4 md:mb-6" />
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-2">Mot de passe réinitialisé</h2>
            <p className="text-xs font-[lufga] sm:text-sm md:text-base text-gray-500 mb-4 sm:mb-6 max-w-[280px] sm:max-w-sm md:max-w-lg px-2 sm:px-4">
              Félicitations ! Votre mot de passe a été réinitialisé avec succès. Veuillez cliquer sur le bouton ci-dessous pour vous connecter à votre compte.
            </p>

            <button className="w-full max-w-[280px] sm:max-w-xs md:max-w-md py-2 sm:py-3 rounded-lg bg-[#193AF9] text-white text-sm sm:text-base md:text-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
              <FaArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" /> Retour à la connexion
            </button>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="text-gray-500 font-[lufga] text-[10px] sm:text-xs md:text-sm text-center py-3 sm:py-4 md:pb-6">
        <p>Copyright © Proway 2025. Tous droits réservés.</p>
        <a href="#" className="underline font-[lufga]">Conditions générales</a>
      </div>
    </div>
  );
};

export default ResetPassword;
