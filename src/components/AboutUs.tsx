export default function AboutUs() {
  return (
    <section id="about" className="py-10 md:py-25 ">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-primary font-bold mb-12 text-center text-plant-green underline">
          About Us
        </h2>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <h4 className="text-2xs font-primary font-bold mb-2 text-brown-green">
              Company Overview
            </h4>
            <p className="text-brown font-primary leading-relaxed mb-6 text-[15px] md:text-base">
              Winklink Water Solutions Ltd is a Kenyan-owned company established
              in 2018, specializing in water treatment, water equipment supply,
              and installation of water solutions. Based in Nairobi, the company
              serves clients across Kenya, providing reliable water systems and
              solutions designed to improve water quality, accessibility, and
              living standards. We are committed to delivering quality products
              and services that meet the diverse water needs of homes,
              businesses, and communities.
            </p>
            <div className="font-primary mt-6 text-[15px] md:text-base">
              <h4 className="text-2xs font-primary font-bold mb-2 text-brown-green">
                Why choose us?
              </h4>
              <p className="text-brown font-primary leading-relaxed mb-6 text-[15px] md:text-base">
                At Winklink Water Solutions, we believe that access to quality
                water solutions plays an important role in improving everyday
                life. We are committed to providing dependable water treatment
                equipment, professional installation, and practical solutions
                tailored to our clients&apos; needs. Through our commitment to
                quality, integrity, and reliable service, we aim to:
                <ul className="list-disc pl-5 space-y-2 text-brown">
                  <li>
                    Provide dependable water treatment equipment and solutions.
                  </li>
                  <li>
                    Deliver professional installation and technical support.
                  </li>
                  <li>
                    Promote access to quality water solutions for homes,
                    businesses, and communities.
                  </li>
                  <li>
                    Build lasting relationships through reliable service and
                    customer satisfaction.
                  </li>
                </ul>
                Our goal is to make quality water solutions accessible and
                contribute to better living standards across Kenya and beyond.
              </p>
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <h4 className="text-2xs font-primary font-bold mb-2 text-brown-green">
                Our Mission
              </h4>
              <p className="text-brown font-primary leading-relaxed text-[15px] md:text-base">
                To provide quality water facilities, equipment, and innovative
                water solutions that improve living standards and promote access
                to reliable, clean water.-
              </p>
            </div>
            <div>
              <h4 className="text-2xs font-primary font-bold mb-2 text-brown-green">
                Our Vision
              </h4>
              <p className="text-brown font-primary leading-relaxed text-[15px] md:text-base">
                To improve people&apos;s lives by providing high-quality water
                equipment and sustainable water solutions across Africa.
              </p>
            </div>
            <div>
              <h4 className="text-2xs font-primary font-bold mb-2 text-brown-green">
                Our Core Values
              </h4>
              <p className="text-brown font-primary leading-relaxed text-[15px] md:text-base">
                <ul className="list-disc pl-5 space-y-2 text-brown">
                  <li>
                    Integrity: Building trust through honesty, transparency, and
                    accountability
                  </li>
                  <li>
                    Quality: Delivering reliable products and services that meet
                    high standards
                  </li>
                  <li>
                    Loyalty: Building lasting relationships with our clients and
                    partners
                  </li>
                  <li>
                    Punctuality: Valuing time through timely service delivery
                    and commitment
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
