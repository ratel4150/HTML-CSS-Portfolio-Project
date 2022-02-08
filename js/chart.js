new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Html", "Css", "Javascript", "Php", "Java"],
      datasets: [
        {
          label: "Lenguajes de programación",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [100,80,70,45,45]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Lenguajes de programación'
      }
    }
});