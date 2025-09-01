import express from 'express';
import path from "path";
import { fileURLToPath } from "url";
import env from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

env.config();

const app = express()

app.use(express.static('public'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.get("/resume", (req, res) => {
    res.render('resume.ejs');
})

app.get("/download-resume-pdf", (req, res) => {
  const filePath = path.join(__dirname, "uploads", "Chidera_Linus_CV.pdf");
  res.download(filePath, "Linus_Chidera_Resume.pdf", (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Could not download the file.");
    }
  });
});

app.get("/download-resume-word", (req, res) => {
  const filePath = path.join(__dirname, "uploads", "Chidera_Linus_CV.docx")
  res.download(filePath, "Linus_Chidera_Resume.docx", (err) => {
    if (err) {
      console.error("Error downloading file:", err);
      res.status(500).send("Could not download the file.");
    }
  });
});


export default app