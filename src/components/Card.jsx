// Text - #e3e0ee
// Background - #0f0c18
// Primary - #b2a6d4
// Secondary - #443474
// Accent - #7258ba

import MyImage from "../assets/me_anime.png";

const randomWave = () => {
  const c1 = Math.random() * 600 + 100;
  const c2 = Math.random() * 500 + 100;
  return `M0,30 C${c1},60 ${c2},0 500,30 L500,50 L0,50 Z`;
};

export default function Card(props) {
  const wavePath = randomWave();

  return (
    <div className="bg-[#0f0c18] text-[#e3e0ee] flex flex-col items-center justify-center">
      <div className="bg-[#0f0c18] text-[#b2a6d4] w-80 h-96 rounded-xl shadow-lg overflow-hidden border border-[#443474] flex flex-col">
        
        {/* Image with wavy bottom */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={MyImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <svg
            className="absolute bottom-0 left-0 w-full h-12"
            viewBox="0 0 500 50"
            preserveAspectRatio="none"
          >
            <path d={wavePath} fill="#0f0c18" />
          </svg>
        </div>

        {/* Content */}
        <div className="flex-1 p-5 flex flex-col justify-between">
          {/* Top section */}
          <div>
            <h2 className="text-xl font-semibold text-[#e3e0ee]">{props.name}</h2>
            <p className="text-sm text-[#b2a6d4] mt-1">{props.description}</p>
          </div>

          {/* Bottom section (stats + button) */}
          <div>
            <div className="flex justify-between items-center mb-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-[#b2a6d4]">👤</span>
                <span>{props.followers}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#b2a6d4]">❤️</span>
                <span>{props.likes}</span>
              </div>
            </div>

            <button className="w-full bg-[#7258ba] hover:bg-[#443474] text-white py-2 rounded-lg font-medium transition-colors mb-5">
              Follow +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
