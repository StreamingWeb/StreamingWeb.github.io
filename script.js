// URL du fichier raw sur GitHub
const baseUrl = window.location.href.split('/').slice(0, -1).join('/') + '/ressources/';
const sites = [
    { url: 'showboxmovies.net', flags: [] },
    { url: 'sflix.se', flags: [] },
    { url: 'bflixhd.to', flags: [] },
    { url: 'flixflare.to', flags: [] },
    { url: 'swatchseries.is', flags: [] },
    { url: 'fmovies.to', flags: [] },
    { url: 'filmoflix.to', flags: [] },
    { url: 'movies7.to', flags: [] },
    { url: 'favmovies.to', flags: [] },
    { url: 'yeahmovies.to', flags: [] },
    { url: 'soap2dayx2.to', flags: [] },
    { url: 'watchseriesx.to', flags: [] },
    { url: 'sflix.to', flags: [] },
    { url: 'seriestreaming.in', flags: [] },
    { url: 'watch4freemovies.com', flags: [] },
    { url: 'soap2dayhd.co', flags: [] },
    { url: 'papadustream.bz', flags: [] },
    { url: 'soap2dayhd.com', flags: [] },
    { url: 'swatchseries.mx', flags: [] },
    { url: 'watchmovies.nz', flags: [] },
    { url: 'soap2day.ist', flags: [] },
    { url: 'soap2day.pe', flags: [] },
    { url: '123series.bz', flags: [] },
    { url: 'soap2day.tf', flags: [] },
    { url: 'cinehub.wf', flags: [] },
    { url: 'ymovies.cc', flags: [] },
    { url: 'xmovies.ws', flags: [] },
    { url: 'watchseries.im', flags: [] },
    { url: 'watchseries.mn', flags: [] },
    { url: 'watchseries.pe', flags: [] },
    { url: 'watchserieshd.mx', flags: [] },
    { url: 'watchseriesstream.com', flags: [] },
    { url: '123moviesfree.net', flags: [] },
    { url: 'f2movies.to', flags: [] },
    { url: 'vipstream.tv', flags: [] },
    { url: 'upmovies.net', flags: [] },
    { url: '1movieshd.cc', flags: [] },
    { url: '1hd.to', flags: [] },
    { url: '1flix.to', flags: [] }
];

let currentIndex = 0;

function updateSite() {
    if (sites.length > 0) { // Vérifie que la liste des sites n'est pas vide
        const site = sites[currentIndex];
        document.body.style.backgroundImage = `url('${baseUrl + site.url + '.jpeg'}')`;
    }
}

document.getElementById('playButton').onclick = () => {
    if (sites.length > 0) {
        window.location.href = 'https://' + sites[currentIndex].url;
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