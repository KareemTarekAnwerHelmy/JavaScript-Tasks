document.getElementById('openPopup').addEventListener('click', function (e) {

    function closePopup(popup, scrollInterval) {
        clearInterval(scrollInterval);
        popup.close(); 
    }
    const popup = window.open("", "", "width=700,height=400");
    const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. `.repeat(200);
    popup.document.write(`<div>${content}</div>`);

    const scrollInterval = setInterval(() => {
        popup.scrollBy(0, 50);
    }, 50);
    setTimeout(() => closePopup(popup, scrollInterval), 2000); 
});

