document.addEventListener('DOMContentLoaded', function() {
    const photoWall = document.getElementById('photo-wall');
    const images = ['./imgs/image1.jpg', './imgs/image2.jpg']; // 图片路径数组

    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = 'Photo';
        photoWall.appendChild(imgElement);
    });
});
