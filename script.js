function toggleDropdown(contentId, plusId, minusId) {
    const content = document.getElementById(contentId);
    const plus = document.getElementById(plusId);
    const minus = document.getElementById(minusId);
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        plus.style.display = 'none';
        minus.style.display = 'inline';
    } else {
        content.style.display = 'none';
        plus.style.display = 'inline';
        minus.style.display = 'none';
    }
}
