// Text - #e3e0ee
// Background - #0f0c18
// Primary - #b2a6d4
// Secondary - #443474
// Accent - #7258ba

import MyImage from "../assets/me_anime.png"

export default function Card() {
  return (
    <div className="Card bg-[#0f0c18] text-[#e3e0ee] min-h-screen flex flex-col items-center justify-center">
      <div className="bg-[#0f0c18] text-[#b2a6d4] w-80 rounded-xl shadow-lg overflow-hidden border border-[#443474]">
        
        {/* Image */}
        <div className="h-48 w-full overflow-hidden">
          <img
            src={MyImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="text-xl font-semibold text-[#e3e0ee]">Krish Maheshwari</h2>
          <p className="text-sm text-[#b2a6d4] mt-1">
            Backend guy trying frontend for first time in his life.
          </p>

          {/* Stats */}
          <div className="flex justify-between items-center mt-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-[#b2a6d4]">👤</span>
              <span>543 (i wish)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#b2a6d4]">❤️</span>
              <span>708 (i am famous)</span>
            </div>
          </div>

          {/* Follow Button */}
          <button className="mt-5 w-full bg-[#7258ba] hover:bg-[#443474] text-white py-2 rounded-lg font-medium transition-colors">
            Follow +
          </button>
        </div>
      </div>
    </div>
  );
}