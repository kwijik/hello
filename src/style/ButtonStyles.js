
      import { StyleSheet } from 'aphrodite/no-important';

      export default StyleSheet.create({
          myButton: {
              borderRadius: '10px',
              backgroundColor:'#88CDDA',
              border: '3px solid black',
              margin: '5%',
              textAlign: 'center',
              //marginTop: '5%',
              color: '#000',
              width: '55px',
              height: '2.5rem',
              fontSize: '1.2rem',
              fontFamily: 'Love Ya Like A Sister',
              ':active':{
                   backgroundColor:'red'
              },
              ':hover':{
                  boxShadow: '2px 2px #666',
                  cursor: 'pointer'
              }
          },
          wrapper: {
              display: 'inline-block',
              margin: '2%',
              padding: '1%',
              marginTop: '3%'
          }
      });
