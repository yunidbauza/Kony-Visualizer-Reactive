define('ActionList', function () {
    /* jshint esnext: true */
    function liveSummaryUpdate(context, payload) {
        context.commit('liveSummaryUpdate', payload);
    }
    
    function seoUpdate(context, payload) {
        context.commit('seoUpdate', payload);
    }
    
    function compUpdate(context, payload) {
        context.commit('compUpdate', payload);
    }
    
    function yearlySummaryUpdate(context, payload) {
        context.commit('yearlySummaryUpdate', payload);
    }
    
    return {
        liveSummaryUpdate: liveSummaryUpdate,
        seoUpdate: seoUpdate,
        compUpdate: compUpdate,
        yearlySummaryUpdate: yearlySummaryUpdate
    };
});