// script.js

// --- Global Product Data ---
const INITIAL_PRODUCTS = [
    {
        id: "p1",
        name: "CD - DVD",
        description: "A complete stack of meditation and spiritual audio CDs and DVDs.",
        fullDesc: "Dive deep into spiritual awakening with our comprehensive collection of guided meditations, discourses, and calming chants. This collection has been thoughtfully curated for individuals looking to cultivate peace in their daily routine.",
        price: "$29.99",
        stock: 32,
        image: "https://awgpstore.com/static/data/inventory/items/DV151/Amritwani-Vangmay.jpg"
    },
    {
        id: "p2",
        name: "HEALTH PRODUCTS",
        description: "Organic health supplements and herbal medicines.",
        fullDesc: "Boost your immunity and holistic health with our range of 100% organic supplements. Sourced directly from nature, these herbal medicines are tested rigorously for purity and potency.",
        price: "$45.00",
        stock: 69,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        id: "p3",
        name: "NOTEBOOKS",
        description: "Aesthetically pleasing journals and spiral notebooks.",
        fullDesc: "Perfect for journaling, planning, and capturing your spiritual thoughts. Each notebook features premium thick paper, elegant spiral binding, and a smooth cover for endless inspiration.",
        price: "$15.50",
        stock: 7,
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        id: "p4",
        name: "STICKERS",
        description: "Colorful positive affirmation stickers.",
        fullDesc: "Spread positivity wherever you go. Our high-quality vinyl stickers are waterproof and durable. Decorate your laptop, water bottle, or journal with these uplifting affirmations.",
        price: "$8.99",
        stock: 50,
        image: "https://awgpstore.com/static/data/inventory/items/DS258/Sadvakya-Set-608x608-optimizedhindi_1.jpg"
    },
    {
        id: "p5",
        name: "TABLE DECORATIVES",
        description: "Inspiring spiritual and philosophical books.",
        fullDesc: "Expand your awareness and consciousness with our extensive library of literature. Featuring classical philosophical texts, modern teachings, and transformative guides.",
        price: "$22.00",
        stock: 18,
        image: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        id: "p6",
        name: "GIFT ITEMS",
        description: "Aromatic incense sticks and peaceful candles.",
        fullDesc: "Set the mood for your meditation or relaxation period. Our handcrafted incense and ethically sourced candles provide clean burns and subtle, grounding aromas.",
        price: "$18.50",
        stock: 38,
        image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        id: "p7",
        name: "ELECTRONIC PRODUCTS",
        description: "Unique spiritual decor for your living space.",
        fullDesc: "Transform your house into a sanctuary. Our artisanal decor items are crafted to bring serenity and aesthetic balance to any room.",
        price: "$55.00",
        stock: 8,
        image: "https://gladkart.com/wp-content/uploads/2025/06/Mantra-Box-608X608_2.jpg"
    },
    {
        id: "p8",
        name: "VANGMAY",
        description: "Comfortable and ethical clothing.",
        fullDesc: "Wear your values. Our apparel line is made utilizing sustainable farming practices, ensuring soft, breathable, and highly comfortable clothing for every day wear.",
        price: "$35.00",
        stock: 79,
        image: "https://i.ytimg.com/vi/pG0vXw1rrmw/hq720.jpg?sqp=-…BogEyh_MA8=&rs=AOn4CLB5_yUTtGzLZ_UCjtN5jP_RIm5lyA"
    },
    {
        id: "p9",
        name: "MAGAZINES",
        description: "Premium eco-friendly yoga mat.",
        fullDesc: "Stay balanced and grounded with our non-slip organic yoga mat. Perfect for your daily asanas and stretches.",
        price: "$25.00",
        stock: 10,
        image: "https://files.awgp.org/public_data/literature/node/68371/1.gif"
    },
    {
        id: "p10",
        name: "BOOKS",
        description: "Comfortable zafu for meditation.",
        fullDesc: "Deepen your meditation session with our ergonomic cushions that support your posture naturally.",
        price: "$30.00",
        stock: 1262,
        image: "https://i.ytimg.com/vi/4HgiwE5s794/hq720.jpg?sqp=-…RUAAIhCGAE=&rs=AOn4CLAif_n28duF38RogMuMwr-dndsOZw"
    },
    {
        id: "p11",
        name: "PHOTO - FRAMES",
        description: "Set of naturally sourced healing stones.",
        fullDesc: "Harness the Earth's natural energies. Each kit contains amethyst, rose quartz, and clear quartz ethically sourced.",
        price: "$40.00",
        stock: 13,
        image: "https://www.awgpstore.com/static/data/inventory/items/LM006/devsthapnaframemedium_1.jpg"
    },
    {
        id: "p12",
        name: "PUJA ACCESSORIES",
        description: "Herbal wellness tea for relaxation.",
        fullDesc: "A calming mix of tulsi, ashwagandha, and chamomile to soothe the mind and body after a busy day.",
        price: "$12.99",
        stock: 53,
        image: "https://artofpuja.com/cdn/shop/articles/AOP_Blog-441232.jpg?v=1773322393"
    },
    {
        id: "p13",
        name: "DAILY USE",
        description: "Handcrafted Tibetan singing bowl.",
        fullDesc: "Produce resonant, soothing tones for sound therapy and meditation practice. Hand-hammered with traditional techniques.",
        price: "$65.00",
        stock: 4,
        image: "https://www.awgpstore.com/static/data/inventory/items/AB010/250-gm-honey.jpg"
    },
    {
        id: "p14",
        name: "COMBO SET",
        description: "Wooden aromatherapy diffuser.",
        fullDesc: "Refresh your environment and elevate your space with a continuous cool mist infused with your favorite essential oils.",
        price: "$28.50",
        stock: 28,
        image: "https://images.unsplash.com/photo-1629815043834-ff0ed67710c5?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        id: "p15",
        name: "HANDLOOM",
        description: "Hardcover edition with profound insights.",
        fullDesc: "A beautifully bound, easy-to-read translation of the classic scripture. Essential reading for spiritual seekers everywhere.",
        price: "$19.99",
        stock: 22,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
        id: "p16",
        name: "POSTERS",
        description: "Natural glowing pink salt crystal.",
        fullDesc: "Purify your air naturally and add a warm, calming ambient glow to any meditation room or bedroom.",
        price: "$34.00",
        stock: 6,
        image: "https://pbs.twimg.com/media/G_Rxta0aMAAXEc0.jpg"
    }
];

localStorage.removeItem("cart");

let PRODUCTS = JSON.parse(localStorage.getItem('awgp_products'));
if (!PRODUCTS || PRODUCTS.length < 16) {
    PRODUCTS = [...INITIAL_PRODUCTS];
    localStorage.setItem('awgp_products', JSON.stringify(PRODUCTS));
}

document.addEventListener('DOMContentLoaded', () => {

    // --- State Management ---
    const users = JSON.parse(localStorage.getItem('awgp_users')) || [];
    const session = JSON.parse(localStorage.getItem('awgp_session')) || null;
    let currentUser = null;

    if (session) {
        currentUser = users.find(u => u.email === session.email);
    }

    const cartKey = currentUser ? `awgp_cart_${currentUser.email}` : 'awgp_cart_guest';

    // --- 1. Dynamic Navbar & Profile Rendering ---
    const authNavItem = document.getElementById('auth-nav-item');
    if (authNavItem) {
        if (currentUser) {
            authNavItem.innerHTML = `
                <div class="dropdown">
                    <div class="dropdown-title" style="color: white; padding: 0.5rem; font-weight: 600;">
                        ${currentUser.name.split(' ')[0]} &#9662;
                    </div>
                    <div class="dropdown-content">
                        <a href="profile.html">My Profile</a>
                        <span class="logout-btn" id="nav-logout-btn">Logout</span>
                    </div>
                </div>
            `;
            const navLogoutBtn = document.getElementById('nav-logout-btn');
            if (navLogoutBtn) {
                navLogoutBtn.addEventListener('click', () => {
                    localStorage.removeItem('awgp_session');
                    window.location.href = 'login.html';
                });
            }
        } else {
            authNavItem.innerHTML = `<a href="login.html" class="nav-icon" title="Sign In">&#128100;</a>`;
        }
    }

    // --- Floating Login Button Logic ---
    const floatLoginBtn = document.getElementById('floating-login-btn');
    if (floatLoginBtn) {
        if (!currentUser) {
            floatLoginBtn.style.display = 'inline-block';
        } else {
            floatLoginBtn.style.display = 'none';
        }
    }

    // --- Engagement Section Logic ---
    const unauthPerks = document.getElementById('unauth-perks');
    const authPerks = document.getElementById('auth-perks');
    if (unauthPerks && authPerks) {
        if (currentUser) {
            unauthPerks.style.display = 'none';
            authPerks.style.display = 'block';
        } else {
            unauthPerks.style.display = 'block';
            authPerks.style.display = 'none';
        }
    }

    // --- Back To Top Logic ---
    const backToTopBtn = document.createElement('div');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.textContent = 'Back To Top';
    
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        document.body.insertBefore(backToTopBtn, footerElement);
    } else {
        document.body.appendChild(backToTopBtn);
    }

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- 2. Initialize Cart Count ---
    if (!localStorage.getItem('cart_reset_v5')) {
        localStorage.removeItem('awgp_cart_guest');
        localStorage.removeItem('cart');
        const users = JSON.parse(localStorage.getItem('awgp_users')) || [];
        users.forEach(u => localStorage.removeItem(`awgp_cart_${u.email}`));
        localStorage.setItem('cart_reset_v5', 'true');
    }
    const cartCountElements = document.querySelectorAll('#cart-count');
    let cart = JSON.parse(localStorage.getItem(cartKey)) || [];
    
    function updateCartCount() {
        cart = cart.filter(item => item.quantity > 0);
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElements.forEach(el => {
            el.textContent = totalItems === 0 ? "0" : totalItems;
        });
    }
    updateCartCount();

    function showLoginPopup() {
        let popup = document.getElementById('login-popup-modal');
        if (!popup) {
            popup = document.createElement('div');
            popup.id = 'login-popup-modal';
            popup.style.position = 'fixed';
            popup.style.top = '0';
            popup.style.left = '0';
            popup.style.width = '100%';
            popup.style.height = '100%';
            popup.style.backgroundColor = 'rgba(0,0,0,0.5)';
            popup.style.display = 'flex';
            popup.style.alignItems = 'center';
            popup.style.justifyContent = 'center';
            popup.style.zIndex = '9999';

            const content = document.createElement('div');
            content.style.backgroundColor = 'var(--card-bg, white)';
            content.style.padding = '2rem';
            content.style.borderRadius = 'var(--border-radius-card, 16px)';
            content.style.textAlign = 'center';
            content.style.boxShadow = '0 6px 15px rgba(0,0,0,0.1)';

            const title = document.createElement('h2');
            title.textContent = 'Login Required';
            title.style.marginBottom = '1.5rem';
            title.style.color = 'var(--nav-color, #0a0f6a)';

            const msg = document.createElement('p');
            msg.textContent = 'You must be logged in to add items to your cart.';
            msg.style.marginBottom = '2rem';
            msg.style.color = 'var(--secondary-text, #555)';

            const btnContainer = document.createElement('div');
            btnContainer.style.display = 'flex';
            btnContainer.style.gap = '1rem';
            btnContainer.style.justifyContent = 'center';

            const loginBtn = document.createElement('button');
            loginBtn.textContent = 'Login';
            loginBtn.className = 'btn btn-cart';
            loginBtn.style.padding = '0.8rem 2rem';
            loginBtn.onclick = () => window.location.href = 'login.html';

            const signupBtn = document.createElement('button');
            signupBtn.textContent = 'Signup';
            signupBtn.className = 'btn btn-buy';
            signupBtn.style.padding = '0.8rem 2rem';
            signupBtn.onclick = () => window.location.href = 'signup.html';

            const closeBtn = document.createElement('button');
            closeBtn.textContent = 'Close';
            closeBtn.style.padding = '0.8rem 2rem';
            closeBtn.style.border = '1px solid #ccc';
            closeBtn.style.backgroundColor = 'transparent';
            closeBtn.style.borderRadius = '8px';
            closeBtn.style.cursor = 'pointer';
            closeBtn.onclick = () => popup.style.display = 'none';

            btnContainer.appendChild(loginBtn);
            btnContainer.appendChild(signupBtn);
            btnContainer.appendChild(closeBtn);

            content.appendChild(title);
            content.appendChild(msg);
            content.appendChild(btnContainer);
            popup.appendChild(content);

            document.body.appendChild(popup);
        }
        popup.style.display = 'flex';
    }

    function addToCart(productName) {
        if (!currentUser) {
            showLoginPopup();
            return 0;
        }
        let existingItem = cart.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            const product = PRODUCTS.find(p => p.name === productName);
            if (product) {
                existingItem = { 
                    id: product.id, 
                    name: product.name, 
                    price: product.price, 
                    image: product.image, 
                    quantity: 1 
                };
                cart.push(existingItem);
            }
        }
        localStorage.setItem(cartKey, JSON.stringify(cart));
        updateCartCount();
        return existingItem ? existingItem.quantity : 0;
    }

    function removeFromCart(productName) {
        const existingItem = cart.find(item => item.name === productName);
        if (existingItem && existingItem.quantity > 0) {
            existingItem.quantity -= 1;
            localStorage.setItem(cartKey, JSON.stringify(cart));
            updateCartCount();
            return existingItem.quantity;
        }
        return 0;
    }

    function updateQtyUI(name, qty) {
        const valEl = document.getElementById('qty-val-' + name.replace(/\s+/g, '-'));
        if (valEl) valEl.textContent = qty;
        
        const interactiveBoxes = document.querySelectorAll(`[data-parent-product="${name}"]`);
        interactiveBoxes.forEach(box => {
            if(qty > 0) {
                box.classList.add('has-qty');
            } else {
                box.classList.remove('has-qty');
            }
        });
    }

    // --- 3. Dynamic Products Render (index.html) ---
    const productGrid = document.getElementById('product-grid');
    if (productGrid) {
        productGrid.innerHTML = '';
        INITIAL_PRODUCTS.forEach(p => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.dataset.category = p.name;
            card.innerHTML = `
                <img src="${p.image}" alt="${p.name}" class="product-image clickable-product" data-category="${p.name}">
                <h3 class="product-category clickable-product" data-category="${p.name}">${p.name}</h3>
                <p class="product-count">${p.stock} Products available</p>
                <div class="card-buttons">
                    <button class="btn btn-cart clickable-product" data-category="${p.name}" style="width: 100%;">See More</button>
                </div>
            `;
            productGrid.appendChild(card);
        });
    }

    // --- 3.5 Category Dynamic Generation Render ---
    const categoryGrid = document.getElementById('category-product-grid');
    const paramType = new URLSearchParams(window.location.search).get('type');
    
    if (categoryGrid && paramType) {
        document.getElementById('category-title').textContent = paramType;
        
        categoryGrid.innerHTML = '';
        for (let i = 1; i <= 12; i++) {
            const genericName = `${paramType} Item ${i}`;
            const genericId = `c-${paramType.replace(/\s+/g, '-')}-${i}`;
            
            let productObj = PRODUCTS.find(p => p.id === genericId);
            if (!productObj) {
                productObj = {
                    id: genericId,
                    name: genericName,
                    price: "₹" + (150 + (i * 20)),
                    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&h=300",
                    stock: 50,
                    description: `Premium grade product for ${paramType} category.`,
                    fullDesc: `This is a highly tailored product categorized under ${paramType}. Fast delivery and assured quality support exactly matching your request.`
                };
                PRODUCTS.push(productObj);
                localStorage.setItem('awgp_products', JSON.stringify(PRODUCTS));
            }

            const itemInCart = cart.find(item => item.name === genericName);
            const qty = itemInCart ? itemInCart.quantity : 0;
            const hasQtyClass = qty > 0 ? "has-qty" : "";
            
            const card = document.createElement('div');
            card.className = 'product-card';
            card.dataset.id = genericId;
            card.innerHTML = `
                <img src="${productObj.image}" alt="${genericName}" class="product-image clickable-product" data-id="${genericId}" data-name="${genericName}">
                <h3 class="product-category clickable-product" data-id="${genericId}" data-name="${genericName}">${genericName}</h3>
                <p class="detail-price" style="font-size: 1.2rem; color: var(--btn-buy); margin-top:0.5rem; margin-bottom: 1rem;">${productObj.price}</p>
                <div class="card-buttons" style="gap: 10px; flex-direction: row; display: flex;">
                    <button class="btn btn-buy clickable-product" data-id="${genericId}" data-name="${genericName}" style="flex: 1;">Buy Now</button>
                    <div class="cart-interactive-box ${hasQtyClass}" data-parent-product="${genericName}" style="flex: 1;">
                        <button class="btn btn-cart add-to-cart-action action-btn" data-name="${genericName}" style="width: 100%;">Add to Cart</button>
                        <div class="qty-controls">
                            <button class="qty-btn decrement" data-name="${genericName}">-</button>
                            <span class="qty-val" data-name="${genericName}" id="qty-val-${genericName.replace(/\s+/g, '-')}">${qty}</span>
                            <button class="qty-btn increment" data-name="${genericName}">+</button>
                        </div>
                    </div>
                </div>
            `;
            categoryGrid.appendChild(card);
        }
    }

    // --- 4. Product Detail Render & Related Scroll (product.html) ---
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    if (window.location.pathname.includes('product.html') && productId) {
        const productData = PRODUCTS.find(p => p.id === productId);
        if (productData) {
            const imgEl = document.getElementById('detail-img');
            const titleEl = document.getElementById('detail-title');
            const priceEl = document.getElementById('detail-price');
            const descEl = document.getElementById('detail-desc');
            const fulldescEl = document.getElementById('detail-ul-desc');
            
            if(imgEl) imgEl.src = productData.image;
            if(titleEl) titleEl.textContent = productData.name;
            if(priceEl) priceEl.textContent = productData.price;
            if(descEl) descEl.textContent = productData.description;
            if(fulldescEl) fulldescEl.textContent = productData.fullDesc;

            const detailAddBtn = document.getElementById('detail-add-cart');
            const detailBuyBtn = document.getElementById('detail-buy-now');
            
            if(detailAddBtn) detailAddBtn.dataset.name = productData.name;
            if(detailBuyBtn) detailBuyBtn.dataset.id = productData.id;

            const relatedStrip = document.getElementById('related-products-strip');
            if (relatedStrip) {
                relatedStrip.innerHTML = '';
                PRODUCTS.forEach(p => {
                    if (p.id !== productId) {
                        const imgNode = document.createElement('img');
                        imgNode.src = p.image;
                        imgNode.className = 'related-strip-img clickable-product';
                        imgNode.dataset.id = p.id;
                        relatedStrip.appendChild(imgNode);
                    }
                });
            }
        } else {
            document.body.innerHTML = '<h2>Product not found</h2>';
        }
    }

    // --- 5. Global Event Delegation (Clicks) ---
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-cart')) {
            e.preventDefault();
            e.target.classList.add('clicked');
            setTimeout(() => e.target.classList.remove('clicked'), 150);
            const name = e.target.getAttribute('data-name');
            if(name) {
                // If the old raw button logic still fires, convert it correctly
                if (e.target.classList.contains('increment') || !e.target.closest('.cart-interactive-box')) {
                    if (!currentUser) {
                        showLoginPopup();
                        return;
                    }
                    const newQty = addToCart(name);
                    updateQtyUI(name, newQty);
                }
            }
        }

        if (e.target.classList.contains('add-to-cart-action') || e.target.classList.contains('increment')) {
            e.preventDefault();
            const name = e.target.getAttribute('data-name');
            if (name) {
                if (!currentUser) {
                    showLoginPopup();
                    return;
                }
                const newQty = addToCart(name);
                updateQtyUI(name, newQty);
            }
            return;
        }
        
        if (e.target.classList.contains('decrement')) {
            e.preventDefault();
            const name = e.target.getAttribute('data-name');
            if (name) {
                if (!currentUser) {
                    showLoginPopup();
                    return;
                }
                const newQty = removeFromCart(name);
                updateQtyUI(name, newQty);
            }
            return;
        }


        if (e.target.classList.contains('btn-buy') || e.target.classList.contains('clickable-product') || e.target.closest('.clickable-product')) {
            e.preventDefault();
            
            let categoryTarget = e.target.getAttribute('data-category');
            if (categoryTarget) {
                const catMap = {
                    "CD - DVD": "cd-dvd.html",
                    "HEALTH PRODUCTS": "health-products.html",
                    "NOTEBOOKS": "notebooks.html",
                    "STICKERS": "stickers.html",
                    "TABLE DECORATIVES": "table-decoratives.html",
                    "GIFT ITEMS": "gift-items.html",
                    "ELECTRONIC PRODUCTS": "electronic-products.html",
                    "VANGMAY": "vangmay.html",
                    "MAGAZINES": "magazines.html",
                    "BOOKS": "books.html",
                    "PHOTO - FRAMES": "photo-frames.html",
                    "PUJA ACCESSORIES": "puja-accessories.html",
                    "DAILY USE": "daily-use.html",
                    "COMBO SET": "combo-set.html",
                    "HANDLOOM": "handloom.html",
                    "POSTERS": "posters.html"
                };
                let mapped = catMap[categoryTarget] || catMap[categoryTarget.toUpperCase()];
                if (mapped) {
                    window.location.href = mapped;
                } else if (categoryTarget === 'CD/DVD') {
                    window.location.href = 'cd-dvd.html';
                } else {
                    window.location.href = `category.html?type=${encodeURIComponent(categoryTarget)}`;
                }
                return;
            }

            let id = e.target.getAttribute('data-id');
            if(!id) {
                const card = e.target.closest('.product-card');
                if(card) id = card.dataset.id;
            }
            if(!id) {
                const stripCard = e.target.closest('.clickable-product');
                if(stripCard) id = stripCard.getAttribute('data-id');
            }
            if(id) window.location.href = `product.html?id=${id}`;
        }
    });

    // --- 6. Search Filter Logic ---
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    function filterProducts() {
        if(!searchInput) return;
        const query = searchInput.value.trim().toLowerCase();
        const productCards = document.querySelectorAll('.product-card');
        let foundAny = false;
        
        productCards.forEach(card => {
            const categoryName = card.querySelector('.product-category').textContent.toLowerCase();
            if (categoryName.includes(query)) {
                card.style.display = 'flex';
                foundAny = true;
            } else {
                card.style.display = 'none';
            }
        });

        if (productCards.length === 0 && query.length > 0) {
            window.location.href = `index.html?search=${encodeURIComponent(query)}`;
        }
    }

    if(searchBtn) {
        searchBtn.addEventListener('click', filterProducts);
    }
    
    if(searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            if(e.key === 'Enter') {
                filterProducts();
            } else {
                const productCards = document.querySelectorAll('.product-card');
                if(productCards.length > 0) {
                    filterProducts(); 
                }
            }
        });

        const urlSearchParam = urlParams.get('search');
        if (urlSearchParam && document.querySelectorAll('.product-card').length > 0) {
            searchInput.value = urlSearchParam;
            filterProducts();
        }
    }

    // --- 7. Hero Slider Logic ---
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }
        function nextSlide() {
            let nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        }
        function startSlideShow() {
            if(slideInterval) clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 3000);
        }
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                showSlide(index);
                startSlideShow(); 
            });
        });
        startSlideShow();
    }

    // --- 7.5. Today's Deal Slider Logic ---
    const deals = [
        { title: "Today's Deal", desc: "Up to 70% OFF on Spiritual Books", img: "https://media.istockphoto.com/id/1194343598/vector/bright-modern-mega-sale-banner-for-advertising-discounts-vector-template-for-design-special.jpg?s=612x612&w=0&k=20&c=oxeukxA1kVLBuLtcbipu_94blsVGs9eU0V_x70wkVzA=" },
        { title: "Limited Offer", desc: "Buy 1 Get 1 Free on Select Handlooms", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=600&h=400" },
        { title: "Combo Special", desc: "Save 20% on Health Products Bundle", img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&h=400" },
        { title: "Weekend Discount", desc: "Flat 50% Cashback on Magazines", img: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=600&h=400" },
        { title: "Festive Deal", desc: "Lowest prices on Puja Accessories", img: "https://images.unsplash.com/photo-1493804714609-3ccf19cb2726?auto=format&fit=crop&w=600&h=400" },
        { title: "Clearance Sale", desc: "Massive Markdowns on Decoratives", img: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?auto=format&fit=crop&w=600&h=400" }
    ];
    let currentDealIndex = 0;
    const dealNextBtn = document.getElementById('deal-next-btn');
    const dealTitle = document.getElementById('deal-title');
    const dealText = document.getElementById('deal-text');
    const adBannerLeft = document.querySelector('.ad-banner-left');
    
    const dealContentBox = document.getElementById('deal-content-container');
    const adBannerRight = document.querySelector('.ad-banner-right');
    
    if (dealNextBtn && dealTitle && dealText && adBannerLeft && dealContentBox) {
        let activeImg = adBannerLeft.querySelector('img');
        if (activeImg) {
            adBannerLeft.style.position = 'relative';
            adBannerLeft.style.overflow = 'hidden';
            activeImg.style.width = '100%';
            activeImg.style.height = '100%';
            activeImg.style.display = 'block';
            activeImg.style.transition = 'transform 0.5s ease-in-out';
            
            adBannerRight.style.position = 'relative';
            adBannerRight.style.overflow = 'hidden';

            dealNextBtn.addEventListener('click', () => {
                if (dealNextBtn.disabled) return;
                dealNextBtn.disabled = true;
                
                currentDealIndex = (currentDealIndex + 1) % deals.length;
                const nextDeal = deals[currentDealIndex];
                
                // Preload image to prevent flicker/delay mismatch
                const nextImg = document.createElement('img');
                nextImg.onload = () => {
                    // Clone Text Box for simultaneous smooth sliding
                    const nextContentBox = dealContentBox.cloneNode(true);
                    nextContentBox.querySelector('#deal-title').textContent = nextDeal.title;
                    nextContentBox.querySelector('#deal-text').textContent = nextDeal.desc;
                    nextContentBox.style.position = 'absolute';
                    nextContentBox.style.top = dealContentBox.offsetTop + 'px';
                    nextContentBox.style.left = dealContentBox.offsetLeft + 'px';
                    nextContentBox.style.width = dealContentBox.offsetWidth + 'px';
                    nextContentBox.style.height = dealContentBox.offsetHeight + 'px';
                    nextContentBox.style.transform = 'translateX(100%)';
                    nextContentBox.style.transition = 'transform 0.5s ease-in-out';
                    nextContentBox.style.backgroundColor = 'var(--card-bg)'; 
                    nextContentBox.style.zIndex = '1';
                    adBannerRight.appendChild(nextContentBox);

                    // Setup Image Box (Left to Right)
                    nextImg.alt = nextDeal.title;
                    nextImg.style.position = 'absolute';
                    nextImg.style.top = '0';
                    nextImg.style.left = '-100%';
                    nextImg.style.width = '100%';
                    nextImg.style.height = '100%';
                    nextImg.style.objectFit = 'cover';
                    nextImg.style.transition = 'transform 0.5s ease-in-out';
                    adBannerLeft.appendChild(nextImg);
                    
                    dealContentBox.style.transition = 'transform 0.5s ease-in-out';

                    // Force browser redraw before starting animation
                    void nextImg.offsetWidth; 
                    void nextContentBox.offsetWidth;

                    // Animate simultaneously
                    activeImg.style.transform = 'translateX(100%)';
                    nextImg.style.transform = 'translateX(100%)';
                    dealContentBox.style.transform = 'translateX(-100%)';
                    nextContentBox.style.transform = 'translateX(0)';

                    setTimeout(() => {
                        try { activeImg.remove(); } catch(e){}
                        nextImg.style.position = 'relative';
                        nextImg.style.left = '0';
                        nextImg.style.transform = 'none';
                        activeImg = nextImg; 
                        
                        dealTitle.textContent = nextDeal.title;
                        dealText.textContent = nextDeal.desc;
                        dealContentBox.style.transition = 'none';
                        dealContentBox.style.transform = 'none';
                        try { nextContentBox.remove(); } catch(e){}
                        
                        dealNextBtn.disabled = false;
                    }, 500);
                };
                
                // If the image fails to load, still reset the button to prevent locking
                nextImg.onerror = () => { dealNextBtn.disabled = false; };
                
                nextImg.src = nextDeal.img;
            });
        }
    }
    
    // --- 8. Auth Forms Handle ---
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('signup-name').value.trim();
            const email = document.getElementById('signup-email').value.trim();
            const password = document.getElementById('signup-password').value;

            const userExists = users.some(u => u.email === email);
            if (userExists) {
                alert('An account with this email already exists.');
                return;
            }

            users.push({ name, email, password });
            localStorage.setItem('awgp_users', JSON.stringify(users));
            alert('Account created successfully! Please login.');
            window.location.href = 'login.html';
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('login-email').value.trim();
            const password = document.getElementById('login-password').value;

            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                localStorage.setItem('awgp_session', JSON.stringify({ email: user.email }));
                window.location.href = 'index.html';
            } else {
                alert('Invalid email or password. Please try again.');
            }
        });
    }

    // --- 9. Profile Handling ---
    const profileNameEl = document.getElementById('profile-name');
    const profileEmailEl = document.getElementById('profile-email');
    if (profileNameEl && profileEmailEl) {
        if (!currentUser) window.location.href = 'login.html'; 
        else {
            profileNameEl.textContent = currentUser.name;
            profileEmailEl.textContent = currentUser.email;
        }

        const profileLogoutBtn = document.getElementById('profile-logout-btn');
        if (profileLogoutBtn) {
            profileLogoutBtn.addEventListener('click', () => {
                localStorage.removeItem('awgp_session');
                window.location.href = 'login.html';
            });
        }
    }

    // --- 10. Cart Page Dedicated Logic ---
    if (window.location.pathname.includes('cart.html')) {
        const cartContainer = document.getElementById('cart-items-container');
        const summaryCount = document.getElementById('summary-items-count');
        const summarySubtotal = document.getElementById('summary-subtotal');
        const summaryDiscount = document.getElementById('summary-discount');
        const summaryDelivery = document.getElementById('summary-delivery');
        const summaryTotal = document.getElementById('summary-total');
        const summarySavedMsg = document.getElementById('summary-saved-msg');
        const mobileSummaryTotal = document.getElementById('mobile-summary-total');
        const deliveryUserName = document.getElementById('delivery-user-name');
        
        let discountApplied = false;

        if(deliveryUserName) {
            deliveryUserName.textContent = currentUser ? currentUser.name : "Guest User";
        }

        function removeCartItem(name) {
            cart = cart.filter(item => item.name !== name);
            localStorage.setItem(cartKey, JSON.stringify(cart));
            updateCartCount();
            renderCartPage();
        }

        function updateCartQty(name, change) {
            const item = cart.find(i => i.name === name);
            if(item) {
                item.quantity += change;
                if(item.quantity < 1) item.quantity = 1;
                localStorage.setItem(cartKey, JSON.stringify(cart));
                updateCartCount();
                renderCartPage();
            }
        }

        function renderCartPage() {
            if(!cartContainer) return;
            cartContainer.innerHTML = '';
            
            let totalItems = 0;
            let subtotal = 0;
            
            if (cart.length === 0) {
                cartContainer.innerHTML = '<div class="cart-empty-msg">Your cart is empty. Please add items.</div>';
                updateSummary(0, 0);
                return;
            }

            cart.forEach(item => {
                // Read from item directly (Cart Sync Fix) to avoid dependency on global PRODUCTS table
                const priceStr = item.price || "$0";
                const imageStr = item.image || "";
                const idStr = item.id || "";
                
                const priceNum = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
                totalItems += item.quantity;
                subtotal += priceNum * item.quantity;

                const row = document.createElement('div');
                row.className = 'cart-row';
                
                const oldPriceNum = (priceNum * 1.2).toFixed(2);
                
                row.innerHTML = `
                    <img src="${imageStr}" class="cart-item-img clickable-product" data-id="${idStr}" alt="${item.name}">
                    <div class="cart-item-middle">
                        <div class="cart-item-title clickable-product" data-id="${idStr}" style="cursor:pointer;">${item.name}</div>
                        <div class="cart-item-seller">Seller: AWGP Retail</div>
                        <div class="cart-item-stock">In Stock</div>
                            <div class="cart-item-controls">
                                <button class="qty-btn dec-btn" data-name="${item.name}">-</button>
                                <span class="qty-read">${item.quantity}</span>
                                <button class="qty-btn inc-btn" data-name="${item.name}">+</button>
                            </div>
                        </div>
                        <div class="cart-item-right">
                            <div class="cart-price">$${priceNum.toFixed(2)}</div>
                            <div class="cart-old-price">$${oldPriceNum}</div>
                            <div class="cart-discount">20% Off</div>
                            <div class="cart-actions">
                                <button class="action-btn save-later-btn" data-name="${item.name}">Save for later</button>
                                <button class="action-btn rm-btn" data-name="${item.name}">Remove</button>
                            </div>
                        </div>
                    `;
                    cartContainer.appendChild(row);
            });

            document.querySelectorAll('.dec-btn').forEach(btn => {
                btn.addEventListener('click', (e) => updateCartQty(e.target.dataset.name, -1));
            });
            document.querySelectorAll('.inc-btn').forEach(btn => {
                btn.addEventListener('click', (e) => updateCartQty(e.target.dataset.name, 1));
            });
            document.querySelectorAll('.rm-btn').forEach(btn => {
                btn.addEventListener('click', (e) => removeCartItem(e.target.dataset.name));
            });
            document.querySelectorAll('.save-later-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    alert('Saved for later!');
                    removeCartItem(e.target.dataset.name);
                });
            });

            updateSummary(totalItems, subtotal);
        }

        function updateSummary(totalItems, subtotal) {
            if(summaryCount) summaryCount.textContent = totalItems;
            if(summarySubtotal) summarySubtotal.textContent = '$' + subtotal.toFixed(2);
            
            let discount = discountApplied ? subtotal * 0.1 : 0;
            let finalTotal = subtotal - discount;
            
            let baseSavings = subtotal * 0.2; 
            let totalSaved = baseSavings + discount;

            if(summaryDiscount) summaryDiscount.textContent = '-$' + discount.toFixed(2);
            if(summaryTotal) summaryTotal.textContent = '$' + finalTotal.toFixed(2);
            if(mobileSummaryTotal) mobileSummaryTotal.textContent = '$' + finalTotal.toFixed(2);
            if(summarySavedMsg) summarySavedMsg.textContent = 'You saved $' + totalSaved.toFixed(2) + ' on this order';
        }

        renderCartPage();

        const couponBtn = document.getElementById('coupon-btn');
        const couponInput = document.getElementById('coupon-input');
        if(couponBtn && couponInput) {
            couponBtn.addEventListener('click', () => {
                if(couponInput.value.trim().toUpperCase() === 'AWGP10') {
                    if(!discountApplied) {
                        discountApplied = true;
                        alert('Coupon Applied: 10% Discount!');
                        renderCartPage(); 
                    } else {
                        alert('Coupon already applied.');
                    }
                } else {
                    alert('Invalid Coupon Code.');
                }
            });
        }

        const checkoutBtns = [document.getElementById('proceed-checkout-btn'), document.getElementById('mobile-proceed-checkout-btn')];
        checkoutBtns.forEach(btn => {
            if(btn) btn.addEventListener('click', () => {
                if(cart.length === 0) {
                    alert('Add items to cart before proceeding.');
                    return;
                }
                alert('Proceeding to checkout...');
            });
        });

        const cartRecStrip = document.getElementById('related-products-strip');
        if (cartRecStrip) {
            cartRecStrip.innerHTML = '';
            PRODUCTS.forEach(p => {
                const imgNode = document.createElement('img');
                imgNode.src = p.image;
                imgNode.className = 'related-strip-img clickable-product';
                imgNode.dataset.id = p.id;
                cartRecStrip.appendChild(imgNode);
            });
        }
    }

    // --- 11. Admin Panel Logic (admin.html) ---
    if (window.location.pathname.includes('admin.html')) {
        
        // Setup initial users if empty
        let adminUsers = JSON.parse(localStorage.getItem('awgp_users')) || [];
        
        // Sidebar Navigation
        const sidebarItems = document.querySelectorAll('.sidebar-item');
        const adminSections = document.querySelectorAll('.admin-section');
        
        sidebarItems.forEach(item => {
            item.addEventListener('click', () => {
                // Update active class
                sidebarItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                
                // Show target section
                const targetId = 'section-' + item.dataset.target;
                adminSections.forEach(sec => {
                    sec.style.display = sec.id === targetId ? 'block' : 'none';
                });
            });
        });

        // Add Product Modal
        const btnAddProduct = document.getElementById('btn-add-product');
        const productModal = document.getElementById('product-modal');
        const btnCancelModal = document.getElementById('btn-cancel-modal');
        const productForm = document.getElementById('product-form');
        
        function openModal(isEdit = false, product = null) {
            document.getElementById('modal-title').textContent = isEdit ? 'Edit Product' : 'Add Product';
            if (isEdit && product) {
                document.getElementById('product-id').value = product.id;
                document.getElementById('product-name').value = product.name;
                document.getElementById('product-price').value = product.price;
                document.getElementById('product-image').value = product.image;
                document.getElementById('product-category').value = product.description || product.name;
                document.getElementById('product-stock').value = product.stock;
            } else {
                productForm.reset();
                document.getElementById('product-id').value = '';
            }
            productModal.classList.add('show');
        }

        function closeModal() {
            productModal.classList.remove('show');
            productForm.reset();
        }

        if(btnAddProduct) btnAddProduct.addEventListener('click', () => openModal(false));
        if(btnCancelModal) btnCancelModal.addEventListener('click', closeModal);

        // Product Form Submit
        if(productForm) {
            productForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const pId = document.getElementById('product-id').value;
                const pName = document.getElementById('product-name').value;
                const pPrice = document.getElementById('product-price').value;
                const pImage = document.getElementById('product-image').value;
                const pCategory = document.getElementById('product-category').value;
                const pStock = document.getElementById('product-stock').value;

                // Simple validation to ensure price has $
                let finalPrice = pPrice;
                if (!finalPrice.startsWith('$')) finalPrice = '$' + finalPrice;

                if (pId) {
                    // Edit existing
                    const idx = PRODUCTS.findIndex(p => p.id === pId);
                    if (idx > -1) {
                        PRODUCTS[idx].name = pName;
                        PRODUCTS[idx].price = finalPrice;
                        PRODUCTS[idx].image = pImage;
                        PRODUCTS[idx].description = pCategory;
                        PRODUCTS[idx].stock = parseInt(pStock);
                    }
                } else {
                    // Add new
                    const newId = 'p' + (PRODUCTS.length > 0 ? Math.max(...PRODUCTS.map(p => parseInt(p.id.replace('p', '')))) + 1 : 1);
                    PRODUCTS.push({
                        id: newId,
                        name: pName,
                        description: pCategory,
                        fullDesc: pCategory,
                        price: finalPrice,
                        stock: parseInt(pStock),
                        image: pImage
                    });
                }

                localStorage.setItem('awgp_products', JSON.stringify(PRODUCTS));
                closeModal();
                renderAdminProducts();
                alert('Product saved successfully!');
            });
        }

        // Render Admin Products
        const adminProductList = document.getElementById('admin-product-list');
        function renderAdminProducts() {
            if (!adminProductList) return;
            adminProductList.innerHTML = '';
            PRODUCTS.forEach(p => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td class="prod-img-cell">
                        <img src="${p.image}" alt="Product">
                        <div class="prod-img-overlay">
                            <button class="icon-btn edit-product" data-id="${p.id}"><i class="fa fa-pencil-alt"></i></button>
                            <button class="icon-btn delete delete-product" data-id="${p.id}"><i class="fa fa-trash"></i></button>
                        </div>
                    </td>
                    <td style="font-weight: 600;">${p.name}</td>
                    <td style="color: var(--btn-buy); font-weight: 600;">${p.price}</td>
                    <td>${p.stock}</td>
                    <td class="actions">
                        <button class="icon-btn delete delete-product" data-id="${p.id}" title="Delete"><i class="fa fa-trash"></i></button>
                    </td>
                `;
                adminProductList.appendChild(tr);
            });

            // Bind Edit/Delete
            document.querySelectorAll('.edit-product').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.currentTarget.dataset.id;
                    const product = PRODUCTS.find(p => p.id === id);
                    if (product) openModal(true, product);
                });
            });

            document.querySelectorAll('.delete-product').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const id = e.currentTarget.dataset.id;
                    if (confirm('Are you sure you want to delete this product?')) {
                        const idx = PRODUCTS.findIndex(p => p.id === id);
                        if (idx > -1) {
                            PRODUCTS.splice(idx, 1);
                            localStorage.setItem('awgp_products', JSON.stringify(PRODUCTS));
                            renderAdminProducts();
                        }
                    }
                });
            });
        }
        
        // Initial Render
        renderAdminProducts();

        // Admin Logout logic
        const adminLogoutBtn = document.getElementById('admin-logout-btn');
        if (adminLogoutBtn) {
            adminLogoutBtn.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }
        
        // Coupon Logic for Admin
        const btnSaveCoupon = document.getElementById('btn-save-coupon');
        const couponList = document.getElementById('active-coupons-list');
        let coupons = JSON.parse(localStorage.getItem('awgp_coupons')) || [{ code: 'AWGP10', discount: 10 }];
        
        function renderCoupons() {
            if (!couponList) return;
            couponList.innerHTML = '';
            coupons.forEach((c, index) => {
                const li = document.createElement('li');
                li.style.cssText = "display: flex; justify-content: space-between; padding: 10px; background: white; margin-bottom: 5px; border-radius: 4px; border: 1px solid #eaeaea;";
                li.innerHTML = `
                    <span><strong>${c.code}</strong> - ${c.discount}% Off</span>
                    <button class="icon-btn delete delete-coupon" data-index="${index}"><i class="fa fa-trash"></i></button>
                `;
                couponList.appendChild(li);
            });
            
            document.querySelectorAll('.delete-coupon').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idx = e.currentTarget.dataset.index;
                    coupons.splice(idx, 1);
                    localStorage.setItem('awgp_coupons', JSON.stringify(coupons));
                    renderCoupons();
                });
            });
        }

        if (btnSaveCoupon) {
            btnSaveCoupon.addEventListener('click', () => {
                const code = document.getElementById('new-coupon-code').value.trim().toUpperCase();
                const discount = document.getElementById('new-coupon-discount').value;
                if(code && discount) {
                    coupons.push({ code, discount: parseInt(discount) });
                    localStorage.setItem('awgp_coupons', JSON.stringify(coupons));
                    document.getElementById('new-coupon-code').value = '';
                    document.getElementById('new-coupon-discount').value = '';
                    renderCoupons();
                } else {
                    alert('Please enter valid coupon details.');
                }
            });
            renderCoupons();
        }
    }

    // --- 12. Right Sidebar Logic ---
    const menuIcon = document.getElementById('menu-icon');
    const rightSidebar = document.getElementById('right-sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const closeSidebarBtn = document.getElementById('close-sidebar');

    if (menuIcon && rightSidebar && sidebarOverlay && closeSidebarBtn) {
        function openSidebar() {
            rightSidebar.classList.add('open');
            sidebarOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling on body
        }

        function closeSidebar() {
            rightSidebar.classList.remove('open');
            sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        menuIcon.addEventListener('click', openSidebar);
        closeSidebarBtn.addEventListener('click', closeSidebar);
        sidebarOverlay.addEventListener('click', closeSidebar);

        // Sidebar Auth Logic
        const sidebarAuthSection = document.getElementById('sidebar-auth-section');
        if (sidebarAuthSection) {
            if (currentUser) {
                sidebarAuthSection.innerHTML = `
                    <div style="font-weight: 600; font-size: 1.1rem; color: var(--nav-color); margin-bottom: 0.5rem;">Hello, ${currentUser.name.split(' ')[0]}</div>
                    <a href="profile.html" style="color: var(--secondary-text); text-decoration: none; margin-right: 15px;">My Profile</a>
                    <span id="sidebar-logout-btn" style="color: var(--btn-buy); cursor: pointer; font-weight: bold;">Logout</span>
                `;
                const sidebarLogoutBtn = document.getElementById('sidebar-logout-btn');
                if (sidebarLogoutBtn) {
                    sidebarLogoutBtn.addEventListener('click', () => {
                        localStorage.removeItem('awgp_session');
                        window.location.reload();
                    });
                }
            } else {
                sidebarAuthSection.innerHTML = `
                    <a href="login.html" class="sidebar-login-btn">Login / Signup</a>
                `;
            }
        }

        // Sidebar Dropdowns
        const sidebarDropdownTitles = document.querySelectorAll('.sidebar-dropdown-title');
        sidebarDropdownTitles.forEach(title => {
            title.addEventListener('click', () => {
                const content = title.nextElementSibling;
                title.classList.toggle('active');
                content.classList.toggle('open');
            });
        });
    }

    // --- 13. Delayed Login Popup Logic ---
    const delayedPopup = document.getElementById('delayed-login-popup');
    const closeDelayedPopup = document.getElementById('close-delayed-popup');
    if (delayedPopup && closeDelayedPopup && !currentUser) {
        if (!sessionStorage.getItem('awgp_popup_shown')) {
            setTimeout(() => {
                delayedPopup.style.display = 'flex';
                sessionStorage.setItem('awgp_popup_shown', 'true');
            }, 5000);
        }
        
        closeDelayedPopup.addEventListener('click', () => {
            delayedPopup.style.display = 'none';
        });
    }

    // --- 14. Amazon Style Category Slider Logic ---
    const sliders = document.querySelectorAll('.category-slider-wrapper');
    sliders.forEach(wrapper => {
        const track = wrapper.querySelector('.category-slider-track');
        const leftBtn = wrapper.querySelector('.slider-btn.left');
        const rightBtn = wrapper.querySelector('.slider-btn.right');
        
        if (track && leftBtn && rightBtn) {
            leftBtn.addEventListener('click', () => {
                track.scrollBy({ left: -300, behavior: 'smooth' });
            });
            rightBtn.addEventListener('click', () => {
                track.scrollBy({ left: 300, behavior: 'smooth' });
            });
        }
    });

    // --- 15. Category Preview Click Routing ---
    const catCards = document.querySelectorAll('.cat-preview-card, .category-slide-item');
    catCards.forEach(card => {
        card.addEventListener('click', () => {
            let catName = card.dataset.category;
            if (!catName) {
                const imgAlt = card.querySelector('img');
                catName = imgAlt ? imgAlt.alt : '';
            }
            if (catName) {
                const normalized = catName.trim().toLowerCase();
                const slugMap = {
                    "life management": "life-management.html",
                    "self-help": "self-help.html",
                    "philosophy": "philosophy.html",
                    "social empowerment": "social-improvements.html",
                    "gayatri pariwar related": "gayatri-pariwar.html",
                    "indian culture": "indian-culture.html",
                    "parenting and relation": "parenting-relation.html",
                    "constructing era": "constructing-era.html",
                    "yoga and pranayama": "yoga-pranayam.html",
                    "science and spirituality": "science-spirituality.html",
                    "childrens": "childrens.html",
                    "children's": "childrens.html",
                    "teen and students spirituality": "teens-students.html",
                    "health and fitness": "health-fitness.html",
                    "bhajan and sangeet": "bhajan-sangeet.html",
                    "spirituality": "spirituality.html"
                };
                let targetPage = slugMap[normalized];
                if (targetPage) {
                    window.location.href = targetPage;
                } else {
                    window.location.href = `category.html?name=${encodeURIComponent(catName)}`;
                }
            }
        });
    });

    // --- 16. Dynamic Category & All Categories Page Rendering ---
    const CATEGORY_DUMMY_PRODUCTS = [
        { id: "c1", name: "Premium Yoga Mat", category: "Yoga and Pranayama", stock: 15, price: "$29.99", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&h=300" },
        { id: "c2", name: "Copper Neti Pot", category: "Health and Fitness", stock: 42, price: "$15.99", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&h=300" },
        { id: "c3", name: "Meditation Cushion", category: "Self-help", stock: 8, price: "$45.00", image: "https://images.unsplash.com/photo-1507537362848-fa07fba80bdf?auto=format&fit=crop&w=400&h=300" },
        { id: "c4", name: "Sanskrit Chants Vol. 1", category: "Bhajan and Sangeet", stock: 110, price: "$12.50", image: "https://images.unsplash.com/photo-1516280440502-8618ba6a7d0e?auto=format&fit=crop&w=400&h=300" },
        { id: "c5", name: "Vedic Philosophy Overview", category: "Philosophy", stock: 65, price: "$18.00", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=400&h=300" },
        { id: "c6", name: "Parenting Frameworks", category: "Parenting and Relation", stock: 24, price: "$22.00", image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=400&h=300" },
        { id: "c7", name: "Yug Nirman Guide", category: "Constructing Era", stock: 88, price: "$9.99", image: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=400&h=300" },
        { id: "c8", name: "Spiritual Science Text", category: "Science and Spirituality", stock: 50, price: "$35.00", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&h=300" },
        { id: "c9", name: "Illustrated Moral Tales", category: "Children's", stock: 150, price: "$14.99", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&h=300" },
        { id: "c10", name: "Teen Mindfulness Journal", category: "Teen and Students Spirituality", stock: 35, price: "$19.99", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&h=300" },
        { id: "c11", name: "Social Reform Planner", category: "Social Empowerment", stock: 45, price: "$25.00", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=300" },
        { id: "c12", name: "Gayatri Mantra Decoder", category: "Gayatri Pariwar Related", stock: 200, price: "$8.50", image: "https://images.unsplash.com/photo-1517404215738-15263e9f9178?auto=format&fit=crop&w=400&h=300" }
    ];

    if (window.location.pathname.includes('category.html') || window.location.pathname.includes('category-all.html')) {
        const catTitleEl = document.getElementById('category-title');
        const catGridEl = document.getElementById('category-product-grid');
        
        if (catTitleEl && catGridEl) {
            let displayProducts = [];

            if (window.location.pathname.includes('category-all.html')) {
                catTitleEl.textContent = "All Categories";
                displayProducts = CATEGORY_DUMMY_PRODUCTS;
            } else {
                const searchParams = new URLSearchParams(window.location.search);
                const catParam = searchParams.get('name');
                if (catParam) {
                    catTitleEl.textContent = catParam;
                    const filteredProducts = CATEGORY_DUMMY_PRODUCTS.filter(p => p.category === catParam);
                    displayProducts = filteredProducts.length > 0 ? filteredProducts : CATEGORY_DUMMY_PRODUCTS.slice(0, 4);
                }
            }
            
            catGridEl.innerHTML = '';
            displayProducts.forEach(p => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.dataset.id = p.id;
                const itemInCart = cart.find(item => item.name === p.name);
                const qty = itemInCart ? itemInCart.quantity : 0;
                const hasQtyClass = qty > 0 ? "has-qty" : "";
                card.innerHTML = `
                    <img src="${p.image}" alt="${p.name}" class="product-image clickable-product">
                    <h3 class="product-category clickable-product">${p.name}</h3>
                    <p class="product-count">${p.stock} Products Available</p>
                    <div class="card-buttons" style="gap: 10px; flex-direction: row; display: flex;">
                        <button class="btn btn-buy" data-id="${p.id}" style="flex: 1;">Buy Now</button>
                        <div class="cart-interactive-box ${hasQtyClass}" data-parent-product="${p.name}" style="flex: 1;">
                            <button class="btn btn-cart add-to-cart-action action-btn" data-name="${p.name}" style="width: 100%;">Add to Cart</button>
                            <div class="qty-controls">
                                <button class="qty-btn decrement" data-name="${p.name}">-</button>
                                <span class="qty-val" data-name="${p.name}" id="qty-val-${p.name.replace(/\s+/g, '-')}">${qty}</span>
                                <button class="qty-btn increment" data-name="${p.name}">+</button>
                            </div>
                        </div>
                    </div>
                `;
                catGridEl.appendChild(card);
            });
        }
    }
});
