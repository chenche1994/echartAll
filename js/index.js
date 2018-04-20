// 首页环状图js
$(function(){
  //  颜色集合
var myChart = echarts.init(document.getElementById('callRate'));
var colorList = [
  '#74bcff', '#71dada', '#82da9d', '#fce072', '#f691a2'
];



var originalData = [{
   value: 854,
   name: '网络答复'
}, {
   value: 691,
   name: '参阅'
}, {
   value: 454,
   name: "转告"
},{
  value: 353,
  name: "暂存"
}, {
  value: 854,
  name: "直接答复"
}];

echarts.util.each(originalData, function(item, index) {
   item.itemStyle = {
       normal: {
           color: colorList[index]
       }
   };
});
var num = originalData[0].value + originalData[1].value + originalData[2].value + originalData[3].value + originalData[4].value;
// 总和
var total = {
  value: num,
  name: '总共'
}
option = {
   tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
  },
  legend: {
    icon: 'circle',
    itemWidth: 20,
    itemHeight: 8,
    orient: 'vertical',
    top: '23%',
    right:'2%',
    textStyle: {
      fontSize: 14
    },
    data: ['网络答复','参阅','转告','暂存','直接答复'],
    formatter:function(name){
      for(var i = 0; i < originalData.length; i++){
              if(name==originalData[i].name){
                return name + '     ' + (originalData[i].value/num * 100).toFixed(2) + '%'+ '     ' + originalData[i].value  ;
              }
      }
    }
  },
   title: [{
          text: total.name,
          left: '26%',
          top: '40%',
          textAlign: 'center',
          textBaseline: 'middle',
          textStyle: {
              color: '#999',
              fontWeight: 'normal',
              fontSize: 16
          }
      }, {
          text: total.value,
          left: '26%',
          top: '51%',
          textAlign: 'center',
          textBaseline: 'middle',
          textStyle: {
              color: '#666',
              fontWeight: 'normal',
              fontSize: 20
          }
      }],
   series: [{
       hoverAnimation: true, //设置饼图默认的展开样式
       radius: [60,70],
       center: ['28%','center'],
       name: 'pie',
       type: 'pie',
       selectedMode: 'single',
       selectedOffset: 16, //选中是扇区偏移量
       clockwise: true,
       startAngle: 90,
       label: {
           normal: {
            formatter: '{b}\n{c}'
           }
       },
       labelLine: {
           normal: {
               show: true
           }
       },
        itemStyle: {
          normal: {
              borderWidth: 3,
              borderColor: '#ffffff',
          },
          emphasis: {
              borderWidth: 0,
              shadowBlur: 5,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.2)'
          }
      },
       data: originalData
   }]
};
myChart.setOption(option, true);
$(window).resize(function(){
  myChart.resize()
})
})
