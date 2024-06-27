document.getElementById('add-customer').addEventListener('click', function() {
    alert('Add Customer button clicked!');
});

document.querySelectorAll('button.edit').forEach(button => {
    button.addEventListener('click', function() {
        alert('Edit button clicked!');
    });
});

document.querySelectorAll('button.delete').forEach(button => {
    button.addEventListener('click', function() {
        alert('Delete button clicked!');
    });
});

document.getElementById('prev').addEventListener('click', function() {
    alert('Previous button clicked!');
});

document.getElementById('next').addEventListener('click', function() {
    alert('Next button clicked!');
});
