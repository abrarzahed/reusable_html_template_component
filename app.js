const nav = document.querySelector(".navbar");
nav.innerHTML = `<h1 style="color: #fff; text-align: center; margin-top: 10px; font-size: 30px">Loading...</h1>`;
fetch("./navbar.html")
  .then((res) => {
    return res.text();
  })
  .then((data) => {
    nav.innerHTML = data;

    // in order to make sure that script tag with all javascript code from navbar.html are not only text ! but they are working/functional as well.
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    eval(doc.querySelector("script").textContent);
  });
