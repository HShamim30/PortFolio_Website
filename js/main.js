  // Navigation button script
        lucide.createIcons();

        const menuBtn = document.getElementById("menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        const menuIcon = document.getElementById("menu-icon");
        const closeIcon = document.getElementById("close-icon");

        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
            menuIcon.classList.toggle("hidden");
            closeIcon.classList.toggle("hidden");
        });

        // Auto close menu on link click
        document.querySelectorAll("#mobile-menu a").forEach(link => {
            link.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
                menuIcon.classList.remove("hidden");
                closeIcon.classList.add("hidden");
            });
        });
