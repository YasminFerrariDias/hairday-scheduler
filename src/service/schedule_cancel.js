import { getSchedules, saveSchedules } from "./jsonbin-store.js";

export async function scheduleCancel({ id }) {
  try {
    const schedules = await getSchedules();

    const remaining = schedules.filter((schedule) => schedule.id != id);

    await saveSchedules(remaining);

    alert("Agendamento cancelado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível cancelar o agendamento!");
  }
}