new Chart(document.getElementById("polar-chart"), {
  type: 'polarArea',
  data: {
    labels: ["Resolución de problemas", "Analisis", "Creatividad", "Logica", "Pasión"],
    datasets: [
      {
        label: "Porcentaje de habilidad",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [60,75,72,70,75]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Habilidades como programador'
    }
  }
});