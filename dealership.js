let totalPrice = 0;

function CarPurchase(userFirstName, userLastName, userAddress, carType, carColor, carDoorCount, carEngine) { //Constructor
    this.userFirstName = " ";
    this.userLastName = " ";
    this.userAddress = " ";
    this.carType = " ";
    this.carColor = " ";
    this.carDoorCount = " ";
    this.carEngine = " ";
}

function credentialsConfirm() {
    let firstNameInput = document.getElementById("firstName").value; //Getting First Name Value
    let lastNameInput = document.getElementById("lastName").value;  //Getting Last Name Value
    let addressInput = document.getElementById("userAddress").value;    //Getting Address Value
    let credentialsConfirmMSG = "Your Name is: " + firstNameInput + " " + lastNameInput + "\nYour Address is: " + addressInput;
    alert(credentialsConfirmMSG) //Outputting Credentials
}
function carTypeConfirm() {
    let typeOption = document.querySelector('input[name = "carType"]:checked').value; //Getting Car Type Value
    if (typeOption == 'Honda') {
        //alert("You chose a Honda type!");
        totalPrice = 1500;        //Setting Price
    }
    else if (typeOption == 'Toyota') {
        //alert("You chose a Toyota type!");
        totalPrice = 1500;  //Setting Price
    }
    else if (typeOption == 'Nissan') {
        //alert("You chose a Nissan type!");
        totalPrice = 2000;  //Setting Price
    }
    else {
    //alert ("Oops! try again!");
    }
    document.getElementById("carTypeOutput").append(typeOption); //Outputting Car Type
    //alert(totalPrice)
}

function carColorConfirm() {
    let userColorChoice = document.querySelector('input[name="carColor"]:checked').value; //Getting Car Color Value
    if (userColorChoice == 'Sunshine Yellow') {
        //alert("You chose the color: " + userColorChoice);
        document.getElementById("userCarColor").style.backgroundColor = "Gold"  //Changing CSS
        totalPrice = totalPrice + 10;   //Setting Price For Selected Choice
    }
    else if (userColorChoice == 'Navy Blue') {
        //alert("You chose the color: " + userColorChoice);
        document.getElementById("userCarColor").style.backgroundColor = "#000033"   //Changing CSS
        document.getElementById("userCarColor").style.color = "#ffffff" //Setting Test Color
        totalPrice = totalPrice + 20;   //Setting Price For Selected Choice
    }
    else if (userColorChoice == 'Midnight Black') {
        //alert("You chose the color: " + userColorChoice);
        document.getElementById("userCarColor").style.backgroundColor = "#171717"   //Changing CSS
        document.getElementById("userCarColor").style.color = "#ffffff" //Setting Test Color
        totalPrice = totalPrice + 20;   //Setting Price For Selected Choice
    }
    else {
    //alert ("Oops! try again!");
    }
    document.getElementById("carColorOutput").append(userColorChoice); //Outputting Car Color Value
}
function carDoorConfirm() {
    let doorOption = document.querySelector('input[name = "doorType"]:checked').value; //Getting Door Number Value
    if (doorOption == 'doubleDoor') {
        //alert("You chosen a 2 door car!");
        document.getElementById("doorNumberOutput").append("2");    //Outputting Door Number
    }
    else if (doorOption == 'quadDoor') {
        //alert("You chosen a 4 door car!");
        document.getElementById("doorNumberOutput").append("4");    //Outputting Door Number
        totalPrice = totalPrice + 200;  //Setting New Price
    }
    else {
    //alert ("Oops! try again!");
    }
}
function engineConfirm() {
    let userEngineType = document.getElementById("engineSelect").value; //Getting Engine Selection Value
    if(userEngineType == 'v8') {
        totalPrice = totalPrice + 500;  //Setting New Price
        //alert("V8")
    }
    document.getElementById("engineOutput").append(userEngineType + " Engine"); //Outputting Engine Selection
}
function resetEngine() {
    let resetStatement = "You Selected A: ";
    document.getElementById("engineOutput").innerHTML = resetStatement; //Resetting Engine Selection
}
function reviewOrder() {
    //Instantiation of Values
    let firstNameInput = document.getElementById("firstName").value;
    let lastNameInput = document.getElementById("lastName").value;
    let addressInput = document.getElementById("userAddress").value;
    let typeOption = document.querySelector('input[name = "carType"]:checked').value;
    let userColorChoice = document.querySelector('input[name="carColor"]:checked').value;
    let doorOption = document.querySelector('input[name = "doorType"]:checked').value;
    let userEngineType = document.getElementById("engineSelect").value;
    let userOrder = new CarPurchase() //Creating New Object
    //Creating Time
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let currentTime = [ h, m, s ].join(':');
    //Setting Object Properties
    userOrder.userFirstName = firstNameInput    
    userOrder.userLastName = lastNameInput
    userOrder.userAddress = addressInput
    userOrder.carType = typeOption
    userOrder.carColor = userColorChoice
    userOrder.carDoorCount = doorOption
    userOrder.carEngine = userEngineType
    //Outputting Order
    alert(
        "Your Order: " +
        "\nFirst Name: " + userOrder.userFirstName +
        "\nLast Name: " + userOrder.userLastName +
        "\nAddress: " + userOrder.userAddress +
        "\nCar Type: " + userOrder.carType +
        "\nCar Color: " + userOrder.carColor +
        "\n# Of Doors: " + userOrder.carDoorCount +
        "\nEngine Model: " + userOrder.carEngine +
        "\nTOTAL ORDER PRICE: " + totalPrice + "$"
    );
    let x = confirm("Would you like to submit?"); //Submit Order
    if (x == true) { //If Order is submitted
        document.write("Your order was submitted at: " + currentTime + "<br>" + "Thank You " + userOrder.userFirstName + "!" + "<br>" + 
        "<br>" + "Your Order: " +
        "<br>" + "First Name: " + userOrder.userFirstName +
        "<br>" + "Last Name: " + userOrder.userLastName +
        "<br>" + "Address: " + userOrder.userAddress +
        "<br>" + "Car Type: " + userOrder.carType +
        "<br>" + "Car Color: " + userOrder.carColor +
        "<br>" + "# Of Doors: " + userOrder.carDoorCount +
        "<br>" + "Engine Model: " + userOrder.carEngine +
        "<br>" + "<br>" + "TOTAL ORDER PRICE: " + totalPrice + "$");
    }
    else {  //Cancellation Of Order
        alert("You have canceled the order submission")
    }
}
function checkPrice() { //Outputting Total Price
    document.getElementById("priceOutput").append(totalPrice);
}
function resetOrder() {
    //Resetting The Form Elements
    document.getElementById("userCarColor").style.backgroundColor = "darkslategrey";
    document.getElementById("userCarColor").style.color = "#000000"
    let resetStatement1 = "The Car Type You Chose: ";
    let resetStatement2 = "Your Selected Color: ";
    let resetStatement3 = "# of Doors: ";
    let resetStatement4 = "You Selected A: ";
    let resetStatement5 = "Total Price: ";
    document.getElementById("carTypeOutput").innerHTML = resetStatement1;
    document.getElementById("carColorOutput").innerHTML = resetStatement2;
    document.getElementById("doorNumberOutput").innerHTML = resetStatement3;
    document.getElementById("engineOutput").innerHTML = resetStatement4;
    document.getElementById("engineOutput").innerHTML = resetStatement4;
    document.getElementById("priceOutput").innerHTML = resetStatement5;
    totalPrice = 0;
}
