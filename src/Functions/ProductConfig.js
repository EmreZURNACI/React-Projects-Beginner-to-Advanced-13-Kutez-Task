export const zoomIn = (event) => {
    const zoomImage = event.target
    const boundingBox = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - boundingBox.left) / boundingBox.width * 100;
    const y = (event.clientY - boundingBox.top) / boundingBox.height * 100;
    zoomImage.style.transformOrigin = `${x}% ${y}%`;
    zoomImage.style.transform = "scale(3)";
}
export const zoomOut = (event) => {
    const zoomImage = event.target
    zoomImage.style.transformOrigin = `0% 0%`;
    zoomImage.style.transform = "scale(1)";
}
