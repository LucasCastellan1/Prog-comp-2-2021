            /* JavaScript */
            function viagem() {
                // entrada de dados
                // pedagio
                let pedagio1 = Number(document.getElementById("pedagio1").value)
                let pedagio2 = Number(document.getElementById("pedagio2").value)
                let combustivel = Number(document.getElementById("combustivel").value)
                // processamento
                let custo = pedagio1 + pedagio2 + combustivel
                alert(`O custo total da viagem é de ${custo}`)
        }