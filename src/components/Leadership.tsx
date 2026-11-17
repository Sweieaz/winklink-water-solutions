export default function Leadership() {
  return (
    <section id="leadership" className="py-10 md:py-25 bg-plant-green">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-primary mb-12 font-bold text-center text-orange-custom underline">
          Leadership
        </h2>

        <div className="mb-8">
          <p className="font-primary text-base md:text-lg text-dark text-center lg:text-left">
            Winklink Water Solutions Ltd is built on engineering expertise,
            innovation, and a commitment to delivering quality water solutions.
            The company&apos;s foundation, values, and long-term vision are
            rooted in the entrepreneurial journey and leadership of its founder,
            Eng. Charles Munala, whose dedication and technical experience
            continue to drive the company&apos;s growth, operations, and
            commitment to improving access to reliable water solutions.
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
                  Eng. Charles Munala
                </h3>
                <h4 className="font-primary font-semibold text-dark">
                  CEO & Founder
                </h4>
              </div>
              <p className="text-dark font-primary leading-relaxed text-[15px] md:text-base">
                Eng. Charles Munala is the Founder and Chief Executive Officer
                of Winklink Water Solutions Ltd. He is a General Engineer with
                experience in water treatment equipment supply, fabrication,
                manufacturing, and installation. His entrepreneurial journey
                began with supplying water treatment equipment, which gradually
                grew into the fabrication and assembly of complete water
                treatment machines. Through his engineering expertise, hands-on
                experience, and commitment to quality, he has helped establish
                Winklink as a company providing water equipment and solutions
                across Kenya. His vision continues to drive the company&apos;s
                growth and its commitment to improving access to reliable water
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
