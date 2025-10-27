import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Onboarding from "./components/Onboarding";
import Technology from "./components/Technology";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedTech, setSelectedTech] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [profileName, setProfileName] = useState("");
  const [avatarLetter, setAvatarLetter] = useState("");

  const [profileData, setProfileData] = useState({
    photo: null,
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
    about: "",
  });

  // ---------------- Load saved login state ----------------
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("learnsphereUser"));
    if (savedUser?.loggedIn) {
      setLoggedIn(true);
      setProfileName(savedUser.profileName);
      setAvatarLetter(savedUser.avatarLetter);
    }
  }, []);

  // ---------------- Navigation handlers ----------------
  const goToHome = () => setCurrentPage("home");
  const goToOnboarding = () => setCurrentPage("onboarding");
  const goToTechnology = (tech) => {
    setSelectedTech(tech);
    setCurrentPage("technology");
  };
  const goToAbout = () => setCurrentPage("about");
  const goToContact = () => setCurrentPage("contact");
  const goToProfile = () => setCurrentPage("profile");

  // ---------------- Profile data update ----------------
  const handleSaveProfile = (updatedProfile) => {
    setProfileData(updatedProfile);
  };

  // ---------------- Shared Props ----------------
  const sharedProps = {
    goToProfile,
    goToOnboarding,
    goToTechnology,
    goToAbout,
    goToContact,
    goBackHome: goToHome,
  };

  return (
    <div className="app-container" style={{ width: "100vw", height: "100vh" }}>
      {/* Navbar visible on all pages */}
      <Navbar
        goToProfile={goToProfile}
        goToTechnology={goToTechnology}
        goToAbout={goToAbout}
        goToContact={goToContact}
        goBackHome={goToHome}
      />

      {/* Page Content */}
      {currentPage === "home" && <Home {...sharedProps} />}
      {currentPage === "onboarding" && (
        <Onboarding goToTechnology={goToTechnology} goBackHome={goToHome} />
      )}
      {currentPage === "technology" && (
        <Technology techName={selectedTech} goBack={goToHome} {...sharedProps} />
      )}
      {currentPage === "about" && <About {...sharedProps} />}
      {currentPage === "contact" && <Contact {...sharedProps} />}
      {currentPage === "profile" && (
        <Profile
          profileData={profileData}
          onSaveProfile={handleSaveProfile}
          goBack={goToHome}
        />
      )}

      {/* Footer visible on all pages except profile */}
      {currentPage !== "profile" && (
        <Footer
          goToTechnology={goToTechnology}
          goToAbout={goToAbout}
          goToContact={goToContact}
        />
      )}
    </div>
  );
}

export default App;
