var state = state || {
    selected: "pastaplace.com",
    
    summary: {
        isSummaryLoading: false,
        data: {
            clicks: { prev: 0, actual: 0 },
            impresions: { prev: 0, actual: 0 },
            ctr: { prev: 0, actual: 0 },
            vtc: { prev: 0, actual: 0 },
            totalc: { prev: 0, actual: 0 },
            activity: { prev: 0, actual: 0 }
        }
    },
    yearlySummary: {
        isYearlySummaryLoading: false,
        data: []
    },
    
    seo: {
        isSEOLoading: false,
        data: {
            backlink: {
                value: 0,
                comps: [
                    { site: "x-systems.io", val: 0 },
                    { site: "badburger.net", val: 0 }
                ]
            },
            external: {
                value: 0,
                comps: [
                    { site: "x-systems.io", val: 0 },
                    { site: "badburger.net", val: 0 }
                ]
            },
            local: {
                value: 0,
                comps: [
                    { site: "x-systems.io", val: 0 },
                    { site: "badburger.net", val: 0 }
                ]
            },
            global: {
                value: 0,
                comps: [
                    { site: "x-systems.io", val: 0 },
                    { site: "badburger.net", val: 0 }
                ]
            }
        }
    },
    
    competitors: {
        isCompetitorsLoading: false,
        data: [
            { site: "acme.com", keywords: 0, position: 0, traffic: 0 },
            { site: "skynet.com", keywords: 0, position: 0, traffic: 0 },
            { site: "x-systems.io", keywords: 0, position: 0, traffic: 0 },
            { site: "clearwaters.org", keywords: 0, position: 0, traffic: 0 },
            { site: "paparich.info", keywords: 0, position: 0, traffic: 0 },
            { site: "braveheart.biz", keywords: 0, position: 0, traffic: 0 },
            { site: "badburger.net", keywords: 0, position: 0, traffic: 0 },
            { site: "globalx.com", keywords: 0, position: 0, traffic: 0 },
            { site: "rocketdance.net", keywords: 0, position: 0, traffic: 0 },
            { site: "codewizards.io", keywords: 0, position: 0, traffic: 0 },
            { site: "rotteneggs.com", keywords: 0, position: 0, traffic: 0 },
            { site: "gandalfhat.info", keywords: 0, position: 0, traffic: 0 }
        ]
    }
};