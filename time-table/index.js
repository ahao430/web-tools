new Vue({
  el: '#app',
  data: {
    className: '六(6)班',
    classList: ['语文', '数学', '英语', '科学', '劳动'],
    classInput: '',
    days: ['星期一', '星期二', '星期三', '星期四', '星期五'],
    counts: [1,2,3,4,5,6],
    tableData: [],
  },
  mounted: function () {
    this.initTableData()
  },
  methods: {
    initTableData: function () {
      var self = this
      self.counts.forEach(function (count) {
        var arr = []
        self.days.forEach(function (day){
          arr.push('--')
        })
        self.tableData.push(arr)
      })
    },
    handleAddClass: function () {
      this.classList.push(this.classInput)
      this.classInput = ''
    },
    drag: function (e) {
      e.dataTransfer.setData('text', e.target.dataset.text)
    },
    allowDrop: function (e) {
      e.preventDefault()
    },
    drop: function (e) {
      var text = e.dataTransfer.getData('text')
      var rowIndex = e.target.dataset.row
      var colIndex = e.target.dataset.col
      this.tableData[rowIndex][colIndex] = text
      this.$forceUpdate()
    },
  },
})