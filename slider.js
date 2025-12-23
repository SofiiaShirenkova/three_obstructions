document.addEventListener("DOMContentLoaded", function () {
    let slider = document.querySelector(".slider");
    let items = slider.querySelectorAll(".slider_item");

    function showItem(index) {
        items.forEach((item, idx) => {
            item.classList.remove("active");
            if (idx === index) {
                item.classList.add("active");
            }
        });
    }

    document.querySelector(".slider_btn_prev").addEventListener("click", () => {
        let index = [...items].findIndex((item) => 
            item.classList.contains("active")
        );
        showItem((index - 1 + items.length) % items.length)
    });

    document.querySelector(".slider_btn_next").addEventListener("click", () => {
        let index = [...items].findIndex((item) => 
            item.classList.contains("active")
        );
        showItem((index + 1) % items.length);
    });
});