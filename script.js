document.getElementById('khodamForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('nameInput').value;
    if (name.trim() !== "") {
        displayLatestKhodam(name);
        document.getElementById('nameInput').value = '';
    }
});

const khodams = [
    {name: 'Khodam Jin', image: 'assets/jin.jpeg', description: 'terkenal jahil dan nakal kek jin.'},
    {name: 'Khodam Malaikat', image: 'assets/malaikat.jpeg', description: 'baik ,sabar ,penyayang dan rajin menabung.'},
    {name: 'Khodam Raja Macan', image: 'assets/macan.jpeg', description: 'galak dan keras kepala.'},
    {name: 'Khodam Harimau Putih', image: 'assets/harimauputih.jpeg', description: 'kelihatan galak aslinya baik.'},
    {name: 'Khodam Buaya Putih', image: 'assets/buaya.jpeg', description: 'buaya darat, cuman maen rapi.'},
    {name: 'Khodam Ular Naga', image: 'assets/ularnaga.jpg', description: 'omonganya seperti ular berbisa.'},
    {name: 'Khodam Nyi Roro Kidul', image: 'assets/roro.jpeg', description: 'cantik anggun dan berwibawa,sosok menakutkan jika marah.'},
    {name: 'Khodam Dewa Zeus', image: 'assets/zeus.jpeg', description: 'berwibawa dan gak suka ngeluh'}
];

// Function to hash the name and map it to an index
function hashCode(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

function getKhodamByName(name) {
    const index = Math.abs(hashCode(name)) % khodams.length;
    return khodams[index];
}

function displayLatestKhodam(name) {
    const tableBody = document.getElementById('tableBody');
    // Clear all existing rows
    tableBody.innerHTML = '';

    const row = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = name;

    const khodam = getKhodamByName(name);
    const imageCell = document.createElement('td');
    const image = document.createElement('img');
    image.src = khodam.image;
    image.alt = khodam.name;
    image.className = 'khodam-image';
    imageCell.appendChild(image);

    const khodamNameCell = document.createElement('td');
    khodamNameCell.textContent = khodam.name;

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = khodam.description;

    row.appendChild(nameCell);
    row.appendChild(imageCell);
    row.appendChild(khodamNameCell);
    row.appendChild(descriptionCell);

    // Add new row to the table body
    tableBody.appendChild(row);
}
