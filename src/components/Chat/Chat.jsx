import React, { useState, useEffect } from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'

import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input'
import Messages from '../Messages/Messages'

import './Chat.css'

let socket

const Chat = ({ location }) => {

    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    const ENDPOINT = 'https://chatpecharcha123.herokuapp.com/'

    useEffect(() => {

        const { name, room } = queryString.parse(location.search)

        socket = io(ENDPOINT)
        setName(name)
        setRoom(room)

        socket.emit('join', { name, room }, error => {
            console.log('user joined client');
        })

        return () => {
            // socket.on('disconnect', () => {
            //     socket.off();
            // })
            socket.disconnect();
            socket.off();
        }

    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', message => {
            setMessages( prevState => [ ...prevState, message ])
        })
        // console.log('re-rendering');
    }, [])

    const sendMessage = event => {
        event.preventDefault()

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''))
        }
    }

    return (
        <div className="outerContainer">
            <div className="container">

                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />

            </div>
        </div>
    );
};

export default Chat;
