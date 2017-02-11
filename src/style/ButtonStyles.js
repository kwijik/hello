
      import { StyleSheet } from 'aphrodite/no-important';

      export default StyleSheet.create({
          myButton: {
              borderRadius: '10px',
              backgroundColor:'#88CDDA',
              border: '3px solid black',
              margin: '5%',
              textAlign: 'center',
              color: '#000',
              width: '55px',
              height: '2.5rem',
              fontSize: '1.2rem',
              fontFamily: 'Love Ya Like A Sister',
              ':hover':{
                   backgroundColor:'red'
              }
          },
          wrapper: {
              display: 'contents',
              margin: '2%'
          }
      });
