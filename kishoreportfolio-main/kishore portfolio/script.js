/* =========================================================
   KISHORE ANUSURI - PORTFOLIO JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       MOBILE NAVIGATION
       ========================================================= */

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuToggle && navMenu) {

        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            navMenu.classList.toggle("active");

            const expanded = menuToggle.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", expanded);
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navMenu.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }


    /* =========================================================
       HEADER SCROLL EFFECT
       ========================================================= */

    const header = document.querySelector("header");

    function handleHeaderScroll() {
        if (!header) return;

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", handleHeaderScroll);
    handleHeaderScroll();


    /* =========================================================
       TYPING ANIMATION
       ========================================================= */

    const typingElement = document.querySelector(".typing-text");

    if (typingElement) {

        const words = [
            "Aspiring AI/ML Developer",
            "Python Developer",
            "Machine Learning Enthusiast",
            "Deep Learning Enthusiast",
            "Web Developer"
        ];

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typingSpeed = 100;
        const deletingSpeed = 60;
        const pauseAfterWord = 1800;

        function typeEffect() {

            const currentWord = words[wordIndex];

            if (!isDeleting) {

                typingElement.textContent =
                    currentWord.substring(0, charIndex + 1);

                charIndex++;

                if (charIndex === currentWord.length) {

                    isDeleting = true;

                    setTimeout(typeEffect, pauseAfterWord);
                    return;
                }

            } else {

                typingElement.textContent =
                    currentWord.substring(0, charIndex - 1);

                charIndex--;

                if (charIndex === 0) {

                    isDeleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length) {
                        wordIndex = 0;
                    }
                }
            }

            setTimeout(
                typeEffect,
                isDeleting ? deletingSpeed : typingSpeed
            );
        }

        typeEffect();
    }


    /* =========================================================
       ABOUT SECTION TABS
       ========================================================= */

    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    if (tabButtons.length > 0 && tabContents.length > 0) {

        tabButtons.forEach(button => {

            button.addEventListener("click", () => {

                const target = button.getAttribute("data-tab");

                tabButtons.forEach(btn => {
                    btn.classList.remove("active");
                });

                tabContents.forEach(content => {
                    content.classList.remove("active");
                });

                button.classList.add("active");

                const targetContent =
                    document.getElementById(target);

                if (targetContent) {
                    targetContent.classList.add("active");
                }
            });

        });
    }


    /* =========================================================
       ACTIVE NAVIGATION LINK
       ========================================================= */

    const sections = document.querySelectorAll("section[id]");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();


    /* =========================================================
       SMOOTH SCROLL
       ========================================================= */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const targetElement =
                document.querySelector(targetId);

            if (!targetElement) {
                return;
            }

            event.preventDefault();

            const headerHeight =
                header ? header.offsetHeight : 0;

            const targetPosition =
                targetElement.getBoundingClientRect().top +
                window.pageYOffset -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
    });


    /* =========================================================
       BACK TO TOP BUTTON
       ========================================================= */

    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        function toggleBackToTop() {

            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        }

        window.addEventListener("scroll", toggleBackToTop);
        toggleBackToTop();

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    /* =========================================================
       CONTACT FORM
       ========================================================= */

    const contactForm =
        document.querySelector("#contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            const submitButton =
                contactForm.querySelector('button[type="submit"]');

            if (submitButton) {

                submitButton.disabled = true;

                const originalText =
                    submitButton.innerHTML;

                submitButton.innerHTML =
                    '<i class="fas fa-spinner fa-spin"></i> Sending...';

                /*
                 * Restore button after a few seconds.
                 * FormSubmit will handle the actual submission.
                 */

                setTimeout(() => {

                    submitButton.disabled = false;
                    submitButton.innerHTML = originalText;

                }, 5000);
            }
        });
    }


    /* =========================================================
       PROJECT CARD HOVER EFFECT
       ========================================================= */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });
    });


    /* =========================================================
       CERTIFICATION CARD HOVER EFFECT
       ========================================================= */

    const certificationCards =
        document.querySelectorAll(".certification-card");

    certificationCards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("hovered");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("hovered");
        });
    });


    /* =========================================================
       RESUME BUTTON
       ========================================================= */

    const resumeLinks =
        document.querySelectorAll('a[href$=".pdf"]');

    resumeLinks.forEach(link => {

        link.addEventListener("click", () => {

            console.log("Resume opened");
        });
    });


    /* =========================================================
       RICELEAFXNET LIVE DEMO PLACEHOLDER
       ========================================================= */

    const demoPlaceholder =
        document.querySelector(".demo-placeholder");

    if (demoPlaceholder) {

        demoPlaceholder.addEventListener("click", function (event) {

            const href = this.getAttribute("href");

            /*
             * Currently href="#" because the real deployed
             * RiceLeafXNet URL will be added later.
             */

            if (!href || href === "#") {

                event.preventDefault();

                alert(
                    "RiceLeafXNet Live Demo will be available soon."
                );
            }
        });
    }


    /* =========================================================
       ESC KEY - CLOSE MOBILE MENU
       ========================================================= */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            if (menuToggle && navMenu) {

                menuToggle.classList.remove("active");
                navMenu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        }
    });


    /* =========================================================
       WINDOW RESIZE
       ========================================================= */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {

            if (menuToggle && navMenu) {

                menuToggle.classList.remove("active");
                navMenu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        }
    });


    /* =========================================================
       IMAGE FALLBACK
       ========================================================= */

    const images =
        document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener("error", function () {

            /*
             * Prevent infinite error loops.
             */

            if (this.dataset.fallbackApplied === "true") {
                return;
            }

            this.dataset.fallbackApplied = "true";

            this.style.display = "none";
        });
    });


    /* =========================================================
       INTERSECTION OBSERVER
       ========================================================= */

    const animatedElements =
        document.querySelectorAll(
            ".project-card, .certification-card, .skill-card"
        );

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries, observerInstance) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("visible");

                            observerInstance.unobserve(
                                entry.target
                            );
                        }
                    });

                },
                {
                    threshold: 0.1
                }
            );

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }


    /* =========================================================
       CONSOLE MESSAGE
       ========================================================= */

    console.log(
        "Kishore Anusuri Portfolio loaded successfully."
    );

});