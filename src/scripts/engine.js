const teclasPiano = document.querySelectorAll("#teclas .tecla");
const volume = document.getElementById("volume");
const selecionarTeclas = document.getElementById("selecionarTeclas");

const teclasFuncionais= []

const tocarAudio = (tecla) =>{
    let audio = new Audio(`src/tunes/${tecla}.wav`);
    audio.play();
    audio.volume = volume.value;    
    const teclaPresionada = document.querySelector(`[data-tecla="${tecla}"]`);
    teclaPresionada.classList.toggle("active");
    setTimeout(()=> teclaPresionada.classList.toggle("active"), 200);
}

teclasPiano.forEach(t =>{
    teclasFuncionais.push(t.dataset.tecla)
    t.addEventListener("click",() => tocarAudio(t.dataset.tecla));
})
document.addEventListener("keyup", (e) => {
    let tocar = teclasFuncionais.some(t => t=== e.key);
    if(tocar) tocarAudio(e.key);
});


volume.addEventListener("input", (e) => {
    let vol = e.target.value; 
    return vol
})

selecionarTeclas.addEventListener("click", () => {
    teclasPiano.forEach(t => t.childNodes[0].classList.toggle("hidden"))
})