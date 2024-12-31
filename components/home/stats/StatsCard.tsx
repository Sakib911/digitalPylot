import { TrendingUp } from 'lucide-react';

export const StatsCard = () => (
  <div className="bg-white rounded-2xl p-6 shadow-xl relative pb-6 mt-8">
    <div className="space-y-2 pb-6">
      <div>
      <div className="relative">
        <h2 className="text-8xl font-black text-gray-900">230+</h2>
      </div>
      <p className="text-[#6366F1] font-medium">Satisfied Clients</p>
      <p className="text-sm text-gray-500">
        some big companies that we work with, and trust us very much
      </p>
      
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-200 overflow-hidden ">
        <div 
          className="h-full bg-[#6366F1] transition-all duration-500 "
          style={{ width: '80%' }}
        />
      </div>
      </div>
    </div>
  </div>
);

