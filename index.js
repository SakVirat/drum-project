var buttons = document.querySelectorAll('button');

// Loop through each button and add an event listener
buttons.forEach(button => {
    button.addEventListener('click', function() {

        var buttonClicked=this.innerHTML

        switch (buttonClicked) {
            case "w":
                var sound = new Audio("sounds/crash.mp3");  // Replace with your audio file path
                sound.play();  // You can replace this with any action you want
                break;
        
            case "a":
                var sound = new Audio("sounds/kick-bass.mp3");  // Replace with your audio file path
                sound.play();  // You can replace this with any action you want
                break;

            case "s":
                var sound = new Audio("sounds/snare.mp3");  // Replace with your audio file path
                sound.play();  // You can replace this with any action you want
                break;

            case "d":
                    var sound = new Audio("sounds/tom-1.mp3");  // Replace with your audio file path
                    sound.play();  // You can replace this with any action you want
                    break;   
                    
            case "j":
                    var sound = new Audio("sounds/tom-2.mp3");  // Replace with your audio file path
                    sound.play();  // You can replace this with any action you want
                    break;   
                        
            case "k":
                    var sound = new Audio("sounds/tom-3.mp3");  // Replace with your audio file path
                    sound.play();  // You can replace this with any action you want
                    break;
                        
                        
            case "l":
                var sound = new Audio("sounds/tom-4.mp3");  // Replace with your audio file path
                sound.play();  // You can replace this with any action you want
                break;
        }
    });
});

