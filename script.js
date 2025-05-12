document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const mainNav = document.querySelector(".main-nav")
  
    if (mobileMenuToggle) {
      mobileMenuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("active")
  
        // Toggle icon between bars and times
        const icon = this.querySelector("i")
        if (icon.classList.contains("fa-bars")) {
          icon.classList.remove("fa-bars")
          icon.classList.add("fa-times")
        } else {
          icon.classList.remove("fa-times")
          icon.classList.add("fa-bars")
        }
      })
    }
  
    // Deals Carousel
    const dealsWrapper = document.getElementById("dealsWrapper")
    const dealsPrev = document.getElementById("dealsPrev")
    const dealsNext = document.getElementById("dealsNext")
  
    if (dealsWrapper && dealsPrev && dealsNext) {
      let dealsPosition = 0
      const dealCards = dealsWrapper.querySelectorAll(".deal-card")
      const cardWidth = 320 // card width + gap
      const maxPosition = (dealCards.length - getVisibleCards()) * cardWidth
  
      function getVisibleCards() {
        if (window.innerWidth < 768) {
          return 1
        } else if (window.innerWidth < 992) {
          return 2
        } else {
          return 3
        }
      }
  
      dealsPrev.addEventListener("click", () => {
        dealsPosition = Math.max(dealsPosition - cardWidth, 0)
        updateDealsPosition()
      })
  
      dealsNext.addEventListener("click", () => {
        dealsPosition = Math.min(dealsPosition + cardWidth, maxPosition)
        updateDealsPosition()
      })
  
      function updateDealsPosition() {
        dealsWrapper.style.transform = `translateX(-${dealsPosition}px)`
  
        // Update button states
        dealsPrev.disabled = dealsPosition === 0
        dealsNext.disabled = dealsPosition >= maxPosition
  
        // Visual feedback for disabled buttons
        if (dealsPrev.disabled) {
          dealsPrev.classList.add("disabled")
        } else {
          dealsPrev.classList.remove("disabled")
        }
  
        if (dealsNext.disabled) {
          dealsNext.classList.add("disabled")
        } else {
          dealsNext.classList.remove("disabled")
        }
      }
  
      // Initialize button states
      updateDealsPosition()
  
      // Update on window resize
      window.addEventListener("resize", () => {
        // Recalculate maxPosition
        const newMaxPosition = (dealCards.length - getVisibleCards()) * cardWidth
  
        // Adjust position if needed
        if (dealsPosition > newMaxPosition) {
          dealsPosition = newMaxPosition
          updateDealsPosition()
        }
  
        const maxPosition = newMaxPosition
        updateDealsPosition()
      })
    }
  
    // Reviews Carousel
    const reviewsWrapper = document.getElementById("reviewsWrapper")
    const reviewsPrev = document.getElementById("reviewsPrev")
    const reviewsNext = document.getElementById("reviewsNext")
  
    if (reviewsWrapper && reviewsPrev && reviewsNext) {
      let reviewsPosition = 0
      const reviewCards = reviewsWrapper.querySelectorAll(".review-card")
      const reviewCardWidth = 370 // card width + gap
      const reviewsMaxPosition = (reviewCards.length - getVisibleReviewCards()) * reviewCardWidth
  
      function getVisibleReviewCards() {
        if (window.innerWidth < 768) {
          return 1
        } else if (window.innerWidth < 1200) {
          return 2
        } else {
          return 3
        }
      }
  
      reviewsPrev.addEventListener("click", () => {
        reviewsPosition = Math.max(reviewsPosition - reviewCardWidth, 0)
        updateReviewsPosition()
      })
  
      reviewsNext.addEventListener("click", () => {
        reviewsPosition = Math.min(reviewsPosition + reviewCardWidth, reviewsMaxPosition)
        updateReviewsPosition()
      })
  
      function updateReviewsPosition() {
        reviewsWrapper.style.transform = `translateX(-${reviewsPosition}px)`
  
        // Update button states
        reviewsPrev.disabled = reviewsPosition === 0
        reviewsNext.disabled = reviewsPosition >= reviewsMaxPosition
  
        // Visual feedback for disabled buttons
        if (reviewsPrev.disabled) {
          reviewsPrev.classList.add("disabled")
        } else {
          reviewsPrev.classList.remove("disabled")
        }
  
        if (reviewsNext.disabled) {
          reviewsNext.classList.add("disabled")
        } else {
          reviewsNext.classList.remove("disabled")
        }
      }
  
      // Initialize button states
      updateReviewsPosition()
  
      // Update on window resize
      window.addEventListener("resize", () => {
        // Recalculate maxPosition
        const newMaxPosition = (reviewCards.length - getVisibleReviewCards()) * reviewCardWidth
  
        // Adjust position if needed
        if (reviewsPosition > newMaxPosition) {
          reviewsPosition = newMaxPosition
          updateReviewsPosition()
        }
  
        const reviewsMaxPosition = newMaxPosition
        updateReviewsPosition()
      })
    }
  
    // Price Range Slider
    const priceSlider = document.getElementById("priceSlider")
    const priceMin = document.getElementById("priceMin")
    const priceMax = document.getElementById("priceMax")
  
    if (priceSlider && priceMin) {
      priceSlider.addEventListener("input", function () {
        priceMin.textContent = `$0`
        priceMax.textContent = `$${this.value}`
      })
    }
  
    // Hotel Price Range Slider
    const hotelPriceSlider = document.getElementById("hotelPriceSlider")
    const hotelPriceMin = document.getElementById("hotelPriceMin")
    const hotelPriceMax = document.getElementById("hotelPriceMax")
  
    if (hotelPriceSlider && hotelPriceMin) {
      hotelPriceSlider.addEventListener("input", function () {
        hotelPriceMin.textContent = `$0`
        hotelPriceMax.textContent = `$${this.value}`
      })
    }
  
    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item")
  
    if (faqItems.length > 0) {
      faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question")
  
        question.addEventListener("click", () => {
          // Close all other items
          faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.classList.remove("active")
            }
          })
  
          // Toggle current item
          item.classList.toggle("active")
        })
      })
    }
  
    // Contact Form Submission
    const contactForm = document.getElementById("contactForm")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form data
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const subject = document.getElementById("subject").value
        const message = document.getElementById("message").value
  
        // Simple validation
        if (!name || !email || !subject || !message) {
          alert("Please fill in all fields")
          return
        }
  
        // Simulate form submission
        alert(`Thank you for your message, ${name}! We will get back to you soon.`)
  
        // Reset form
        contactForm.reset()
      })
    }
  
    // Newsletter Subscription
    const newsletterForm = document.querySelector(".newsletter-form")
  
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault()
  
        const email = this.querySelector('input[type="email"]').value
  
        if (!email) {
          alert("Please enter your email address")
          return
        }
  
        // Simulate subscription
        alert(`Thank you for subscribing with ${email}! You'll receive our best deals soon.`)
  
        // Reset form
        this.reset()
      })
    }
  
    // Footer Newsletter Subscription
    const footerNewsletter = document.querySelector(".footer-newsletter")
  
    if (footerNewsletter) {
      footerNewsletter.addEventListener("submit", function (e) {
        e.preventDefault()
  
        const email = this.querySelector('input[type="email"]').value
  
        if (!email) {
          alert("Please enter your email address")
          return
        }
  
        // Simulate subscription
        alert(`Thank you for subscribing with ${email}! You'll receive our latest updates soon.`)
  
        // Reset form
        this.reset()
      })
    }
  
    // Initialize Google Map for destination page
    window.initMap = () => {
      // Check if map element exists
      const mapElement = document.getElementById("map")
  
      if (mapElement) {
        // Paris coordinates
        const paris = { lat: 48.8566, lng: 2.3522 }
  
        // Create map
        const map = new google.maps.Map(mapElement, {
          center: paris,
          zoom: 13,
          styles: [
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [{ color: "#444444" }],
            },
            {
              featureType: "landscape",
              elementType: "all",
              stylers: [{ color: "#f2f2f2" }],
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "road",
              elementType: "all",
              stylers: [{ saturation: -100 }, { lightness: 45 }],
            },
            {
              featureType: "road.highway",
              elementType: "all",
              stylers: [{ visibility: "simplified" }],
            },
            {
              featureType: "road.arterial",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "transit",
              elementType: "all",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [{ color: "#3498db" }, { visibility: "on" }],
            },
          ],
        })
  
        // Add markers for key attractions
        const attractions = [
          { position: { lat: 48.8584, lng: 2.2945 }, title: "Eiffel Tower" },
          { position: { lat: 48.8606, lng: 2.3376 }, title: "Louvre Museum" },
          { position: { lat: 48.853, lng: 2.3499 }, title: "Notre-Dame Cathedral" },
          { position: { lat: 48.8738, lng: 2.295 }, title: "Arc de Triomphe" },
          { position: { lat: 48.8715, lng: 2.3077 }, title: "Champs-Élysées" },
        ]
  
        attractions.forEach((attraction) => {
          const marker = new google.maps.Marker({
            position: attraction.position,
            map: map,
            title: attraction.title,
          })
  
          const infoWindow = new google.maps.InfoWindow({
            content: `<div><h3>${attraction.title}</h3><p>A must-visit attraction in Paris</p></div>`,
          })
  
          marker.addListener("click", () => {
            infoWindow.open(map, marker)
          })
        })
      }
  
      // Check if contact map element exists
      const contactMapElement = document.getElementById("contactMap")
  
      if (contactMapElement) {
        // New York coordinates (example for contact page)
        const newYork = { lat: 40.7128, lng: -74.006 }
  
        // Create map
        const contactMap = new google.maps.Map(contactMapElement, {
          center: newYork,
          zoom: 14,
          styles: [
            {
              featureType: "administrative",
              elementType: "labels.text.fill",
              stylers: [{ color: "#444444" }],
            },
            {
              featureType: "landscape",
              elementType: "all",
              stylers: [{ color: "#f2f2f2" }],
            },
            {
              featureType: "poi",
              elementType: "all",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "road",
              elementType: "all",
              stylers: [{ saturation: -100 }, { lightness: 45 }],
            },
            {
              featureType: "road.highway",
              elementType: "all",
              stylers: [{ visibility: "simplified" }],
            },
            {
              featureType: "road.arterial",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "transit",
              elementType: "all",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [{ color: "#3498db" }, { visibility: "on" }],
            },
          ],
        })
  
        // Add marker for office location
        const officeMarker = new google.maps.Marker({
          position: newYork,
          map: contactMap,
          title: "TravelEase Office",
        })
  
        const officeInfoWindow = new google.maps.InfoWindow({
          content: `<div><h3>TravelEase Headquarters</h3><p>123 Travel Street, Suite 100<br>New York, NY 10001</p></div>`,
        })
  
        officeMarker.addListener("click", () => {
          officeInfoWindow.open(contactMap, officeMarker)
        })
      }
    }
  })
  document.addEventListener('DOMContentLoaded', function() {
    // Get all elements
    const hotelCards = document.querySelectorAll('.hotel-card');
    const paginationContainer = document.querySelector('.pagination');
    const prevBtn = document.querySelector('.pagination-btn.prev');
    const nextBtn = document.querySelector('.pagination-btn.next');
    const pageNumbers = document.querySelector('.page-numbers');
    
    // Configuration
    const cardsPerPage = 4;
    let currentPage = 1;
    
    // Calculate total pages
    const totalPages = Math.ceil(hotelCards.length / cardsPerPage);
    
    // Initialize pagination
    function initPagination() {
        // Clear existing page numbers
        pageNumbers.innerHTML = '';
        
        // Create page number buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = 'pagination-btn';
            pageBtn.textContent = i;
            if (i === 1) pageBtn.classList.add('active');
            pageBtn.addEventListener('click', () => goToPage(i));
            pageNumbers.appendChild(pageBtn);
        }
        
        // Show first page
        showPage(1);
    }
    
    // Show specific page
    function showPage(page) {
        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        
        // Hide all cards
        hotelCards.forEach(card => {
            card.style.display = 'none';
        });
        
        // Show cards for current page
        for (let i = startIndex; i < endIndex && i < hotelCards.length; i++) {
            hotelCards[i].style.display = 'flex';
        }
        
        // Update active state
        document.querySelectorAll('.page-numbers .pagination-btn').forEach(btn => {
            btn.classList.toggle('active', parseInt(btn.textContent) === page);
        });
        
        // Update prev/next buttons
        prevBtn.disabled = page === 1;
        nextBtn.disabled = page === totalPages;
        
        currentPage = page;
    }
    
    // Go to specific page
    function goToPage(page) {
        if (page < 1 || page > totalPages) return;
        showPage(page);
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => goToPage(currentPage - 1));
    nextBtn.addEventListener('click', () => goToPage(currentPage + 1));
    
    // Initialize
    initPagination();
});
  
