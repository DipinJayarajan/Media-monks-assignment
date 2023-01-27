const main = () => {
    const next = document.getElementById('next');
    const back = document.getElementById('back');
    const backgroundImage = document.getElementById('backgroundImage');
    const nav = document.getElementById('nav');
    const loader = document.getElementById('loadingScreen');
    const transitionPercentages = [
        0, -10.225, -19, -30.6, -42.3, -54, -66.2, -81.8, -81.8, -95.5,
    ];
    let navIndex = 0;
    let previousNavIndex = 0;

    setTimeout(function () {
        document.getElementById('loadingMessage').innerHTML =
            'Patience, young padawan...';
    }, 1600);

    setTimeout(() => {
        loader.style.visibility = 'hidden';

        const checkNavItem = () => {
            document.querySelectorAll('li.nav-item > a > p').forEach((i) => {
                i.className = '';
            });

            document.getElementById('nav'.concat(navIndex)).className =
                'clicked-nav';
        };

        const showSection = (percentage) => {
            backgroundImage.style.transform = 'translateX('.concat(
                percentage,
                '%)'
            );

            
            document.getElementById(
                'section'.concat(previousNavIndex)
            ).style.visibility = 'hidden';

            document.getElementById(
                'section'.concat(previousNavIndex)
            ).style.opacity = 0;

            
            document.getElementById(
                'section'.concat(navIndex)
            ).style.visibility = 'visible';

            document.getElementById(
                'section'.concat(navIndex)
            ).style.opacity = 1;

            previousNavIndex = navIndex;
            checkNavItem();
        };

        next.addEventListener('click', () => {
            navIndex++;
            visibilityToggle();
            showSection(transitionPercentages[navIndex]);
        });

        back.addEventListener('click', () => {
            navIndex--;
            visibilityToggle();
            showSection(transitionPercentages[navIndex]);
        });

        nav.addEventListener('click', (e) => {
            navIndex = e.target.id[e.target.id.length - 1];
            visibilityToggle();
            showSection(transitionPercentages[navIndex]);
        });

        function visibilityToggle() {
            if (isNaN(navIndex) || navIndex < 0 || navIndex > 9) {
                navIndex = previousNavIndex;
            } else {
                if (navIndex == 0) {
                    document.getElementById('current-page').innerHTML = '';
                    back.style.visibility = 'hidden';
                    next.style.visibility = 'visible';
                } else {
                    if (navIndex == 9) {
                        document.getElementById('current-page').innerHTML = '';
                        next.style.visibility = 'hidden';
                        back.style.visibility = 'visible';
                    } else {
                        next.style.visibility = 'visible';
                        back.style.visibility = 'visible';
                        document.getElementById('current-page').innerHTML =
                            'Step ' +
                            navIndex +
                            ' out of 8 on the path to digital enlightenment.';
                    }
                }
            }
        }

        showSection(transitionPercentages[0]);
    }, 3000);
};

window.onload = () => {
    main();
};
