import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import updateLocale from "dayjs/plugin/updateLocale";


dayjs.extend(updateLocale);

const today = dayjs().day();

const dayjsData = dayjs.updateLocale('pt-br', {
    weekdays: [
        "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"
    ]
});

const getWeekday = dayjsData.weekdays.find((value, index) => index === today);

const getDay = dayjs().format('DD/MM');

export { getWeekday, getDay };