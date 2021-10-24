import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Image, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { Minimap } from './Minimap'
import { state, damp } from '../util'
import { useHistory } from 'react-router-dom'

function Item({ index, position, scale, c = new THREE.Color(), ...props }) {
  const history = useHistory()
  const ref = useRef()
  const scroll = useScroll()
  const { clicked, urls } = useSnapshot(state)
  const [hovered, hover] = useState(false)
  const [redirectClick, setRedirectClick] = useState(false)
  const click = () => {
    if (!redirectClick) {
      state.clicked = index === clicked ? null : index
      setRedirectClick(true)
    } else {
      window.location.href = '/fighter'
    }
  }
  const over = () => hover(true)
  const out = () => hover(false)
  useFrame((state, delta) => {
    const y = scroll.curve(index / urls.length - 1.5 / urls.length, 4 / urls.length)
    ref.current.material.scale[1] = ref.current.scale.y = damp(ref.current.scale.y, clicked === index ? 5 : 4 + y, 8, delta)
    ref.current.material.scale[0] = ref.current.scale.x = damp(ref.current.scale.x, clicked === index ? 4.7 : scale[0], 6, delta)
    if (clicked !== null && index < clicked) {
      setRedirectClick(false)
      ref.current.position.x = damp(ref.current.position.x, position[0] - 2, 6, delta)
    }
    if (clicked !== null && index > clicked) {
      setRedirectClick(false)
      ref.current.position.x = damp(ref.current.position.x, position[0] + 2, 6, delta)
    }
    if (clicked === null || clicked === index) {
      ref.current.position.x = damp(ref.current.position.x, position[0], 6, delta)
    }
    ref.current.material.grayscale = damp(ref.current.material.grayscale, hovered || clicked === index ? 0 : Math.max(0, 1 - y), 6, delta)
    ref.current.material.color.lerp(c.set(hovered || clicked === index ? 'white' : '#aaa'), hovered ? 0.3 : 0.1)
  })
  return <Image ref={ref} {...props} position={position} scale={scale} onClick={click} onPointerOver={over} onPointerOut={out} />
}

function Items({ w = 0.7, gap = 0.15 }) {
  const { urls } = useSnapshot(state)
  const { width } = useThree((state) => state.viewport)
  const xW = w + gap

  return (
    <ScrollControls horizontal damping={6} pages={(width - xW + urls.length * xW) / width}>
      <Minimap />
      <Scroll>
        {urls.map((url, i) => (
          <Item key={i} index={i} position={[i * xW, 0, 0]} scale={[w, 4, 1]} url={url} />
        ))}
      </Scroll>
    </ScrollControls>
  )
}

export const Slideshow = () => (
  <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} onPointerMissed={() => (state.clicked = null)}>
    <Items />
  </Canvas>
)
