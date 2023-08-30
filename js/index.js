document.addEventListener("DOMContentLoaded", function () {
    const dropdownSelect = document.getElementById("dropdown-select");
    const relatedVideosItem1 = document.getElementById("related-videos-item1");
    const relatedVideosItem2 = document.getElementById("related-videos-item2");
    // Add more variables for other containers if needed

    dropdownSelect.addEventListener("change", function () {
        const selectedItem = dropdownSelect.value;

        // Clear previous videos
        relatedVideosItem1.innerHTML = "";
        relatedVideosItem2.innerHTML = "";
        // Clear other containers if needed

        if (selectedItem === "item1") {
            // Populate related videos for Item 1
            relatedVideosItem1.innerHTML = `
            <div>
                <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-5" frameborder="0" allowfullscreen></iframe>
                <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-6" frameborder="0" allowfullscreen></iframe>
                <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-5" frameborder="0" allowfullscreen></iframe>
                <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-6" frameborder="0" allowfullscreen></iframe>
                    
           
            </div>
            <div> <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-5" frameborder="0" allowfullscreen></iframe>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-6" frameborder="0" allowfullscreen></iframe>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-5" frameborder="0" allowfullscreen></iframe>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-6" frameborder="0" allowfullscreen></iframe>
            </div>
            <div>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-5" frameborder="0" allowfullscreen></iframe>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-6" frameborder="0" allowfullscreen></iframe>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-5" frameborder="0" allowfullscreen></iframe>
            <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-6" frameborder="0" allowfullscreen></iframe>
                
       
        </div>
        <div> <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-5" frameborder="0" allowfullscreen></iframe>
        <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-6" frameborder="0" allowfullscreen></iframe>
        <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-5" frameborder="0" allowfullscreen></iframe>
        <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-6" frameborder="0" allowfullscreen></iframe>
        </div>
       
             
             `;} else if (selectedItem === "item2") {
            // Populate related videos for Item 2
            relatedVideosItem2.innerHTML = `
                <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-7" frameborder="0" allowfullscreen></iframe>
                <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-8" frameborder="0" allowfullscreen></iframe>
                <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-5" frameborder="0" allowfullscreen></iframe>
                <iframe width="280" height="157" src="https://www.youtube.com/embed/your-video-id-6" frameborder="0" allowfullscreen></iframe>
                
                
            `;
        }
        // Add more conditions for other items
    });
});
