import { useEffect, useRef, useState } from "react";

const columns = [
  {
    label: "Job Request",
    icon: "briefcase",
    width: "216px",
    bg: "bg-[#eeeeee]",
    text: "text-[#757575]",
  },
  {
    label: "Submitted",
    icon: "calendar",
    width: "176px",
    bg: "bg-[#eeeeee]",
    text: "text-[#757575]",
  },
  {
    label: "Status",
    icon: "chevron-circle",
    width: "176px",
    bg: "bg-[#eeeeee]",
    text: "text-[#757575]",
  },
  {
    label: "Submitter",
    icon: "person",
    width: "176px",
    bg: "bg-[#eeeeee]",
    text: "text-[#757575]",
  },
  {
    label: "URL",
    icon: "globe",
    width: "176px",
    bg: "bg-[#eeeeee]",
    text: "text-[#757575]",
  },
  {
    label: "Assigned",
    icon: "emoji",
    width: "176px",
    bg: "bg-[#e8f0e9]",
    text: "text-[#666c66]",
  },
  {
    label: "Priority",
    icon: "",
    width: "176px",
    bg: "bg-[#eae3fc]",
    text: "text-[#645c7f]",
  },
  {
    label: "Due Date",
    icon: "",
    width: "176px",
    bg: "bg-[#eae3fc]",
    text: "text-[#645c7f]",
  },
  {
    label: "Est. Value",
    icon: "",
    width: "176px",
    bg: "bg-[#ffe9e0]",
    text: "text-[#8c6b61]",
  },
];

export default function Spreadsheet() {
  const [activeTab, setActiveTab] = useState("All Orders");
  const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];
  const [plusActive, setPlusActive] = useState(false);
  const [activeCol, setActiveCol] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState<"overview" | "sync" | null>(null);
  const ref = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState<string | null>(null);

  // useEffect(() => {
  //   const handleOutsideClick = (e: MouseEvent) => {
  //     if (ref.current && !ref.current.contains(e.target as Node)) {
  //       setActive(null);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleOutsideClick);
  //   return () => document.removeEventListener("mousedown", handleOutsideClick);
  // }, []);

  const handleClicked = (key: string) => {
    console.log(`${key} clicked`);
    setActive(key);
  };

  const buttonClass = (key: string, baseHover: string) =>
    `p-0 bg-transparent border-none rounded w-5 h-5 flex items-center justify-center cursor-pointer ${
      active === key ? baseHover : `hover:${baseHover}`
    }`;

  const sectionClass = (key: string, _base: string, hover: string) =>
    `flex justify-center items-center gap-1 h-10 px-3 border border-border cursor-pointer transition-colors ${
      active === key ? hover : `hover:${hover}`
    }`;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setActiveItem(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    console.log(`${tab} tab clicked`);
  };

  const handlePlusClick = () => {
    setPlusActive(true);
    console.log("Add New Tab clicked");
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (tabsRef.current && !tabsRef.current.contains(e.target as Node)) {
        setPlusActive(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = (label: string) => {
    setActiveCol(label);
    console.log(`${label} column clicked`);
  };

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setActiveCol(null);
      }
    };
    document.addEventListener("click", handleOutside);
    return () => document.removeEventListener("click", handleOutside);
  }, []);

  return (
    <div
      className="flex flex-col bg-background"
      style={{ height: "calc(-120px + 100vh)" }}
    >
      <div className="relative w-full">
    <div
      ref={ref}
      className="absolute left-12 top-0 flex items-center h-10 gap-2 px-3 bg-[#e2e2e2] border-b border-border rounded-tl z-20"
      style={{ minWidth: "744px" }}
    >
      {/* Link + Text */}
      <div
        onClick={() => {
          console.log("Q3 Financial Overview clicked");
          setActiveItem("overview");
        }}
        className={`flex items-center gap-1 rounded px-2 py-1 cursor-pointer transition-colors
          ${activeItem === "overview"
            ? "bg-[#c0c0c0]"
            : "bg-[#eeeeee] hover:bg-[#dedede] active:bg-[#d0d0d0]"}`}
      >
        <img
          className="w-4 h-4"
          alt="Link"
          src="https://c.animaapp.com/mclmkdkf288FZk/img/link.svg"
        />
        <span className="text-xs text-[#545454]">Q3 Financial Overview</span>
      </div>

      {/* Arrow Sync */}
      <div
        onClick={() => {
          console.log("Arrow sync button clicked");
          setActiveItem("sync");
        }}
        className={`w-6 h-6 flex items-center justify-center rounded cursor-pointer transition-colors
          ${activeItem === "sync"
            ? "bg-[#c0c0c0]"
            : "hover:bg-[#dedede] active:bg-[#d0d0d0]"}`}
      >
        <img
          className="w-4 h-4 text-[#545454]"
          alt="Arrow sync"
          src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-sync.svg"
        />
      </div>
    </div>





    <div
      ref={ref}
      className="flex w-full h-10 border-b border-border bg-white z-10"
    >
      <div className="w-12 h-10"></div>
      <div className="h-10" style={{ width: "920px" }}></div>

      {/* ABC */}
      <div
        onClick={() => handleClicked("ABC")}
        className={sectionClass("ABC", "bg-[#e0ede2]", "bg-[#c5dbbe]")}
        style={{ width: "176px", background: "rgb(224, 237, 226)" }}
      >
        <img
          className="w-4 h-4"
          alt="Arrow split"
          src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg"
        />
        <span className="text-[#505450] text-xs font-semibold truncate">
          ABC
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClicked("ABC More");
          }}
          className={buttonClass("ABC More", "bg-[#d2e0d4]")}
        >
          <img
            className="w-4 h-4"
            alt="More"
            src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg"
          />
        </button>
      </div>

      {/* Answer a question */}
      <div
        onClick={() => handleClicked("Answer")}
        className={sectionClass("Answer", "bg-[#cfc1fa]", "bg-[#bdb1ec]")}
        style={{ width: "352px", background: "rgb(207, 193, 250)" }}
      >
        <img
          className="w-4 h-4"
          alt="Arrow split"
          src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg"
        />
        <span className="text-[#463e59] text-xs font-semibold truncate">
          Answer a question
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClicked("Answer More");
          }}
          className={buttonClass("Answer More", "bg-[#cfc1fa]")}
        >
          <img
            className="w-4 h-4"
            alt="More"
            src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg"
          />
        </button>
      </div>

      {/* Extract */}
      <div
        onClick={() => handleClicked("Extract")}
        className={sectionClass("Extract", "bg-[#ffd6c9]", "bg-[#ffcbb8]")}
        style={{ width: "176px", background: "rgb(255, 214, 201)" }}
      >
        <img
          className="w-4 h-4"
          alt="Arrow split"
          src="https://c.animaapp.com/mclmkdkf288FZk/img/arrow-split.svg"
        />
        <span className="text-[#695149] text-xs font-semibold truncate">
          Extract
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClicked("Extract More");
          }}
          className={buttonClass("Extract More", "bg-[#ffd6c9]")}
        >
          <img
            className="w-4 h-4"
            alt="More"
            src="https://c.animaapp.com/mclmkdkf288FZk/img/more.svg"
          />
        </button>
      </div>

      {/* Plus */}
      <div
        onClick={() => handleClicked("Plus")}
        className={`flex items-center justify-center h-10 px-3 border border-border cursor-pointer transition-colors ${
          active === "Plus" ? "bg-[#d5d5d5]" : "hover:bg-[#f0f0f0]"
        }`}
        style={{ width: "176px", background: "#eeeeee" }}
      >
        +
      </div>
    </div>

      </div>

      <div
        className="flex-1 overflow-auto w-full relative"
        style={{
          scrollBehavior: "smooth",
          overscrollBehavior: "contain",
          maxWidth: "100vw",
        }}
      >
        <div className="inline-block">
          <div className="flex top-0 bg-muted z-30 sticky bg-white">
            <div className="w-12 h-8 border border-border bg-muted flex items-center justify-center text-xs font-medium">
              #
            </div>
            <div ref={containerRef} className="flex">
              {columns.map((col) => (
                <div
                  key={col.label}
                  onClick={() => handleClick(col.label)}
                  className={`relative flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none ${
                    col.bg
                  } ${col.text} transition-colors
          ${activeCol === col.label ? "bg-gray-200 text-black" : ""}
          `}
                  style={{ width: col.width }}
                >
                  <div className="flex items-center gap-1 w-full justify-center">
                    {col.icon && (
                      <img
                        className="w-4 h-4"
                        alt={col.label}
                        src={`https://c.animaapp.com/mclmkdkf288FZk/img/${col.icon}.svg`}
                      />
                    )}
                    {col.label}
                  </div>
                  <div className="absolute top-0 right-0 w-1 h-full cursor-col-resize bg-transparent hover:bg-blue-500"></div>
                </div>
              ))}

              {/* Leave the last empty box untouched */}
              <div
                className="relative flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none"
                style={{ width: "176px" }}
              >
                <div className="flex items-center gap-1 w-full justify-center"></div>
                <div className="absolute top-0 right-0 w-1 h-full cursor-col-resize bg-transparent hover:bg-blue-500"></div>
              </div>
            </div>
          </div>

          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              1
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              // className="px-1 text-xs outline-none border border-border bg-background focus:border-blue-500 focus:bg-blue-50"
              defaultValue="Launch social media campaign for product XYZ"
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="15-11-2024"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-yellow-100 text-yellow-800"
                
                style={{ outline: "none", border: "none" }}
              >
                In-process
              </button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Aisha Patel"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="www.aishapatel.com"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Sophie Choudhury"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Medium"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
                color: "rgb(181, 137, 0)",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="20-11-2024"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="6,200,000"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              2
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Update press kit for company redesign"
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="28-10-2024"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-200 text-gray-700"
                style={{ outline: "none", border: "none" }}
              >
                Need to start
              </button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Irfan Khan"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="www.irfankhanportfolio.com"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Tejas Pandey"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="High"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
                color: "rgb(215, 38, 61)",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="30-10-2024"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="3,500,000"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              3
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Finalize user testing feedback for app update"
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="05-12-2024"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-yellow-100 text-yellow-800"
                style={{ outline: "none", border: "none" }}
              >
                In-process
              </button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Mark Johnson"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="www.markjohnsondesigns.com"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Rachel Lee"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Medium"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
                color: "rgb(181, 137, 0)",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="10-12-2024"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="4,750,000"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              4
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Design new features for the website"
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="10-01-2025"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-green-100 text-green-800"
                style={{ outline: "none", border: "none" }}
              >
                Complete
              </button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Emily Green"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="www.emilygreenart.com"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Tom Wright"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Low"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
                color: "rgb(30, 144, 255)",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="15-01-2025"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="5,900,000"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              5
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Prepare financial report for Q4 (edited)"
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="25-01-2025"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-red-100 text-red-800"
                 
                style={{ outline: "none", border: "none" }}
              >
                Blocked
              </button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Jessica Brown"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="www.jessicabrowncreative.com"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Kevin Smith"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="Low"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
                color: "rgb(30, 144, 255)",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="30-01-2025"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue="2,800,000"
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              6
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              7
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              8
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              9
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              10
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              11
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              12
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              13
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              14
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              15
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              16
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted  left-0 z-10">
              17
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted  left-0 z-10">
              18
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted  left-0 z-10">
              19
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              20
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              21
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              22
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              23
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              24
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              25
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              26
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              27
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              28
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              29
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              30
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              31
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              32
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              33
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              34
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              35
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              36
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              37
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              38
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              39
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              40
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              41
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              42
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              43
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              44
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              45
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              46
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              47
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              48
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              49
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
          <div className="flex relative">
            <div className="relative w-12 h-8 flex items-center justify-center border border-border text-xs font-medium cursor-pointer select-none bg-muted left-0 z-10">
              50
              <div className="absolute bottom-0 left-0 w-full h-1 cursor-row-resize bg-transparent hover:bg-blue-500"></div>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "216px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <div
              className="flex items-center justify-center h-8 w-full border border-border bg-background"
              style={{ width: "176px", height: "32px" }}
            >
              <button
                className="px-2 py-1 rounded-full text-xs font-medium cursor-pointer bg-gray-50 text-gray-700"
                 
                style={{ outline: "none", border: "none" }}
              ></button>
            </div>
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
            <input
              className="px-1 text-xs outline-none border border-border bg-background"
              defaultValue=""
              style={{
                width: "176px",
                height: "32px",
                fontWeight: "normal",
                fontStyle: "normal",
                textDecoration: "none",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "Arial",
              }}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center border-t bg-white px-12">
        <div
          ref={tabsRef}
          dir="ltr"
          data-orientation="horizontal"
          className="inline-flex relative"
        >
          <div
            role="tablist"
            aria-orientation="horizontal"
            className="inline-flex items-center justify-center text-muted-foreground bg-transparent p-0 h-auto"
            tabIndex={0}
            data-orientation="horizontal"
            style={{ outline: "none" }}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => handleTabClick(tab)}
                className={`inline-flex items-center justify-center whitespace-nowrap text-sm gap-2 px-4 py-2.5 rounded-none group relative font-semibold transition-colors
              ${
                activeTab === tab
                  ? "bg-[#e8f0e9] border-t-2 border-[#4b6a4f] text-[#2c3e30]"
                  : "bg-transparent text-[#3e5741] hover:text-black"
              }`}
              >
                <span className="px-1">{tab}</span>
              </button>
            ))}

            {/* Add New Tab button */}
            <button
              onClick={handlePlusClick}
              className={`gap-1 px-1 py-2 self-stretch inline-flex items-center justify-center relative transition-colors
            ${plusActive ? "bg-gray-200 text-black" : "hover:bg-gray-100"}
            `}
              aria-label="Add new tab"
            >
              <div className="inline-flex items-center gap-2 p-1 bg-white rounded transition-transform duration-150 ease-in-out group-hover:scale-105 active:scale-95">
                <div className="relative w-5 h-5">
                  <img
                    className="absolute w-[15px] h-[15px] top-0.5 left-0.5"
                    alt="Add tab"
                    src="https://c.animaapp.com/mclmkdkf288FZk/img/group-1.png"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
