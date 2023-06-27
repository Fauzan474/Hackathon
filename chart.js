
// CHART 1
const data1 = {
    labels: [
        'Depression',
        'Anxiety',
        'Post Traumatic Stress Disorder',
        'Behavior Problems',
        'Hyperactive'
    ],
    datasets: [{
        label: ' Percentage',
        data: [10.7, 53.6, 3.7, 4.7, 21.1],
        hoverOffset: 4
    }]
};

const config1 = {
    type: 'doughnut',
    data: data1,
};

const chart1 = document.getElementById('1');
new Chart(chart1, config1);


// CHART 2
const data2 = {
    labels: [
        'Halodoc',
        'Alodokter',
        'Klikdokter',
        'Riliv',
        'bicarakan.id',
        'GoodDoctor',
        'Psikologimu',
        'SehatQ',
        'kalm',
        'Ibunda',
    ],
    datasets: [{
        axis: 'y',
        label: ' Percentage of All Respondents',
        data: [79, 55, 28, 19, 14, 14, 14, 12, 10, 10],
        borderWidth: 1
    }]
};

const config2 = {
    type: 'bar',
    data: data2,
    options: {
        indexAxis: 'y',
    }
};


const chart2 = document.getElementById('2');
new Chart(chart2, config2);





