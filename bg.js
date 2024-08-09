document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const processButton = document.getElementById('processButton');
    const result = document.getElementById('result');
    const processedImage = document.getElementById('processedImage');
    const downloadLink = document.getElementById('downloadLink');

    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
                processButton.disabled = false;
            };
            reader.readAsDataURL(file);
        }
    });

    processButton.addEventListener('click', () => {
        // Here you would typically send the image to your backend for processing
        // For this example, we'll simulate processing by showing the same image
        setTimeout(() => {
            const previewImage = imagePreview.querySelector('img');
            processedImage.src = previewImage.src;
            downloadLink.href = previewImage.src;
            result.style.display = 'flex';
        }, 2000); // Simulate 2 seconds of processing time
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const processButton = document.getElementById('processButton');
    const result = document.getElementById('result');
    const processedImage = document.getElementById('processedImage');
    const downloadLink = document.getElementById('downloadLink');

    let selectedFile = null;

    imageInput.addEventListener('change', (e) => {
        selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
                processButton.disabled = false;
            };
            reader.readAsDataURL(selectedFile);
        }
    });

    processButton.addEventListener('click', async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('image_file', selectedFile);

        try {
            const response = await fetch('https://api.remove.bg/v1.0/removebg', {
                method: 'POST',
                headers: {
                    'X-Api-Key': 'DF2DTg5eHfu8G7wp7hZb3sdU'
                },
                body: formData
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = URL.createObjectURL(blob);
                processedImage.src = url;
                downloadLink.href = url;
                result.style.display = 'flex';
            } else {
                console.error('Background removal failed');
                alert('Failed to remove background. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;

    themeToggle.addEventListener('click', () => {
        if (htmlElement.getAttribute('data-theme') === 'light') {
            htmlElement.setAttribute('data-theme', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
        }
    });

    // Your existing JavaScript code goes here
});