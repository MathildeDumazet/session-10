Vue.component('multibar', {
  extends: VueChartJs.Bar,
  props: ['data', 'options'],
  mounted () {
    var data = this.data || {
      labels: ["Mediterranean Migrant Crisis","Protests of Islam critical PEGIDA movement in Dresden","Financial Crisis in Greece","Ukraine conflict between Russia and Western Countries"],
      datasets: [
        {
          label: 'Very high trust',
          backgroundColor: 'green',
          data: [0.03,0.03,0.04,0.02], 
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        },
        {
          label: 'High trust',
          backgroundColor: 'yellow',
          data: [0.45,0.37,0.31,0.3], 
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        }, 
        {
          label: 'No answer',
          backgroundColor: 'gray',
          data: [0.02,0.04,0.02,0.02], 
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        }, 
        {
          label: 'Low trust',
          backgroundColor: 'orange',
          data: [0.41,0.41,0.46,0.52], 
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        }, 
          {
          label: 'Very low trust',
          backgroundColor: 'red',
          data: [0.09,0.15,0.17,0.14], 
          datalabels: {
            align: 'end',
            anchor: 'end'
          }
        }, 
      ]
    };

    var options = this.options || {
      tooltips: {
        enabled: false
      },
      legend: {
        display: true
      },
			plugins: {
				datalabels: {
          display: true,
					color: '#c46060',
					font: {
						weight: 'bold'
					},
					formatter: Math.round
				}
			},
      scales: {
        yAxes:  [
          {
            display: false,
            ticks: {
              beginAtZero: true
            }
          }
        ],
        xAxes: [
          {
            categoryPercentage: 1,
            barPercentage: 2/3
          }
        ]
      }
    };

    this.renderChart(data, options);
  }
})
