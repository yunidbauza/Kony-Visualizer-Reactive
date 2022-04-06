define({ 
    onInit: function(){
        // Create a new instance of the App and initialize th differenc components
        var App = require('App');
        
        this._summary = new App.Summary(this.view.flxSummaryBlock.widgets()); 
        this._seo = new App.SEO([
            this.view.backlink, this.view.external, this.view.local, this.view.global
        ]);
        this._competitors = new App.Competitors(this.view.sgCompetitors);
        this._yearlySummary = new App.YearlySummary(this.view.apexcharts);
        
        
        // Initialize events
        this.view.mySites.onSelection = this.onSiteSelectChange;
        this.view.btnCompRefresh.onClick = this.onCompetitorsRefresh;
        this.view.imgCompRefresh.src = "refresh.svg";
        
        // Mock data population with a timer on the live Summary section
        // and set somo initial data for Competitors and SEO data sections
        kony.timer.schedule("livesummarydatarefresh", this.onSummaryDataRefresh, 3, true);
        kony.timer.schedule("compdatarefresh",this.onCompetitorsRefresh, 0, false);
        kony.timer.schedule("seodatarefresh",this.onSEODataRefresh, 0, false);
    },

    onSiteSelectChange: function(){
        this.onSEODataRefresh();
        this.onCompetitorsRefresh();
        this.onSummaryDataRefresh();
    },
    
    onSummaryDataRefresh: function() {
        // Dispatch a liveSummaryUpdate action
        store.dispatch('liveSummaryUpdate', demo.liveSummaryPayload());
    },
    
    onCompetitorsRefresh: function() {
        // Dispatch a compUpdate action
        store.dispatch('compUpdate', demo.compPayload());
    },
    
    onSEODataRefresh: function() {
        // Dispatch a seoUpdate and a yearlySummaryUpdate actions
        store.dispatch('seoUpdate', demo.seoPayload(this.view.mySites.selectedKeyValue[1]));
        store.dispatch('yearlySummaryUpdate', demo.yearlySummaryPayload());
    }
 });