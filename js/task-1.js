const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);
itemsEl.forEach(item => {
    const categoryName = item.querySelector("h2").textContent;
    const itemsCount = item.querySelectorAll("li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${itemsCount}`);
});
