export const LogoStrip = () => (
  <section className="w-full bg-[#f7f7f7] py-8">
    <marquee behavior="scroll" direction="left" scrollamount="6">
      {logos.map((src, idx) => (
        <img
          key={idx}
          src={'/marquee.svg'}
          alt={`Logo ${idx + 1}`}
          className="h-12 w-auto opacity-60 mx-8"
          style={{ maxWidth: 120, display: "inline-block" }}
        />
      ))}
    </marquee>
  </section>
);