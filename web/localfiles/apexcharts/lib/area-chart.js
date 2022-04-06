var defaultOpt = {
    series: [{
        data: []
    }],
    labels: [],
    chart: {
        type: 'area',
        height: 200,
        toolbar: {
            show: false
        }
    },
    legend: {
        show: false
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    tooltip: {
        enabled: false,
    }
};

var chart = new ApexCharts(document.querySelector('#chart'), defaultOpt);
chart.render();
/**
 * Renders the chart based on the data pased
 * @param {object} data object containing data values and labels:
 *                 {values: [1,7,3,9,5], labels: ['a', 'b', 'c', 'd', 'e']}
 */
function setChartData(params){
    //smal/ hack to avoid repainting the chart if the values in the series have not changed
    const equals = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);
    if (equals(defaultOpt.series[0].data, params.data.values))
        return;
    
    //set the new values and repaint the chart
    defaultOpt.series = params.data.values ? [{ data: params.data.values }] : [{ data: [] }];
    defaultOpt.labels = params.data.labels;
    defaultOpt.chart = params.opt.chart ? params.opt.chart : defaultOpt.chart;
    
    chart.updateOptions(defaultOpt);
}

window.addEventListener("DOMContentLoaded", function() {
    setTimeout(onbodyload, 0);
}.bind(this), false);

var apexchartsLoadingInterval = null;
var onbodyload = function(){
    if(typeof kony !== "undefined") {
        if (apexchartsLoadingInterval) 
            clearInterval(apexchartsLoadingInterval);
        kony.evaluateJavaScriptInNativeContext("apexchart_areaChart_defined_global('ready')");
    } else if (!apexchartsLoadingInterval) {
        apexchartsLoadingInterval = setInterval(onbodyload, 1000);
    }
}.bind(this);
//end of file