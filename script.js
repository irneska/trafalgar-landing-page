function toggleMenu() {
    const links = document.querySelector("#headerNav");
    if (links.classList.contains("clicked")) {
        links.classList.remove("clicked");
    } else {
        links.classList.add("clicked");
    }
    console.log("success");
}
