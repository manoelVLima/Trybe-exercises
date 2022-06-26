const wakeUp = () => 'Acordando';
const breakFast = () => 'Bora tomar café';
const goSleep = () => 'Partiu dormir';

const doingThings = (callBack) => console.log(callBack());

doingThings(wakeUp);