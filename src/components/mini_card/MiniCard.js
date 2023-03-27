import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { appContext } from '../../context/appContext';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import './MiniCard.css';

function chooseColor(coef) {
    if (coef < -0.03) {
      return "#0066FF";
    } else {
      if (coef < 0.09 && coef >= -0.03) {
          return "#00FF00";
      } else {
        if (coef < 0.19 && coef >= 0.09) {
          return "#FFFF00";
        } else {
          if (coef < 0.39 && coef >= 0.19) {
            return "#FF6600";
          } else {
            return "#FF0000";
          }
        }
      }
    }
  }

const MiniCard = ({threadId}) => {
    const {setCurThread} = useContext(appContext);
    const [curCard, setCurCard] = useState([]);

    let style = {
        backgroundColor: "",
    };

    style.backgroundColor = chooseColor((curCard[0] / curCard[1]) - 1);

    useEffect(() => {       
        var s = new SockJS("http://localhost:8080/vehicle");
        let stompClient = Stomp.over(s);
        stompClient.connect({}, () => {
            console.log("connected");
    
            stompClient.subscribe(
            "/topic/vehicle/" + threadId,
            onMessageReceived
            );
            console.log("threadId is:" + threadId);
        }, onError);
    }, []);

    function triggerCallbacks() {
        setCurThread(threadId);
        console.log("set threadId: " + threadId);
    }

    const onError = () => {
        console.log('error with subscribing');
    }

    const onMessageReceived = (evt) => {
        setCurCard(evt.body.split(','));
        console.log('receivedMessage');
    }

    return (
        <div className="MiniCard" style={style} onClick={triggerCallbacks}>&nbsp;</div>
    );
}

export default MiniCard;