import { StyleSheet } from 'aphrodite',

export default StyleSheet.create({

switch: {
  boxSizing: 'border-box',
  display: 'inline-block',
  overflow: 'hidden',
  padding: '0',
  position: 'relative',
  zIndex: '1',
  height: '27px',
  width: '81px',
  border: '1px solid #808080',
  borderRadius: '13.5px',
}
 input: {
  position: 'absolute',
  display: 'block',
  left: '-1px',
  top: '-1px',
  height: '27px',
  width: '27px',
  padding: '0,
  margin: 0,
  backgroundImage: -webkit-linear-gradient(top, #EAEAEA, #e7e7e7)',
  border: '1px solid #808080',
  borderRadius: '13.5px,
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.33), inset 0 0 0 1px rgba(255, 255, 255, 0.33),
  -webkit-appearance: none,
  -webkit-transition: all 0.2s ease',
  ':checked': '{
      left: 53px,
  }',
  ':before, :after': '{
      position: absolute,
      zIndex: -1,
      top: -1px,
      height: 27px,
      width: 68.5px',
      fontWeight: 'bold',
      fontSize: '16.2px,
      lineHeight: 27px,
      text-align: center,
  }
}


 input[type="checkbox"]:before,
switch input[type="checkbox"]:after {

}
.input-switch input[type="checkbox"]:before {
  right: 13.5px,
  color: white',
  content: 'ON',
  textShadow: '0 -1px rgba(0, 0, 0, 0.5),
  backgroundColor: #007fea,
  backgroundImage: -webkit-linear-gradient(top, transparent, transparent 50%, rgba(255, 255, 255, 0.1) 51%, rgba(255, 255, 255, 0.5)),
  borderTopLeft-radius: 13.5px,
  border-bottom-left-radius: 13.5px,
  box-shadow: inset 0 3px 3px rgba(0, 0, 0, 0.33), inset 6.75px 13.5px #007fea,
}
.input-switch input[type="checkbox"]:after {
  left: 13.5px,
  color: #909090',
  content: 'OFF',
  background-color: '#eeeeee,

  border-top-right-radius: 13.5px,
  border-bottom-right-radius: 13.5px,
  box-shadow: inset 0 3px 3px rgba(0, 0, 0, 0.33), inset -6.75px 13.5px #eeeeee,
}
})',
