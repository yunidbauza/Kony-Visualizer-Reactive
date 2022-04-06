/**
* This module is used to generate random blocks of data
* to populate the different visual components.
*
*  function compPayload  => generates the data for the Competitors segment
*  function liveSummaryPayload => generates the payload for the 6 live summary tiles
*  function yearlySummaryPayload => generates dummy data for the area chart
*  function seoPayload => generates the payload for the 4 SEO tiles
*
*/

var demo = demo || function() {
    const seoTiles = ['backlink', 'external', 'local', 'global'];
    const sitelist = [
        'acme.com', 'skynet.com', 'x-systems.io', 'clearwaters.org',
        'paparich.info', 'braveheart.biz', 'badburger.net', 'globax.com', 
        'rocketdance.net', 'codewizards.io', 'rotteneggs.com', 'gandalfhat.info'
    ];
    
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    function compPayload() {
        let array = shuffle([...sitelist]);
        let positions = shuffle([1,2,3,4,5,6,7,8,9,10,11,12]);
        
        array = [...sitelist].map((entry, i) => {
            return {
                site: entry,
                keywords: (Math.random() * 100).toFixed(), 
                position: positions[i].toString(), 
                traffic: (Math.random() * 1000).toFixed()
            };
        });
        
        return array;
    }
    
    function liveSummaryPayload() {
        return Array.from({length: 6}, () => (Math.random() * 100).toFixed(2));
    }
    
    function yearlySummaryPayload() {
        return Array.from({length: 12}, () => Math.floor(Math.random() * 100));
    }
    
    function seoPayload(selected) {
        var randomSites = [];
        let site = sitelist[Math.floor(Math.random() * 12)];
        for (i = 0; i < 3; i++){
            while (randomSites.includes(site)) {
                site = sitelist[Math.floor(Math.random() * 12)];
            }
            randomSites.push(site);
        }
        
        let self = this;
        let payload = {
            selected: selected,
            data: seoTiles.reduce((accumulator, v, i) => {
              return {...accumulator, [v]: {
                      value: Math.floor((Math.random() * 1000)),
                      comps: [
                            { site: randomSites[0], val: Math.floor((Math.random() * 1000)) },
                            { site: randomSites[1], val: Math.floor((Math.random() * 1000)) }
                      ]
                     }};
            }, {})
            
        };
        
        return payload;
    }
    
    return {
        seoPayload: seoPayload,
        yearlySummaryPayload: yearlySummaryPayload,
        compPayload: compPayload,
        liveSummaryPayload: liveSummaryPayload
    };
    
}();