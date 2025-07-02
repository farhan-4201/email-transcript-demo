import React from "react";

const Support = () => (
  <section className="w-full h-full flex flex-col items-center justify-start">
    <div className="glass w-full h-full flex flex-col p-8 max-w-2xl mx-auto mt-10 text-[var(--foreground)]">
      <h2 className="text-xl font-bold text-[var(--primary)] mb-4 tracking-wide drop-shadow-sm">Support</h2>
      <p className="text-base mb-2">For any issues or questions, please contact our support team:</p>
      <ul className="text-base mb-4">
        <li>Email: <a href="mailto:support@example.com" className="text-[var(--accent)] underline">farhantariq4636@gmail.com</a></li>
      </ul>
      <p className="mt-2 text-base">We are here to help you 24/7!</p>
    </div>
  </section>
);

export default Support;
