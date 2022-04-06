define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {

		},
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {

		},
        
        /**
         * A function to set the values of the component properties
         *
         * @param {object} data
         * sample:
         * {
         * 		actual: 12,
         *		prev: 10
         * }
         */
        setData: function(data) {
            this.view.tileValue.text = (data.actual).toString();
            let percentage = data.prev === 0 ? (data.actual === 0 ? 0 : data.actual) : 100 * ((data.actual - data.prev) / data.prev); 
            this.view.tilePercentage.text = Math.abs(percentage).toFixed(2).toString() + " %";
            if (percentage < 0) {
                this.view.tilePercentage.skin = "sknTilePercentageDown";
            } else {
                this.view.tilePercentage.skin = "sknTilePercentageUp";
            }
        }
	};
});