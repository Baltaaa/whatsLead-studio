function Logo({ small = false }) {
    return (
      <div className="flex items-center gap-3 select-none">
  
        {/* Icon */}
        <svg
          width={small ? "34" : "44"}
          height={small ? "34" : "44"}
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          {/* marco */}
          <path
            d="M14 52V18C14 10 20 4 28 4H42"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
  
          {/* faro */}
          <rect
            x="28"
            y="20"
            width="8"
            height="22"
            rx="1"
            stroke="white"
            strokeWidth="2"
          />
  
          <rect
            x="30"
            y="14"
            width="4"
            height="6"
            stroke="white"
            strokeWidth="2"
          />
  
          {/* luz */}
          <path
            d="M38 18L50 16"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
  
          {/* olas */}
          <path
            d="M12 52C18 48 24 56 30 52C36 48 42 56 48 52"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
  
          <path
            d="M16 58C22 54 28 62 34 58C40 54 46 62 52 58"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
  
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