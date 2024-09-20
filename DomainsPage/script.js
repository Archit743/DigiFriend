// Example array of videos
const videos = [
    {
        title: "Video 1: Introduction to the Domain",
        description: "This video introduces the core concepts of the domain and provides an overview of important features.",
        duration: "10 mins",
        thumbnail: "https://via.placeholder.com/300x180"
    },
    {
        title: "Video 2: Advanced Troubleshooting",
        description: "This video focuses on advanced troubleshooting techniques and common issues users face in this domain.",
        duration: "15 mins",
        thumbnail: "https://via.placeholder.com/300x180"
    },
    {
        title: "Video 3: Best Practices for Efficiency",
        description: "Explore best practices for improving your efficiency while working in this domain with useful tips.",
        duration: "20 mins",
        thumbnail: "https://via.placeholder.com/300x180"
    }
];

// Function to render video cards dynamically
function renderVideos() {
    const videoList = document.getElementById('videoList');
    videoList.innerHTML = ''; // Clear the list first

    videos.forEach(video => {
        const videoCard = `
        <div class="card video-item mb-4">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${video.thumbnail}" class="img-fluid rounded-start" alt="Video Thumbnail">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${video.title}</h5>
                        <p class="card-text">${video.description}</p>
                        <p class="card-text"><small class="text-muted">Duration: ${video.duration}</small></p>
                    </div>
                </div>
            </div>
        </div>
        `;
        videoList.innerHTML += videoCard;
    });
}

// Call the function to render videos
renderVideos();