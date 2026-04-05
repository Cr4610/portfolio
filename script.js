function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';
}

// script.js

// script.js

const charData = {
    'char1': {
        name: '自設',
        images: [
            { src: 'image/cha-left.PNG', class: 'col-3' },
            { src: 'image/cha-scarf.PNG', class: 'col-3' },
            { src: 'image/cha-speaking-water.PNG', class: 'col-3' },
            { src: 'image/cha-water.PNG', class: 'col-3' }
        ]
    },
    'char2': {
        name: '梁燼',
        images: [
            { src: 'image/jin-ep1-water.PNG', class: 'col-6' }
        ]
    },
    'char3': {
        name: 'Emevia Sephira',
        images: [
            { src: 'image/witch-child-water.PNG', class: 'col-3' },
            { src: 'image/witch-stand-water.PNG', class: 'col-3' },
            { src: 'image/world-outlook.PNG', class: 'col-3',link:'https://resonant-rutabaga-604.notion.site/32c3be9b094180e48f1ffd6280ba8333?v=32c3be9b094180dfa6bc000c0a3a7ea2'},
            { src: 'image/witch-hat-water.PNG', class: 'col-3' },
            { src: 'image/witch-illu-water.PNG', class: 'col-6' },
            { src: 'image/witch-set-water.PNG', class: 'col-6' }
        ]
    }
};

function toggleDetails(charId, clickedElement) {
    const area = document.getElementById('details-area');
    const gallery = document.getElementById('character-gallery');
    const data = charData[charId];

    if (data) {
        // 修改後的 toggleDetails 內部渲染部分
gallery.innerHTML = data.images.map(item => {
    if (item.type === 'text') {
        return `<div class="gallery-text ${item.class}">${item.content}</div>`;
    } else if (item.link) {
        // 如果有超連結，包上 <a> 標籤，並移除 onclick 放大功能
        return `
            <a href="${item.link}" target="_blank" class="${item.class}">
                <img src="${item.src}" alt="${data.name}" class="gallery-img" style="cursor: pointer;">
            </a>`;
    } else {
        // 一般圖片，維持點擊放大
        return `<img src="${item.src}" alt="${data.name}" class="gallery-img ${item.class}" onclick="openLightbox(this.src)" style="cursor: zoom-in;">`;
    }
}).join('');
    }

    area.style.display = 'block';

    const imgRect = clickedElement.getBoundingClientRect();
    const containerRect = area.closest('.container_a').getBoundingClientRect();
    
    const centerX = imgRect.left + (imgRect.width / 2) - containerRect.left;
    area.style.setProperty('--triangle-left', `${centerX}px`);

    area.scrollIntoView({ behavior: 'smooth' });
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';
}

function openLightbox(imgSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    
    // 設定放大圖片的來源
    lightboxImg.src = imgSrc;
    
    // 顯示燈箱 (加入 .show class)
    lightbox.classList.add('show');
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    
    // 隱藏燈箱 (移除 .show class)
    lightbox.classList.remove('show');
}