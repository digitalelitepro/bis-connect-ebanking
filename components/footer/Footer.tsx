import React from "react";

const Footer = () => {
  return (
    <div className="h-19 sm:h-19 flex flex-col justify-center items-center  space-y-1 bg-blue-950 text-white ">
      <p className="text-sm text-center">Raphael Waly SENGHOR </p>
      
      <h2 className="text-[9px] text-center pt-1">
        Siège social : Almadies Zone 12, niveau rond-point, face route King
        Fahd, Dakar-Sénégal - B.P : 3381 - Dakar
      </h2>

      <p className="mb-1 text-[7px] font-semibold">
        © 2024 Banque Islamique du Sénégal • Tous droits réservés
      </p>
    </div>
  );
};

export default Footer;
