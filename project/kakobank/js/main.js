

const menu = document.querySelector('.header_mobile');
            const menuHeight = menu.getBoundingClientRect().height;

            document.addEventListener('scroll', () => {
                if (window.scrollY > menuHeight) {
                    menu.classList.add('active');
                } else {
                    menu.classList.remove('active');
                }
            });
