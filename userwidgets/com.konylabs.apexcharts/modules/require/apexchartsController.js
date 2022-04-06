define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
            this._isReady = false;
            
            apexchart_areaChart_defined_global = function(state){
                if (state ==='ready'){
                    this._isReady = true;
                }
            }.bind(this);
            
            this._defaultOpt = {
                chart: {
                    type: 'area',
                    height: 200,
                    toolbar: {
                        show: false
                    }
                }
            };
		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
            defineGetter(this, 'chartType', () => {
                return this._defaultOpt.chart.type;
            });
            defineSetter(this, 'chartType', value => {
                this._defaultOpt.chart.type = value;
            });
            defineGetter(this, 'chartHeight', () => {
                return this._defaultOpt.chart.height;
            });
            defineSetter(this, 'chartHeight', value => {
                this._defaultOpt.chart.height = value;
            });
        },
        
        render: function(data) {
            if (!this._isReady) {
                kony.timer.schedule("delayedChartLoading000", () => { return this.render(data); }, 1, true) ;
                return false;
            } else {
                kony.timer.cancel("delayedChartLoading000");
                this.view.browser.evaluateJavaScript("setChartData(" + JSON.stringify({ opt: this._defaultOpt, data: data }) + ")");
            }
        }
	};
});