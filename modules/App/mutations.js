define('Mutations', function () {
    /* jshint esnext: true */
    /* Summary mutations*/
    function liveSummaryUpdate(state, payload) {
        let summary = utils.clone(self.state.summary);
        
        let i = 0;
        for (let entry in summary.data) {
            let actual = summary.data[entry].actual;
            summary.data[entry].actual = payload[i];
            summary.data[entry].prev = actual;
            i++;
        }
        state.summary = summary;
        return state;
    }
    
    /* SEO mutations*/
    function isSEOLoading(state, payload) {
        let seo = utils.clone(self.state.seo);
        seo.isSEOLoading = payload;
        state.seo = seo;
        return state;
    }
    function seoUpdate(state, payload) {
        state.selected = payload.selected;
        
        let seo = utils.clone(self.state.seo);
        
        for (let entry in seo.data) {
            seo.data[entry].value = payload.data[entry].value;
            seo.data[entry].comps = payload.data[entry].comps;
        }
        seo.isSEOLoading = false;
        state.seo = seo;
        return state;
    }
    
    /* Competitors mutations*/
    function isCompetitorsLoading(state, payload) {
        let competitors = utils.clone(self.state.competitors);
        competitors.isCompetitorsLoading = payload;
        state.competitors = competitors;
        return state;
    }
    function compUpdate(state, payload) {
        let competitors = utils.clone(self.state.competitors);
        competitors.data = payload;
        competitors.isCompetitorsLoading = false;
        state.competitors = competitors;
        return state;
    }
    
    /* Yearly Summary mutations*/
    function isYearlySummaryLoading(state, payload) {
        let yearlySummary = utils.clone(self.state.yearlySummary);
        yearlySummary.isYearlySummaryLoading = payload;
        state.yearlySummary = yearlySummary;
        return state;
    }
    function yearlySummaryUpdate(state, payload) {
        let yearlySummary = utils.clone(self.state.yearlySummary);
        yearlySummary.data = payload;
        yearlySummary.isYearlySummaryLoading = false;
        state.yearlySummary = yearlySummary;
        return state;
    }
    
    return {
        liveSummaryUpdate: liveSummaryUpdate,
        
        isSEOLoading: isSEOLoading,
        seoUpdate: seoUpdate,
        
        isCompetitorsLoading: isCompetitorsLoading,
        compUpdate: compUpdate,
        
        isYearlySummaryLoading: isYearlySummaryLoading,
        yearlySummaryUpdate: yearlySummaryUpdate
    };
});