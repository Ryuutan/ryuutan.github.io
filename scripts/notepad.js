function storenew()
{
    var notepadText = document.getElementById("pad").value;
    localStorage.text = notepadText;
}
function loadText()
{
    var pad = document.getElementById("pad");
    pad.value = (localStorage.text? localStorage.text : "test");
    setInterval(storenew, 10);
}