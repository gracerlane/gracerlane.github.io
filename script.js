function createRing(container, radius) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const angleStep = (2 * Math.PI) / letters.length;
  
  for (let i = 0; i < letters.length; i++) {
    const letter = document.createElement('div');
    letter.textContent = letters[i];
    const angle = angleStep * i;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    letter.style.position = 'absolute';
    letter.style.transform = `translate(${x}px, ${y}px)`;
		// letter.style.border = 'solid';
    container.appendChild(letter);
  }
}

window.onload = function() {
  const outerRing = document.getElementById('outer-ring');
  const innerRing = document.getElementById('inner-ring');
  createRing(outerRing, 150);
  createRing(innerRing, 100);
};