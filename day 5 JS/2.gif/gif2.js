document.getElementById('output').addEventListener('click', function() {
  startTyping();
});

function closePopup(popup, typingInterval) {
  clearInterval(typingInterval);
  popup.close();
}

function startTyping() {
  const popup = window.open("", "", "width=700,height=400");
  
  const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. `.repeat(10);
  
  const div = popup.document.createElement('div');
  div.textContent = ""; 
  popup.document.body.appendChild(div);

  let i = 0;

  // Simulate typing effect
  let typingInterval = setInterval(() => {
    div.textContent += content[i++];
    if (i === content.length) {
      clearInterval(typingInterval); 
    }
  }, 5); 

  setTimeout(() => closePopup(popup, typingInterval), 4000);
}
