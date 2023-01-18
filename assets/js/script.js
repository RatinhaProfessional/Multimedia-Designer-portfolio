//displaying the nickname explanation 
const nickName = document.getElementById('nickName');
const expNick = document.getElementById('hidden');

nickName.addEventListener('mouseover', function handleMouseOver() {
    expNick.style.display = 'block';
})

nickName.addEventListener('mouseout', function handleMouseOver() {
    expNick.style.display = 'none';
})

// Scroll to top button
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}



