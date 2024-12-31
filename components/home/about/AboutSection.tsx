import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <img
              src="/about-image.jpg"
              alt="Digital Marketing Expert"
              className="rounded-3xl shadow-xl w-full"
            />
            <img
              src="/google-partner.png"
              alt="Google Partner"
              className="absolute -bottom-6 right-6 w-24 h-auto"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-blue-600 font-medium">About Us</span>
              <h2 className="text-4xl font-bold">
                Reliable, affordable & <span className="text-purple-600">site-specific</span>
              </h2>
              <h3 className="text-3xl font-bold">
                web <span className="text-purple-600">hosting</span> capabilities beyond comparison
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed">
              You are at the right place if you are looking for web hosting in Pakistan, PK domain name, and Windows hosting services with complete reliability, security, affordability and full 24/7 technical support. We don't just aim to speed up your website with premium web hosting in Pakistan but also speed you up globally. With our ultra-reliable, fast, and super-secure servers, we are here to help your site flow in the air. Not only that but Nextcorsoft has also been established on the premises of reliable digital marketing services in Pakistan and specializes in healthcare marketing services.
            </p>

            <Button 
              className="rounded-full px-6 py-2 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"
            >
              Learn More
              <svg 
                className="w-4 h-4 ml-2" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};