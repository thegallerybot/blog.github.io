particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            }
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});

const blogPosts = [
    {
        username: "Tenz",
        rank: "Elite Moderator",
        title: "Floating menu",
        description: "This is how the menu will probably look like, little by little it will be improved since this is only the prototype.",
        image: "https://blog.cdhub.store/Images/4.png",
        timestamp: "January 20, 2025",
    },
    {
        username: "CD",
        rank: "Owner",
        title: "Prediction Lines!",
        description: "We are happy to finally show our line prediction, which as I said, is millimeter.",
        image: "https://blog.cdhub.store/Images/3.png",    
        timestamp: "January 20, 2025",
    },
    {
        username: "CD",
        rank: "Owner",
        title: "About CD Hub!",
        description: "CD Hub is an 8bp panel that brings more features than any other mod in this game, it brings unique features, all with pinpoint precision, and without the risk of banning. Also, tomorrow, the first spoiler for the panel will be officially released.",
        image: "https://blog.cdhub.store/Images/2.png",
        timestamp: "January 19, 2025",
    },
    {
        username: "CD",
        rank: "Owner",
        title: "Welcome to CD Hub blog!",
        description: "This is the first blog, here we give the introduction to this wonderful section where you will have real-time news from our panel.",
        image: "https://blog.cdhub.store/Images/1.png",
        timestamp: "January 19, 2025",
    },
];

const postsContainer = document.getElementById("blog-posts");

blogPosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");

    postElement.innerHTML = `
        <div class="author">by ${post.username} - ${post.rank}</div>
        <h2>${post.title}</h2>
        <p class="description">${post.description}</p>
        <img src="${post.image}" alt="${post.title}">
        <div class="timestamp">Posted on: ${post.timestamp}</div>
        <button onclick="alert('You liked this post!')">Like</button>
    `;

    postsContainer.appendChild(postElement);
});
