import React, { useState } from "react";
import { motion } from "framer-motion";
import JSZip from "jszip";
import "./Technology.css";

export default function WebDevelopment({ goBack }) {
  const [projectContent, setProjectContent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");

  const loadProject = async (zipPath, title) => {
    setLoading(true);
    setProjectTitle(title);
    try {
      const response = await fetch(zipPath);
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
        alert("No index.html found in your ZIP!");
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
      alert("Failed to load project!");
    }
    setLoading(false);
  };

  return (
    <div className="technology-page">
      {/* Background Video */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/videos/techback.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Back Button */}
      <motion.button
        className="back-btn"
        onClick={goBack}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back 
      </motion.button>

      {!projectContent ? (
        <>
          {/* Top Info Section */}
          <motion.div
            className="web-info"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>🌐 Web Development & Backend Skills</h2>
            <p>
              Explore the world of Web Development: create stunning user interfaces with
              Frontend technologies like React, HTML, CSS, and JS.  
              Dive into Backend development: learn Node.js, Express, and databases to
              power your applications.
            </p>
          </motion.div>

          {/* Cards Section */}
          <div className="tech-container center-cards">
            {/* Frontend Card */}
            <motion.div
              className="tech-card frontend"
              whileHover={{ scale: 1.05,  }}
            >
              <h3>💻 Frontend Project</h3>
              <p>React, HTML, CSS, JS — create stunning user interfaces!</p>
              <motion.button
                className="explore-btn"
                onClick={() => loadProject("/frontend.zip", "Frontend Project")}
              >
                {loading ? "Loading..." : "Get Started"}
              </motion.button>
            </motion.div>

            {/* Backend Card */}
            <motion.div
              className="tech-card backend"
              whileHover={{ scale: 1.05,  }}
            >
              <h3>🛡️ Backend Project</h3>
              <p>Node.js, Express, Databases — build powerful server-side applications!</p>
              <motion.button
                className="explore-btn"
                onClick={() => loadProject("/backend.zip", "Backend Project")}
              >
                {loading ? "Loading..." : "Get Started"}
              </motion.button>
            </motion.div>
          </div>
        </>
      ) : (
        <div className="project-output">
          <h2>{projectTitle} Output</h2>
          <iframe
            title={projectTitle}
            srcDoc={projectContent}
            style={{ width: "100%", height: "80vh", border: "none" }}
          />
        </div>
      )}
    </div>
  );
}
