// Brighton Buccaneers - Main JavaScript File

/* ==========================================================================
   Mobile Menu Functions
   ========================================================================== */

function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

function toggleMobileSubmenu(id) {
    const submenu = document.getElementById(id);
    if (submenu) {
        submenu.classList.toggle('hidden');
    }
}

/* ==========================================================================
   Desktop Dropdown Menu Functions
   ========================================================================== */

function initializeDropdownMenus() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('button');
        const menu = dropdown.querySelector('.dropdown-menu');
        let isOpen = false;
        
        if (button && menu) {
            // Toggle dropdown on button click
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Close all other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        const otherMenu = otherDropdown.querySelector('.dropdown-menu');
                        if (otherMenu) {
                            otherMenu.classList.add('hidden');
                        }
                    }
                });
                
                // Toggle current dropdown
                menu.classList.toggle('hidden');
                isOpen = !menu.classList.contains('hidden');
            });
            
            // Keep menu open when hovering over it
            menu.addEventListener('mouseenter', function() {
                menu.classList.remove('hidden');
            });
            
            // Optional: Close on mouse leave (remove this if you want click-only behavior)
            dropdown.addEventListener('mouseleave', function() {
                setTimeout(() => {
                    if (!menu.matches(':hover') && !button.matches(':hover')) {
                        menu.classList.add('hidden');
                    }
                }, 100);
            });
        }
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            dropdowns.forEach(dropdown => {
                const menu = dropdown.querySelector('.dropdown-menu');
                if (menu) {
                    menu.classList.add('hidden');
                }
            });
        }
    });
}

/* ==========================================================================
   Mobile Content Collapse Functions
   ========================================================================== */

function initializeMobileContentToggles() {
    // Add read more functionality for mobile content
    const toggleButtons = document.querySelectorAll('.read-more-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Find the corresponding content container
            const contentId = button.id.replace('-toggle', '-content');
            const content = document.getElementById(contentId);
            
            if (content) {
                content.classList.toggle('expanded');
                
                const isExpanded = content.classList.contains('expanded');
                const icon = button.querySelector('i');
                
                if (isExpanded) {
                    button.innerHTML = 'Read Less <i class="fas fa-chevron-up"></i>';
                } else {
                    button.innerHTML = 'Read More <i class="fas fa-chevron-down"></i>';
                }
                
                // Smooth scroll to content if expanding
                if (isExpanded) {
                    setTimeout(() => {
                        content.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'nearest' 
                        });
                    }, 100);
                }
            }
        });
    });
}

/* ==========================================================================
   Cookie Consent Functions
   ========================================================================== */

function initializeCookieConsent() {
    const cookieModal = document.getElementById('cookie-modal');
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAcceptBtn = document.getElementById('cookie-accept-btn') || document.getElementById('acceptAllCookies') || document.getElementById('accept-all-cookies');
    const cookieSettingsBtn = document.getElementById('cookie-settings-btn') || document.getElementById('cookieSettingsBtn');
    const cookieSettings = document.getElementById('cookie-settings') || document.getElementById('cookie-settings-modal');
    const cookieSaveBtn = document.getElementById('cookie-save-btn') || document.getElementById('save-cookie-settings');
    const closeCookieSettings = document.getElementById('close-cookie-settings') || document.getElementById('closeCookieModal');

    // Check if cookies are already accepted
    if (localStorage.getItem('cookiesAccepted') || localStorage.getItem('cookieConsent')) {
        if (cookieModal) cookieModal.classList.add('hidden');
        if (cookieBanner) cookieBanner.classList.add('hidden');
    }

    // Accept all cookies
    if (cookieAcceptBtn) {
        cookieAcceptBtn.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            localStorage.setItem('cookieConsent', 'all');
            if (cookieModal) cookieModal.classList.add('hidden');
            if (cookieBanner) cookieBanner.classList.add('hidden');
        });
    }

    // Open cookie settings
    if (cookieSettingsBtn) {
        cookieSettingsBtn.addEventListener('click', function() {
            if (cookieSettings) {
                cookieSettings.classList.remove('hidden');
            }
        });
    }

    // Close cookie settings
    if (closeCookieSettings) {
        closeCookieSettings.addEventListener('click', function() {
            if (cookieSettings) {
                cookieSettings.classList.add('hidden');
            }
        });
    }

    // Save cookie settings
    if (cookieSaveBtn) {
        cookieSaveBtn.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            localStorage.setItem('cookieConsent', 'custom');
            if (cookieModal) cookieModal.classList.add('hidden');
            if (cookieBanner) cookieBanner.classList.add('hidden');
            if (cookieSettings) cookieSettings.classList.add('hidden');
        });
    }

    // Close cookie settings when clicking outside
    if (cookieSettings) {
        cookieSettings.addEventListener('click', function(e) {
            if (e.target === cookieSettings) {
                cookieSettings.classList.add('hidden');
            }
        });
    }
}

/* ==========================================================================
   Donation Functions (for donate page)
   ========================================================================== */

function donateCustomAmount() {
    const amount = document.getElementById('customAmount').value;
    if (amount && amount > 0) {
        const donationUrl = `https://www.paypal.com/donate?token=AO6aC97ApZuBHLRd1HpntrAm_yqJOzR23AuHALooyFCCcjMd7497i9bWSmjDQ5Tz4AfE98FVm8duRoag&amount=${amount}`;
        window.open(donationUrl, '_blank');
    } else {
        alert('Please enter a valid donation amount.');
    }
}

/* ==========================================================================
   Initialize Everything
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all common functionality
    initializeMobileMenu();
    initializeCookieConsent();
    initializeDropdownMenus();
    initializeMobileContentToggles();
});
