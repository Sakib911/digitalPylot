export default function Partners() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="text-lg font-medium text-gray-600 mb-12 ml-8">Trusted By:</h3>
        <div className="bg-white rounded-3xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="flex justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const partners = [
  { name: "Plesk", logo: "/partners/plesk.png" },
  { name: "SmarterMail", logo: "/partners/smartermail.png" },
  { name: "CloudLinux", logo: "/partners/cloudlinux.png" },
  { name: "Facebook", logo: "/partners/facebook.png" },
  { name: "AWS", logo: "/partners/aws.png" },
  { name: "Virtualizor", logo: "/partners/virtualizor.png" },
];