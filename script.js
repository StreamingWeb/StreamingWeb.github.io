// URL du fichier raw sur GitHub
const baseUrl = window.location.href.split('/').slice(0, -1).join('/') + '/ressources/';
const sites = [
    { url: 'cinehub.wf', flags: ['movie', 'serie', '360p', '720p', '1080p', 'ads'] },
    { url: 'showboxmovies.net', flags: ['movie', 'serie', '360p', '720p', '1080p', 'ads'] },
    { url: 'sflix.se', flags: ['movie', 'serie', '360p', '720p', '1080p', 'ads'] },
    { url: 'bflixhd.to', flags: ['movie', 'serie', '360p', '720p', '1080p', 'ads'] },
    { url: 'flixflare.to', flags: ['movie', 'serie', '360p', '720p', '1080p', 'ads'] },
    { url: 'swatchseries.is', flags: ['360p', 'ads'] },
    { url: 'fmovies.to', flags: ['360p', 'ads'] },
    { url: 'filmoflix.to', flags: ['360p', 'ads'] },
    { url: 'movies7.to', flags: ['360p', 'ads'] },
    { url: 'favmovies.to', flags: ['360p', 'ads'] },
    { url: 'yeahmovies.to', flags: ['360p', 'ads'] },
    { url: 'soap2dayx2.to', flags: ['360p', 'ads'] },
    { url: 'watchseriesx.to', flags: ['movie', 'serie', '360p', '720p', '1080p', 'ads'] },
    { url: 'sflix.to', flags: ['360p', 'ads'] },
    { url: 'seriestreaming.in', flags: ['360p', 'ads'] },
    { url: 'watch4freemovies.com', flags: ['360p', 'ads'] },
    { url: 'soap2dayhd.co', flags: ['360p', 'ads'] },
    { url: 'papadustream.bz', flags: ['360p', 'ads'] },
    { url: 'soap2dayhd.com', flags: ['360p', 'ads'] },
    { url: 'swatchseries.mx', flags: ['360p', 'ads'] },
    { url: 'watchmovies.nz', flags: ['360p', 'ads'] },
    { url: 'soap2day.ist', flags: ['360p', 'ads'] },
    { url: 'soap2day.pe', flags: ['360p', 'ads'] },
    { url: '123series.bz', flags: ['360p', 'ads'] },
    { url: 'soap2day.tf', flags: ['360p', 'ads'] },
    { url: 'ymovies.cc', flags: ['360p', 'ads'] },
    { url: 'xmovies.ws', flags: ['360p', 'ads'] },
    { url: 'watchseries.im', flags: ['360p', 'ads'] },
    { url: 'watchseries.mn', flags: ['360p', 'ads'] },
    { url: 'watchseries.pe', flags: ['360p', 'ads'] },
    { url: 'watchserieshd.mx', flags: ['360p', 'ads'] },
    { url: 'watchseriesstream.com', flags: ['360p', 'ads'] },
    { url: '123moviesfree.net', flags: ['360p', 'ads'] },
    { url: 'f2movies.to', flags: ['360p', 'ads'] },
    { url: 'vipstream.tv', flags: ['360p', 'ads'] },
    { url: 'upmovies.net', flags: ['360p', 'ads'] },
    { url: '1movieshd.cc', flags: ['360p', 'ads'] },
    { url: '1hd.to', flags: ['360p', 'ads'] },
    { url: '1flix.to', flags: ['360p', 'ads'] },
    { url: '123-movies.vc', flags: ['movie', 'serie', '360p', '720p', '1080p', 'ads'] },
    { url: '123moviestv.net', flags: ['360p', 'ads'] }
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