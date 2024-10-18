
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

// To open the modal when a product is clicked (optional)
document.querySelectorAll('.product button').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('myModal').style.display = 'block';
        // You can add more functionality here to display product details
    });
});

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    }
}
document.querySelectorAll('.product').forEach(product => {
    const button = product.querySelector('button');

    // Add mouseover event to the product image
    product.addEventListener('mouseenter', () => {
        product.classList.add('hovered');
    });

    // Add mouseout event to remove the animation
    product.addEventListener('mouseleave', () => {
        product.classList.remove('hovered');
    });

    // Add mouseover event to the button for animation
    button.addEventListener('mouseenter', () => {
        button.classList.add('hovered');
    });

    // Add mouseout event to remove the animation
    button.addEventListener('mouseleave', () => {
        button.classList.remove('hovered');
    });
});
