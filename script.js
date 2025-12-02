// ===================================
// Villa Perfumes - Main JavaScript
// ===================================

// Villa Perfumes Product Data
const products = [
    // FOR LADIES
    {
        id: 1,
        name: "Armani - Si",
        category: "women",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
        description: "A modern chypre fragrance with blackcurrant nectar, freesia, and rose",
        topNotes: "Blackcurrant Nectar, Mandarin",
        middleNotes: "Freesia, May Rose",
        baseNotes: "Blonde Wood, Vanilla, Ambroxan",
        intensity: "moderate",
        longevity: "All Day",
        rating: 4.8,
        reviews: 245,
        badge: "Best Seller"
    },
    {
        id: 2,
        name: "YSL - Black Opium",
        category: "women",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
        description: "Intoxicating coffee and vanilla gourmand fragrance",
        topNotes: "Coffee, Pink Pepper, Orange Blossom",
        middleNotes: "Jasmine, Bitter Almond",
        baseNotes: "Vanilla, Patchouli, Cedarwood",
        intensity: "strong",
        longevity: "All Day+",
        rating: 4.9,
        reviews: 312,
        badge: "Best Seller"
    },
    {
        id: 3,
        name: "Lancome - La Vie Est Belle",
        category: "women",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
        description: "Sweet iris and praline gourmand scent",
        topNotes: "Blackcurrant, Pear",
        middleNotes: "Iris, Jasmine, Orange Blossom",
        baseNotes: "Praline, Vanilla, Patchouli",
        intensity: "moderate",
        longevity: "8-10 Hours",
        rating: 4.7,
        reviews: 198,
        badge: "Popular"
    },
    {
        id: 4,
        name: "Chanel Coco - Mademoiselle",
        category: "women",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400",
        description: "Elegant oriental fragrance with fresh and voluptuous notes",
        topNotes: "Orange, Bergamot, Grapefruit",
        middleNotes: "Rose, Jasmine, Lychee",
        baseNotes: "Patchouli, Vanilla, Vetiver",
        intensity: "moderate",
        longevity: "All Day",
        rating: 4.9,
        reviews: 289,
        badge: "Premium"
    },
    {
        id: 5,
        name: "Christian Dior - J'adore",
        category: "women",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59c5d?w=400",
        description: "Luminous floral bouquet of the most beautiful flowers",
        topNotes: "Magnolia, Peach, Bergamot",
        middleNotes: "Jasmine, Rose, Orchid",
        baseNotes: "Amaranth Wood, Blackberry Musk",
        intensity: "moderate",
        longevity: "8-10 Hours",
        rating: 4.8,
        reviews: 267
    },
    {
        id: 6,
        name: "Baccarat Rouge",
        category: "women",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
        description: "Luxurious amber floral fragrance",
        topNotes: "Saffron, Jasmine",
        middleNotes: "Amberwood, Amber Gris",
        baseNotes: "Cedar, Fir Resin",
        intensity: "strong",
        longevity: "All Day+",
        rating: 5.0,
        reviews: 178,
        badge: "Premium"
    },
    {
        id: 7,
        name: "Paco Rabanne - Lady Million",
        category: "women",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=400",
        description: "Bold and glamorous floral fragrance",
        topNotes: "Neroli, Raspberry, Orange",
        middleNotes: "Jasmine, Gardenia, Orange Blossom",
        baseNotes: "Honey, Patchouli, Amber",
        intensity: "strong",
        longevity: "All Day",
        rating: 4.6,
        reviews: 223,
        badge: "Popular"
    },
    {
        id: 8,
        name: "Gucci Rush",
        category: "women",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400",
        description: "Spicy oriental fragrance with floral undertones",
        topNotes: "Gardenia, Freesia, Peach",
        middleNotes: "Coriander, Jasmine, Rose",
        baseNotes: "Vanilla, Patchouli, Vetiver",
        intensity: "strong",
        longevity: "8-10 Hours",
        rating: 4.5,
        reviews: 145
    },
    {
        id: 9,
        name: "D&G - Light Blue",
        category: "women",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400",
        description: "Fresh fruity floral scent reminiscent of Sicilian summer",
        topNotes: "Sicilian Lemon, Apple, Bluebell",
        middleNotes: "Bamboo, Jasmine, White Rose",
        baseNotes: "Cedarwood, Amber, Musk",
        intensity: "light",
        longevity: "6-8 Hours",
        rating: 4.7,
        reviews: 201
    },
    {
        id: 10,
        name: "JPG - Scandal",
        category: "women",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
        description: "Intoxicating honey and caramel gourmand",
        topNotes: "Blood Orange, Mandarin",
        middleNotes: "Honey, Gardenia, Peach",
        baseNotes: "Caramel, Licorice Blossom, Patchouli",
        intensity: "strong",
        longevity: "All Day",
        rating: 4.6,
        reviews: 187
    },
    {
        id: 11,
        name: "Armani - My Way",
        category: "women",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59c5d?w=400",
        description: "Modern white floral fragrance",
        topNotes: "Orange Blossom, Bergamot",
        middleNotes: "Tuberose, Jasmine",
        baseNotes: "Vanilla, Cedarwood, White Musk",
        intensity: "moderate",
        longevity: "8-10 Hours",
        rating: 4.7,
        reviews: 156
    },
    {
        id: 12,
        name: "White Oud",
        category: "women",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
        description: "Elegant white oud with floral notes",
        topNotes: "Saffron, White Pepper",
        middleNotes: "White Rose, Jasmine",
        baseNotes: "White Oud, Amber, Musk",
        intensity: "strong",
        longevity: "All Day+",
        rating: 4.8,
        reviews: 134
    },

    // FOR MEN
    {
        id: 13,
        name: "Armani - Acqua Di Gio",
        category: "men",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400",
        description: "Fresh aquatic fragrance with marine notes",
        topNotes: "Lime, Lemon, Bergamot, Jasmine",
        middleNotes: "Sea Notes, Rosemary, Freesia",
        baseNotes: "Cedarwood, Musk, Amber",
        intensity: "light",
        longevity: "6-8 Hours",
        rating: 4.8,
        reviews: 298,
        badge: "Best Seller"
    },
    {
        id: 14,
        name: "Dior - Sauvage",
        category: "men",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400",
        description: "Fresh spicy fragrance with raw elegance",
        topNotes: "Calabrian Bergamot, Pepper",
        middleNotes: "Sichuan Pepper, Lavender, Star Anise",
        baseNotes: "Ambroxan, Cedarwood, Labdanum",
        intensity: "strong",
        longevity: "All Day+",
        rating: 4.9,
        reviews: 412,
        badge: "Best Seller"
    },
    {
        id: 15,
        name: "Chanel - Bleu De Chanel",
        category: "men",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1592853823203-e5c9b7da1acb?w=400",
        description: "Woody aromatic fragrance for the independent man",
        topNotes: "Lemon, Mint, Pink Pepper",
        middleNotes: "Ginger, Jasmine, Melon",
        baseNotes: "Cedarwood, Sandalwood, Amber",
        intensity: "moderate",
        longevity: "All Day",
        rating: 4.9,
        reviews: 367,
        badge: "Premium"
    },
    {
        id: 16,
        name: "Paco Rabanne - 1 Million",
        category: "men",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400",
        description: "Bold spicy leather fragrance",
        topNotes: "Grapefruit, Mint, Blood Mandarin",
        middleNotes: "Cinnamon, Rose, Spicy Notes",
        baseNotes: "Leather, Amber, Patchouli",
        intensity: "strong",
        longevity: "All Day",
        rating: 4.7,
        reviews: 289,
        badge: "Popular"
    },
    {
        id: 17,
        name: "Paco Rabanne - Invictus",
        category: "men",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400",
        description: "Fresh woody marine fragrance",
        topNotes: "Grapefruit, Marine Accord, Mandarin",
        middleNotes: "Bay Leaf, Jasmine, Violet",
        baseNotes: "Guaiac Wood, Patchouli, Ambergris",
        intensity: "moderate",
        longevity: "8-10 Hours",
        rating: 4.6,
        reviews: 234
    },
    {
        id: 18,
        name: "Hugo Boss - Hugo",
        category: "men",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1592853823203-e5c9b7da1acb?w=400",
        description: "Fresh aromatic green apple fragrance",
        topNotes: "Green Apple, Mint, Grapefruit",
        middleNotes: "Sage, Geranium, Carnation",
        baseNotes: "Cedarwood, Fir Balsam, Patchouli",
        intensity: "moderate",
        longevity: "6-8 Hours",
        rating: 4.5,
        reviews: 178
    },
    {
        id: 19,
        name: "Versace - Pour Homme",
        category: "men",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400",
        description: "Fresh Mediterranean fragrance",
        topNotes: "Lemon, Neroli, Bergamot",
        middleNotes: "Hyacinth, Clary Sage, Cedarwood",
        baseNotes: "Tonka Bean, Musk, Amber",
        intensity: "light",
        longevity: "6-8 Hours",
        rating: 4.6,
        reviews: 201
    },
    {
        id: 20,
        name: "Diesel - Only The Brave",
        category: "men",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400",
        description: "Leather woody fragrance with spicy notes",
        topNotes: "Lemon, Mandarin, Coriander",
        middleNotes: "Violet, Cedar, Labdanum",
        baseNotes: "Leather, Benzoin, Amber",
        intensity: "strong",
        longevity: "All Day",
        rating: 4.5,
        reviews: 167
    },
    {
        id: 21,
        name: "Tom Ford - Noir",
        category: "men",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1592853823203-e5c9b7da1acb?w=400",
        description: "Oriental spicy fragrance with woody notes",
        topNotes: "Bergamot, Verbena, Caraway",
        middleNotes: "Violet, Black Pepper, Nutmeg",
        baseNotes: "Oud Wood, Amber, Vanilla",
        intensity: "strong",
        longevity: "All Day+",
        rating: 4.9,
        reviews: 198,
        badge: "Premium"
    },
    {
        id: 22,
        name: "Tom Ford - Oud Wood",
        category: "men",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400",
        description: "Exotic rare oud wood fragrance",
        topNotes: "Rosewood, Cardamom, Chinese Pepper",
        middleNotes: "Oud Wood, Sandalwood, Vetiver",
        baseNotes: "Tonka Bean, Vanilla, Amber",
        intensity: "strong",
        longevity: "All Day+",
        rating: 5.0,
        reviews: 156,
        badge: "Premium"
    },
    {
        id: 23,
        name: "Tom Ford - Tobacco Vanille",
        category: "men",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400",
        description: "Opulent tobacco and vanilla fragrance",
        topNotes: "Tobacco Leaf, Spicy Notes",
        middleNotes: "Vanilla, Cacao, Tonka Bean",
        baseNotes: "Dried Fruits, Woods",
        intensity: "strong",
        longevity: "All Day+",
        rating: 4.9,
        reviews: 143,
        badge: "Premium"
    },
    {
        id: 24,
        name: "YSL - Kouros Silver",
        category: "men",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1592853823203-e5c9b7da1acb?w=400",
        description: "Fresh energetic aromatic fougère",
        topNotes: "Star Anise, Aldehydes, Bergamot",
        middleNotes: "Clary Sage, Lavender, Violet",
        baseNotes: "Vetiver, Oakmoss, Patchouli",
        intensity: "moderate",
        longevity: "8-10 Hours",
        rating: 4.4,
        reviews: 121
    },
    {
        id: 25,
        name: "Boss - Bravado",
        category: "men",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400",
        description: "Bold confident aromatic fragrance",
        topNotes: "Cardamom, Bergamot, Lemon",
        middleNotes: "Lavender, Geranium",
        baseNotes: "Cedarwood, Vetiver, Patchouli",
        intensity: "moderate",
        longevity: "6-8 Hours",
        rating: 4.4,
        reviews: 98
    },
    {
        id: 26,
        name: "Gucci - Guilty By Gucci",
        category: "men",
        price: 200,
        size: "60ml",
        image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400",
        description: "Aromatic fougère with oriental twist",
        topNotes: "Lemon, Lavender",
        middleNotes: "Orange Blossom",
        baseNotes: "Cedarwood, Patchouli",
        intensity: "moderate",
        longevity: "All Day",
        rating: 4.6,
        reviews: 145
    },

    // ROLL-ONS & LOTIONS
    {
        id: 27,
        name: "Armani - Si (Roll-On)",
        category: "rollon",
        price: 50,
        size: "15ml",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400",
        description: "Portable roll-on version of the iconic Si fragrance",
        topNotes: "Blackcurrant Nectar",
        middleNotes: "Freesia, Rose",
        baseNotes: "Vanilla, Ambroxan",
        intensity: "moderate",
        longevity: "4-6 Hours",
        rating: 4.6,
        reviews: 87,
        badge: "New"
    },
    {
        id: 28,
        name: "Baccarat - Rouge (Roll-On)",
        category: "rollon",
        price: 50,
        size: "15ml",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400",
        description: "Luxurious portable version",
        topNotes: "Saffron, Jasmine",
        middleNotes: "Amberwood",
        baseNotes: "Cedar, Fir Resin",
        intensity: "strong",
        longevity: "6-8 Hours",
        rating: 4.8,
        reviews: 65,
        badge: "New"
    },
    {
        id: 29,
        name: "Diesel - Brave (Roll-On)",
        category: "rollon",
        price: 50,
        size: "15ml",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400",
        description: "Portable woody fragrance for men",
        topNotes: "Citrus, Spices",
        middleNotes: "Leather, Woods",
        baseNotes: "Amber, Musk",
        intensity: "moderate",
        longevity: "4-6 Hours",
        rating: 4.3,
        reviews: 54,
        badge: "New"
    },
    {
        id: 30,
        name: "Dior - Sauvage (Roll-On)",
        category: "rollon",
        price: 50,
        size: "15ml",
        image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400",
        description: "Portable version of the iconic Sauvage",
        topNotes: "Bergamot, Pepper",
        middleNotes: "Lavender, Spices",
        baseNotes: "Ambroxan, Cedar",
        intensity: "strong",
        longevity: "5-7 Hours",
        rating: 4.7,
        reviews: 92,
        badge: "New"
    },
    {
        id: 31,
        name: "Paco Rabanne - 1 Million (Roll-On)",
        category: "rollon",
        price: 50,
        size: "15ml",
        image: "https://images.unsplash.com/photo-1592853823203-e5c9b7da1acb?w=400",
        description: "Gold on-the-go fragrance",
        topNotes: "Grapefruit, Mint",
        middleNotes: "Cinnamon, Rose",
        baseNotes: "Leather, Amber",
        intensity: "strong",
        longevity: "4-6 Hours",
        rating: 4.5,
        reviews: 76
    },
    {
        id: 32,
        name: "Azzaro - Wanted (Roll-On)",
        category: "rollon",
        price: 50,
        size: "15ml",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400",
        description: "Fresh spicy portable fragrance",
        topNotes: "Lemon, Ginger, Mint",
        middleNotes: "Apple, Juniper, Cardamom",
        baseNotes: "Tonka Bean, Amberwood",
        intensity: "moderate",
        longevity: "4-6 Hours",
        rating: 4.4,
        reviews: 68,
        badge: "New"
    },

    // GIFT SETS
    {
        id: 33,
        name: "Ladies Luxury Collection",
        category: "giftsets",
        price: 600,
        size: "3x30ml",
        image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400",
        description: "Premium gift set featuring Si, Black Opium, and J'adore",
        topNotes: "Varies",
        middleNotes: "Varies",
        baseNotes: "Varies",
        intensity: "varies",
        longevity: "Varies",
        rating: 4.9,
        reviews: 112,
        badge: "Gift Set"
    },
    {
        id: 34,
        name: "Men's Signature Collection",
        category: "giftsets",
        price: 600,
        size: "3x30ml",
        image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400",
        description: "Premium gift set featuring Sauvage, Acqua Di Gio, and 1 Million",
        topNotes: "Varies",
        middleNotes: "Varies",
        baseNotes: "Varies",
        intensity: "varies",
        longevity: "Varies",
        rating: 4.8,
        reviews: 98,
        badge: "Gift Set"
    },
    {
        id: 35,
        name: "Roll-On Discovery Set",
        category: "giftsets",
        price: 300,
        size: "6x15ml",
        image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400",
        description: "Sample collection of 6 popular fragrances in roll-on format",
        topNotes: "Varies",
        middleNotes: "Varies",
        baseNotes: "Varies",
        intensity: "varies",
        longevity: "Varies",
        rating: 4.7,
        reviews: 156,
        badge: "Gift Set"
    }
];

// ===== MOBILE NAVIGATION =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// ===== NEWSLETTER FORM =====
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing! We'll send updates to ${email}`);
        e.target.reset();
    });
}

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // In production, send data to server
        console.log('Form submitted:', formData);

        // Show success message
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';

        // Reset form
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            formSuccess.style.display = 'none';
        }, 5000);
    });
}

// ===== LOAD PRODUCTS ON HOME PAGE =====
const bestSellersGrid = document.getElementById('bestSellers');
if (bestSellersGrid) {
    const bestSellers = products.filter(p => p.badge === 'Best Seller').slice(0, 4);
    if (bestSellers.length === 0) {
        // If no best sellers, show first 4 products
        renderProducts(products.slice(0, 4), bestSellersGrid);
    } else {
        renderProducts(bestSellers, bestSellersGrid);
    }
}

// ===== SHOP PAGE FUNCTIONALITY =====
const productsGrid = document.getElementById('productsGrid');
const sortBy = document.getElementById('sortBy');
const clearFilters = document.getElementById('clearFilters');
const productCount = document.getElementById('productCount');
const noResults = document.getElementById('noResults');
const mobileFilterBtn = document.getElementById('mobileFilterBtn');
const shopSidebar = document.querySelector('.shop-sidebar');

let filteredProducts = [...products];

// Get URL parameters for initial filtering
if (productsGrid) {
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');

    if (categoryParam) {
        // Check the category checkbox
        const categoryCheckbox = document.querySelector(`input[name="category"][value="${categoryParam}"]`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = true;
        }
    }

    // Initial load
    applyFilters();

    // Filter change listeners
    document.querySelectorAll('.filter-checkbox input').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });

    // Sort change listener
    if (sortBy) {
        sortBy.addEventListener('change', applyFilters);
    }

    // Clear filters
    if (clearFilters) {
        clearFilters.addEventListener('click', () => {
            document.querySelectorAll('.filter-checkbox input').forEach(checkbox => {
                checkbox.checked = false;
            });
            if (sortBy) sortBy.value = 'popularity';
            applyFilters();
        });
    }

    // Mobile filter toggle
    if (mobileFilterBtn && shopSidebar) {
        mobileFilterBtn.addEventListener('click', () => {
            shopSidebar.classList.toggle('active');
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', (e) => {
            if (!shopSidebar.contains(e.target) && !mobileFilterBtn.contains(e.target)) {
                shopSidebar.classList.remove('active');
            }
        });
    }
}

function applyFilters() {
    // Get selected filters
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(cb => cb.value);
    const selectedSizes = Array.from(document.querySelectorAll('input[name="size"]:checked')).map(cb => cb.value);
    const selectedIntensities = Array.from(document.querySelectorAll('input[name="intensity"]:checked')).map(cb => cb.value);

    // Filter products
    filteredProducts = products.filter(product => {
        // Category filter
        if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
            return false;
        }

        // Size filter
        if (selectedSizes.length > 0 && !selectedSizes.includes(product.size.toLowerCase())) {
            return false;
        }

        // Intensity filter
        if (selectedIntensities.length > 0 && !selectedIntensities.includes(product.intensity)) {
            return false;
        }

        return true;
    });

    // Sort products
    if (sortBy) {
        const sortValue = sortBy.value;
        switch (sortValue) {
            case 'price-low':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'newest':
                filteredProducts.sort((a, b) => b.id - a.id);
                break;
            default: // popularity
                filteredProducts.sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
        }
    }

    // Update product count
    if (productCount) {
        productCount.textContent = `Showing ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''}`;
    }

    // Render products
    if (filteredProducts.length === 0) {
        productsGrid.style.display = 'none';
        noResults.style.display = 'block';
    } else {
        productsGrid.style.display = 'grid';
        noResults.style.display = 'none';
        renderProducts(filteredProducts, productsGrid);
    }
}

function renderProducts(productList, container) {
    container.innerHTML = productList.map(product => `
        <div class="product-card">
            <div class="product-image" style="background-image: url('${product.image}')">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-content">
                <div class="product-category">${formatCategory(product.category)}</div>
                <h3 class="product-name">${product.name}</h3>
                <p style="color: #666; font-size: 0.9rem; margin: 0.5rem 0;">${product.description}</p>
                <div class="product-price-row">
                    <span class="product-price">R${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-bag"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function formatCategory(category) {
    const categoryMap = {
        'women': "Women's Fragrance",
        'men': "Men's Fragrance",
        'unisex': 'Unisex',
        'rollon': 'Roll-On',
        'giftsets': 'Gift Set'
    };
    return categoryMap[category] || category;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            size: product.size,
            image: product.image,
            quantity: 1
        });
    }
}

// ===== PRODUCT DETAIL PAGE =====
const productTitle = document.getElementById('productTitle');
const productPrice = document.getElementById('productPrice');
const productDescription = document.getElementById('productDescription');

if (productTitle) {
    // Load product from URL parameter or use first product
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    const product = products.find(p => p.id === productId) || products[0];

    // Update page content
    document.getElementById('productBreadcrumb').textContent = product.name;
    productTitle.textContent = product.name;
    productPrice.textContent = `R${product.price.toFixed(2)}`;
    productDescription.textContent = product.description;
    document.getElementById('productIntensity').textContent = product.intensity.charAt(0).toUpperCase() + product.intensity.slice(1);
    document.getElementById('productLongevity').textContent = product.longevity;
    document.getElementById('topNotes').textContent = product.topNotes;
    document.getElementById('middleNotes').textContent = product.middleNotes;
    document.getElementById('baseNotes').textContent = product.baseNotes;
    document.getElementById('productCategory').textContent = formatCategory(product.category);

    // Thumbnail click
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            document.querySelector('.thumbnail.active').classList.remove('active');
            this.classList.add('active');
            document.getElementById('mainImage').src = this.src.replace('w=200', 'w=800');
        });
    });

    // Size selection
    let selectedSize = '60ml';
    let selectedPrice = product.price;

    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelector('.size-btn.active').classList.remove('active');
            this.classList.add('active');
            selectedSize = this.dataset.size;
            selectedPrice = parseInt(this.dataset.price);
            productPrice.textContent = `R${selectedPrice.toFixed(2)}`;
        });
    });

    // Quantity controls
    const quantityInput = document.getElementById('quantity');
    document.getElementById('qtyMinus').addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    document.getElementById('qtyPlus').addEventListener('click', () => {
        if (quantityInput.value < 10) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        }
    });

    // Add to cart
    document.getElementById('addToCartBtn').addEventListener('click', () => {
        cart.addItem({
            id: product.id,
            name: product.name,
            price: selectedPrice,
            size: selectedSize,
            image: product.image,
            quantity: parseInt(quantityInput.value)
        });
    });

    // Buy now
    document.getElementById('buyNowBtn').addEventListener('click', () => {
        cart.addItem({
            id: product.id,
            name: product.name,
            price: selectedPrice,
            size: selectedSize,
            image: product.image,
            quantity: parseInt(quantityInput.value)
        });
        cart.openCart();
    });

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active from all tabs
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

            // Add active to clicked tab
            this.classList.add('active');
            document.getElementById(this.dataset.tab).classList.add('active');
        });
    });

    // Load related products
    const relatedProductsGrid = document.getElementById('relatedProducts');
    if (relatedProductsGrid) {
        const relatedProducts = products
            .filter(p => p.id !== product.id && p.category === product.category)
            .slice(0, 4);
        renderProducts(relatedProducts, relatedProductsGrid);
    }
}

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#!') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===== SEARCH FUNCTIONALITY (PLACEHOLDER) =====
const searchBtn = document.getElementById('searchBtn');
if (searchBtn) {
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const searchTerm = prompt('Search for products:');
        if (searchTerm) {
            window.location.href = `shop.html?search=${encodeURIComponent(searchTerm)}`;
        }
    });
}

console.log('Villa Perfumes - Website loaded successfully!');
