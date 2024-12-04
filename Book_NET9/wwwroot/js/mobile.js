document.getElementById('exampleInput').addEventListener('focus', function () {
    this.style.color = 'black'; // Цвет текста при фокусировке
});

document.getElementById('exampleInput').onblur = function () {
    if (!this.value) {
        this.style.color = '#ff0000'; // Изменяем цвет placeholder
    }
};
function backcontent() {
    if (window.matchMedia("(max-device-height:700px)").matches) {
        document.getElementById("buttonback").style.setProperty("display", "none", "important")
        document.getElementById("navbarquestions").style.setProperty("height", "100%", "important")
        document.getElementById("navbarquestions").style.setProperty("width", "100%", "important")
        document.getElementById("navbarquestions").style.setProperty("display", "initial", "important")
        document.getElementById("mainpanel").style.setProperty("display", "none", "important")
        document.getElementById("mainpanel").style.setProperty("height", "0%", "important")
        document.getElementById("mainpanel").style.setProperty("width", "0%", "important")
        document.getElementById("content1").style.display = "none";
        document.getElementById("content2").style.display = "none";
        document.getElementById("content3").style.display = "none";
        document.getElementById("content4").style.display = "none";
        document.getElementById("content5").style.display = "none";
        document.getElementById("content6").style.display = "none";
    }
}
function toggleVisibility1() {
    if (window.matchMedia("(max-device-height:700px)").matches) {
        let contentDiv = document.getElementById("content1");
        if (contentDiv.style.display === "none") {
            document.getElementById("navbarquestions").style.setProperty("display", "none", "important")
            document.getElementById("navbarquestions").style.setProperty("height", "0%", "important")
            document.getElementById("navbarquestions").style.setProperty("width", "0%", "important")
            document.getElementById("mainpanel").style.setProperty("display", "initial", "important")
            document.getElementById("mainpanel").style.setProperty("height", "100%", "important")
            document.getElementById("mainpanel").style.setProperty("width", "100%", "important")
            document.getElementById("L1mobile").style.setProperty("height", "100%", "important")
            document.getElementById("L1mobile").style.setProperty("width", "100%", "important")
            document.getElementById("buttonback").style.setProperty("display", "initial", "important")
            document.addEventListener('DOMContentLoaded', function () {
                const iframe = document.querySelector('iframe');

                iframe.onload = function () {
                    const doc = iframe.contentDocument || iframe.contentWindow.document;

                    // Найти все изображения
                    const images = doc.querySelectorAll('img');

                    images.forEach(img => {
                        img.style.setProperty("width", "50%", "important");
                        img.style.setProperty("height", "auto", "important"); // Сохранять пропорции
                    });
                };
            });
            contentDiv.style.display = "block";
            document.getElementById("content2").style.display = "none";
            document.getElementById("content3").style.display = "none";
            document.getElementById("content4").style.display = "none";
            document.getElementById("content5").style.display = "none";
            document.getElementById("content6").style.display = "none";
            // Изменяем на block или initial
        } else {
            contentDiv.style.display = "none";
        }
    } else {
        // Код для десктопных устройств
        let contentDiv = document.getElementById("content1");
        if (contentDiv.style.display === "none") {
            contentDiv.style.display = "block";
            document.getElementById("content2").style.display = "none";
            document.getElementById("content3").style.display = "none";
            document.getElementById("content4").style.display = "none";
            document.getElementById("content5").style.display = "none";
            document.getElementById("content6").style.display = "none";
            // Изменяем на block или initial
        } else {
            contentDiv.style.display = "none";
        }
    }
}
function toggleVisibility2() {
    if (window.matchMedia("(max-device-height:700px)").matches) {
        let contentDiv = document.getElementById("content2");
        if (contentDiv.style.display === "none") {
            document.getElementById("navbarquestions").style.setProperty("display", "none", "important")
            document.getElementById("navbarquestions").style.setProperty("height", "0%", "important")
            document.getElementById("navbarquestions").style.setProperty("width", "0%", "important")
            document.getElementById("mainpanel").style.setProperty("display", "initial", "important")
            document.getElementById("mainpanel").style.setProperty("height", "650px", "important")
            document.getElementById("mainpanel").style.setProperty("width", "100%", "important")
            document.getElementById("L2").style.setProperty("height", "560px", "important")
            document.getElementById("L2").style.setProperty("width", "100%", "important")
            document.getElementById("buttonback").style.setProperty("display", "initial", "important")
            document.addEventListener('DOMContentLoaded', function () {
                const iframe = document.querySelector('iframe');

                iframe.onload = function () {
                    const doc = iframe.contentDocument || iframe.contentWindow.document;

                    // Найти все изображения
                    const images = doc.querySelectorAll('img');

                    images.forEach(img => {
                        img.style.setProperty("width", "50%", "important");
                        img.style.setProperty("height", "auto", "important"); // Сохранять пропорции
                    });
                };
            });
            contentDiv.style.display = "block";
            document.getElementById("content1").style.display = "none";
            document.getElementById("content3").style.display = "none";
            document.getElementById("content4").style.display = "none";
            document.getElementById("content5").style.display = "none";
            document.getElementById("content6").style.display = "none";
            // Изменяем на block или initial
        } else {
            contentDiv.style.display = "none";
        }
    } else {
        // Код для десктопных устройств
        let contentDiv = document.getElementById("content2");
        if (contentDiv.style.display === "none") {
            contentDiv.style.display = "block";
            document.getElementById("content1").style.display = "none";
            document.getElementById("content3").style.display = "none";
            document.getElementById("content4").style.display = "none";
            document.getElementById("content5").style.display = "none";
            document.getElementById("content6").style.display = "none";
            // Изменяем на block или initial
        } else {
            contentDiv.style.display = "none";
        }
    }
}
function toggleVisibility3() {
    if (window.matchMedia("(max-device-height:700px)").matches) {
        let contentDiv = document.getElementById("content3");
        if (contentDiv.style.display === "none") {
            document.getElementById("navbarquestions").style.setProperty("display", "none", "important")
            document.getElementById("navbarquestions").style.setProperty("height", "0%", "important")
            document.getElementById("navbarquestions").style.setProperty("width", "0%", "important")
            document.getElementById("mainpanel").style.setProperty("display", "initial", "important")
            document.getElementById("mainpanel").style.setProperty("height", "650px", "important")
            document.getElementById("mainpanel").style.setProperty("width", "100%", "important")
            document.getElementById("L3").style.setProperty("height", "560px", "important")
            document.getElementById("L3").style.setProperty("width", "100%", "important")
            document.getElementById("buttonback").style.setProperty("display", "initial", "important")
            document.addEventListener('DOMContentLoaded', function () {
                const iframe = document.querySelector('iframe');

                iframe.onload = function () {
                    const doc = iframe.contentDocument || iframe.contentWindow.document;

                    // Найти все изображения
                    const images = doc.querySelectorAll('img');

                    images.forEach(img => {
                        img.style.setProperty("width", "50%", "important");
                        img.style.setProperty("height", "auto", "important"); // Сохранять пропорции
                    });
                };
            });
            contentDiv.style.display = "block";
            document.getElementById("content2").style.display = "none";
            document.getElementById("content1").style.display = "none";
            document.getElementById("content4").style.display = "none";
            document.getElementById("content5").style.display = "none";
            document.getElementById("content6").style.display = "none";
            // Изменяем на block или initial
        } else {
            contentDiv.style.display = "none";
        }
    } else {
        // Код для десктопных устройств
        let contentDiv = document.getElementById("content3");
        if (contentDiv.style.display === "none") {
            contentDiv.style.display = "block";
            document.getElementById("content2").style.display = "none";
            document.getElementById("content1").style.display = "none";
            document.getElementById("content4").style.display = "none";
            document.getElementById("content5").style.display = "none";
            document.getElementById("content6").style.display = "none";
            // Изменяем на block или initial
        } else {
            contentDiv.style.display = "none";
        }
    }
}
function toggleVisibility4() {
    if (window.matchMedia("(max-device-height:700px)").matches) {
        let contentDiv = document.getElementById("content4");
        if (contentDiv.style.display === "none") {
            document.getElementById("navbarquestions").style.setProperty("display", "none", "important")
            document.getElementById("navbarquestions").style.setProperty("height", "0%", "important")
            document.getElementById("navbarquestions").style.setProperty("width", "0%", "important")
            document.getElementById("mainpanel").style.setProperty("display", "initial", "important")
            document.getElementById("mainpanel").style.setProperty("height", "650px", "important")
            document.getElementById("mainpanel").style.setProperty("width", "100%", "important")
            document.getElementById("L4").style.setProperty("height", "560px", "important")
            document.getElementById("L4").style.setProperty("width", "100%", "important")
            document.getElementById("buttonback").style.setProperty("display", "initial", "important")
            document.addEventListener('DOMContentLoaded', function () {
                const iframe = document.querySelector('iframe');

                iframe.onload = function () {
                    const doc = iframe.contentDocument || iframe.contentWindow.document;

                    // Найти все изображения
                    const images = doc.querySelectorAll('img');

                    images.forEach(img => {
                        img.style.setProperty("width", "50%", "important");
                        img.style.setProperty("height", "auto", "important"); // Сохранять пропорции
                    });
                };
            });
            contentDiv.style.display = "block";
            document.getElementById("content2").style.display = "none";
            document.getElementById("content3").style.display = "none";
            document.getElementById("content1").style.display = "none";
            document.getElementById("content5").style.display = "none";
            document.getElementById("content6").style.display = "none";
            // Изменяем на block или initial
        } else {
            contentDiv.style.display = "none";
        }
    } else {
        // Код для десктопных устройств
        let contentDiv = document.getElementById("content4");
        if (contentDiv.style.display === "none") {
            contentDiv.style.display = "block";
            document.getElementById("content2").style.display = "none";
            document.getElementById("content3").style.display = "none";
            document.getElementById("content1").style.display = "none";
            document.getElementById("content5").style.display = "none";
            document.getElementById("content6").style.display = "none";
            // Изменяем на block или initial
        } else {
            contentDiv.style.display = "none";
        }
    }
}
function toggleVisibility5() {
    if (window.matchMedia("(max-device-height:700px)").matches) {
        let contentDiv = document.getElementById("content5");
        if (contentDiv.style.display === "none") {
            document.getElementById("navbarquestions").style.setProperty("display", "none", "important")
            document.getElementById("navbarquestions").style.setProperty("height", "0%", "important")
            document.getElementById("navbarquestions").style.setProperty("width", "0%", "important")
            document.getElementById("mainpanel").style.setProperty("display", "initial", "important")
            document.getElementById("mainpanel").style.setProperty("height", "650px", "important")
            document.getElementById("mainpanel").style.setProperty("width", "100%", "important")
            document.getElementById("L5").style.setProperty("height", "560px", "important")
            document.getElementById("L5").style.setProperty("width", "100%", "important")
            document.getElementById("buttonback").style.setProperty("display", "initial", "important")
            document.addEventListener('DOMContentLoaded', function () {
                const iframe = document.querySelector('iframe');

                iframe.onload = function () {
                    const doc = iframe.contentDocument || iframe.contentWindow.document;

                    // Найти все изображения
                    const images = doc.querySelectorAll('img');

                    images.forEach(img => {
                        img.style.setProperty("width", "50%", "important");
                        img.style.setProperty("height", "auto", "important"); // Сохранять пропорции
                    });
                };
            });
            contentDiv.style.display = "block";
            document.getElementById("content2").style.display = "none";
            document.getElementById("content3").style.display = "none";
            document.getElementById("content4").style.display = "none";
            document.getElementById("content1").style.display = "none";
            document.getElementById("content6").style.display = "none";
            // Изменяем на block или initial
        } else {
            contentDiv.style.display = "none";
        }
    } else {
        // Код для десктопных устройств
        let contentDiv = document.getElementById("content5");
        if (contentDiv.style.display === "none") {
            contentDiv.style.display = "block";
            document.getElementById("content2").style.display = "none";
            document.getElementById("content3").style.display = "none";
            document.getElementById("content4").style.display = "none";
            document.getElementById("content1").style.display = "none";
            document.getElementById("content6").style.display = "none";
            // Изменяем на block или initial
        } else {
            contentDiv.style.display = "none";
        }
    }
}
function toggleVisibility6() {
    if (window.matchMedia("(max-device-height:700px)").matches) {
        let contentDiv = document.getElementById("content6");
        if (contentDiv.style.display === "none") {
            document.getElementById("navbarquestions").style.setProperty("display", "none", "important")
            document.getElementById("navbarquestions").style.setProperty("height", "0%", "important")
            document.getElementById("navbarquestions").style.setProperty("width", "0%", "important")
            document.getElementById("mainpanel").style.setProperty("display", "initial", "important")
            document.getElementById("mainpanel").style.setProperty("height", "650px", "important")
            document.getElementById("mainpanel").style.setProperty("width", "100%", "important")
            document.getElementById("L6").style.setProperty("height", "560px", "important")
            document.getElementById("L6").style.setProperty("width", "100%", "important")
            document.getElementById("buttonback").style.setProperty("display", "initial", "important")
            document.addEventListener('DOMContentLoaded', function () {
                const iframe = document.querySelector('iframe');

                iframe.onload = function () {
                    const doc = iframe.contentDocument || iframe.contentWindow.document;

                    // Найти все изображения
                    const images = doc.querySelectorAll('img');

                    images.forEach(img => {
                        img.style.setProperty("width", "50%", "important");
                        img.style.setProperty("height", "auto", "important"); // Сохранять пропорции
                    });
                };
            });
            contentDiv.style.display = "block";
            document.getElementById("content2").style.display = "none";
            document.getElementById("content3").style.display = "none";
            document.getElementById("content4").style.display = "none";
            document.getElementById("content5").style.display = "none";
            document.getElementById("content1").style.display = "none";
            // Изменяем на block или initial
        } else {
            contentDiv.style.display = "none";
        }
    } else {
        // Код для десктопных устройств
        let contentDiv = document.getElementById("content6");
        if (contentDiv.style.display === "none") {
            contentDiv.style.display = "block";
            document.getElementById("content2").style.display = "none";
            document.getElementById("content3").style.display = "none";
            document.getElementById("content4").style.display = "none";
            document.getElementById("content5").style.display = "none";
            document.getElementById("content1").style.display = "none";
            // Изменяем на block или initial
        } else {
            contentDiv.style.display = "none";
        }
    }
}