"use strict";

/*---=== import modules ===---*/

import { qS, qSA } from "../functions/querySelector";

// copy button notification

const showInstructionButton = qS(".js-instruction-toggle-button");
const instructionSection = qS(".js-instruction")

if (showInstructionButton) {
    showInstructionButton.addEventListener("click", () => {
        instructionSection.classList.toggle("active");
    });
}


const buttonCopyCode = qSA(".step-3__copy-text");

if (buttonCopyCode) {
    buttonCopyCode.forEach((button) => {
        button.addEventListener("click", (e) => {

            const copyCheck = e.target.querySelector('.step-3__copy-img')
            const copyDone = e.target.querySelector('.step-3__copy-done')

            copyCheck.style.display = 'none'
            copyDone.style.display = 'block'
            button.style.animationName = "github-button"

            copyToClipboard(button)
            
            setTimeout(() => {
                copyCheck.style.display = 'block'
                copyDone.style.display = 'none'
                button.style.animationName = "none"

            }, 2000);
        });
    });
}

function copyToClipboard(button) {
    const textForCopy = button.parentElement.querySelector('.step-3__item-text')
        .textContent.trim();

    navigator.clipboard.writeText(textForCopy);
}


// library settings ApexCharts

const date = new Date()
const month = date.getMonth() + 1
const daysInMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
function getMonth() {
    return month < 10 ? '.0' + month : month
}

const correctMonth = getMonth()

function createData() {
    const arr = []
    for (let i = 1; i < daysInMonth; i++) {
        i % 2 === 0 &&
            arr.push({
                'x': Math.floor(Math.random() * 100),
                'y': i >= 10 || i == 0 ? i + correctMonth : '0' + i + correctMonth
            })
    }
    return arr
}

const data = createData()


var options = {
    series: [{
        name: "Views",
        data: data.map((item) => {
            return item.x
        })
    }],
    chart: {
        type: 'area',
        height: 340,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    colors: ["#000"],
    fill: {
        type: "gradient",
        colors: ['#A0ACFF'],
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    labels: data.map((item) => {
        return item.y
    }),
    xaxis: {
        type: 'datey',
    },
    yaxis: {
        opposite: true
    },
    legend: {
        horizontalAlign: 'left'
    }
};

const chartArea = qS(".js-chart-views-statistic")
if (chartArea) {
    var chartApex = new ApexCharts(chartArea, options);
    chartApex.render();
}


var options2 = {
    series: [{
        name: 'Registaation',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    chart: {
        type: 'bar',
        height: 350,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false
        }
    },
    colors: ["#13161B"],

    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '10%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Jan 03', 'Jan 06', 'Jan 09', 'Jan 12', 'Jan 15', 'Jan 18', 'Jan 24', 'Jan 27', 'Jan 30'],
    },
    yaxis: {
        opposite: true
    },

    fill: {
        opacity: 1
    },
    legend: {
        horizontalAlign: 'left'
    }
};

const chartRows = qS(".js-chart-referral-registration-statistics")
if (chartRows) {
    var chartRowsApex = new ApexCharts((chartRows), options2);

    chartRowsApex.render();

}
