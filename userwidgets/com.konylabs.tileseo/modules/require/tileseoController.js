define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
        
        /**
         * A function to set the values of the component properties
         * @param {string} site
         * @param {object} data
         * sample:
         * {
         *      value: 0,
         *      comps: [
         *          { site: "x-systems.io", val: 0 },
         *          { site: "badburger.net", val: 0 },
         *          { site: "rotteneggs.com", val: 0 }
         *      ]
         * }
         */
        setData: function(site, data) {
            this.view.tileValue.text = (data.value).toString();
            this.view.tileSite.text = site;
            this.view.site1.text = data.comps[0].site;
            this.view.site1Val.text = data.comps[0].val.toString();
            this.view.site2.text = data.comps[1].site;
            this.view.site2Val.text = data.comps[1].val.toString();
        }
	};
});