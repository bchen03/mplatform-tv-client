
import _ from 'lodash';

const setChart = (networks, metric1, metric2, template, series) => {
    console.log("==> setChart template: ", template, ", series: ", series);

    let clone = _.merge(
        {},
        template,
        {title: {text: networks + " " + metric1 + " vs " + metric2}}, 
        {yAxis: {title: {text: metric1}}},
        {xAxis: {title: {text: metric2}}},
        {series: series}
    );
    console.log("merge ==> ", clone);

    return clone;
}  
  
const setData = (metric1, metric2, data) => {
    const results = data.map(item => {
        return Object.assign({}, item, { x: item[metric2], y: item[metric1] })
        // return { ...item, x: item[xName], y: item[yName] };
    });

    return (
        [{ "data": results }]
    );
};

const setTop6Chart = (metric, template, names, values) => {
    let clone = _.merge(
        {},
        template,
        {title: {text: "Top 6 Networks By " + metric}},
        {xAxis: {categories: names}},
        {series: [{data: values}]} 
    );
    return clone;
}

export {
    setChart,
    setData,
    setTop6Chart
};