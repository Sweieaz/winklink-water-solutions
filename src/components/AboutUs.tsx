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
              Enssy Enterprises is a Kenya-based agribusiness consultancy firm
              headquartered in Nakuru. We are dedicated to transforming rural
              livelihoods through climate-smart agriculture, women and youth
              empowerment, and sustainable, community-based solutions. Since our
              inception, we have partnered with NGOs, CBOs, Individual Farmers,
              cooperatives, and County Governments to deliver high-impact
              advisory and implementation support across Kenya ASALs.
            </p>
            <div className="font-primary mt-6 text-[15px] md:text-base">
              Why choose us?
              <a
                href="/services.html#home"
                target="_self"
                className="text-brown-green italic hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="space-y-10">
            <div>
              <h4 className="text-2xs font-primary font-bold mb-2 text-brown-green">
                Our Mission
              </h4>
              <p className="text-brown font-primary leading-relaxed text-[15px] md:text-base">
                To empower communities, especially people with disabilities,
                youth and women, with practical, innovative solutions that drive
                food security, economic independence, and climate resilience.-
              </p>
            </div>
            <div>
              <h4 className="text-2xs font-primary font-bold mb-2 text-brown-green">
                Our Vision
              </h4>
              <p className="text-brown font-primary leading-relaxed text-[15px] md:text-base">
                To be a leading African consultancy championing inclusive,
                sustainable agribusiness and rural development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
