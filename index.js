function addingEventListener() {
    // Select the element you want to add the event listener to
    const button = document.getElementById('button');

    // Add an event listener to the button that listens for 'click' events
    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });
}