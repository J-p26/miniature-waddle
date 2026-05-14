// List of known ISS camera streams (HDEV and other public streams)
const issStreams = [
    {
        name: "ISS HDEV Stream 1",
        url: "https://www.youtube.com/embed/21X5lGlDOfg"
    },
    {
        name: "ISS HDEV Stream 2",
        url: "https://www.youtube.com/embed/D4pQhMP3LcI"
    },
    {
        name: "ISS HDEV Stream 3",
        url: "https://www.youtube.com/embed/86P8XPXpA7U"
    },
    {
        name: "ISS HDEV Stream 4",
        url: "https://www.youtube.com/embed/86P8XPXpA7U"
    }
];

// Function to add streams to the page
function addStreamsToPage() {
    const streamContainer = document.getElementById("streamContainer");

    issStreams.forEach(stream => {
        const streamDiv = document.createElement("div");
        streamDiv.className = "stream";

        const heading = document.createElement("h2");
        heading.textContent = stream.name;

        const iframe = document.createElement("iframe");
        iframe.src = stream.url;
        iframe.allowFullscreen = true;

        streamDiv.appendChild(heading);
        streamDiv.appendChild(iframe);
        streamContainer.appendChild(streamDiv);
    });
}

// Call the function when the page loads
window.onload = addStreamsToPage;