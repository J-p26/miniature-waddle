// List of known ISS camera streams (HDEV and other public streams)
const issStreams = [
    {
        name: "ISS HDEV Stream 1",
        url: "https://www.youtube.com/embed/FuuC4dpSQ1M?controls=0"
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
        name: "NASA ISS Live Stream",
        url: "https://www.youtube.com/embed/21X5lGlDOfg"
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
        iframe.width = "560";
        iframe.height = "315";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.allowFullscreen = true;

        // Add a fallback message in case the stream is offline
        const fallback = document.createElement("p");
        fallback.textContent = "Stream is currently offline. Check back later!";
        fallback.style.display = "none";
        fallback.className = "fallback-message";

        // Check if the iframe fails to load
        iframe.onerror = () => {
            iframe.style.display = "none";
            fallback.style.display = "block";
        };

        streamDiv.appendChild(heading);
        streamDiv.appendChild(iframe);
        streamDiv.appendChild(fallback);
        streamContainer.appendChild(streamDiv);
    });
}

// Call the function when the page loads
window.onload = addStreamsToPage;
