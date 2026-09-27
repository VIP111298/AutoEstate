const cars = [
    {
        id: 1,
        name: "BMW X5",
        image: "assets/bmwx5.jpg",
        type: "SUV",
        fuel: "Petrol",
        price: 72.50,
        priceDisplay: "₹72.50 Lakh",
        year: 2021,
        km: 32000,
        color: "White",
        description: "A premium pre-owned BMW X5 with a spacious cabin, powerful petrol engine and comfortable long-distance driving experience.",
        features: ["Automatic Transmission", "Premium Interior", "Sunroof", "Parking Sensors", "Alloy Wheels", "Climate Control"]
    },
    {
        id: 2,
        name: "Toyota Fortuner",
        image: "assets/fortuner.jpg",
        type: "SUV",
        fuel: "Diesel",
        price: 38.75,
        priceDisplay: "₹38.75 Lakh",
        year: 2022,
        km: 41000,
        color: "White",
        description: "A practical and capable Toyota Fortuner suitable for city driving as well as longer journeys.",
        features: ["Diesel Engine", "Automatic Transmission", "7 Seats", "Reverse Camera", "Alloy Wheels", "Cruise Control"]
    },
    {
        id: 3,
        name: "Audi Q5",
        image: "assets/audi-q5.jpg",
        type: "SUV",
        fuel: "Petrol",
        price: 48.90,
        priceDisplay: "₹48.90 Lakh",
        year: 2021,
        km: 29000,
        color: "Grey",
        description: "A premium Audi Q5 combining refined styling, comfortable interiors and confident road manners.",
        features: ["Automatic Transmission", "Premium Cabin", "LED Lighting", "Parking Camera", "Alloy Wheels", "Climate Control"]
    },
    {
        id: 4,
        name: "Honda City",
        image: "assets/honda_city.jpg",
        type: "Sedan",
        fuel: "Petrol",
        price: 12.85,
        priceDisplay: "₹12.85 Lakh",
        year: 2022,
        km: 24000,
        color: "Red",
        description: "A comfortable Honda City offering practical sedan space, easy city driving and efficient petrol performance.",
        features: ["Petrol Engine", "Automatic Transmission", "Rear Camera", "Touchscreen", "Alloy Wheels", "Cruise Control"]
    },
    {
        id: 5,
        name: "Hyundai Creta",
        image: "assets/hyundai-creta.jpg",
        type: "SUV",
        fuel: "Diesel",
        price: 17.40,
        priceDisplay: "₹17.40 Lakh",
        year: 2023,
        km: 18000,
        color: "White",
        description: "A relatively newer Hyundai Creta with practical SUV dimensions and a comfortable interior.",
        features: ["Diesel Engine", "Automatic Transmission", "Touchscreen", "Rear Camera", "Alloy Wheels", "Sunroof"]
    },
    {
        id: 6,
        name: "Mercedes-Benz C-Class",
        image: "assets/mercedes-c-class.jpg",
        type: "Sedan",
        fuel: "Petrol",
        price: 45.50,
        priceDisplay: "₹45.50 Lakh",
        year: 2021,
        km: 27000,
        color: "Black",
        description: "A premium Mercedes-Benz C-Class with an elegant exterior, refined cabin and comfortable driving experience.",
        features: ["Automatic Transmission", "Premium Interior", "Digital Display", "Parking Camera", "Alloy Wheels", "Climate Control"]
    },
    {
        id: 7,
        name: "Kia Seltos",
        image: "assets/seltos.jpg",
        type: "SUV",
        fuel: "Petrol",
        price: 15.90,
        priceDisplay: "₹15.90 Lakh",
        year: 2023,
        km: 21000,
        color: "Blue",
        description: "A stylish compact SUV with a practical interior and modern features.",
        features: ["Petrol Engine", "Automatic Transmission", "Touchscreen", "Rear Camera", "Alloy Wheels", "Climate Control"]
    },
    {
        id: 8,
        name: "Skoda Slavia",
        image: "assets/slavia.jpg",
        type: "Sedan",
        fuel: "Petrol",
        price: 14.25,
        priceDisplay: "₹14.25 Lakh",
        year: 2022,
        km: 26000,
        color: "Red",
        description: "A modern sedan with a spacious cabin, comfortable ride and engaging petrol performance.",
        features: ["Petrol Engine", "Automatic Transmission", "Touchscreen", "Rear Camera", "Alloy Wheels", "Cruise Control"]
    },
    {
        id: 9,
        name: "Tata Nexon",
        image: "assets/tata-nexon.jpg",
        type: "SUV",
        fuel: "Petrol",
        price: 10.75,
        priceDisplay: "₹10.75 Lakh",
        year: 2023,
        km: 17000,
        color: "Blue",
        description: "A compact SUV offering practical dimensions, comfortable seating and everyday usability.",
        features: ["Petrol Engine", "Manual Transmission", "Touchscreen", "Rear Camera", "Alloy Wheels", "Connected Features"]
    },
    {
        id: 10,
        name: "Mahindra XUV700",
        image: "assets/xuv700.jpg",
        type: "SUV",
        fuel: "Diesel",
        price: 19.95,
        priceDisplay: "₹19.95 Lakh",
        year: 2022,
        km: 33000,
        color: "Black",
        description: "A feature-rich SUV with a spacious cabin, strong diesel performance and modern technology.",
        features: ["Diesel Engine", "Automatic Transmission", "Panoramic Sunroof", "Touchscreen", "Alloy Wheels", "ADAS Features"]
    }
];

function getCarById(id) {
    return cars.find(car => car.id === Number(id));
}

function formatKm(km) {
    return km.toLocaleString("en-IN") + " km";
}

function escapeHTML(value) {
    const div = document.createElement("div");
    div.textContent = value;
    return div.innerHTML;
}

function createCarCard(car) {
    return `
        <article class="car-card">
            <img src="${car.image}" alt="${escapeHTML(car.name)}" onerror="this.src='assets/bmwx5.jpg'">

            <div class="car-body">
                <span>${car.type}</span>
                <h3>${escapeHTML(car.name)}</h3>
                <strong>${car.priceDisplay}</strong>

                <div class="car-meta">
                    <span>${car.year}</span>
                    <span>${formatKm(car.km)}</span>
                    <span>${car.fuel}</span>
                </div>

                <div class="car-actions">
                    <a href="./cars-details.html?id=${car.id}" class="btn btn-secondary">
                        View Details
                    </a>

                    <a href="./contact.html?car=${car.id}" class="btn btn-primary">
                        Test Drive
                    </a>
                </div>
            </div>
        </article>
    `;
}

function renderFeaturedCars() {
    const container = document.getElementById("featuredCars");

    if (!container) return;

    container.innerHTML = cars
        .slice(0, 6)
        .map(createCarCard)
        .join("");
}

function setupHomeSearch() {
    const form = document.getElementById("homeSearchForm");

    if (!form) return;

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const keyword = document.getElementById("homeKeyword")?.value.trim() || "";
        const type = document.getElementById("homeType")?.value || "";
        const fuel = document.getElementById("homeFuel")?.value || "";

        const params = new URLSearchParams();

        if (keyword) params.set("search", keyword);
        if (type) params.set("type", type);
        if (fuel) params.set("fuel", fuel);

        window.location.href = "./cars.html?" + params.toString();
    });
}

function setupInventoryPage() {
    const grid = document.getElementById("inventoryGrid");

    if (!grid) return;

    const searchInput = document.getElementById("inventorySearch");
    const typeSelect = document.getElementById("inventoryType");
    const fuelSelect = document.getElementById("inventoryFuel");
    const budgetSelect = document.getElementById("inventoryBudget");
    const sortSelect = document.getElementById("inventorySort");
    const resultCount = document.getElementById("resultCount");
    const emptyState = document.getElementById("emptyState");
    const clearButton = document.getElementById("clearFilters");

    const params = new URLSearchParams(window.location.search);

    if (searchInput) searchInput.value = params.get("search") || "";
    if (typeSelect) typeSelect.value = params.get("type") || "";
    if (fuelSelect) fuelSelect.value = params.get("fuel") || "";

    function render() {
        let filtered = [...cars];

        const search = searchInput?.value.trim().toLowerCase() || "";
        const type = typeSelect?.value || "";
        const fuel = fuelSelect?.value || "";
        const budget = budgetSelect?.value || "";
        const sort = sortSelect?.value || "default";

        if (search) {
            filtered = filtered.filter(car =>
                car.name.toLowerCase().includes(search)
            );
        }

        if (type) {
            filtered = filtered.filter(car => car.type === type);
        }

        if (fuel) {
            filtered = filtered.filter(car => car.fuel === fuel);
        }

        if (budget) {
            filtered = filtered.filter(car => car.price <= Number(budget));
        }

        if (sort === "price-low") {
            filtered.sort((a, b) => a.price - b.price);
        }

        if (sort === "price-high") {
            filtered.sort((a, b) => b.price - a.price);
        }

        if (sort === "year-new") {
            filtered.sort((a, b) => b.year - a.year);
        }

        if (sort === "km-low") {
            filtered.sort((a, b) => a.km - b.km);
        }

        grid.innerHTML = filtered.map(createCarCard).join("");

        if (resultCount) {
            resultCount.textContent = `Showing ${filtered.length} of ${cars.length} cars`;
        }

        if (emptyState) {
            emptyState.style.display = filtered.length === 0 ? "block" : "none";
        }
    }

    searchInput?.addEventListener("input", render);
    typeSelect?.addEventListener("change", render);
    fuelSelect?.addEventListener("change", render);
    budgetSelect?.addEventListener("change", render);
    sortSelect?.addEventListener("change", render);

    clearButton?.addEventListener("click", function() {
        searchInput.value = "";
        typeSelect.value = "";
        fuelSelect.value = "";
        budgetSelect.value = "";
        sortSelect.value = "default";
        render();
    });

    render();
}

function renderCarDetails() {
    const container = document.getElementById("carDetails");

    if (!container) {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const car = cars.find(function(item) {
        return String(item.id) === String(id);
    });

    if (!car) {
        container.innerHTML = `
            <div class="empty-state" style="display:block;">
                <h3>Car not found</h3>

                <p>
                    Please select a car from our inventory to view its details.
                </p>

                <a href="cars.html" class="btn btn-primary">
                    Browse Cars
                </a>
            </div>
        `;

        return;
    }

    container.innerHTML = `
        <div class="details-layout">

            <div class="details-image">
                <img
                    src="${car.image}"
                    alt="${escapeHTML(car.name)}"
                    class="details-main-image"
                    onerror="this.src='assets/bmwx5.jpg'"
                >
            </div>

            <div class="details-content">

                <span class="section-label">
                    PRE-OWNED
                </span>

                <h1>
                    ${escapeHTML(car.name)}
                </h1>

                <div class="details-price">
                    ${car.priceDisplay}
                </div>

                <p class="details-description">
                    ${escapeHTML(car.description)}
                </p>

                <div class="spec-grid">

                    <div class="spec-item">
                        <span>Year</span>
                        <strong>${car.year}</strong>
                    </div>

                    <div class="spec-item">
                        <span>Odometer</span>
                        <strong>${formatKm(car.km)}</strong>
                    </div>

                    <div class="spec-item">
                        <span>Fuel</span>
                        <strong>${car.fuel}</strong>
                    </div>

                    <div class="spec-item">
                        <span>Body Type</span>
                        <strong>${car.type}</strong>
                    </div>

                    <div class="spec-item">
                        <span>Color</span>
                        <strong>${car.color}</strong>
                    </div>

                    <div class="spec-item">
                        <span>Price</span>
                        <strong>${car.priceDisplay}</strong>
                    </div>

                </div>

                <h3>Features</h3>

                <div class="car-meta">
                    ${car.features.map(function(feature) {
                        return `<span>✓ ${escapeHTML(feature)}</span>`;
                    }).join("")}
                </div>

                <div class="details-actions">

                    <a
                        href="contact.html?car=${car.id}"
                        class="btn btn-primary"
                    >
                        Book Test Drive
                    </a>

                    <a
                        href="cars.html"
                        class="btn btn-secondary"
                    >
                        Browse More Cars
                    </a>

                </div>

            </div>

        </div>
    `;
}

function populateCarSelect() {
    const select = document.getElementById("carSelect");

    if (!select) return;

    cars.forEach(car => {
        const option = document.createElement("option");

        option.value = car.id;
        option.textContent = `${car.name} — ${car.priceDisplay}`;

        select.appendChild(option);
    });

    const params = new URLSearchParams(window.location.search);
    const carId = params.get("car");

    if (carId && getCarById(carId)) {
        select.value = carId;
    }
}

function setupContactForm() {
    const form = document.getElementById("testDriveForm");

    if (!form) return;

    const message = document.getElementById("formMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name")?.value.trim();
        const selectedCar = document.getElementById("carSelect")?.value;

        if (!name || !selectedCar) return;

        const car = getCarById(selectedCar);

        if (!car) return;

        if (message) {
            message.style.display = "block";
            message.innerHTML = `
                Thanks, ${escapeHTML(name)}!
                Your test-drive request for
                <strong>${escapeHTML(car.name)}</strong>
                has been recorded in this demo.
            `;
        }

        form.reset();
    });
}

function setupMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", function() {
        nav.classList.toggle("show");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function() {
            nav.classList.remove("show");
        });
    });
}

const GNEWS_API_KEY = "YOUR_GNEWS_API_KEY"; // Replace with your GNews API key

async function loadNews() {
    const newsGrid = document.getElementById("newsGrid");
    const newsStatus = document.getElementById("newsStatus");

    if (!newsGrid || !newsStatus) return;

    if (!GNEWS_API_KEY || GNEWS_API_KEY === "YOUR_GNEWS_API_KEY") {
        newsStatus.textContent = "Add your GNews API key in script.js";

        newsGrid.innerHTML = `
            <div class="news-empty">
                Add your GNews API key in script.js to load live automotive news.
            </div>
        `;

        return;
    }

    newsStatus.textContent = "Loading latest automotive updates...";

    try {
        const params = new URLSearchParams({
            q: '"automotive" OR "car" OR "SUV" OR "electric vehicle"',
            lang: "en",
            country: "in",
            max: "6",
            sortby: "publishedAt",
            apikey: GNEWS_API_KEY
        });

        const response = await fetch(
            `https://gnews.io/api/v4/search?${params.toString()}`
        );

        if (!response.ok) {
            throw new Error(`GNews API error: ${response.status}`);
        }

        const data = await response.json();

        if (!data.articles || data.articles.length === 0) {
            throw new Error("No articles found");
        }

        newsGrid.innerHTML = data.articles
            .slice(0, 6)
            .map(article => {
                const title = escapeHTML(
                    article.title || "Automotive News"
                );

                const description = escapeHTML(
                    article.description ||
                    "Read the latest automotive update."
                );

                const source = escapeHTML(
                    article.source?.name ||
                    "News Source"
                );

                const date = article.publishedAt
                    ? new Date(article.publishedAt).toLocaleDateString(
                        "en-IN",
                        {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                        }
                    )
                    : "";

                const articleUrl =
                    typeof article.url === "string" &&
                    /^https?:\/\//i.test(article.url)
                        ? article.url
                        : "#";

                return `
                    <article class="news-card">
                        <span class="news-source">${source}</span>
                        <h3>${title}</h3>
                        <p>${description}</p>

                        <div class="news-footer">
                            <span>${date}</span>

                            <a
                                href="${articleUrl}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read Article →
                            </a>
                        </div>
                    </article>
                `;
            })
            .join("");

        newsStatus.textContent =
            "Fresh automotive stories from India and around the world";

    } catch (error) {
        console.error("News API Error:", error);

        newsStatus.textContent = "Unable to load live news";

        newsGrid.innerHTML = `
            <div class="news-empty">
                <h3>News unavailable right now</h3>
                <p>
                    Please check your API key, internet connection,
                    or GNews API limit.
                </p>
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    renderFeaturedCars();
    setupHomeSearch();
    setupInventoryPage();
    renderCarDetails();
    populateCarSelect();
    setupContactForm();
    setupMobileMenu();
    loadNews();
});
