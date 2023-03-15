// console.log("Entro index.js");

// funtion anonima y arrow funtion

(() => {
    console.log("Entro a la funtion anonima !! turbo!!!");
    const BASE_URL = "https://animales-api.onrender.com";
    const myChart = document.getElementById('myChart').getContext('2d');


    const loadData = () => {
        fetch(BASE_URL + "/animales",
            {
                method: "GET"
            })
            .then(response => response.json())
            .then(response => {
                console.log(response.data)
                let labels_for_chart = response.data.map((item)=>{
                    return item.nombre;
                });
                let data_for_chart = response.data.map((item)=>{
                    return item.cantidad;
                });
                    const grafica = new Chart(myChart, {
                    type: 'bar',
                    data: {
                        labels: labels_for_chart,
                        datasets: [{
                            label: 'Animales del Zoologico',
                            data: data_for_chart,
                            fill: true,
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });

            })
            .catch(error => console.log(error))
    }

    loadData();
})()
