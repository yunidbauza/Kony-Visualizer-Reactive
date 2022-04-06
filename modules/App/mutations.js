define('Mutations', function () {
    /* jshint esnext: true */
    function liveSummaryUpdate(state, payload) {
        
        let summary = utils.clone(self.state.summary);
        
        let i = 0;
        for (let entry in summary) {
            let actual = summary[entry].actual;
            summary[entry].actual = payload[i];
            summary[entry].prev = actual;
            i++;
        }
        state.summary = summary;
        return state;
    }
    
    function seoUpdate(state, payload) {
        state.selected = payload.selected;
        
        let seo = utils.clone(self.state.seo);
        
        for (let entry in seo) {
            seo[entry].value = payload.data[entry].value;
            seo[entry].comps = payload.data[entry].comps;
        }
        state.seo = seo;
        return state;
    }
    
    function compUpdate(state, payload) {
        state.competitors = payload;
        return state;
    }
    
    function yearlySummaryUpdate(state, payload) {
        state.yearlySummary = payload;
        return state;
    }
    
    return {
        liveSummaryUpdate: liveSummaryUpdate,
        seoUpdate: seoUpdate,
        compUpdate: compUpdate,
        yearlySummaryUpdate: yearlySummaryUpdate
    };
});