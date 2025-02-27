const images = [
    { src: "./dist/assets/004.jpg", alt: "" },
    { src: "./dist/assets/006.jpg", alt: "" },
    { src: "./dist/assets/007.jpg", alt: "" },
    { src: "./dist/assets/010.jpg", alt: "" },
    { src: "./dist/assets/012.jpg", alt: "" },
    { src: "./dist/assets/015.jpg", alt: "" },
    { src: "./dist/assets/026.jpg", alt: "" },
    { src: "./dist/assets/029.jpg", alt: "" },
    { src: "./dist/assets/033.jpg", alt: "" },
    { src: "./dist/assets/035.jpg", alt: "" },
    { src: "./dist/assets/037.jpg", alt: "" },
    { src: "./dist/assets/038.jpg", alt: "" },
    { src: "./dist/assets/039.jpg", alt: "" },
    { src: "./dist/assets/042.jpg", alt: "" },
    { src: "./dist/assets/043.jpg", alt: "" },
    { src: "./dist/assets/044.jpg", alt: "" },
    { src: "./dist/assets/049.jpg", alt: "" },
    { src: "./dist/assets/050.jpg", alt: "" },
    { src: "./dist/assets/052.jpg", alt: "" },
    { src: "./dist/assets/053.jpg", alt: "" },
    { src: "./dist/assets/054.jpg", alt: "" },
    { src: "./dist/assets/055.jpg", alt: "" },
    { src: "./dist/assets/056.jpg", alt: "" },
    { src: "./dist/assets/057.jpg", alt: "" },
    { src: "./dist/assets/058.jpg", alt: "" },
    { src: "./dist/assets/059.jpg", alt: "" },
    { src: "./dist/assets/060.jpg", alt: "" },
    { src: "./dist/assets/061.jpg", alt: "" },
    { src: "./dist/assets/062.jpg", alt: "" },
    { src: "./dist/assets/063.jpg", alt: "" },
    { src: "./dist/assets/064.jpg", alt: "" },
    { src: "./dist/assets/065.jpg", alt: "" },
    { src: "./dist/assets/066.jpg", alt: "" },
    { src: "./dist/assets/067.jpg", alt: "" },
    { src: "./dist/assets/068.jpg", alt: "" },
    { src: "./dist/assets/069.jpg", alt: "" },
    { src: "./dist/assets/070.jpg", alt: "" },
    { src: "./dist/assets/071.jpg", alt: "" },
    { src: "./dist/assets/072.jpg", alt: "" },
    { src: "./dist/assets/073.jpg", alt: "" },
    { src: "./dist/assets/074.jpg", alt: "" },
    { src: "./dist/assets/075.jpg", alt: "" },
    { src: "./dist/assets/076.jpg", alt: "" },
    { src: "./dist/assets/077.jpg", alt: "" },
    { src: "./dist/assets/078.jpg", alt: "" },
    { src: "./dist/assets/079.jpg", alt: "" },
    { src: "./dist/assets/080.jpg", alt: "" },
    { src: "./dist/assets/081.jpg", alt: "" },
    { src: "./dist/assets/082.jpg", alt: "" },
    { src: "./dist/assets/083.jpg", alt: "" },
    { src: "./dist/assets/084.jpg", alt: "" },
    { src: "./dist/assets/085.jpg", alt: "" },
    { src: "./dist/assets/086.jpg", alt: "" },
    { src: "./dist/assets/087.jpg", alt: "" },
    { src: "./dist/assets/088.jpg", alt: "" },
    { src: "./dist/assets/089.jpg", alt: "" },
    { src: "./dist/assets/090.jpg", alt: "" },
    { src: "./dist/assets/091.jpg", alt: "" },
    { src: "./dist/assets/092.jpg", alt: "" },
    { src: "./dist/assets/093.jpg", alt: "" },
    { src: "./dist/assets/094.jpg", alt: "" },
    { src: "./dist/assets/095.jpg", alt: "" },
    { src: "./dist/assets/096.jpg", alt: "" },
    { src: "./dist/assets/097.jpg", alt: "" },
    { src: "./dist/assets/098.jpg", alt: "" },
    { src: "./dist/assets/099.jpg", alt: "" },
    { src: "./dist/assets/100.jpg", alt: "" },
    { src: "./dist/assets/101.jpg", alt: "" },
    { src: "./dist/assets/102.jpg", alt: "" }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateGallery() {
    const container = document.getElementById('gallery-container');
    const shuffledImages = shuffleArray([...images]);

    const gridStructure = [
        { classes: 'flex w-full md:w-1/2 flex-wrap', items: 3 },
        { classes: 'flex w-full md:w-1/2 flex-wrap', items: 5 },
        { classes: 'flex w-full md:w-1/2 flex-wrap', items: 5 },
        { classes: 'flex w-full md:w-1/2 flex-wrap', items: 2 },
        { classes: 'w-full md:w-1/2 p-1', items: 3 },
    ];

    let imageIndex = 0;

    while (imageIndex < shuffledImages.length) {
        gridStructure.forEach(section => {
            if (imageIndex >= shuffledImages.length) return;

            const sectionDiv = document.createElement('div');
            sectionDiv.className = section.classes;

            for (let i = 0; i < section.items; i++) {
                if (imageIndex >= shuffledImages.length) break;

                const image = shuffledImages[imageIndex];
                const itemDiv = document.createElement('div');
                itemDiv.className = 'w-full p-1';

                const link = document.createElement('a');
                link.href = image.src;
                link.setAttribute('data-fancybox', 'gallery');

                const img = document.createElement('img');
                img.alt = image.alt;
                img.className = 'block h-full w-full object-cover object-center opacity-0 animate-fade-in transition duration-500 transform scale-100 hover:scale-110';
                img.src = image.src;

                link.appendChild(img);
                itemDiv.appendChild(link);
                sectionDiv.appendChild(itemDiv);

                imageIndex++;
            }

            container.appendChild(sectionDiv);
        });
    }
}

generateGallery();
