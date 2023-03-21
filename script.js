let a = setInterval(()=>{
    let cpu = [
        "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
        "The way to get started is to quit talking and begin doing. -Walt Disney",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs",
        "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
        "Life is what happens when you're busy making other plans. -John Lennon",
        "Whoever is happy will make others happy too. -Anne Frank",
        "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller"
    ]
let cpuI = Math.floor(Math.random()*(cpu.length-1));
let bodies = document.getElementById('body');
let images = document.getElementById('image3');
if(cpuI==0){
bodies.innerHTML = cpu[cpuI];
images.innerHTML = '<img src = "nelson.jpg">';
}
else if(cpuI==1){
bodies.innerHTML = cpu[cpuI];
images.innerHTML = '<img src = "a.jpg">';
}
else if(cpuI==2){
bodies.innerHTML = cpu[cpuI];
images.innerHTML = '<img src = "steve.jpg">';
}
else if(cpuI==3){
bodies.innerHTML = cpu[cpuI];
images.innerHTML = '<img src = "ele.jpg">';
}
else if(cpuI==4){
bodies.innerHTML = cpu[cpuI];
images.innerHTML = '<img src = "opr.jpg">';
}
else if(cpuI==5){
bodies.innerHTML = cpu[cpuI];
images.innerHTML = '<img src = "james.jpg">';
}
else if(cpuI==6){
bodies.innerHTML = cpu[cpuI];
images.innerHTML = '<img src = "john.jpg">';
}
else if(cpuI==7){
bodies.innerHTML = cpu[cpuI];
images.innerHTML = '<img src = "anne.jpg">';
}
else if(cpuI==8){
bodies.innerHTML = cpu[cpuI];
images.innerHTML = '<img src = "ralph.jpg">';
}
else if(cpuI==9){
bodies.innerHTML = cpu[cpuI];
images.innerHTML = '<img src = "helen.jpg">';
}
else{
    bodies.innerHTML = cpu[cpuI];
}
},5000)

