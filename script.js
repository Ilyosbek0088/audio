document.querySelector('#mp3').innerHTML = `<audio src="audio.mp3" autoplay controls muted loop ></audio>`
let v = document.querySelector('audio')
function ranges()
{
let a = document.querySelector('input').value
console.log(a/100);
document.getElementById('light').style.backgroundColor = `rgb(255, 166,35, ${a/100})`
document.getElementById('light').style.boxShadow = `0px 0px ${a}px 0px orange`
document.getElementById('light').style.transform = `rotate(${a*3}deg)`
v.volume = a/100;
let sas = document.querySelector('#sas')
sas.value = a
v.muted = false
}
