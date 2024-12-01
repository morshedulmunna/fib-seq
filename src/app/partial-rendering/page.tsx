// app/partial-rendering/page.tsx
import React from "react";
import SSRSection from "../components/SSRSection";
import CSRSection from "../components/CSRSection";
import ISRSection from "../components/ISRSection";

const PartialRenderingPage = async () => {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-8">Partial Rendering Example</h1>
      {/* SSR Section */}
      <SSRSection />
      {/* CSR Section */}
      <CSRSection />
      {/* ISR Section */}
      <ISRSection />
    </main>
  );
};

export default PartialRenderingPage;
