import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [activeBreadcrumb, setActiveBreadcrumb] = useState("Spreadsheet 3");
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleBreadcrumbClick = (name: string) => {
    console.log(`Breadcrumb: ${name} clicked`);
    setActiveBreadcrumb(name);
  };

  const handleButtonClick = (name: string) => {
    console.log(`${name} button clicked`);
    setActiveButton(name);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(e.target as Node)
      ) {
        setActiveButton(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="flex items-center justify-between px-4 py-2 w-full bg-white border-b border-[#eeeeee] relative z-[3]"
    >
      {/* Left Section */}
      <div className="inline-flex items-center gap-4">
        {/* Panel Button */}
        <button
          onClick={() => handleButtonClick("Panel")}
          className={`w-6 h-6 p-0 inline-flex items-center justify-center rounded-md ${
            activeButton === "Panel"
              ? "bg-gray-200 text-black"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          <img src="https://c.animaapp.com/mclmkdkf288FZk/img/panel.svg" alt="Panel" className="w-6 h-6" />
        </button>

        {/* Breadcrumb */}
        <nav aria-label="breadcrumb">
          <ol className="inline-flex items-center gap-1 text-sm text-muted-foreground">
            {["Workspace", "Folder 2", "Spreadsheet 3"].map((item, idx) => (
              <li key={item} className="flex items-center gap-1">
                <a
                  href="#"
                  onClick={() => handleBreadcrumbClick(item)}
                  className={`${
                    activeBreadcrumb === item
                      ? "text-black font-semibold"
                      : "text-[#afafaf] hover:text-[#121212]"
                  }`}
                >
                  {item}
                </a>
                {idx < 2 && (
                  <img src="https://c.animaapp.com/mclmkdkf288FZk/img/chevron-1.svg" alt=">" className="w-3 h-3" />
                )}
              </li>
            ))}
            <li>
              <button
                onClick={() => handleButtonClick("More")}
                className={`w-6 h-6 p-0 flex items-center justify-center rounded ${
                  activeButton === "More"
                    ? "bg-gray-200 text-black"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <img src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg" alt="More" className="w-5 h-5" />
              </button>
            </li>
          </ol>
        </nav>
      </div>

      {/* Right Section */}
      <div className="inline-flex items-center gap-1">
        {/* Search */}
        <div className="inline-flex items-center gap-2 p-3 bg-[#f6f6f6] rounded-md">
          <div className="relative w-4 h-4">
            <img src="https://c.animaapp.com/mclmkdkf288FZk/img/group.png" alt="Search" className="absolute w-[13px] h-[13px] top-px left-px" />
          </div>
          <input
            type="text"
            placeholder="Search within sheet"
            onChange={(e) => console.log(`Search typed: ${e.target.value}`)}
            className="bg-transparent text-[#757575] text-xs placeholder:text-[#757575] focus:outline-none font-sans"
          />
        </div>

        {/* Alert */}
        <button
          onClick={() => handleButtonClick("Alert")}
          className={`relative rounded-lg p-2 ${
            activeButton === "Alert"
              ? "bg-gray-200 text-black"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          <img src="https://c.animaapp.com/mclmkdkf288FZk/img/alert.svg" alt="Alert" className="w-8 h-6" />
          <div className="absolute top-0 left-5 bg-[#4b6a4f] text-xs text-white rounded-full w-5 h-5 flex items-center justify-center border-2 border-white">
            2
          </div>
        </button>

        {/* User */}
        <button
          onClick={() => handleButtonClick("User")}
          className={`inline-flex items-center gap-2 rounded-lg px-2 py-1.5 ${
            activeButton === "User"
              ? "bg-gray-200 text-black"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          <span className="w-8 h-8 overflow-hidden rounded-full">
            <img
              src="https://c.animaapp.com/mclmkdkf288FZk/img/ellipse-1.png"
              alt="John Doe"
              className="w-full h-full object-cover"
            />
          </span>
          <div className="flex flex-col text-left">
            <div className="text-xs text-[#121212]">John Doe</div>
            <div className="text-[10px] text-[#757575] truncate">john.doe...</div>
          </div>
        </button>
      </div>
    </header>
  );
}
