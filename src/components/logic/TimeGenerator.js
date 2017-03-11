export function timeGenerator(){
    let d = new Date();
    //return  `${d.getHours()}:${d.getMinutes()}`
    const DAYS = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const MONTH = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    return {
        time: d.getHours()+':'+ (d.getMinutes()<10?`0${d.getMinutes()}`:d.getMinutes()),
        date: `${DAYS[d.getDay()]}, ${d.getDate()} ${MONTH[d.getMonth()]}`
    }
}
