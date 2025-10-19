# ZIP File Content Extractor

A web-based application that allows users to upload a ZIP file, extract its contents, and view them in a structured format. Text files are displayed as plain text, and binary files are shown as base64-encoded strings. Users can download the extracted contents as a text file. The app features a modern black theme with cyan accents and is designed to fit the entire screen (width and height) on all devices, including mobile phones, tablets, iPads, and desktops, without cropping.

## 🚀 Features

- **ZIP File Processing**: Upload a `.zip` file to extract all files within it.
- **Content Display**: Text files are displayed as plain text; binary files are shown as base64-encoded.
- **Download Option**: Save extracted contents as `extracted_contents.txt`.
- **Responsive Design**: Full-screen layout (100% viewport width and height) on all devices, with scrollable overflow.
- **Black Theme**: Sleek dark theme with cyan buttons (no text glow effects).
- **Error Handling**: Displays clear messages for invalid ZIP files or processing errors.
- **Cross-Device Support**: Works perfectly on mobile, tablet, iPad, and desktop screens.

## 🧰 Technologies Used

- **HTML** – Structure of the web app.
- **JavaScript (JSZip)** – ZIP extraction and file handling.
- **CSS** – Responsive, dark-themed styling.
- **JSZip Library** – For ZIP file extraction (loaded via CDN).

## ⚙️ Prerequisites

- A modern browser (Chrome, Firefox, Safari, or Edge).
- Optional: A local web server like Python’s `http.server`, Node.js `http-server`, or XAMPP.

## 📦 Setup Instructions

### 1. Clone or Download
```bash
git clone <repository-url>
cd zip-file-extractor
```

### 2. Verify Project Files
```
zip-file-extractor/
├── index.html        # Main HTML structure
├── script.js         # JS logic for ZIP handling
├── styles.css        # Styling (black & cyan theme)
└── .gitignore        # Excludes venv/ and app.py
```

### 3. Serve Locally (Optional)
Use a simple local server, e.g. Python:
```bash
python -m http.server 8000
```
Then open your browser and go to [http://localhost:8000](http://localhost:8000).

## 💡 Usage

### Upload a ZIP File
Click **“Choose a ZIP File”** and select your `.zip` archive.

### View Extracted Contents
- Text files show as plain text.
- Binary files display as base64 strings.
- Each file’s path is shown above its contents (e.g., `--- path/to/file.txt ---`).

### Download Contents
Click **“Download Extracted Contents”** to save everything as `extracted_contents.txt`.

### Handle Errors
If an invalid ZIP file is uploaded, an error message appears:  
> ❌ Invalid ZIP file. Please upload a valid ZIP archive.

## 🖼️ Screenshots

*(Add screenshots in a `/screenshots` folder and link them here)*
```plaintext
zip-file-extractor/
└── screenshots/
    ├── desktop.png
    ├── mobile.png
```

## 🧱 Notes

- Uses **JSZip v3.10.1** via CDN.  
- Layout uses `100vw` and `100vh` for full-screen coverage with scrollable overflow.  
- Cyan hover highlights for buttons.  
- `.gitignore` excludes Python venvs and `app.py`.

## 🤝 Contributing

1. Fork the repo  
2. Create your feature branch  
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes  
   ```bash
   git commit -m "Add feature"
   ```
4. Push and create a pull request


## 🙏 Acknowledgments

- [JSZip](https://stuk.github.io/jszip/) for ZIP extraction.  
- Inspired by a Streamlit ZIP extractor project.

## 📬 Contact

For feedback or issues, open a GitHub issue or contact the maintainer.
