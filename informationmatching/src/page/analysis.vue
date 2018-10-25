<template>
  <div>
    <el-row type="flex" class="row-bg" justify="space-between" style="margin:20px 0">
      <el-col style="background:#fff;box-shadow:3px 3px 8px #b6b6b6;width:48%;margin-right:1.2%">
        <div class="myChart-title">餐馆客流量占比率</div>
        <div id="myBar"></div>
      </el-col>
      <el-col style="background:#fff;box-shadow:3px 3px 8px #b6b6b6;width:48%;margin-right:1.2%">
        <div class="myChart-title">时段客流量趋势图</div>
        <div id="myLine"></div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-between" style="margin:20px 0">
      <el-col style="background:#fff;box-shadow:3px 3px 8px #b6b6b6;margin-right:1.2%">
        <div class="myChart-title">餐馆客流量占比率</div>
        <div id="myScatter"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        bar: {
          data: [],
          value: []
        },
        line: {
          legend: [],
          data: [],
          x: [],
        },
        scatter: {
          CATEGORY_DIM_COUNT: 6,
          GAP: 3,
          BASE_LEFT: 5,
          BASE_TOP: 10,
          data: [],
          options: {}
        },
        schema: [
          {name: 'AQIindex', index: 1, text: 'AQI'},
          {name: 'PM25', index: 2, text: 'PM 2.5'},
          {name: 'PM10', index: 3, text: 'PM 10'},
          {name: 'CO', index: 4, text: 'CO'},
          {name: 'NO2', index: 5, text: 'NO₂'},
          {name: 'SO2', index: 6, text: 'SO₂'},
          {name: '等级', index: 7, text: '等级'}
        ]
      }
    },
    mounted() {
      this.drawBar();
      this.drawLine();
      this.drawScatter();
      this.getBarData();
      this.getLineData();
      this.getScatterData();
    },
    created() {

    },
    methods: {
      drawBar(){    //  初始化饼图
        this.myBar = this.$echarts.init(document.getElementById('myBar'))
        this.myBar.setOption({
          title: {
            show: false
          },
          legend: {
            orient: 'vertical',
            left: '20px',
            data: []
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
              label: {
                normal: {
                  textStyle: {
                    color: '#666'
                  }
                }
              },
              animationType: 'scale',
              animationEasing: 'elasticOut',
              animationDelay: function (idx) {
                return Math.random() * 200;
              }
            }
          ]
        })
      },
      drawLine() {
        this.myChart = this.$echarts.init(document.getElementById('myLine'));
        this.myChart.setOption({
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '3%',
            right: '10%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: [],
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                opacity: 0.8
              }
            },
            axisTick: {
              show: false
            },
          },
          yAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                opacity: 0.8
              }
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              formatter: '{value}'
            }
          },
          series: []
        });
      },
      drawScatter() {
        this.myScatter = this.$echarts.init(document.getElementById('myScatter'));
        this.scatter.GRID_WIDTH = (100 - this.scatter.BASE_LEFT - this.scatter.GAP) / this.scatter.CATEGORY_DIM_COUNT - this.scatter.GAP;
        this.scatter.GRID_HEIGHT = (100 - this.scatter.BASE_TOP - this.scatter.GAP) / this.scatter.CATEGORY_DIM_COUNT - this.scatter.GAP;
        this.scatter.CATEGORY_DIM = 7;
        this.scatter.SYMBOL_SIZE = 3;
        this.scatter.options = {
          animation: false,
          brush: {
            brushLink: 'all',
            xAxisIndex: [],
            yAxisIndex: [],
            inBrush: {
              opacity: 1
            }
          },
          visualMap: {
            type: 'piecewise',
            categories: ["北京", "上海", "广州"],
            dimension: this.scatter.CATEGORY_DIM,
            orient: 'horizontal',
            top: 0,
            left: 'center',
            inRange: {
              color: ['#c23531','#2f4554', '#61a0a8']
            },
            outOfRange: {
              color: '#ddd'
            },
            seriesIndex: [0]
          },
          tooltip: {
            trigger: 'item'
          },
          parallelAxis: [
            {dim: 0, name: this.schema[0].text},
            {dim: 1, name: this.schema[1].text},
            {dim: 2, name: this.schema[2].text},
            {dim: 3, name: this.schema[3].text},
            {dim: 4, name: this.schema[4].text},
            {dim: 5, name: this.schema[5].text},
            {dim: 6, name: this.schema[6].text,
              type: 'category', data: ['优', '良', '轻度', '中度', '重度', '严重']
            }
          ],
          parallel: {
            bottom: '5%',
            left: '5%',
            height: '31%',
            width: '55%',
            parallelAxisDefault: {
              type: 'value',
              name: 'AQI指数',
              nameLocation: 'end',
              nameGap: 20,
              splitNumber: 3,
              nameTextStyle: {
                fontSize: 14
              },
              axisLine: {
                lineStyle: {
                  color: '#555'
                }
              },
              axisTick: {
                lineStyle: {
                  color: '#555'
                }
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                textStyle: {
                  color: '#555'
                }
              }
            }
          },
          grid: [],
          xAxis: [],
          yAxis: [],
          series: [
            {
              name: 'parallel',
              type: 'parallel',
              smooth: true,
              lineStyle: {
                normal: {
                  width: 1,
                  opacity: 0.3
                }
              },
              data: this.scatter.data
            }
          ]
        };
        this.myScatter.setOption(this.scatter.options);
      },
      getBarData() {    //  获取json数据填充饼图
        this.$axios.get('../../static/mock/bar.json').then((res) => {
          console.log(res);
          this.bar.data = [];
          this.bar.value = [];
          res.data.forEach((item, i) => {
            this.bar.data.push(`餐馆：${item.name}，ID：${item.id}`);
            this.bar.value.push({value: item.value, name: item.name});
          });
          this.myBar.setOption({
            legend: {
              data: this.bar.data
            },
            series : [
              {
                data: this.bar.value,
              }
            ]
          })
        }).catch((rej) => {

        });
      },
      getLineData() {
        this.$axios.get('../../static/mock/line.json').then((res) => {
          this.line.x = [];
          this.line.y= [];
          res.data.forEach((item, i) => {
            this.line.legend.push({name: item.prop.name, icon: 'square'});
            item.y = [];
            this.line.x = [];
            item.data.forEach((value, key) => {
              item.y.push(value.y);
              this.line.x.push(value.x);
            });
            this.line.data.push({
              name: item.prop.name,
              type:'line',
              data:item.y
            });
          });
          this.myChart.setOption({
            legend: {
              top: '2%',
              data: this.line.legend
            },
            xAxis: {
              data: this.line.x,
            },
            series: this.line.data
          });
        });
      },
      retrieveScatterData(data, dimX, dimY) {
        var result = [];
        for (var i = 0; i < data.length; i++) {
          var item = [data[i][dimX], data[i][dimY]];
          item[this.scatter.CATEGORY_DIM] = data[i][this.scatter.CATEGORY_DIM];
          result.push(item);
        }
        return result;
      },
      getScatterData(){
        var index = 0;
        this.$axios.get('../../static/mock/scatter2.json').then((res) => {
          res.data.forEach((item, i) => {
            this.scatter.data.push(item);
          })

          for (var i = 0; i < this.scatter.CATEGORY_DIM_COUNT; i++) {
            for (var j = 0; j < this.scatter.CATEGORY_DIM_COUNT; j++) {
              if (this.scatter.CATEGORY_DIM_COUNT - i + j >= this.scatter.CATEGORY_DIM_COUNT) {
                continue;
              }
              // this.scatter.options.series.data.push(this.scatter.data);

              this.scatter.options.grid.push({
                left: this.scatter.BASE_LEFT + i * (this.scatter.GRID_WIDTH + this.scatter.GAP) + '%',
                top: this.scatter.BASE_TOP + j * (this.scatter.GRID_HEIGHT + this.scatter.GAP) + '%',
                width: this.scatter.GRID_WIDTH + '%',
                height: this.scatter.GRID_HEIGHT + '%'
              });

              this.scatter.options.brush.xAxisIndex && this.scatter.options.brush.xAxisIndex.push(index);
              this.scatter.options.brush.yAxisIndex && this.scatter.options.brush.yAxisIndex.push(index);

              this.scatter.options.xAxis.push({
                splitNumber: 3,
                position: 'top',
                axisLine: {
                  show: j === 0,
                  onZero: false
                },
                axisTick: {
                  show: j === 0,
                  inside: true
                },
                axisLabel: {
                  show: j === 0
                },
                type: 'value',
                gridIndex: index,
                scale: true
              });

              this.scatter.options.yAxis.push({
                splitNumber: 3,
                position: 'right',
                axisLine: {
                  show: i === this.scatter.CATEGORY_DIM_COUNT - 1,
                  onZero: false
                },
                axisTick: {
                  show: i === this.scatter.CATEGORY_DIM_COUNT - 1,
                  inside: true
                },
                axisLabel: {
                  show: i === this.scatter.CATEGORY_DIM_COUNT - 1
                },
                type: 'value',
                gridIndex: index,
                scale: true
              });

              this.scatter.options.series.push({
                type: 'scatter',
                symbolSize: this.scatter.SYMBOL_SIZE,
                xAxisIndex: index,
                yAxisIndex: index,
                data: this.retrieveScatterData(this.scatter.data, i, j)
              });

              this.scatter.options.visualMap.seriesIndex.push(this.scatter.options.series.length - 1);

              index++;
            }
          }

          this.myScatter.setOption(this.scatter.options);
        })


      }
    }
}
</script>

<style scoped>
  .myChartBox{
    width: 60%;
    background: #fff;
    box-shadow: 3px 3px 8px #b6b6b6
  }
  .myChart-title{
    font-size: 16px;
    color:#000;
    height: 54px;
    line-height: 54px;
    border-bottom: 1px solid #eee;
    padding: 0 20px;
  }
  #myLine, #myBar, #myScatter{
    height: 500px;
    width: 100%;
  }
</style>
