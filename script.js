function toggleReadMore() {
    var moreContent = document.getElementById("moreContent");
    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
    } else {
        moreContent.style.display = "none";
    }
}