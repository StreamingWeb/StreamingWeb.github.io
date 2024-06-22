// URL du fichier raw sur GitHub
const baseUrl = window.location.href.split('/').slice(0, -1).join('/') + '/ressources/';
const sites = [
    'showboxmovies.net',
    'sflix.se',
    'bflixhd.to',
    'flixflare.to',
    'swatchseries.is',
    'fmovies.to',
    'filmoflix.to',
    'movies7.to',
    'favmovies.to',
    'yeahmovies.to',
    'soap2dayx2.to',
    'watchseriesx.to',
    'sflix.to',
    'seriestreaming.in',
    'watch4freemovies.com',
    'soap2dayhd.co',
    'papadustream.bz',
    'soap2dayhd.com',
    'swatchseries.mx',
    'watchmovies.nz',
    'soap2day.ist',
    'soap2day.pe',
    '123series.bz',
    'soap2day.tf',
    'cinehub.wf',
    'ymovies.cc',
    'xmovies.ws'
];

let currentIndex = 0;

function updateSite() {
    if (sites.length > 0) { // Vérifie que la liste des sites n'est pas vide
        const site = sites[currentIndex];
        document.body.style.backgroundImage = `url('${baseUrl + site + '.jpeg'}')`;
    }
}

document.getElementById('playButton').onclick = () => {
    if (sites.length > 0) {
        window.location.href = 'https://' + sites[currentIndex];
    }
};

document.getElementById('prevButton').onclick = () => {
    currentIndex = (currentIndex - 1 + sites.length) % sites.length;
    updateSite();
};

document.getElementById('nextButton').onclick = () => {
    currentIndex = (currentIndex + 1) % sites.length;
    updateSite();
};

// Initialisation
updateSite();