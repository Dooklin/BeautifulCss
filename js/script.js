const colors = [
    "rgb(136,212,202)", 
    "rgb(140,103,196)", 
    "rgb(52,71,113)", 
    "rgb(89,112,156)", 
    "rgb(76,54,66)"
];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

document.addEventListener('mousemove', function(event) {
    let star = document.createElement('object');
    star.setAttribute('data', 'images/star.svg');
    star.setAttribute('type', 'image/svg+xml');
    star.classList.add('star');
    star.style.left = `${event.pageX}px`;
    star.style.top = `${event.pageY}px`;

    star.addEventListener('load', function() {
        let svgDoc = star.contentDocument;
        if (svgDoc) {
            let svgElement = svgDoc.querySelector('svg');
            if (svgElement) {
                svgElement.querySelector('path').setAttribute('fill', getRandomColor());
            }
        }
    });

    document.body.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 1000);
});