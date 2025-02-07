const animationContainer = document.querySelector(".ascii-animation-container");

for (let i = 0; i < 50; i++) {
    const row = document.createElement("div");
    row.classList.add("animation-column");
    animationContainer.appendChild(row)

    for (let i = 0; i < 20; i++) {
        const col = document.createElement("div");
        col.classList.add("block");
        const x = Math.floor((Math.random() * 94) + 33);
        col.textContent = String.fromCharCode(x)
        row.appendChild(col)
    }
}


const hashMap = {};

for (let i = 0; i <= 50; i++) {
    hashMap[i] = [0, 0];
}

for (let i = 0; i < 50; i++) {
    const bound1 = Math.floor((Math.random() * 20))
    hashMap[i][0] = bound1

    const bound2 = bound1 + Math.floor((Math.random() * 10) + 4)
    hashMap[i][1] = bound2

    for (let j = bound1; j < bound2; j++) {
        animationContainer.querySelectorAll(".animation-column")[i].querySelectorAll(".block")[j].style.color = "black"
    }
}

setInterval(doThing, 1000);

function doThing() {
    for (let i = 0; i < 50; i++) {

        if (hashMap[i][0] == 20) {
            hashMap[i][0] = 0
        }

        if (hashMap[i][1] == 20) {
            hashMap[i][1] = 0
        }
        
        if (hashMap[i][0] < 20) {
            animationContainer.querySelectorAll(".animation-column")[0].querySelectorAll(".block")[hashMap[i][0]].style.color = "greenyellow"
            hashMap[i][0]++
        }
    
        if (hashMap[i][1] < 20) {
            animationContainer.querySelectorAll(".animation-column")[0].querySelectorAll(".block")[hashMap[i][1]].style.color = "black"
            hashMap[i][1]++
        }
    }
}