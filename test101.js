function displayName(name){
    alert(name)
}

function addName(){
    var name = prompt("Enter ur name")
    if (name != null) {
        document.getElementById("display").textContent = name;
    }
    displayName("Thank for ur respon")
}

function random(){
    const image = ['mck.jpg','bray.jpg','denvau.jpg','hieuthuhai.jpg'];
    const randomIndex = Math.floor(Math.random() * image.length);
    const display = image[randomIndex];
    document.getElementById('randomImage').src = display;
}

function reload(){
    window.location.reload();

}
