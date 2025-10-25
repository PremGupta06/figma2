import React, { useState } from "react";
// Assuming imNew is in a public 'assets' folder
// For this single-file example, I'll use a placeholder.
// const imNew = "./assets/im-new.png";
const imNew = "https://placehold.co/160x140/2B2C30/9CA3AF?text=Image";

// --- MOCK ICONS ---
// In a real app, you'd import these
const RxQuestionMarkCircled = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const FaArrowLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
    />
  </svg>
);
const FaArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
    />
  </svg>
);

// --- Profile Card ---
function ProfileCard() {
  const [activeTab, setActiveTab] = useState("About Me");
  const tabs = ["About Me", "Experiences", "Recommended"];

  const content = {
    "About Me":
      "Hello! I'm David. I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a special time for me, and I'm so grateful to have a job that allows me to be present for these moments.",
    Experiences:
      "I have 10 years of experience in sales, with a focus on B2B software solutions. My main expertise lies in building and nurturing client relationships, understanding their unique challenges, and proposing effective solutions that drive growth. I've consistently exceeded sales targets and have experience managing the full sales cycle.",
    Recommended:
      "David is highly recommended. 'David's strategic approach and deep understanding of our needs were instrumental in our project's success. He's not just a sales rep; he's a true partner.' - Jane Doe, CEO of Example Inc. 'Working with David was a pleasure. His professionalism and dedication are unmatched.' - John Smith, CTO of TechCorp.",
  };

  return (
    <div className="w-full max-w-2xl rounded-2xl bg-[#383A40] p-6 text-gray-200 shadow-2xl lg:flex-1 flex flex-col overflow-hidden">
      <div className="flex flex-col gap-6 h-full">
        {/* Header */}
        <nav className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            aria-label="Help"
            onClick={() => alert("Help: Profile Section")}
            className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400 hover:text-gray-100"
          >
            <RxQuestionMarkCircled />
          </button>

          <div className="flex flex-1 items-center gap-2 rounded-2xl bg-[#1E1F22] p-1.5 min-w-[200px]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 rounded-xl px-3 py-2 text-center text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#383A40] text-white shadow-md"
                    : "text-gray-400 hover:bg-[#383A40]/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        {/* Body */}
        {/* --- CHANGED: Added overflow-hidden to main tag --- */}
        <main className="flex items-start gap-3 flex-1 overflow-hidden">
          {/* 6-dot drag handle */}
          <div className="flex-shrink-0 text-gray-600 mt-1">
            <span className="text-xl">⠿</span>
          </div>

          {/* Scrolling Text Content */}
          {/* --- CHANGED: This div now ONLY contains the text --- */}
          <div className="flex-1 overflow-y-auto text-sm leading-relaxed text-gray-300 pr-2">
            <p>{content[activeTab]}</p>
          </div>

          {/* --- MOVED: The line is now a sibling to the text content --- */}
          {/* This creates the static vertical line */}
          <div className="w-[10px] h-[90px] bg-gray-600 rounded-full flex align-middle"></div>
        </main>
      </div>
    </div>
  );
}

// --- Gallery Card ---
function GalleryCard() {
  const [images, setImages] = useState([imNew, imNew, imNew]);

  const handleAddImage = () => {
    // (Functionality remains the same)
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setImages((prev) => [...prev, event.target.result]);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <div className="w-full max-w-2xl rounded-2xl bg-[#383A40] p-6 text-gray-300 shadow-2xl lg:flex-1 flex flex-col overflow-hidden">
      <div className="flex flex-col gap-6 h-full">
        {/* Header */}
        <nav className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            aria-label="Help"
            onClick={() => alert("Help: Gallery Section")}
            className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400 hover:text-gray-100"
          >
            <RxQuestionMarkCircled />
          </button>

          <button
            type="button"
            className="rounded-xl bg-[#1E1F22] px-4 py-2 text-xl font-medium text-gray-300 hover:bg-[#313338] shadow-md"
          >
            Gallery
          </button>

          <div className="flex-grow" />

          <button
            onClick={handleAddImage}
            className="rounded-full bg-[#4A4C52] px-4 py-2 text-sm font-medium text-gray-200"
            // Using the "overall" shadow as requested
            style={{ boxShadow: "0px 0px 15px rgba(170, 170, 170, 0.4)" }}
          >
            + ADD IMAGE
          </button>

          <button
            onClick={() =>
              setImages((prev) =>
                prev.length > 1
                  ? [prev[prev.length - 1], ...prev.slice(0, -1)]
                  : prev
              )
            }
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1E1F22] text-lg text-gray-300 hover:bg-[#313338] shadow-md"
            style={{ boxShadow: "0px 0px 15px rgba(170, 170, 170, 0.4)" }}
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={() =>
              setImages((prev) =>
                prev.length > 1 ? [...prev.slice(1), prev[0]] : prev
              )
            }
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1E1F22] text-lg text-gray-300 hover:bg-[#313338] shadow-md"
            style={{ boxShadow: "0px 0px 15px rgba(170, 170, 170, 0.4)" }}
          >
            <FaArrowRight />
          </button>
        </nav>

        {/* Body */}
        <main className="flex items-start gap-6 flex-1">
          {/* 6-dot drag handle */}
          <div className="flex-shrink-0 text-gray-600 mt-1">
            <span className="text-xl">⠿</span>
          </div>

          {/* Image Row - This flex-1 makes it fill the card width */}
          <div className="flex-1 flex items-center gap-10 overflow-x-auto pb-2">
            {images.map((src, i) => (
              <div
                key={i}
                onClick={handleAddImage}
                className="flex-shrink-0 flex items-center justify-center rounded-xl bg-[#2B2C30] text-gray-400 text-sm shadow-md cursor-pointer hover:bg-[#313338] transition-all"
                style={{ width: "160px", height: "140px" }}
              >
                {src ? (
                  <img
                    src={src}
                    alt="Uploaded"
                    className="rounded-xl object-cover w-full h-full"
                  />
                ) : (
                  "Image"
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

// --- Main Layout ---
export default function App() {
  return (
    <div className="h-screen bg-[#1E1F22] flex flex-col lg:flex-row justify-center items-center lg:justify-end p-4 sm:p-6 md:p-10 overflow-hidden">
      <div className="flex flex-col gap-4 w-full max-w-2xl lg:h-full">
        <ProfileCard />
        <GalleryCard />
      </div>
    </div>
  );
}
