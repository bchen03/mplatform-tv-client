const setChart = (networks, metric1, metric2, series) => {
    return ({
        "chart": {
            "type": "bubble",
            "plotBorderWidth": 1,
            "zoomType": "xy",
            "height": 400
          },
           "legend": {
               "enabled": false
           },
           "title": {
               //"text": "All Networks Net Reach vs Affinity Index"
               "text": `${networks} ${metric1} vs ${metric2}`
           },
           "subtitle": {
               "text": "<span style='color: #00c0ef'>Total Audience 71,402,088 households</span>"
           },
           "xAxis": {
               "gridLineWidth": 0,
               "title": {
                   "text": `${metric2}`
               },
               "labels": {
                   "format": "{value}"
               },
               "pplotLines": [{
                   "color": "black",
                   "dashStyle": "dot",
                   "width": 2,
                   "value": 65,
                   "label": {
                       "rotation": 0,
                       "y": 15,
                       "style": {
                           "fontStyle": "italic"
                       },
                       "text": "Safe fat intake 65g/day"
                   },
                   "zIndex": 3
               }]
           },
           "yAxis": {
               "startOnTick": false,
               "endOnTick": false,
               "title": {
                   "text": `${metric1}`
               },
               "labels": {
                   "format": "{value}"
               },
               "maxPadding": 0.2,
               "pplotLines": [{
                   "color": "black",
                   "dashStyle": "dot",
                   "width": 2,
                   "value": 50,
                   "label": {
                       "align": "right",
                       "style": {
                           "fontStyle": "italic"
                       },
                       "text": "Safe sugar intake 50g/day",
                       "x": -10
                   },
                   "zIndex": 3
               }]
           },
           "tooltip": {
               "useHTML": true,
               "headerFormat": "<table>",
               "pointFormat": "<tr><th colspan='2'><h3>{point.network}</h3></th></tr><tr><th>concentration:</th><td>{point.concentration}g</td></tr><tr><th>affinity index:</th><td>{point.affinity}g</td></tr><tr><th>net reach:</th><td>{point.reach}%</td></tr>",
               "footerFormat": "</table>",
               "followPointer": true
           },
           "pplotOptions": {
               "series": {
                   "dataLabels": {
                       "enabled": true,
                       "format": "{point.name}"
                   }
               }
           },
           "series":  series
    });
}  
  
const setSeries = (xName, yName, series) => {
    const results = series.map(item => {
        return Object.assign({}, item, { x: item[xName], y: item[yName] })
        // return { ...item, x: item[xName], y: item[yName] };
    });

    return (
        [{ "data": results }]
    );
};

export {
    setChart,
    setSeries
};