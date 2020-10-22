function footWear() {

    //INPUT:  Read the weather from the user.
    let weather = document.getElementById("weather").value;
    //PROCESSING: Select the correct input
    let shoes;
    if (weather == "Hot") {
        shoes = "Grab your sandals👡 and let's go to the beach!!🌴"
    } else if (weather == "Snow") {
        shoes = "Grab your snow boots🥾 and let's go have a snowball fight!!🎅"
    } else if (weather == "Rain") {
        shoes = "Grab your galoshes👢 and let's go jump in a puddle!!🏃‍♀️"
    }
    let output = shoes;

    //Output: Display the message to the user
    document.getElementById("output").innerHTML = shoes;
}