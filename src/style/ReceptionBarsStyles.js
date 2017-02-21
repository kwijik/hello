import { StyleSheet } from 'aphrodite';


export default StyleSheet.create({
    perfectReception: {
         position: 'absolute',
         width: '18%',
         height: '100%',
         bottom: '0%',
         right: '0',
         background: 'black'
    },

    highReception:   {
        position: 'absolute',
        width: '18%',
        height: '80%',
        bottom: '0%',
        right: '25%',
        background: 'black'
    },
    mediumReception: {
        position: 'absolute',
        width: '18%',
        height: '60%',
        bottom: '0%',
        right: '50%',
        background: 'black'
    },
    lowReception: {
         position: 'absolute',
         width: '15%',
         height: '30%',
         bottom: '0%',
         right: '75%',
         background: 'black'
    },

    wrapper : {
        position: 'absolute',
        width: '15%',
        height: '14%',
        top: '3%',
        right: '9%'
    },
    noShow: {
        visibility: 'hidden'
    }
});
