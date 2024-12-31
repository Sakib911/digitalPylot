import React from 'react';
import { FeaturePill } from './features/FeaturePill';
import { StatsCard } from './stats/StatsCard';
import { DomainSearch } from './search/DomainSearch';
import TrafficCard from './traffic/TrafficCard';
import { AnalyticsDashboard } from './analytics/AnalyticsDashboard';

const Hero = () => {
  const features = [
    'Free domain & site builder',
    'Email Protection',
    'Improved cPanel',
    '60-Days Money-Back',
  ];

  return (
    <div className="relative bg-hero-pattern bg-cover bg-center overflow-hidden z-49">
      <div className="max-w-7xl  mx-[210px] px-4 py-16 sm:px-6 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-white/80 text-sm font-medium">Fast Secure & Powerful</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Performance Marketing<br />
                für Unternehmen &<br />
                Onlineshops
              </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              {features.map((feature) => (
                <FeaturePill key={feature} text={feature} />
              ))}
            </div>

            <DomainSearch />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 items-center gap-6">
              <AnalyticsDashboard />
              <StatsCard />
            </div>

            <div className='mx-10 mb-0'>
            <TrafficCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;