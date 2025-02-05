import { useState } from "react";
import { FaUpload } from "react-icons/fa";

const ProfileCoach = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [error, setError] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);

  // Vérification des critères du mot de passe
  const isValidPassword = (password: string) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*]/.test(password);
    return password.length >= 8 && hasUppercase && hasNumber && hasSymbol;
  };


  return (
    <div className="p-10  md:w-[1348px] h-[2550px] sm:w-[440px] h-[2110] bg-white shadow-lg rounded-xl  transition-all ">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="sm:text-[30px] md:text-[36px] text-[#090933] font-[lufga] font-medium  ">General</h2>
        <div className="space-x-4">
        <button className="px-6 py-2 rounded-full text-[#FC5185] bg-[#E51638]/10 hover:bg-[#E51638]/20 transition font-[lufga] sm:text-[14px] md:text-[20px] md:w-[152px] h-[55px] sm:w-[90px] h-[20px] ">Cancel</button>
        <button className="px-6 py-2 rounded-full bg-[#193AF9] text-white hover:bg-[#0F2AC9] transition font-[lufga] sm:text-[14px] md:text-[20px]  md:w-[152px] h-[55px] sm:w-[90px] h-[20px]">Save</button>
        </div>
      </div>

      {/* Avatar Section */}
      <div className="mb-8 flex items-center space-x-6 w-[1100px] h-[158px]">
        <div className="w-1/4">
        <label className="text-[#7C829C] text-[22px] w-1/4 font-[lufga]">Avatar</label>
          <p className="text-[16px] text-[#7C829C]  ">Lorem ipsum is here</p>
        </div>
        <div className="flex-1 flex items-center space-x-6">
          <img src="public/images/avatar.svg" alt="Avatar" className="w-158 h-158 rounded-lg object-cover  font-[lufga]" />
          <div className="flex flex-col space-y-2">
            <button className="flex items-center px-5 py-2 rounded-full border border-gray-300 font-[lufga] text-gray-700 hover:bg-gray-100 transition w-[140px] h-[45px]">
              <FaUpload className="mr-2 " /> Upload
            </button>
            <span className="text-[16px] font-[lufga] text-[#7C829C]">Upload a picture (PNG, JPEG)</span>
            <div className="flex space-x-2">
              <button className="px-5 py-2 font-[lufga] rounded-full border text-[#FC5185] bg-[#E51638]/10 hover:bg-[#E51638]/20  transition text-[20px] w-[152px] h-[55px] ">Discard</button>
              <button className="px-5 py-2 rounded-full font-[lufga] bg-[#193AF9] text-white hover:bg-[#0F2AC9] transition text-[20px] w-[152px] h-[55px]">Save</button>
            </div>
          </div>
        </div>
      </div>

        
          {/* Username Section */}
      <div className="mb-6 flex items-center">
        <label className="text-[#7C829C] font-[lufga] text-[22px] w-[300px] h-[29px]">
          Username
        </label>
        <div className="flex items-center w-[600px] h-[65px]  rounded-full overflow-hidden border border-[#2C3D85]/20">
          <span className="px-4 py-4 bg-[#4772FF]/10 text-[22px]  font-[lufga] text-[#090933] font-medium flex items-center justify-center w-1/3">
            Proway.ai/
          </span>
          <input
            type="text"
            placeholder="@username"
            className="w-2/3 bg-transparent font-[lufga] text-[22px] outline-none px-3 py-2 text-[#090933]"
          />
        </div>
      </div>



    {/* Phone Number Section */}
    <div className="mb-6 flex items-center">
        <label className="text-[#7C829C] text-[22px]  w-[300px] h-[29px] font-[lufga]">Phone Number</label>
        <div className="flex items-center w-[600px] h-[65px]  border rounded-lg p-3 bg-[#7C829C]/5">
          <select className="w-1/5 border-none text-[20px] text-[#193AF9] outline-none bg-transparent">
          <option value="+1">+1 </option>
          <option value="+7">+7 </option>
          <option value="+20">+20 </option>
          <option value="+27">+27 </option>
          <option value="+30">+30 </option>
          <option value="+31">+31 </option>
          <option value="+32">+32 </option>
          <option value="+33">+33 </option>
          <option value="+34">+34 </option>
          <option value="+36">+36 </option>
          <option value="+39">+39 </option>
          <option value="+40">+40 </option>
          <option value="+41">+41 </option>
          <option value="+43">+43 </option>
          <option value="+44">+44 </option>
          <option value="+45">+45 </option>
          <option value="+46">+46 </option>
          <option value="+47">+47 </option>
          <option value="+48">+48 </option>
          <option value="+49">+49 </option>
          <option value="+51">+51 </option>
          <option value="+52">+52 </option>
          <option value="+53">+53 </option>
          <option value="+54">+54 </option>
          <option value="+55">+55 </option>
          <option value="+56">+56 </option>
          <option value="+57">+57 </option>
          <option value="+58">+58 </option>
          <option value="+60">+60 </option>
          <option value="+61">+61 </option>
          <option value="+62">+62 </option>
          <option value="+63">+63 </option>
          <option value="+64">+64 </option>
          <option value="+65">+65 </option>
          <option value="+66">+66 </option>
          <option value="+81">+81 </option>
          <option value="+82">+82 </option>
          <option value="+84">+84 </option>
          <option value="+86">+86 </option>
          <option value="+90">+90 </option>
          <option value="+91">+91 </option>
          <option value="+92">+92 </option>
          <option value="+93">+93 </option>
          <option value="+94">+94 </option>
          <option value="+95">+95 </option>
          <option value="+98">+98 </option>
          <option value="+211">+211 </option>
          <option value="+212">+212 </option>
          <option value="+213">+213 </option>
          <option value="+216">+216 </option>
          <option value="+218">+218 </option>
          <option value="+220">+220 </option>
          <option value="+221">+221 </option>
          <option value="+225">+225 </option>
          <option value="+230">+230 </option>
          <option value="+234">+234 </option>
          <option value="+250">+250 </option>
          <option value="+254">+254 </option>
          <option value="+255">+255 </option>
          <option value="+256">+256 </option>
          <option value="+970">+970 </option>
          </select>
          <span className="text-gray-400 font-[lufga] mx-2">|</span>
          <input type="text" placeholder="599 - 288 1370" className="w-5/6 border-none font-[lufga] bg-transparent text-gray-500 outline-none" />
        </div>
      </div>

      {/* Email Section */}
      <div className="mb-6 flex items-center   ">
        <label className="text-[#7C829C] font-[lufga] text-[22px] w-[300px] h-[29px] ">Email</label>
        <input type="email" placeholder="eg. username@proway.ai" className="w-[600px] h-[65px] flex items-center  border font-[lufga] rounded-lg bg-[#7C829C]/5" />
      </div>

      {/* Description Section */}
      <div className="mb-6 flex items-center">
        <label className="text-[#7C829C] font-[lufga] dark:text-gray-300 text-[22px] w-[300px] h-[29px]">Description</label>
        <textarea placeholder="Please enter description here..." className=" p-3 w-[600px] h-[222px] flex items-center  border font-[lufga] rounded-lg bg-[#7C829C]/5 h-28 border-blue-400"></textarea>
      </div>
    
      {/* Security Section */}
      <div className="mt-10">
        <h2 className="text-[36px] font-medium text-[#090933] w-[1288px] h-[47px] mb-4">Security</h2>
        <p className="text-[16px] w-[1288px] h-[21px]  text-[#7C829C] mb-6 font-[lufga]">Lorem ipsum is here</p>
        
        {/* Password */}
        <div className="mb-8 flex items-center w-[900px] h-[29px]">
          <label className="text-[#7C829C]  text-[22px]  w-[300px] h-[29px] font-semibold">Password</label>
          <div className="flex-1 relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-[600px] h-[65px] p-3  border rounded-lg bg-[#7C829C]/5 pr-10 ${
                !isValidPassword(password) && password.length > 0
                  ? "border-[#FC5185] text-[#FC5185] bg-[#FC5185]/10"
                  : "border-gray-300"
              }`}


              
            />
           
            <img
              src={
                !isValidPassword(password) && password.length > 0
                  ? passwordVisible
                    ? "src/assets/images/icon-password-red.svg"
                    : "src/assets/images/eyes-password-red.svg"
                  : passwordVisible
                  ? "src/assets/images/icon-password-blue.svg"
                  : "src/assets/images/eyes-password-blue.svg"
              }
              alt="Afficher/Masquer le mot de passe"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            />
          </div>
        </div>
        
        {/* Confirm Password */}
        <div className="mb-8 flex items-center w-[900px] ">
          <label className="text-[#7C829C] w-[300px] h-[29px] font-semibold text-[22px] ">Confirm Password</label>
          <div className="flex-1 relative">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`w-full p-3 border rounded-lg bg-[#7C829C]/5 w-[600px] h-[65px] pr-10 ${
                confirmPassword && confirmPassword !== password
                ? "border-[#FC5185] text-[#FC5185] bg-[#FC5185]/10"
                : "border-[#7C829C]/5 "
              }`}
            />
            <img
              src={
                confirmPassword && confirmPassword !== password
                  ? confirmPasswordVisible
                      ? "src/assets/images/icon-password-red.svg"
                    : "src/assets/images/eyes-password-red.svg"
                  : confirmPasswordVisible
                  ? "src/assets/images/icon-password-blue.svg"
                  : "src/assets/images/eyes-password-blue.svg"
              }
              alt="Afficher/Masquer le mot de passe"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
              onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
            />
          </div>
        </div>

        {/* Password Error Message */}
        {!isValidPassword(password) && password.length > 0 && (
          <div className="p-3 border border-[#FC5185] bg-[#FC5185]/10 text-[#FC5185] rounded-lg">
            ✗ Le mot de passe doit contenir :
            <ul className="list-disc ml-5 mt-2">
              <li>Minimum 8 caractères</li>
              <li>Au moins 1 MAJUSCULE</li>
              <li>Au moins 1 chiffre</li>
              <li>Au moins 1 symbole</li>
            </ul>
          </div>
        )}
      </div>

      {/* Pop-up pour la validation du mot de passe */}
      {showPasswordError && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <h3 className="text-lg font-medium text-[#FC5185]">Erreur de mot de passe</h3>
            <p className="text-sm text-gray-700">Votre mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un symbole.</p>
            <button 
              className="mt-4 px-4 py-2 bg-[#193AF9] text-white rounded-lg"
              onClick={() => setShowPasswordError(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}

 {/* Notifications Section */} 
<div className="mt-10">
  <h2 className="text-[36px] font-[lufga] text-[#090933] font-medium w-[1288px] h-[47px] mb-4">
    Notifications
  </h2>
  <p className="text-[16px] font-[lufga] text-[#7C829C] w-[1288px] h-[21px] mb-6">Lorem ipsum is here</p>
  <div className="space-y-4">
    <div className="flex items-center">
      <label className="text-[#7C829C] font-[lufga] w-[300px] h-[52px] text-[22px] w-1/4">
        Email Notifications
      </label>
      <input type="checkbox" className="w-35 h-35 rounded accent-[#193AF9]" />
    </div>
    <div className="flex items-center">
      <label className="text-[#7C829C] font-[lufga] w-[300px] h-[52px] text-[22px] w-1/4">
        App Notifications
      </label>
      <input type="checkbox" className="w-35 h-35 rounded accent-[#193AF9]" />
    </div>
    <div className="flex items-center">
      <label className="text-[#7C829C] font-[lufga] w-[300px] h-[52px] text-[22px] w-1/4">
        Chat Notifications
      </label>
      <input type="checkbox" className="w-35 h-35 rounded accent-[#193AF9]" />
    </div>
  </div>
</div>


      {/* Region & Language Section */}
      <div className="mt-10">
        <h2 className="text-[36px] w-[1288px] h-[47px] font-[lufga] font-medium  text-[#090933]  mb-4">Region & Language</h2>
        <p className="text-[16px] w-[1288px] h-[21px] text-[#7C829C] mb-6 font-[lufga]">Lorem ipsum is here</p>
        <div className="mb-6 flex items-center ">
          <label className="text-[#7C829C] font-[lufga] text-[22px] w-[300px] h-[29px]">Region</label>
          <select className="flex w-[600px] h-[65px] p-3 border rounded-lg bg-[#7C829C]/5  ">
            <option>Select your region</option>
            <option>Afghanistan</option>
            <option>Afrique du Sud</option>
            <option>Albanie</option>
            <option>Algérie</option>
            <option>Allemagne</option>
            <option>Andorre</option>
            <option>Angola</option>
            <option>Antigua-et-Barbuda</option>
            <option>Arabie saoudite</option>
            <option>Argentine</option>
            <option>Arménie</option>
            <option>Australie</option>
            <option>Autriche</option>
            <option>Azerbaïdjan</option>
            <option>Bahamas</option>
            <option>Bahreïn</option>
            <option>Bangladesh</option>
            <option>Barbade</option>
            <option>Belgique</option>
            <option>Belize</option>
            <option>Bénin</option>
            <option>Bhoutan</option>
            <option>Biélorussie</option>
            <option>Birmanie</option>
            <option>Bolivie</option>
            <option>Bosnie-Herzégovine</option>
            <option>Botswana</option>
            <option>Brésil</option>
            <option>Brunei</option>
            <option>Bulgarie</option>
            <option>Burkina Faso</option>
            <option>Burundi</option>
            <option>Cambodge</option>
            <option>Cameroun</option>
            <option>Canada</option>
            <option>Cap-Vert</option>
            <option>Chili</option>
            <option>Chine</option>
            <option>Chypre</option>
            <option>Colombie</option>
            <option>Comores</option>
            <option>République du Congo</option>
            <option>République démocratique du Congo</option>
            <option>Corée du Nord</option>
            <option>Corée du Sud</option>
            <option>Costa Rica</option>
            <option>Côte d'Ivoire</option>
            <option>Croatie</option>
            <option>Cuba</option>
            <option>Danemark</option>
            <option>Djibouti</option>
            <option>Dominique</option>
            <option>Égypte</option>
            <option>Émirats arabes unis</option>
            <option>Équateur</option>
            <option>Érythrée</option>
            <option>Espagne</option>
            <option>Estonie</option>
            <option>Eswatini</option>
            <option>États-Unis</option>
            <option>Éthiopie</option>
            <option>Fidji</option>
            <option>Finlande</option>
            <option>France</option>
            <option>Gabon</option>
            <option>Gambie</option>
            <option>Géorgie</option>
            <option>Ghana</option>
            <option>Grèce</option>
            <option>Grenade</option>
            <option>Guatemala</option>
            <option>Guinée</option>
            <option>Guinée-Bissau</option>
            <option>Guinée équatoriale</option>
            <option>Guyana</option>
            <option>Haïti</option>
            <option>Honduras</option>
            <option>Hongrie</option>
            <option>Inde</option>
            <option>Indonésie</option>
            <option>Irak</option>
            <option>Iran</option>
            <option>Irlande</option>
            <option>Islande</option>
            <option>Israël</option>
            <option>Italie</option>
            <option>Jamaïque</option>
            <option>Japon</option>
            <option>Jordanie</option>
            <option>Kazakhstan</option>
            <option>Kenya</option>
            <option>Kirghizistan</option>
            <option>Kiribati</option>
            <option>Kosovo</option>
            <option>Koweït</option>
            <option>Laos</option>
            <option>Lesotho</option>
            <option>Lettonie</option>
            <option>Liban</option>
            <option>Liberia</option>
            <option>Libye</option>
            <option>Liechtenstein</option>
            <option>Lituanie</option>
            <option>Luxembourg</option>
            <option>Macédoine du Nord</option>
            <option>Madagascar</option>
            <option>Malaisie</option>
            <option>Malawi</option>
            <option>Maldives</option>
            <option>Mali</option>
            <option>Malte</option>
            <option>Maroc</option>
            <option>Marshall</option>
            <option>Maurice</option>
            <option>Mauritanie</option>
            <option>Mexique</option>
            <option>Micronésie</option>
            <option>Moldavie</option>
            <option>Monaco</option>
            <option>Mongolie</option>
            <option>Monténégro</option>
            <option>Mozambique</option>
            <option>Namibie</option>
            <option>Nauru</option>
            <option>Népal</option>
            <option>Nicaragua</option>
            <option>Niger</option>
            <option>Nigeria</option>
            <option>Norvège</option>
            <option>Nouvelle-Zélande</option>
            <option>Oman</option>
            <option>Ouganda</option>
            <option>Ouzbékistan</option>
            <option>Pakistan</option>
            <option>Palaos</option>
            <option>Palestine</option>
            <option>Panama</option>
            <option>Papouasie-Nouvelle-Guinée</option>
            <option>Paraguay</option>
            <option>Pays-Bas</option>
            <option>Pérou</option>
            <option>Philippines</option>
            <option>Pologne</option>
            <option>Portugal</option>
            <option>Qatar</option>
            <option>République centrafricaine</option>
            <option>République dominicaine</option>
            <option>Roumanie</option>
            <option>Royaume-Uni</option>
            <option>Russie</option>
            <option>Rwanda</option>
            <option>Saint-Christophe-et-Niévès</option>
            <option>Sainte-Lucie</option>
            <option>Saint-Marin</option>
            <option>Saint-Vincent-et-les-Grenadines</option>
            <option>Salomon</option>
            <option>Salvador</option>
            <option>Samoa</option>
            <option>Sao Tomé-et-Principe</option>
            <option>Sénégal</option>
            <option>Serbie</option>
            <option>Seychelles</option>
            <option>Sierra Leone</option>
            <option>Singapour</option>
            <option>Slovaquie</option>
            <option>Slovénie</option>
            <option>Somalie</option>
            <option>Soudan</option>
            <option>Soudan du Sud</option>
            <option>Sri Lanka</option>
            <option>Suède</option>
            <option>Suisse</option>
            <option>Suriname</option>
            <option>Syrie</option>
            <option>Ukraine</option>
            <option>Uruguay</option>
            <option>Vatican</option>
            <option>Venezuela</option>
            <option>Viêt Nam</option>
            <option>Yémen</option>
            <option>Zambie</option>
            <option>Zimbabwe</option>
          </select>
        </div>
        <div className="mb-6 flex items-center ">
          <label className="text-[#7C829C]  font-[lufga] text-[22px] w-[300px] h-[29px]w-1/4">Language</label>
          <select className="flex p-3 border w-[600px] h-[65px]  rounded-lg bg-[#7C829C]/5">
            <option>English</option>
            <option>French</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
        {/* Appearances Section */}
        <div className="mt-10 ">
        <h2 className="text-[36px] font-[lufga] font-medium  text-[#090933] w-[1288px] h-[47px]">Appearances</h2>
        <p className="text-[#7C829C] font-[lufga] text-[16px] mb-2 w-[1288px] h-[21px]">Would you have to change the appearances of light and switch it to dark mode, light mode.</p>
        <div className="flex items-center space-x-6 mb-4">
          <div className="w-[300px] h-[265px]">
            <label className="text-[#7C829C] font-[lufga] w-[300px] h-[29px] text-[16px]">Appearances</label>
            <p className="w-[300px] h-[21px] text-[16px] text-[#7C829C]">Lorem ipsum is here</p>
          </div>
          <div className="flex space-x-6">
            <div className="flex flex-col items-center">
              <img src="src/assets/images/light-mode.svg" className="w-[288px] h-[185px] rounded-lg " alt="Light Mode" />
              <label className="flex items-center space-x-2 cursor-pointer mt-2">
                <input 
                  type="radio" 
                  name="mode" 
                  checked={!darkMode} 
                  onChange={() => setDarkMode(false)} 
                  className="w-5 h-5 text-blue-600 " 
                />
                <span className="text-[22px] w-[117px] h-[29px] font-medium text-[#090933] font-[lufga]">Light Mode</span>
              </label>
            </div>
            <div className="flex flex-col items-center ">
              <img src="src/assets/images/dark-mode.svg" className="w-[288px] h-[185px] rounded-lg " alt="Dark Mode" />
              <label className="flex items-center space-x-2 cursor-pointer mt-2 ">
                <input 
                  type="radio" 
                  name="mode" 
                  checked={darkMode} 
                  onChange={() => setDarkMode(true)} 
                  className="w-5 h-5 text-blue-600 accent-[#193AF9]" 
                />
                <span className="text-[22px] w-[288px] h-[80px] font-medium font-[lufga] text-[#090933]">Dark Mode</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCoach;
