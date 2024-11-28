const API_KEY = 'AIzaSyDgTztq7r3545sjWvtFvz4SQk0AvTN2z-8'; // Indsæt din YouTube Data API-nøgle her
const VIDEO_ID = 'ZGE9yMtavGs'; // Indsæt YouTube-videoens ID her

async function fetchViewCount() {
    try {
        const response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${VIDEO_ID}&key=${API_KEY}`);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            const viewCount = data.items[0].statistics.viewCount;
            document.getElementById('youtube-view-counter').innerText = `Visninger: ${viewCount}`;
        } else {
            document.getElementById('youtube-view-counter').innerText = 'Kunne ikke hente data.';
        }
    } catch (error) {
        console.error('Fejl ved API-kald:', error);
        document.getElementById('youtube-view-counter').innerText = 'Der opstod en fejl.';
    }
}

// Opdater visningstælleren hvert 10. sekund
fetchViewCount();
setInterval(fetchViewCount, 10000);