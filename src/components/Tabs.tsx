import { useEffect, useRef, useState } from "react";

export default function Tabs() {
  // Track which button is currently active (clicked)
  const [activeButton, setActiveButton] = useState<string | null>(null);

  // Reference to the whole tabs container to detect outside clicks
  const tabsRef = useRef<HTMLDivElement>(null);

  // Handle button clicks — log and set active
  const handleButtonClick = (name: string) => {
    console.log(`${name} button clicked`);
    setActiveButton(name);
  };

  // Effect: Detect clicks outside the tabs area and clear active state
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (tabsRef.current && !tabsRef.current.contains(e.target as Node)) {
        setActiveButton(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const getButtonClass = (name: string) =>
    activeButton === name
      ? "bg-gray-300 text-black"
      : "bg-white hover:bg-gray-100";

  return (
    <div
      ref={tabsRef}
      className="flex items-center gap-2 px-2 py-1.5 relative self-stretch w-full z-[2] bg-white border-b border-[#eeeeee]"
    >
      {/* Toolbar button */}
      <button
        onClick={() => handleButtonClick("Toolbar")}
        className={`h-10 inline-flex items-center justify-center gap-1 p-2 rounded ${getButtonClass(
          "Toolbar"
        )}`}
      >
        <span>Tool bar</span>
        <img
          className="w-4 h-4"
          alt="Chevron double"
          src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron-double.svg"
        />
      </button>

      {/* Divider */}
      <div className="w-px h-6 bg-[#eeeeee]" />

      {/* Middle section with multiple buttons */}
      <div className="flex items-center gap-1 flex-1">
        {/* Loop through spreadsheet action buttons */}
        {[
          { name: "Hide fields", icon: "eye.svg" },
          { name: "Sort", icon: "arrow-sort.svg" },
          { name: "Filter", icon: "filter.svg" },
          { name: "Cell view", icon: "arrow-autofit.svg" },
        ].map(({ name, icon }) => (
          <button
            key={name}
            onClick={() => handleButtonClick(name)}
            className={`h-10 px-4 flex items-center gap-1 rounded-md ${getButtonClass(
              name
            )}`}
          >
            <img
              className="w-5 h-5"
              alt={name}
              src={`https://c.animaapp.com/mclmkdkf288FZk/img/${icon}`}
            />
            <span>{name}</span>
          </button>
        ))}
      </div>

      {/* Right-side action buttons */}
      <div className="inline-flex items-center justify-end gap-2">
        {/* Import / Export / Share */}
        <div className="inline-flex gap-2">
          {[
            { name: "Import", icon: "arrow-download.svg" },
            { name: "Export", icon: "arrow-upload.svg" },
            { name: "Share", icon: "share.svg" },
          ].map(({ name, icon }) => (
            <button
              key={name}
              onClick={() => handleButtonClick(name)}
              className={`h-10 px-4 flex items-center gap-1 rounded-md border border-[#eeeeee] ${getButtonClass(
                name
              )}`}
            >
              <img
                className="w-5 h-5"
                alt={name}
                src={`https://c.animaapp.com/mclmkdkf288FZk/img/${icon}`}
              />
              <span>{name}</span>
            </button>
          ))}
        </div>

        {/* New Action button */}
        <button
          onClick={() => handleButtonClick("New Action")}
          className={`h-10 px-6 flex items-center justify-center gap-1 rounded-md transition-colors duration-150 ${
            activeButton === "New Action"
              ? "bg-green-900 text-white" // Active: darkest green
              : "bg-green-700 text-white hover:bg-green-800" // Inactive: medium green, hover darker
          }`}
        >
          <img
            className="w-5 h-5"
            alt="Arrow split"
            src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg"
          />
          <span>New Action</span>
        </button>
      </div>
    </div>
  );
}
