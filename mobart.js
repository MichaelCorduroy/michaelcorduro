const art2024 = [
    { title: "Art Piece 1", url: "res/stargate1.jpg" },
    { title: "Art Piece 2", url: "res/stargate1.jpg" },
];

const art2023 = [
    { title: "Art Piece 1", url: "res/stargate1.jpg" },
    { title: "Art Piece 2", url: "res/stargate1.jpg" }
];

const art2022 = [
   { title: "Art Piece 1", url: "res/stargate1.jpg" },
   { title: "Art Piece 1", url: "res/stargate1.jpg" },
   { title: "Art Piece 1", url: "res/stargate1.jpg" },
   { title: "Art Piece 1", url: "res/stargate1.jpg" },
   { title: "Art Piece 1", url: "res/stargate1.jpg" },
   { title: "Art Piece 1", url: "res/stargate1.jpg" },
   { title: "Art Piece 1", url: "res/stargate1.jpg" },
   { title: "Art Piece 1", url: "res/stargate1.jpg" },
    { title: "Art Piece 2", url: "res/stargate1.jpg" }
];

const art2021 = [
    { title: "Art Piece 1", url: "res/stargate1.jpg" }
];

const art2020 = [
    { title: "Art Piece 1", url: "res/stargate1.jpg" }
];


// Store the art for each year
const artByYear = {
    2024: art2024,
    2023: art2023,
    2022: art2022,
    2021: art2021,
    2020: art2020
};

// Function to display art with titles based on the selected year
function displayArt() {
    const year = document.getElementById("year").value;
    const artGallery = document.getElementById("artGallery");
    artGallery.innerHTML = ""; // Clear existing art
    
    const selectedArt = artByYear[year];
    
    selectedArt.forEach(art => {
        const artItem = document.createElement("div");
        artItem.classList.add("artItem");
        
        const img = document.createElement("img");
        img.src = art.url;
        img.alt = art.title;
        img.onclick = () => openModal(art.url); // Add click event to open modal

        const title = document.createElement("div");
        title.classList.add("artTitle");
        title.textContent = art.title;

        artItem.appendChild(img);
        artItem.appendChild(title);
        artGallery.appendChild(artItem);
    });
}

// Function to open the modal
function openModal(imageUrl) {
    const modal = document.getElementById("artModal");
    const modalImage = document.getElementById("modalImage");
    modalImage.src = imageUrl; // Set modal image source
    modal.style.display = "flex"; // Show modal
    document.body.style.overflow = "hidden"; // Prevent scrolling
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("artModal");
    modal.style.display = "none"; // Hide modal
    document.body.style.overflow = "auto"; // Restore scrolling
}

// Initial load: Display art for the default year (2023)
document.addEventListener("DOMContentLoaded", () => {
    displayArt();
});


