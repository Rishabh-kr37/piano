const pianokeys = document.querySelectorAll(".piano-keys .key"),
volumeslider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allkeys =[],
audio = new Audio("tunes/a.wav");

const playTune = (key) => {
        audio.src=`tunes/${key}.wav`;
        audio.play();//playing audio
        //console.log(allkeys);

        const clickedkey = document.querySelector(`[data-key="${key}"]`);

       clickedkey.classList.add("active");
       setTimeout(() => {
                clickedkey.classList.remove("active");
       },150);
}
pianokeys.forEach(key => {
        allkeys.push(key.dataset.key);
        key.addEventListener("click",() => playTune(key.dataset.key));
        console.log();
});

const handleVolume = (e) => {
        audio.volume = e.target.value;
}

const showhidekeys = () =>{
        pianokeys.forEach(key => key.classList.toggle("hide"));
}


const pressedkey = (e) => {
        
       if(allkeys.includes(e.key)) playTune(e.key);
}
volumeslider.addEventListener("input",handleVolume);
document.addEventListener("keydown",pressedkey);
keysCheckbox.addEventListener("click",showhidekeys);
