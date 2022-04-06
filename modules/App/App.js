define('App', function () {
    /* jshint esnext: true */
    var Store = require('Store');
    
    class MasterComponent {
        constructor(props = {}) {
            let self = this;

            // We're setting a render function as the one set by whatever inherits this base
            // class or setting it to an empty by default. This is so nothing breaks if someone
            // forgets to set it.
            this.render = this.render || function() {};

            // If there's a store passed in, subscribe to the state change
            if (props.store instanceof Store) {
                props.store.events.subscribe('stateChange', () => self.render());
            }

            // Store the view object to attach the render to if set
            if (props.hasOwnProperty('element')) {
                this.element = props.element;
            }
        }
    }
    
    class Summary extends MasterComponent {
        constructor(arr) {
            super({
                store, //global variable
                element: arr
            });
        }

        render() {
            this.element.forEach(i => {
                i.setData(store.state.summary[i.id]);
            });
        }
    }
        
    class SEO extends MasterComponent {
        constructor(arr) {
            super({
                store, //global variable
                element: arr
            });
        }

        render() {
            this.element.forEach(i => {
                i.setData(store.state.selected, store.state.seo[i.id]);
            });
        }
    }
    
    class Competitors extends MasterComponent{
        constructor(segment) {
            super({
                store, //global variable
                element: segment
            });
        }

        render() {
            this.element.removeAll();
            this.element.widgetDataMap = {
                lbCompetitor: "site",
                lbKeywords: "keywords",
                lbPosition: "position",
                lbTraffic: "traffic"
            };
            this.element.setData(store.state.competitors);
        }
    }
    
    class YearlySummary extends MasterComponent{
        constructor(arr) {
            super({
                store, //global variable
                element: arr
            });
        }

        render() {
            let labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            this.element.render({
                values: store.state.yearlySummary,
                labels: labels
            });
        }
    }
    
    return {
        Summary: Summary,
        SEO: SEO,
        Competitors: Competitors,
        YearlySummary
    };
});