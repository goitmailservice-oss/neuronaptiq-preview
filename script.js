// ------------------------------------------------------------------------left->

document.addEventListener("DOMContentLoaded", function () {
    const brands = [
        {
            id: 1,
            name: "11Teamsport",
            logo: "assets/image/slider/kunde/11logo.png",
        },
        {
            id: 2,
            name: "modernlife",
            logo: "assets/image/slider/kunde/8691.png",
        },
        {
            id: 3,
            name: "bauwolf",
            logo: "assets/image/slider/kunde/bauwolf-logo-black.png",
        },
        {
            id: 4,
            name: "kinderauto",
            logo: "assets/image/slider/kunde/kinderauto-logo.png",
        },
        {
            id: 5,
            name: "cosmeticexpress",
            logo: "assets/image/slider/kunde/logo-cosmeticexpress.png",
        },
        {
            id: 6,
            name: "tactix",
            logo: "assets/image/slider/kunde/logomobil.png",
        },
        {
            id: 7,
            name: "neckermann",
            logo: "assets/image/slider/kunde/logo-neckermann.png",
        },
        {
            id: 8,
            name: "timbertown",
            logo: "assets/image/slider/kunde/parkett-shop-logo.png",
        },
        {
            id: 9,
            name: "tiefenthaler",
            logo: "assets/image/slider/kunde/tiefenthaler-logo.png",
        },
        {
            id: 10,
            name: "niceshops",
            logo: "assets/image/slider/kunde/niceshops.png",
        },
    ];

    const sliderWrapper = document.getElementById("slider-wrapper");
    const sliderTrack = document.getElementById("slider-track");

    let position = 0;
    let isMouseDown = false;
    let startX, lastX;
    let animationId = null;
    const speed = 0.5;

    function populateSlider() {
        brands.forEach((brand) => {
            sliderTrack.appendChild(createBrandElement(brand, "1"));
        });

        brands.forEach((brand) => {
            sliderTrack.appendChild(createBrandElement(brand, "2"));
        });

        brands.forEach((brand) => {
            sliderTrack.appendChild(createBrandElement(brand, "3"));
        });
    }

    function createBrandElement(brand, suffix) {
        const brandItem = document.createElement("div");
        brandItem.className = "brand-item";

        // const brandLink = document.createElement("a");
        // brandLink.className = "brand-link";
        // brandLink.href = brand.url;
        // brandLink.target = "_blank";
        // brandLink.rel = "noopener noreferrer";

        const brandImage = document.createElement("img");
        brandImage.className = "brand-image";
        brandImage.src = brand.logo;
        brandImage.alt = brand.name;
        brandImage.title = brand.name;

        // const brandName = document.createElement("div");
        // brandName.className = "brand-name";
        // brandName.textContent = brand.name;

        brandItem.appendChild(brandImage);
        // brandItem.appendChild(brandName);

        // brandLink.appendChild(brandImage);
        // brandLink.appendChild(brandName);
        // brandItem.appendChild(brandLink);

        return brandItem;
    }

    function autoScroll() {
        if (!isMouseDown) {
            position -= speed;
            sliderTrack.style.transform = `translateX(${position}px)`;

            const itemWidth =
                sliderTrack.querySelector(".brand-item").offsetWidth;
            const itemGap = 32; // identisch mit gap-wert im css...
            const totalItemWidth = itemWidth + itemGap;

            const resetPoint = -(brands.length * totalItemWidth);

            if (position <= resetPoint) {
                position = 0;
            }
        }

        animationId = requestAnimationFrame(autoScroll);
    }

    sliderWrapper.addEventListener("mousedown", function (e) {
        isMouseDown = true;
        sliderWrapper.classList.add("active");
        startX = e.clientX;
        lastX = startX;

        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }

        e.preventDefault();
    });

    document.addEventListener("mouseup", function () {
        if (isMouseDown) {
            isMouseDown = false;
            sliderWrapper.classList.remove("active");

            setTimeout(function () {
                if (!animationId) {
                    animationId = requestAnimationFrame(autoScroll);
                }
            }, 500);
        }
    });

    document.addEventListener("mousemove", function (e) {
        if (!isMouseDown) return;

        const x = e.clientX;
        const diff = x - lastX;
        position += diff;

        sliderTrack.style.transform = `translateX(${position}px)`;
        lastX = x;

        e.preventDefault();
    });

    sliderTrack.addEventListener(
        "click",
        function (e) {
            if (sliderWrapper.classList.contains("active")) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        },
        true
    );

    populateSlider();

    animationId = requestAnimationFrame(autoScroll);
});

// ------------------------------------------------------------------------right->

document.addEventListener("DOMContentLoaded", function () {
    const brands = [
        {
            id: 1,
            name: "shopware",
            logo: "assets/image/slider/plattformen/shopware.png",
        },
        {
            id: 2,
            name: "jtl-shop",
            logo: "assets/image/slider/plattformen/jtl.png",
        },
        {
            id: 3,
            name: "squarespace",
            logo: "assets/image/slider/plattformen/squarespace.png",
        },
        {
            id: 4,
            name: "shopify",
            logo: "assets/image/slider/plattformen/shopify.png",
        },
        {
            id: 5,
            name: "woo-commerce",
            logo: "assets/image/slider/plattformen/woo.png",
        },
        {
            id: 6,
            name: "zencart",
            logo: "assets/image/slider/plattformen/zencart.png",
        },
        {
            id: 7,
            name: "wordpress",
            logo: "assets/image/slider/plattformen/wordpress.png",
        },
        {
            id: 8,
            name: "wix",
            logo: "assets/image/slider/plattformen/wix.png",
        },
        {
            id: 9,
            name: "prestashop",
            logo: "assets/image/slider/plattformen/prestashop.png",
        },
        {
            id: 10,
            name: "magento",
            logo: "assets/image/slider/plattformen/magento.png",
        },
    ];

    const sliderWrapper = document.getElementById("slider-wrapper-r");
    const sliderTrack = document.getElementById("slider-track-r");

    let position = 0;
    let isMouseDown = false;
    let startX, lastX;
    let animationId = null;
    const speed = 0.5;

    function populateSlider() {
        brands.forEach((brand) => {
            sliderTrack.appendChild(createBrandElement(brand, "1"));
        });

        brands.forEach((brand) => {
            sliderTrack.appendChild(createBrandElement(brand, "2"));
        });

        brands.forEach((brand) => {
            sliderTrack.appendChild(createBrandElement(brand, "3"));
        });
    }

    function createBrandElement(brand, suffix) {
        const brandItem = document.createElement("div");
        brandItem.className = "brand-item";

        // const brandLink = document.createElement("a");
        // brandLink.className = "brand-link";
        // brandLink.href = brand.url;
        // brandLink.target = "_blank";
        // brandLink.rel = "noopener noreferrer";

        const brandImage = document.createElement("img");
        brandImage.className = "brand-image";
        brandImage.src = brand.logo;
        brandImage.alt = brand.name;
        brandImage.title = brand.name;

        // const brandName = document.createElement("div");
        // brandName.className = "brand-name";
        // brandName.textContent = brand.name;

        brandItem.appendChild(brandImage);
        // brandItem.appendChild(brandName);

        // brandLink.appendChild(brandImage);
        // brandLink.appendChild(brandName);
        // brandItem.appendChild(brandLink);

        return brandItem;
    }

    function autoScroll() {
        if (!isMouseDown) {
            position += speed;
            sliderTrack.style.transform = `translateX(${position}px)`;

            const itemWidth =
                sliderTrack.querySelector(".brand-item").offsetWidth;
            const itemGap = 32; // identisch mit gap-wert im css...
            const totalItemWidth = itemWidth + itemGap;

            const resetPoint = -(brands.length * totalItemWidth);

            if (position >= 0) {
                position = resetPoint;
            }
        }

        animationId = requestAnimationFrame(autoScroll);
    }

    sliderWrapper.addEventListener("mousedown", function (e) {
        isMouseDown = true;
        sliderWrapper.classList.add("active");
        startX = e.clientX;
        lastX = startX;

        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }

        e.preventDefault();
    });

    document.addEventListener("mouseup", function () {
        if (isMouseDown) {
            isMouseDown = false;
            sliderWrapper.classList.remove("active");

            setTimeout(function () {
                if (!animationId) {
                    animationId = requestAnimationFrame(autoScroll);
                }
            }, 500);
        }
    });

    document.addEventListener("mousemove", function (e) {
        if (!isMouseDown) return;

        const x = e.clientX;
        const diff = x - lastX;
        position += diff;

        sliderTrack.style.transform = `translateX(${position}px)`;
        lastX = x;

        e.preventDefault();
    });

    sliderTrack.addEventListener(
        "click",
        function (e) {
            if (sliderWrapper.classList.contains("active")) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        },
        true
    );

    populateSlider();

    animationId = requestAnimationFrame(autoScroll);
});
