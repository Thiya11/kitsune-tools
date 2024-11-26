import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from "@angular/core";
import * as echarts from "echarts";
import { CommonService } from "libs/shared/services/common-service";

@Component({
    selector:'lib-line-graph',
    templateUrl:'./line-graph.component.html'
})

export class LineGraphComponent implements AfterViewInit, OnInit {

  @ViewChild('chart') chart:ElementRef;
  chartContainer:echarts.ECharts | null = null;
  graphOptions:any;
  
  @HostListener('window:resize', ['event'])
  onResize() {
    const chart = this.chart.nativeElement;
    if(window.innerWidth < 768) {
      chart.style.width = '400px';
      chart.style.height = '500px';
      this.chartContainer? this.chartContainer.setOption({legend:{left:'right'}}) : '';
    }
    else if(window.innerWidth > 768 && window.innerWidth < 1080) {
      chart.style.width = '750px';
      chart.style.height = '450px';
    } else if(window.innerWidth > 1081 && window.innerWidth < 1280) {
      chart.style.width = '550px';
      chart.style.height = '450px';
    }else {
      chart.style.width = '700px';
      chart.style.height = '400px';
    }
    this.chartContainer?.resize()
  }

  constructor(
    private commonService: CommonService
  ){
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(()=> {
    this.initiateChart(),
    this.subscribeToData(),
    this.onResize();
    })
  }
      
  initiateChart() {
    this.chartContainer = echarts.init(this.chart.nativeElement);
    this.chartContainer.setOption({
      title: {
        text: 'Pendulum motion'
      },
      tooltip: {trigger:'axis'},
      legend:{data:['Velocity', 'Position']},
      xAxis: {type:'category', name:'Time (ms)'},
      yAxis: {type:'value', name:'Velocity/Position'},
      series: [
        { name: 'Velocity', type: 'line', data: [], smooth:true, showSymbol:false},
        {name:'Position', type: 'line', data:[], smooth:true, showSymbol:false}
      ]
    });
  }

  subscribeToData() {
    this.commonService.$pendulumGraphData.subscribe((data)=> {
      if(this.chartContainer) {
        this.chartContainer.setOption({
          xAxis:{data: data.label},
          series:[
            {name:'Velocity', data:data.angleData},
            {name:'Position', data:data.positionData}
          ]
        })
      }
    })
  }

}