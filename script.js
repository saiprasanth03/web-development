let isMale = true;

function toggleProfile() {
    const image = document.getElementById("logo");
    const name = document.getElementById("name");
    const gender = document.getElementById("gender");

    if (isMale) {
        image.src = "jane.png";
        image.alt = "Jane's profile";
        name.textContent = "Name: Ammai";
        gender.textContent = "Gender: Female";
    } else {
        image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUw_snVdV5RDBiSbOfb0xsY2pyu3TQcLtFgbGYeORVQ&s=10";
        image.alt = "Tharun's profile";
        name.textContent = "Name: G Tharun";
        gender.textContent = "Gender: Male";
    }

    isMale = !isMale;
}