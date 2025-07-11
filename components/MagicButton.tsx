import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] group-hover:animate-[spin_1s_linear_infinite]" />

      {/* remove px-3 py-1, add px-5 gap-2 */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 group-hover:bg-slate-900 group-hover:text-purple-200 transition-all duration-300 ${otherClasses}`}
      >
        {position === "left" && <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>}
        <span className="group-hover:tracking-wide transition-all duration-300">{title}</span>
        {position === "right" && <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>}
      </span>
    </button>
  );
};

export default MagicButton;
