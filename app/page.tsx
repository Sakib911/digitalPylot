import Hero from '@/components/home/Hero';
import Partners from '@/components/home/Partners';
import { HostingSection } from '@/components/home/hosting/HostingSection';
import { AboutSection } from '@/components/home/about/AboutSection';

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <Partners />
      <HostingSection />
      <AboutSection />
    </main>
  );
}