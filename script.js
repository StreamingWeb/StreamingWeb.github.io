// URL du fichier raw sur GitHub
const allSites = [
    { url: 'cinehub.wf', flags: ['en', 'movie', 'serie', '360p', '720p', '1080p', 'ads', 'web'] },
    { url: 'showboxmovies.net', flags: ['en', 'movie', 'serie', '360p', '720p', '1080p', 'ads', 'web'] },
    { url: 'sflix.se', flags: ['en', 'movie', 'serie', '360p', '720p', '1080p', 'ads', 'web'] },
    { url: 'bflixhd.to', flags: ['en', 'movie', 'serie', '360p', '720p', '1080p', 'ads', 'web'] },
    { url: 'flixflare.to', flags: ['en', 'movie', 'serie', '360p', '720p', '1080p', 'ads', 'web'] },
    { url: 'swatchseries.is', flags: ['en', '360p', 'ads', 'web'] },
    { url: 'fmovies.to', flags: ['en', '360p', 'ads', 'web'] },
    { url: 'filmoflix.to', flags: ['fr', 'vost-fr', '360p', 'ads', 'web'] },
    { url: 'movies7.to', flags: ['en', '360p', 'ads', 'web'] },
    { url: 'favmovies.to', flags: ['en', '360p', 'ads', 'web'] },
    { url: 'yeahmovies.to', flags: ['en', '360p', 'ads', 'web'] },
    { url: 'soap2dayx2.to', flags: ['en', '360p', 'ads', 'web'] },
    { url: 'watchseriesx.to', flags: ['en', 'movie', 'serie', '360p', '720p', '1080p', 'ads', 'web'] },
    { url: 'sflix.to', flags: ['en', '360p', 'ads', 'web'] },
    { url: 'seriestreaming.in', flags: ['fr', '360p', 'ads', 'web'] },
    { url: 'watch4freemovies.com', flags: ['360p', 'ads', 'web'] },
    { url: 'soap2dayhd.co', flags: ['360p', 'ads', 'web'] },
    { url: 'papadustream.bz', flags: ['360p', 'ads', 'web'] },
    { url: 'soap2dayhd.com', flags: ['360p', 'ads', 'web'] },
    { url: 'swatchseries.mx', flags: ['360p', 'ads', 'web'] },
    { url: 'watchmovies.nz', flags: ['360p', 'ads', 'web'] },
    { url: 'soap2day.ist', flags: ['360p', 'ads', 'web'] },
    { url: 'soap2day.pe', flags: ['360p', 'ads', 'web'] },
    { url: '123series.bz', flags: ['360p', 'ads', 'web'] },
    { url: 'soap2day.tf', flags: ['360p', 'ads', 'web'] },
    { url: 'ymovies.cc', flags: ['360p', 'ads', 'web'] },
    { url: 'xmovies.ws', flags: ['360p', 'ads', 'web'] },
    { url: 'watchseries.im', flags: ['360p', 'ads', 'web'] },
    { url: 'watchseries.mn', flags: ['360p', 'ads', 'web'] },
    { url: 'watchseries.pe', flags: ['360p', 'ads', 'web'] },
    { url: 'watchserieshd.mx', flags: ['360p', 'ads', 'web'] },
    { url: 'watchseriesstream.com', flags: ['360p', 'ads', 'web'] },
    { url: '123moviesfree.net', flags: ['360p', 'ads', 'web'] },
    { url: 'f2movies.to', flags: ['360p', 'ads', 'web'] },
    { url: 'vipstream.tv', flags: ['360p', 'ads', 'web'] },
    { url: 'upmovies.net', flags: ['360p', 'ads', 'web'] },
    { url: '1movieshd.cc', flags: ['360p', 'ads', 'web'] },
    { url: '1hd.to', flags: ['360p', 'ads', 'web'] },
    { url: '1flix.to', flags: ['360p', 'ads', 'web'] },
    { url: '123-movies.vc', flags: ['movie', 'serie', '360p', '720p', '1080p', 'ads', 'web'] },
    { url: '123moviestv.net', flags: ['360p', 'ads', 'web'] }
];

let currentIndex = 0;
let flags = window.location.href.split('?').length > 1 ? window.location.href.split('?').pop().split('&') : ['web'];

let sites = allSites.filter(site => flags.every(flag => site.flags.includes(flag)));

function updateSite() {

    let noneDisplay = [];

    if (sites.length > 0) { // Vérifie que la liste des sites n'est pas vide
        noneDisplay = ['notfound'];
        
        const site = sites[currentIndex];
        document.body.style.backgroundImage = `url('${'./ressources/' + site.url + '.jpeg'}')`;
    } else {
        noneDisplay = ['playButton', 'prevButton', 'nextButton'];
    }

    noneDisplay.forEach(id => document.getElementById(id).style.display = 'none');
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

document.getElementById('back-home').onclick = () => {
    window.location.href = window.location.href.split('?')[0];
    updateSite();
};

// Initialisation
updateSite();