import React from "react";
import Seo from "../../components/shared/Seo";

const ThanksPage = () => (
  <div className="max-w-2xl mx-auto text-center">
    <div className="mt-8">
      <img src="/FrogLogo.svg" alt="Frog logo" className="w-32 mx-auto" />
    </div>

    <p className="font-extrabold text-5xl mt-4">Subscription Confirmed! 🥳</p>
    <p className="text-bold text-5xl">Thank you!</p>
  </div>
);

export const Head = () => <Seo title="Thanks" />;

export default ThanksPage;
