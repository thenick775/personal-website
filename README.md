This is the home of my personal website, desktop and mobile friendly.

I thought after a few years and a few jobs, that my website needed a new look!

I chose to make this project with Hugo, as an exercise in learning something new.

Major thanks to the [Hugo Grayscale](https://github.com/runningstream/hugograyscale) template creator for inspiration.

This project is powered by Docker and NGINX, and is served from a cloud hosting provider.

Fail2ban was added as, on most cloud providers, bots started mining for exploits.

# Link
https://nicholas-vancise.dev

![](readme-graphics/website.gif)

# Technical details
- This website's build pipeline is an example of a multi-stage docker build using Hugo
- This website uses a basic custom nginx configuration
- This website uses fail2ban to temporarily ban problematic IP addresses through firewall rules using the nginx logs

# Credits
- Some project icons provided by <a target="_blank" href="https://icons8.com">Icons8</a>
- Some project icons provided by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
- Some project icons provided by <a href="https://pixabay.com" title="Pixabay">Pixabay</a>
