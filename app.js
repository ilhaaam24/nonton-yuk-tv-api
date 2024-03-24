const form = document.getElementById("form");
const list = document.getElementById("list");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const keyword = document.getElementById("field").value;
  const config = {
    params: {
      q: keyword,
    },
  };

  try {
    if (keyword === "") {
alert('Masukan Judul Film');
    }
    const res = await axios.get("https://api.tvmaze.com/search/shows", config);
    console.log(res.data);
    list.innerHTML = "";
    makeImg(res.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  document.getElementById("field").value = "";
});

const makeImg = (src) => {
  for(let i = 0; i < src.length; i++) {
    const card = document.createElement("div");
    const judul = document.createElement("h3");
    const img = document.createElement("img");
    img.src = src[i].show.image.medium;
    judul.textContent = src[i].show.name;
    card.appendChild(img);
    card.appendChild(judul);
    list.appendChild(card);
    card.classList.add("card");
  }
}
