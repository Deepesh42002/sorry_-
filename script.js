document.addEventListener('DOMContentLoaded', () => {

    const backgroundMusic = document.getElementById('backgroundMusic');
    const startButton = document.getElementById('startButton');
    const envelopeContainer = document.getElementById('envelopeContainer');
    const unfoldButton = document.getElementById('unfoldButton');
    const finalGreetingElement = document.getElementById('finalGreeting');

    const steps = {
        step1: document.getElementById('step1'),
        step2: document.getElementById('step2'),
        step3: document.getElementById('step3'),
        step4: document.getElementById('step4')
    };

    /* --- Personalization --- */
    const recipientName = "Leslie";
    const messageGreeting = "I'M SORRY";


    /* --- Utility Function to Transition Steps --- */
    function transitionToStep(targetStepId) {

        const currentActive = document.querySelector('.step.active');

        if (currentActive) {
            currentActive.classList.remove('active');
        }

        steps[targetStepId].classList.add('active');
    }


    /* --- Step 1: Welcome Screen --- */
    startButton.addEventListener('click', () => {

        transitionToStep('step2');

        /*
         * Start the apology song after the user's click.
         * This also avoids most browser autoplay restrictions.
         */
        backgroundMusic.play().catch(error => {
            console.log("Audio could not start:", error);
        });

    });


    /* --- Step 2: Envelope --- */
    envelopeContainer.addEventListener('click', () => {

        envelopeContainer.classList.add('open');

        const instruction =
            envelopeContainer.querySelector('.click-instruction');

        instruction.style.opacity = '0';

        setTimeout(() => {

            transitionToStep('step3');

            setTimeout(() => {

                document
                    .getElementById('letterContainer')
                    .classList.add('show');

            }, 100);

        }, 700);

    });


    /* --- Step 3: Letter --- */
    unfoldButton.addEventListener('click', () => {

        transitionToStep('step4');

        startCelebrationAnimations();

    });


    /* --- Step 4: Sorry Celebration --- */
    function startCelebrationAnimations() {

        /* --- Typewriter Effect --- */

        let i = 0;

        finalGreetingElement.textContent = '';

        finalGreetingElement.style.borderRight =
            '3px solid var(--accent-yellow)';


        const typingInterval = setInterval(() => {

            if (i < messageGreeting.length) {

                finalGreetingElement.textContent +=
                    messageGreeting.charAt(i);

                i++;

            } else {

                clearInterval(typingInterval);

                finalGreetingElement.classList.add('typed');

            }

        }, 100);


        /* --- Soft Floating Hearts --- */
        createBalloons(15);


        /* --- Soft Falling Particles --- */
        createConfettiCannon(70, 0.5);

        setTimeout(() => {
            createConfettiCannon(50, 0.3);
        }, 500);


        /* --- Soft Background Sparkles --- */
        createFireworks(5);

    }


    /* --- Floating Hearts Helper --- */
    function createBalloons(count) {

        const balloonsContainer =
            document.querySelector('.balloons-container');

        const colors = [
            'var(--primary-red)',
            'var(--heart-color)',
            'var(--accent-yellow)',
            '#e88fa3',
            '#f2b5c4'
        ];


        for (let i = 0; i < count; i++) {

            const balloon = document.createElement('div');

            balloon.classList.add('balloon');


            /* Random horizontal position */
            balloon.style.left =
                `${Math.random() * 80 + 10}vw`;


            /* Random heart color */
            balloon.style.backgroundColor =
                colors[Math.floor(Math.random() * colors.length)];


            /* Random animation duration */
            balloon.style.animationDuration =
                `${Math.random() * 6 + 10}s`;


            /* Random animation delay */
            balloon.style.animationDelay =
                `${Math.random() * 5}s`;


            balloonsContainer.appendChild(balloon);


            /* Remove after animation */
            balloon.addEventListener('animationend', () => {
                balloon.remove();
            });

        }

    }


    /* --- Soft Particle / Confetti Helper --- */
    function createConfettiCannon(count, delayMultiplier) {

        const confettiCannonContainer =
            document.querySelector('.confetti-cannon-container');


        const colors = [
            'var(--primary-red)',
            'var(--accent-yellow)',
            '#e88fa3',
            '#f2b5c4',
            '#ffffff'
        ];


        for (let i = 0; i < count; i++) {

            const confetti =
                document.createElement('div');

            confetti.classList.add('confetti');


            /* Random color */
            confetti.style.backgroundColor =
                colors[Math.floor(Math.random() * colors.length)];


            /* Random horizontal position */
            confetti.style.left =
                `${Math.random() * 100}vw`;


            /* Random starting position */
            confetti.style.top =
                `${Math.random() * 20 - 10}vh`;


            /* Random animation duration */
            const duration =
                Math.random() * 2 + 3;


            /* Random animation delay */
            const delay =
                Math.random() * delayMultiplier;


            confetti.style.animationDuration =
                `${duration}s`;

            confetti.style.animationDelay =
                `${delay}s`;


            /* Random size */
            const size =
                Math.random() * 6 + 4;


            confetti.style.width =
                `${size}px`;

            confetti.style.height =
                `${size}px`;


            /* Some particles become circular */
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            }


            /* Random rotation */
            confetti.style.transform =
                `rotate(${Math.random() * 360}deg)`;


            confettiCannonContainer.appendChild(confetti);


            /* Remove after animation */
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });

        }

    }


    /* --- Soft Background Sparkles --- */
    function createFireworks(count) {

        const fireworksContainer =
            document.querySelector('.fireworks-container');


        const colors = [
            'var(--primary-red)',
            'var(--accent-yellow)',
            '#ffffff',
            '#e88fa3'
        ];


        for (let i = 0; i < count; i++) {

            const firework =
                document.createElement('div');

            firework.classList.add('firework');


            /* Random position */
            firework.style.left =
                `${Math.random() * 80 + 10}vw`;

            firework.style.bottom =
                `${Math.random() * 20}vh`;


            /* Random color */
            firework.style.backgroundColor =
                colors[Math.floor(Math.random() * colors.length)];


            firework.style.boxShadow =
                `0 0 5px ${firework.style.backgroundColor}`;


            /* Random animation delay */
            const delay =
                Math.random() * 3;


            firework.style.animationDelay =
                `${delay}s, ${delay + 3}s`;


            fireworksContainer.appendChild(firework);


            /* Remove after animation */
            firework.addEventListener('animationend', () => {
                firework.remove();
            });

        }

    }

});