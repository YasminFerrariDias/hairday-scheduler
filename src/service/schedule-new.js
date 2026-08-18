import { getSchedules, saveSchedules } from "./jsonbin-store.js";

export async function scheduleNew({ id, name, when }) {
  try {
    const schedules = await getSchedules();

    schedules.push({ id, name, when });

    await saveSchedules(schedules);

    alert("Agendamento realizado com sucesso!");
  } catch (error) {
    console.log(error);
    alert("Não foi possível agendar. Tente novamente mais tarde.");
  }
}