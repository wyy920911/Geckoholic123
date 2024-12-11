/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

    // 取得選單的元素
    const selectElement = document.getElementById('locationSelect');

    // 監聽選單的變化
    selectElement.addEventListener('change', function () {
        const selectedValue = this.value; // 取得選中的值

        // 根據選中的值跳轉
        if (selectedValue === 'north1') {
            window.location.href = 'https://www.google.com';
        } else if (selectedValue === 'center1') {
            window.location.href = 'https://www.example.com/center'; // 替換成中部對應的網址
        } else if (selectedValue === 'south1') {
            window.location.href = 'https://www.example.com/south'; // 替換成南部對應的網址
        } else if (selectedValue === 'east1') {
            window.location.href = 'https://www.example.com/east'; // 替換成東部對應的網址
        } else if (selectedValue === 'island1') {
            window.location.href = 'https://www.example.com/island'; // 替換成離島對應的網址
        }
    });
