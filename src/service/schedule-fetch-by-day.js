import dayjs from "dayjs";
import { getSchedules } from "./jsonbin-store.js";

export async function scheduleFetchByDay({ date }) {
  try {
    const schedules = await getSchedules();

    const dailySchedules = schedules.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day"),
    );

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia selecionado.");
  }
}