// List of known ISS camera streams (HDEV and other public streams)
const issStreams = [
    {
        name: "ISS HDEV Stream 1",
        url: "<iframe width="560" height="315" src="https://www.youtube.com/embed/FuuC4dpSQ1M?si=tTmRLJTa-w_19QOR&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>"
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
