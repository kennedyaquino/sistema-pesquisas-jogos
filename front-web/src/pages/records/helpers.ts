import moment from 'moment';

export const formartDate = (date: string) => {
    return moment(date).format('DD/MM/YYYY HH:mm');
}