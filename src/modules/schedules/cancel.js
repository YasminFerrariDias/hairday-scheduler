import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../service/schedule_cancel.js"

const periods = document.querySelectorAll(".period");

// Gera evento de click  para cada lista (manhã, tarde, noite)
periods.forEach((period) => {
  // Captura o evento de clique na lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      // Obtém a li pai do elemento clicado
      const item = event.target.closest("li");

      // Pega o ID do agendamento para remover
      const { id } = item.dataset

      // Confirma que o id foi selecionada
      if (id) {
        // Confirma se o usuário quer cancelar
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento?",
        );

        if (isConfirm) {
          // Faz requisição na API para cancelar
          await scheduleCancel({ id })

          // Recarrega os agendamentos
          schedulesDay()
        }
      }
    }
  });
});
