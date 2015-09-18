var option = {
    title: {
        text: '未来一周气温变化',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['最高气温', '最低气温']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        }
    }],
    series: [{
        name: '最高气温',
        type: 'line',
        data: [11, 11, 15, 13, 12, 13, 10],
        markPoint: {
            data: [{
                type: 'max',
                name: '最大值'
            }, {
                type: 'min',
                name: '最小值'
            }]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }, {
        name: '最低气温',
        type: 'line',
        data: [1, -2, 2, 5, 3, 2, 0],
        markPoint: {
            data: [{
                name: '周最低',
                value: -2,
                xAxis: 1,
                yAxis: -1.5
            }]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }]
};

require.config({
    paths: {
        echarts: '/libs/echarts/build/dist'
    }
});

require(
    [
        'echarts',
        'echarts/chart/line', // 按需加载所需图表，如需动态类型切换功能，别忘了同时加载相应图表
        'echarts/chart/bar'
    ],
    function(ec) {
        var myChart = ec.init(document.getElementById('main'));

        myChart.setOption(option);
    }
);






var idx = 1;
var option1 = {
    timeline: {
        data: [
            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', {
                name: '2013-06-01',
                symbol: 'emptyStar6',
                symbolSize: 8
            },
            '2013-07-01', '2013-08-01', '2013-09-01', '2013-10-01', '2013-11-01', {
                name: '2013-12-01',
                symbol: 'star6',
                symbolSize: 8
            }
        ],
        label: {
            formatter: function(s) {
                return s.slice(0, 7);
            }
        }
    },
    options: [{
        title: {
            text: '浏览器占比变化',
            subtext: '纯属虚构'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            data: ['Chrome', 'Firefox', 'Safari', 'IE9+', 'IE8-']
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1700
                        }
                    }
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [{
            name: '浏览器（数据纯属虚构）',
            type: 'pie',
            center: ['50%', '45%'],
            radius: '50%',
            data: [{
                value: idx * 128 + 80,
                name: 'Chrome'
            }, {
                value: idx * 64 + 160,
                name: 'Firefox'
            }, {
                value: idx * 32 + 320,
                name: 'Safari'
            }, {
                value: idx * 16 + 640,
                name: 'IE9+'
            }, {
                value: idx++ * 8 + 1280,
                name: 'IE8-'
            }]
        }]
    }, {
        series: [{
            name: '浏览器（数据纯属虚构）',
            type: 'pie',
            data: [{
                value: idx * 128 + 80,
                name: 'Chrome'
            }, {
                value: idx * 64 + 160,
                name: 'Firefox'
            }, {
                value: idx * 32 + 320,
                name: 'Safari'
            }, {
                value: idx * 16 + 640,
                name: 'IE9+'
            }, {
                value: idx++ * 8 + 1280,
                name: 'IE8-'
            }]
        }]
    }, {
        series: [{
            name: '浏览器（数据纯属虚构）',
            type: 'pie',
            data: [{
                value: idx * 128 + 80,
                name: 'Chrome'
            }, {
                value: idx * 64 + 160,
                name: 'Firefox'
            }, {
                value: idx * 32 + 320,
                name: 'Safari'
            }, {
                value: idx * 16 + 640,
                name: 'IE9+'
            }, {
                value: idx++ * 8 + 1280,
                name: 'IE8-'
            }]
        }]
    }, {
        series: [{
            name: '浏览器（数据纯属虚构）',
            type: 'pie',
            data: [{
                value: idx * 128 + 80,
                name: 'Chrome'
            }, {
                value: idx * 64 + 160,
                name: 'Firefox'
            }, {
                value: idx * 32 + 320,
                name: 'Safari'
            }, {
                value: idx * 16 + 640,
                name: 'IE9+'
            }, {
                value: idx++ * 8 + 1280,
                name: 'IE8-'
            }]
        }]
    }, {
        series: [{
            name: '浏览器（数据纯属虚构）',
            type: 'pie',
            data: [{
                value: idx * 128 + 80,
                name: 'Chrome'
            }, {
                value: idx * 64 + 160,
                name: 'Firefox'
            }, {
                value: idx * 32 + 320,
                name: 'Safari'
            }, {
                value: idx * 16 + 640,
                name: 'IE9+'
            }, {
                value: idx++ * 8 + 1280,
                name: 'IE8-'
            }]
        }]
    }, {
        series: [{
            name: '浏览器（数据纯属虚构）',
            type: 'pie',
            data: [{
                value: idx * 128 + 80,
                name: 'Chrome'
            }, {
                value: idx * 64 + 160,
                name: 'Firefox'
            }, {
                value: idx * 32 + 320,
                name: 'Safari'
            }, {
                value: idx * 16 + 640,
                name: 'IE9+'
            }, {
                value: idx++ * 8 + 1280,
                name: 'IE8-'
            }]
        }]
    }, {
        series: [{
            name: '浏览器（数据纯属虚构）',
            type: 'pie',
            data: [{
                value: idx * 128 + 80,
                name: 'Chrome'
            }, {
                value: idx * 64 + 160,
                name: 'Firefox'
            }, {
                value: idx * 32 + 320,
                name: 'Safari'
            }, {
                value: idx * 16 + 640,
                name: 'IE9+'
            }, {
                value: idx++ * 8 + 1280,
                name: 'IE8-'
            }]
        }]
    }, {
        series: [{
            name: '浏览器（数据纯属虚构）',
            type: 'pie',
            data: [{
                value: idx * 128 + 80,
                name: 'Chrome'
            }, {
                value: idx * 64 + 160,
                name: 'Firefox'
            }, {
                value: idx * 32 + 320,
                name: 'Safari'
            }, {
                value: idx * 16 + 640,
                name: 'IE9+'
            }, {
                value: idx++ * 8 + 1280,
                name: 'IE8-'
            }]
        }]
    }, {
        series: [{
            name: '浏览器（数据纯属虚构）',
            type: 'pie',
            data: [{
                value: idx * 128 + 80,
                name: 'Chrome'
            }, {
                value: idx * 64 + 160,
                name: 'Firefox'
            }, {
                value: idx * 32 + 320,
                name: 'Safari'
            }, {
                value: idx * 16 + 640,
                name: 'IE9+'
            }, {
                value: idx++ * 8 + 1280,
                name: 'IE8-'
            }]
        }]
    }, {
        series: [{
            name: '浏览器（数据纯属虚构）',
            type: 'pie',
            data: [{
                value: idx * 128 + 80,
                name: 'Chrome'
            }, {
                value: idx * 64 + 160,
                name: 'Firefox'
            }, {
                value: idx * 32 + 320,
                name: 'Safari'
            }, {
                value: idx * 16 + 640,
                name: 'IE9+'
            }, {
                value: idx++ * 8 + 1280,
                name: 'IE8-'
            }]
        }]
    }, {
        series: [{
            name: '浏览器（数据纯属虚构）',
            type: 'pie',
            data: [{
                value: idx * 128 + 80,
                name: 'Chrome'
            }, {
                value: idx * 64 + 160,
                name: 'Firefox'
            }, {
                value: idx * 32 + 320,
                name: 'Safari'
            }, {
                value: idx * 16 + 640,
                name: 'IE9+'
            }, {
                value: idx++ * 8 + 1280,
                name: 'IE8-'
            }]
        }]
    }, {
        series: [{
            name: '浏览器（数据纯属虚构）',
            type: 'pie',
            data: [{
                value: idx * 128 + 80,
                name: 'Chrome'
            }, {
                value: idx * 64 + 160,
                name: 'Firefox'
            }, {
                value: idx * 32 + 320,
                name: 'Safari'
            }, {
                value: idx * 16 + 640,
                name: 'IE9+'
            }, {
                value: idx++ * 8 + 1280,
                name: 'IE8-'
            }]
        }]
    }]
};

require(
    [
        'echarts',
        'echarts/chart/line',
        'echarts/chart/bar',
        'echarts/chart/scatter',
        'echarts/chart/k',
        'echarts/chart/pie',
        'echarts/chart/radar',
        'echarts/chart/force',
        'echarts/chart/chord',
        'echarts/chart/gauge',
        'echarts/chart/funnel',
        'echarts/chart/eventRiver',
        'echarts/chart/venn',
        'echarts/chart/treemap',
        'echarts/chart/tree',
        'echarts/chart/wordCloud',
        'echarts/chart/heatmap'
    ],
    function(ec) {
        var myChart = ec.init(document.getElementById('main1'));

        myChart.setOption(option1);
    }
);



var option2 = {
    title: {
        text: '某站点用户访问来源',
        subtext: '纯属虚构',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['pie', 'funnel'],
                option: {
                    funnel: {
                        x: '25%',
                        width: '50%',
                        funnelAlign: 'left',
                        max: 1548
                    }
                }
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: true,
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [{
            value: 335,
            name: '直接访问'
        }, {
            value: 310,
            name: '邮件营销'
        }, {
            value: 234,
            name: '联盟广告'
        }, {
            value: 135,
            name: '视频广告'
        }, {
            value: 1548,
            name: '搜索引擎'
        }]
    }]
};


require(
    [
        'echarts',
        'echarts/chart/line',
        'echarts/chart/bar',
        'echarts/chart/scatter',
        'echarts/chart/k',
        'echarts/chart/pie',
        'echarts/chart/radar',
        'echarts/chart/force',
        'echarts/chart/chord',
        'echarts/chart/gauge',
        'echarts/chart/funnel',
        'echarts/chart/eventRiver',
        'echarts/chart/venn',
        'echarts/chart/treemap',
        'echarts/chart/tree',
        'echarts/chart/wordCloud',
        'echarts/chart/heatmap'
    ],
    function(ec) {
        var myChart = ec.init(document.getElementById('main2'));

        myChart.setOption(option2);
    }
);