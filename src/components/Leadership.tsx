export default function Leadership() {
  return (
    <section id="leadership" className="py-10 md:py-25 bg-plant-green">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-primary mb-12 font-bold text-center text-orange-custom underline">
          Leadership
        </h2>

        <div className="mb-8">
          <p className="font-primary text-base md:text-lg text-dark text-center lg:text-left">
            Enssy Enterprises is anchored in strong governance, ethical
            leadership, and community-centered development. The organization’s
            identity, values, and long-term vision are rooted in the founding
            leadership of Agnes Nessy Akinyi Otieno, whose principles continue
            to guide strategic direction and institutional culture.
          </p>
        </div>
        <div className="space-y-2 md:space-y-4">
          <div className="p-6 items-center flex flex-col lg:flex-row lg:items-start lg:space-x-8 gap-10 lg:gap-12">
            <div className="w-full lg:w-auto md:shrink-0 flex justify-center">
              {/* <img
              src="./src/assets/images/leader.png"
              alt="Leader 1"
              className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-md"
            /> */}
            </div>
            <div className="text-center lg:text-left max-w-3xl">
              <div className="border-b-2 border-orange-custom inline-block pb-1 mb-4">
                <h3 className="text-xl font-primary font-semibold text-dark">
                  Jack Okomo
                </h3>
                <h4 className="font-primary font-semibold text-dark">
                  CEO & Founder
                </h4>
              </div>
              <p className="text-dark font-primary leading-relaxed text-[15px] md:text-base">
                Jack Okomo is the Founder and Project Lead of Enssy Enterprises.
                He is an experienced agribusiness consultant and community
                development practitioner with expertise in climate-smart
                agriculture, agroecology, and food systems transformation. He
                has led initiatives in climate-resilient farming, ecosystem
                restoration, waste valorization (BSF technology), and indigenous
                knowledge integration, while also contributing to regional and
                national food policy dialogues. Jack previously contributed to
                the 2013 UNIDO green technology study (
                <a
                  href="https://www.unido.org/sites/default/files/2015-10/EE_africa_0.pdf"
                  target="_blank"
                  className="text-orange-custom italic underline"
                >
                  please also see
                </a>
                ) and continues to champion community-driven solutions for
                resilience, peace, and sustainable development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
