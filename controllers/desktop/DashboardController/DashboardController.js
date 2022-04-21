define({ 
    onInit: function(){
        // Create a new instance of the App and initialize the different components
        var App = require('App');
        
        this._service = require('AppServices');
        this._summary = new App.Summary(this.view.flxSummaryBlock.widgets()); 
        this._seo = new App.SEO([
            this.view.backlink, this.view.external, this.view.local, this.view.global
        ]);
        this._competitors = new App.Competitors(this.view.flxCmp);
        this._yearlySummary = new App.YearlySummary(this.view.apexcharts);

        // Initialize events
        this.view.mySites.onSelection = this.onSiteSelectChange;
        this.view.btnCompRefresh.onClick = this.onCompetitorsRefresh;
        this.view.imgCompRefresh.src = "refresh.svg";
        
        // Mock data population with a timer on the live Summary section
        // and set some initial data for Competitors and SEO data sections
        kony.timer.schedule("livesummarydatarefresh", this.onSummaryDataRefresh, 2, true);
        kony.timer.schedule("compdatarefresh",this.onCompetitorsRefresh, 0, false);
        kony.timer.schedule("seodatarefresh",this.onSEODataRefresh, 0, false);
    },

    onSiteSelectChange: function(){
        this.onSEODataRefresh();
        this.onCompetitorsRefresh();
    },
    
    onSummaryDataRefresh: async function() {
        // Dispatch a liveSummaryUpdate action
        let data = await this._service.callIntSvc(CONST.INTSVC_LIVE_SUMMARY, CONST.OP_GET_LIVE_SUMMARY);
        store.dispatch('liveSummaryUpdate', data);
    },
    
    onCompetitorsRefresh: async function() {
        store.dispatch('isCompetitorsLoading', true);
        // Dispatch a compUpdate action
        let data = await this._service.getDataObject(CONST.OBJ_COMPETITOR);
        store.dispatch('compUpdate', data);
    },
    
    onSEODataRefresh: function() {
        store.dispatch('isSEOLoading', true);
        store.dispatch('isYearlySummaryLoading', true);
        // Dispatch a seoUpdate and a yearlySummaryUpdate actions
        Promise.all([
            this._service.getDataObject(CONST.OBJ_SEO, this.view.mySites.selectedKeyValue[1]),
            this._service.callIntSvc(CONST.INTSVC_YEARLY_SUMMARY, CONST.OP_GET_YEARLY_SUMMARY)
        ]).then(results => {
            store.dispatch('seoUpdate', results[0]);
            store.dispatch('yearlySummaryUpdate', results[1]);
        });
    }
 });
