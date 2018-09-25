import GLANCETRACKERAPI from '../../dist/jeelizGlanceTrackerApiPatched';
import "./glanceTrack.css";

var _states={
  idle: 0,
  loading: 1,
  enabled: 2,
  disabled: 3
};
var _state=_states.idle;

function toggle_canvasContainer(isShow){
  var DOMcanvasContainer=document.getElementById('glanceTrackerCanvasContainer');
  if (!DOMcanvasContainer) return;
  DOMcanvasContainer.style.opacity=(isShow)?'1':'1';
};

function toggle_glanceTracking(event){ //the user clic on the button
  var DOMbutton=event.target;
  switch(_state){
      case _states.idle:
          init_glanceTracking();
          break;

      case _states.loading:
          break;

      case _states.enabled:
          GLANCETRACKERAPI.toggle_pause(true);
          toggle_canvasContainer(false);
          _state=_states.disabled;
          break;

      case _states.disabled:
          GLANCETRACKERAPI.toggle_pause(false);
          toggle_canvasContainer(true);
          _state=_states.enabled;
          break;
  }
  update_button();
}; //end toggle_glanceTracking()

function update_button(){
  var DOMbutton=document.getElementById('toggleGlanceTracking');
  var buttonText;
  
  switch(_state){
      case _states.idle:
      case _states.disabled:
          buttonText='Enable glance tracking';
          break;

      case _states.loading:
          buttonText='LOADING...';
          break;

      case _states.enabled:
          buttonText='Disable glance tracking';
          break;
  }
  DOMbutton.innerHTML=buttonText;
}; //end update_button()

export function init_glanceTracking(){
  _state=_states.loading;
  GLANCETRACKERAPI.init({
      callbackTrack: function(isDetected){
        console.log('DETECTION changed ! isDetected = ', isDetected);
        document.getElementById('status').innerHTML = isDetected ? 'You are watching' : 'You are NOT watching';
        if (isDetected){
          toggle_canvasContainer(false);
        } else {
          toggle_canvasContainer(true);
        }
      },

      callbackReady: function(error){
          if (error){
              alert('AN ERROR HAPPENS :( CODE ='+error);
              return;
          }
          console.log('GLANCETRACKERAPI is READY YEAH !');
          _state=_states.enabled;
          // update_button();
          toggle_canvasContainer(true);
      },

      isDisplayVideo: true,
      canvasId: 'glanceTrackerCanvas',
      NNCpath: 'https://appstatic.jeeliz.com/glanceTracker/' //where is NNC.json ?
  }); //end GLANCETRACKERAPI.init call
}; //end init()