let livingRoomLightOn = false;

function toggleLight(lightId) {
    livingRoomLightOn = !livingRoomLightOn;
    const button = document.getElementById(lightId);
    button.innerText = livingRoomLightOn ? 'Turn Off' : 'Turn On';
    updateStatus();
}

function setThermostat() {
    const temperature = document.getElementById('thermostat').value;
    const statusText = document.getElementById('statusText');
    statusText.innerText = `Thermostat set to ${temperature}°F`;
}

function updateStatus() {
    const statusText = document.getElementById('statusText');
    statusText.innerText = livingRoomLightOn ? 'Living Room Light is On' : 'Living Room Light is Off';
}
