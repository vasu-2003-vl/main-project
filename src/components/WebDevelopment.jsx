import React, { useState } from "react";
import { motion } from "framer-motion";
import JSZip from "jszip";
import "./Technology.css"; // Assuming WebDevelopment uses the same CSS file

export default function WebDevelopment({ goBack }) {
  const [projectContent, setProjectContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [error, setError] = useState(null); // New state for error messages

  const loadProject = async (zipPath, title) => {
    setLoading(true);
    setError(null);
    setProjectTitle(title);
    
    try {
      const response = await fetch(zipPath);
      if (!response.ok) {
        throw new Error(`Failed to fetch project: ${response.statusText}`);
      }
      
      const blob = await response.blob();
      const zip = await JSZip.loadAsync(blob);

      const files = {};
      
      // Read all files (HTML, CSS, JS, images)
      await Promise.all(
        Object.keys(zip.files).map(async (filename) => {
          const file = zip.file(filename);
          if (file && !file.dir) {
            if (/\.(png|jpg|jpeg|gif|svg|webp)$/i.test(filename)) {
              const data = await file.async("base64");
              const ext = filename.split(".").pop();
              files[filename] = `data:image/${ext};base64,${data}`;
            } else {
              files[filename] = await file.async("text");
            }
          }
        })
      );

      const indexPath = Object.keys(files).find((f) =>
        f.toLowerCase().endsWith("index.html")
      );

      if (!indexPath) {
        setError("ERROR: Protocol Index (index.html) not found in archive!");
        setLoading(false);
        return;
      }

      let indexHTML = files[indexPath];

      // Inline CSS
      indexHTML = indexHTML.replace(
        /<link\s+[^>]*href=["']([^"']+)["'][^>]*>/gi,
        (match, href) => {
          const cssFile = Object.keys(files).find(
            (f) => f.endsWith(href) || f.endsWith("/" + href)
          );
          const cssContent = cssFile ? files[cssFile] : null;
          return cssContent ? `<style>${cssContent}</style>` : match;
        }
      );

      // Inline JS
      indexHTML = indexHTML.replace(
        /<script\s+[^>]*src=["']([^"']+)["'][^>]*><\/script>/gi,
        (match, src) => {
          const jsFile = Object.keys(files).find(
            (f) => f.endsWith(src) || f.endsWith("/" + src)
          );
          const jsContent = jsFile ? files[jsFile] : null;
          return jsContent ? `<script>${jsContent}</script>` : match;
        }
      );

      // Inline Images
      indexHTML = indexHTML.replace(
        /<img\s+[^>]*src=["']([^"']+)["'][^>]*>/gi,
        (match, src) => {
          const imgFile = Object.keys(files).find(
            (f) => f.endsWith(src) || f.endsWith("/" + src)
          );
          const imgData = imgFile ? files[imgFile] : null;
          return imgData ? match.replace(src, imgData) : match;
        }
      );

      setProjectContent(indexHTML);
    } catch (err) {
      console.error("Error loading project:", err);
      setError(`FATAL ERROR: Failed to load archive! ${err.message}`);
    }
    setLoading(false);
  };

  return (
    <div className="technology-page web-dev-module">
      {/* Background Video (Kept as requested) */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/videos/techback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Back Button - Positioned left via CSS */}
      <motion.button
        className="back-btn back-to-tech-btn"
        onClick={goBack}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        &#9664; RETREAT
      </motion.button>
      
      {/* Error Message Display */}
      {error && (
        <motion.div 
          className="error-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {error}
        </motion.div>
      )}

      {!projectContent ? (
        <>
          {/* Top Info Section (CENTERED) */}
          <motion.div
            className="web-info console-box"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="console-title"> WEB DEVELOPMENT MODULE </h2>
            <p className="console-text">
              <span className="text-white font-bold">[MISSION OBJECTIVE]</span> Select a codebase to analyze or deploy. Frontend protocols handle client-side rendering (React, HTML5, CSS3), while Backend protocols manage server-side logic and persistent data storage (Node.js, Databases).
            </p>
          </motion.div>

          {/* Cards Section (CENTERED) */}
          <div className="tech-container center-cards">
            {/* Frontend Card */}
            <motion.div
              className="tech-card console-card frontend"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)" }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="card-title">FRONTEND PROTOCOL</h3>
              <p className="card-description">
                Status: **ACTIVE**. Codebase: React, HTML, CSS, JS. Deploy user-facing interfaces.
              </p>
              <motion.button
                className="select-btn"
                onClick={() => loadProject("/frontend.zip", "Frontend Deployment")}
              >
                {loading && projectTitle === "Frontend Deployment" ? "DECRYPTING..." : "INITIATE DEPLOYMENT"}
              </motion.button>
            </motion.div>

            {/* Backend Card */}
            <motion.div
              className="tech-card console-card backend"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 255, 255, 0.4)" }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="card-title">BACKEND PROTOCOL</h3>
              <p className="card-description">
                Status: **ACTIVE**. Codebase: Node.js, Databases. Establish server-side security and data handling.
              </p>
              <motion.button
                className="select-btn"
                onClick={() => loadProject("/backend.zip", "Backend Deployment")}
              >
                {loading && projectTitle === "Backend Deployment" ? "DECRYPTING..." : "INITIATE DEPLOYMENT"}
              </motion.button>
            </motion.div>
          </div>
        </>
      ) : (
        <div className="project-output">
          <h2 className="console-title output-title">:: DEPLOYMENT RESULT: {projectTitle} ::</h2>
          <iframe
            title={projectTitle}
            srcDoc={projectContent}
            className="project-iframe"
            // Use style for a clean B&W look
            style={{ width: "100%", height: "80vh", border: "1px solid white", backgroundColor: "black" }} 
          />
          <button className="select-btn back-to-selection-btn" onClick={() => setProjectContent(null)}>
            RESET MODULE
          </button>
        </div>
      )}
    </div>
  );
}
