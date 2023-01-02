//Audio stuff, don't worry about it ☻
var context = new AudioContext();
function playSound(type, frequency, amplitude, durationInSeconds ,isRandom, deltaRandom)
{
    var gain = null;
    var osc = null;
    type = type || "sine";
    frequency = frequency || 440;
    amplitude = amplitude || 0.5;
    durationInSeconds = durationInSeconds || 1;
    isRandom = isRandom || false;
    deltaRandom = deltaRandom || 0;
    osc = context.createOscillator();
    osc.type = type;
    osc.frequency.value = frequency + (isRandom ? Math.round((Math.random()*(2*deltaRandom))-deltaRandom) : 0);
    
    gain = context.createGain();
    gain.gain.value = amplitude;
    gain.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + durationInSeconds);

    osc.connect(gain);
    gain.connect(context.destination);
    osc.start(0);
}