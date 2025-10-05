"use client"

import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

function TypeWriterText() {
  return (
    <div><Typewriter
            words={['Your tasks, your rules - plan it, track it, crush it. TaskGrid got your back.']}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={1000}
            /></div>
  )
}

export default TypeWriterText