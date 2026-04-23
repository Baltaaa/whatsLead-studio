import { FaroIcon } from '../assets/FaroIcon'

function Logo({ small = false }) {
    return (
      <div className="flex items-center gap-3 select-none">
  


        {/* Icon */}
        <FaroIcon size={50} color="white" />
  
        {/* Text */}
        <div className="leading-none">
          <h1 className="text-lg md:text-2xl font-semibold tracking-tight bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
            WhatsLead
          </h1>
  
          <p className="text-[10px] md:text-xs tracking-[0.45em] text-zinc-500 mt-1">
            STUDIO
          </p>
        </div>
  
      </div>
    )
  }
  
  export default Logo