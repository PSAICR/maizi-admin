// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                
            },
            tooltip: {},
            legend: {
                data:['前台','服务器']
            },
            xAxis: {
                data: ["周一","周二","周三","周四","周五","周六","周末"]
            },
            yAxis: {},
            series: [{
                name: '前台',
                type: 'line',
                color:'#f60',
                data: [300,555,655,714,899,905,1000]
            },{
                name: '服务器',
                type: 'line',
                color:'rgba(0,255,0,0.5)',
                data: [314,455,755,814,999,899,905]
            }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);