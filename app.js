const logo = document.querySelectorAll("#animation path");

for (let i = 0; i < logo.length; i++){
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}