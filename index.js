var options1 = {
    series: [{
        "name": "Возвращено",
        "data": [
            225448332.99,
            186629358.76,
            283693497.57,
            143613740.83,
            118323709.81,
            38824527.02,
            100459793.88,
            48701605.72,
            11546785.72,
            12380265.98,
            25633565.9,
            0
        ]
    }, {
        "name": "Выплачивается",
        "data": [
            13554456.01,
            51688494.9,
            115994866,
            30258701.16,
            46565609.19,
            36330751.98,
            87368379.24,
            86261024.04,
            268692240.28,
            358836050.83,
            153231279.1,
            10285365
        ]
    }, {
        "name": "Просрочка",
        "data": [
            0,
            0,
            0,
            45258.2,
            0,
            0,
            0,
            0,
            0,
            102062.19,
            0,
            0
        ]
    },
        {
            "name": "На взыскании",
            "data": [
                6000000,
                8587542.34,
                3372781.43,
                6936861.81,
                17167335,
                1245393,
                5377908.88,
                29749383.24,
                0,
                0,
                0,
                0
            ]
    }],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 10,
            borderRadiusApplication: 'end', // 'around', 'end'
            borderRadiusWhenStacked: 'last', // 'all', 'last'
            dataLabels: {
                total: {
                    enabled: false,
                    style: {
                        fontSize: '13px',
                        fontWeight: 900
                    }
                }
            }
        },
    },
    xaxis: {
        categories: ['Июнь 2024', 'Июль 2024', 'Август 2024', 'Сентябрь 2024', 'Октябрь 2024', 'Ноябрь 2024', 'Декабрь 2024', 'Январь 2025', 'Февраль 2025', 'Март 2025', 'Апрель 2025', 'Май 2025'],
    },
    yaxis: {
        opposite: true,
        labels: {
            formatter: function (value) {
                if (+value > 1_000_000_000) {
                    return (+value / 1_000_000_000).toFixed(2) + ' млрд' ;
                }
                else if (+value > 1_000_000) {
                    return (+value / 1_000_000).toFixed(2) + ' млн' ;
                }
                else if (+value > 1_000) {
                    return (+value / 1_000).toFixed(2) + ' тыс' ;
                }
                else {
                    return +value.toFixed(2);
                }
            }
        }
    },
    legend: {
        position: 'bottom',
        offsetY: 40 ,

    },
    fill: {
        opacity: 1
    },
    grid: {
        strokeDashArray: 3,
        xaxis: {
            lines: {
                show: true
            }
        }
    },
    dataLabels: {
        enabled: false
    }
};

var chart1 = new ApexCharts(document.querySelector(".Z"), options1);
chart1.render();

var options2 = {
    series: [1405138491.00 , 432936517.19 , 6325069144.00],
    chart: {
        type: 'donut',
    },
    labels: ['Исполнение контракта', 'Покупка комерческой недвижимости', 'Пополнение оборотных средств'],
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }],
    legend: {
        position: 'bottom',
    }
};

var chart2 = new ApexCharts(document.querySelector(".X"), options2);
chart2.render();

function chench(period, targetId) {
    const btn = document.querySelector('.V .button-active')
    btn.classList.remove('button-active')

    const targetBtn = document.getElementById(targetId)
    targetBtn.classList.add('button-active')

    if (period === 'НЕДЕЛЯ') {
        options1.series = [
            {
                "name": "Возвращено",
                "data": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                "name": "Выплачивается",
                "data": [
                    10987567,
                    81830479,
                    0,
                    0,
                    0,
                    0,
                    9524412
                ]
            },
            {
                "name": "Просрочка",
                "data": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                "name": "На взыскании",
                "data": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        ]

        options1.xaxis.categories = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
        chart1.updateOptions(options1)
    }
    if (period === 'МЕСЯЦ') {
        options1.series = [
            {
                "name": "Возвращено",
                "data": [
                    0,
                    0,
                    0,
                    2000000,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    11600000,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                "name": "Выплачивается",
                "data": [
                    0,
                    0,
                    7146515,
                    3000000,
                    11400000,
                    7793102,
                    0,
                    0,
                    0,
                    0,
                    5700836,
                    7639434,
                    1447444,
                    5816445,
                    0,
                    0,
                    9850000,
                    11340383,
                    2975000,
                    0,
                    0,
                    0,
                    0,
                    4897798,
                    10987567,
                    81830479,
                    0,
                    0,
                    0,
                    0,
                    9524412
                ]
            },
            {
                "name": "Просрочка",
                "data": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            },
            {
                "name": "На взыскании",
                "data": [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        ]

        options1.xaxis.categories = ['1 апреля', '2 апреля', '3 апреля', '4 апреля', '5 апреля', '6 апреля', '7 апреля', '8 апреля', '9 апреля', '10 апреля', '11 апреля', '12 апреля', '13 апреля', '14 апреля', '15 апреля', '16 апреля', '17 апреля', '18 апреля', '19 апреля', '20 апреля', '21 апреля', '22 апреля', '23 апреля', '24 апреля', '25 апреля', '26 апреля', '27 апреля', '28 апреля', '29 апреля', '30 апреля', '31 апреля']
        chart1.updateOptions(options1)
    }
    if (period === 'КВАРТАЛ') {
        options1.series = [
            {
                "name": "Возвращено",
                "data": [
                    12957064.7,
                    29239478.42,
                    0
                ]
            },
            {
                "name": "Выплачивается",
                "data": [
                    358259252.11,
                    149625366.58,
                    107240256
                ]
            },
            {
                "name": "Просрочка",
                "data": [
                    102062.19,
                    0,
                    0
                ]
            },
            {
                "name": "На взыскании",
                "data": [
                    0,
                    0,
                    0
                ]
            }
        ]

        options1.xaxis.categories = ['1 квартал', '2 квартал', '3 квартал', '4 квартал']
        chart1.updateOptions(options1)
    }
    if (period === 'ВСЕ ВРЕМЯ') {
        options1.series = [
            {
                "name": "Возвращено",
                "data": [
                    69700000,
                    583902489.08,
                    1457963762.66,
                    2035300606.42,
                    1961248360.63,
                    108465034.72
                ]
            },
            {
                "name": "Выплачивается",
                "data": [
                    0,
                    11034102.24,
                    74787967.77,
                    180527696.73,
                    512363572,
                    964058038.85
                ]
            },
            {
                "name": "Просрочка",
                "data": [
                    0,
                    0,
                    0,
                    0,
                    153604.79,
                    102062.19
                ]
            },
            {
                "name": "На взыскании",
                "data": [
                    0,
                    3640144.48,
                    34910752.96,
                    252994803.85,
                    102797797.58,
                    29749383.24
                ]
            }
        ]

        options1.xaxis.categories = ['2020', '2021', '2022', '2023', '2024', '2025']
        chart1.updateOptions(options1)
    }
    if (period === 'ЗА ГОД') {
        options1.series = [
            {
                "name": "Возвращено",
                "data": [
                    225448332.99,
                    186629358.76,
                    283693497.57,
                    143613740.83,
                    118323709.81,
                    38824527.02,
                    100459793.88,
                    48701605.72,
                    11546785.72,
                    12380265.98,
                    25633565.9,
                    0
                ]
            },
            {
                "name": "Выплачивается",
                "data": [
                    13554456.01,
                    51688494.9,
                    115994866,
                    30258701.16,
                    46565609.19,
                    36330751.98,
                    87368379.24,
                    86261024.04,
                    268692240.28,
                    358836050.83,
                    153231279.1,
                    10285365
                ]
            },
            {
                "name": "Просрочка",
                "data": [
                    0,
                    0,
                    0,
                    45258.2,
                    0,
                    0,
                    0,
                    0,
                    0,
                    102062.19,
                    0,
                    0
                ]
            },
            {
                "name": "На взыскании",
                "data": [
                    6000000,
                    8587542.34,
                    3372781.43,
                    6936861.81,
                    17167335,
                    1245393,
                    5377908.88,
                    29749383.24,
                    0,
                    0,
                    0,
                    0
                ]
            }
        ]

        options1.xaxis.categories = ['Июнь 2024', 'Июль 2024', 'Август 2024', 'Сентябрь 2024', 'Октябрь 2024', 'Ноябрь 2024', 'Декабрь 2024', 'Январь 2025', 'Февраль 2025', 'Март 2025', 'Апрель 2025', 'Май 2025']
        chart1.updateOptions(options1)
    }
}

document.getElementById('info').addEventListener('click',openPopup)
document.getElementById('X').addEventListener('click',closePopup)

function openPopup() {
    let popup = document.querySelector('.popup');
    let begraund = document.querySelector('.AA');
    popup.classList.add('open');
    begraund.classList.add('open');
}
function closePopup() {
    let popup = document.querySelector('.popup');
    let begraund = document.querySelector('.AA');
    popup.classList.remove('open');
    begraund.classList.remove('open');
}
