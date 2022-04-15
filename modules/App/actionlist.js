define('ActionList', function () {
    /* jshint esnext: true */
    function liveSummaryUpdate(context, payload) {
        context.commit('liveSummaryUpdate', payload);
    }
    
    function isSEOLoading(context, payload) {
        context.commit('isSEOLoading', payload);
    }
    function seoUpdate(context, payload) {
        context.commit('seoUpdate', payload);
    }
    
    function isCompetitorsLoading(context, payload) {
        context.commit('isCompetitorsLoading', payload);
    }
    function compUpdate(context, payload) {
        context.commit('compUpdate', payload);
    }
    
    function isYearlySummaryLoading(context, payload) {
        context.commit('isYearlySummaryLoading', payload);
    }
    function yearlySummaryUpdate(context, payload) {
        context.commit('yearlySummaryUpdate', payload);
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