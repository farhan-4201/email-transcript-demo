import React from "react";

const FAQ = () => (
  <section className="w-full h-full flex flex-col items-center justify-start">
    <div className="glass w-full h-full flex flex-col p-8 max-w-2xl mx-auto mt-10 text-[var(--foreground)]">
      <h2 className="text-xl font-bold text-[var(--primary)] mb-4 tracking-wide drop-shadow-sm">Frequently Asked Questions</h2>
      <div className="w-full max-w-xl text-left">
        <div className="mb-4">
          <h3 className="font-semibold text-base text-[var(--accent)]">How do I classify an email?</h3>
          <p>Select an email from the list and click the "Classify" button. The result will appear on the right.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-base text-[var(--accent)]">Who can I contact for support?</h3>
          <p>Please use the Support section or email us at <a href="mailto:farhantariq4636@gmail.com" className="underline text-[var(--accent)]">farhantariq4636@gmail.com</a>.</p>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold text-base text-[var(--accent)]">Is my data secure?</h3>
          <p>Yes, your data is processed securely and is not shared with third parties.</p>
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
