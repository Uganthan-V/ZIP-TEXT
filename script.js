document.getElementById('zipFileInput').addEventListener('change', handleFileSelect);

async function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const outputArea = document.getElementById('outputArea');
    const downloadButton = document.getElementById('downloadButton');
    const errorMessage = document.getElementById('errorMessage');
    
    // Reset UI
    outputArea.value = '';
    downloadButton.style.display = 'none';
    errorMessage.style.display = 'none';

    try {
        // Read the ZIP file
        const arrayBuffer = await file.arrayBuffer();
        const zip = await JSZip.loadAsync(arrayBuffer);
        
        let output = [];
        const files = Object.keys(zip.files)
            .filter(name => !zip.files[name].dir) // Exclude directories
            .sort(); // Sort for consistent order

        for (const name of files) {
            output.push(`--- ${name} ---\n\n`);
            const content = await zip.files[name].async('arraybuffer');
            try {
                // Try to decode as UTF-8 text
                const textContent = new TextDecoder('utf-8').decode(content);
                output.push(textContent);
            } catch (e) {
                // If binary, encode as base64
                output.push("Binary content (base64 encoded):\n");
                const base64Content = btoa(
                    new Uint8Array(content).reduce((data, byte) => data + String.fromCharCode(byte), '')
                );
                output.push(base64Content);
            }
            output.push("\n\n");
        }

        // Combine output and display
        const finalOutput = output.join('');
        outputArea.value = finalOutput;

        // Setup download button
        downloadButton.style.display = 'block';
        downloadButton.onclick = () => {
            const blob = new Blob([finalOutput], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'extracted_contents.txt';
            a.click();
            URL.revokeObjectURL(url);
        };

    } catch (e) {
        errorMessage.textContent = e.message.includes('zip') 
            ? 'Invalid ZIP file. Please upload a valid ZIP archive.'
            : `An error occurred: ${e.message}`;
        errorMessage.style.display = 'block';
    }
}