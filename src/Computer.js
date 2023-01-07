import './style.css'
import * as THREE from 'three'
import * as dat from 'lil-gui'
import { useMatcapTexture, Text3D, Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, OrbitControls } from '@react-three/drei'

export default function Computer()
{ 
    const computer = useGLTF('./model/computer.gltf')
    const [ matcapTexture ]= useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256)
    const tempArray = [] 
    console.log(tempArray)

    return <>
        <color args={ [ '#695b5b' ] } attach="background" />

        <Environment preset="city" />
    
        <PresentationControls global 
        rotation={ [ 0.13, 0.1, 0 ] }
        polar={ [ - 0.4, 0.2 ] }
        azimuth={ [ - 1, 0.75 ] }
        config={ { mass: 2, tension: 400 } }
        snap={ { mass: 4, tension: 400 } }
        >
            <Float rotationIntensity={ 0.4 } >

            <rectAreaLight
                width={ 2.5 }
                height={ 1.65 }
                intensity={ 65 }
                color={ '#ff6900' }
                rotation={ [ - 0.1, Math.PI, 0 ] }
                position={ [ 0, 0.55, - 1.15 ] }
            />

                <primitive
                    object={ computer.scene }
                    position-y={  1.2 }
                    position-z={ - 5 }
                    rotation-x={ 0.13 }
                >
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.56, - 1.4 ] }
                        rotation-x={ - 0.256 }
                        >
                            <iframe src="https://marbleracegame.netlify.app/" />
                        </Html>

                </primitive>
                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={ 0.35 }
                    position={ [ 2, 1.8, -1 ] }
                    rotation-y={ - 1 }
                    maxWidth={ 2 }
                >
                    Use Arrowkeys and Spacebar to play Marble Race!
                </Text>

            </Float>
        </PresentationControls>
        <ContactShadows 
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 } 
        />
        <OrbitControls makeDefault />
        
        <Text3D 
                    font="./fonts/helvetiker_regular.typeface.json"
                    size={ 0.55 }
                    height={ 0.3 }
                    curveSegments={ 12 }
                    bevelEnabled
                    bevelThickness={ 0.02 }
                    bevelSize={ 0.02 }
                    bevelOffset={ 0 }
                    bevelSegments={ 5 }
                    position={ [ -6.4, -1, 5 ] }
                    
                >
                    WELCOME  TO  CHEVIN'S  WEBSITE.
                    <meshMatcapMaterial matcap={ matcapTexture } />
                </Text3D>

            { [...Array(100)].map(() =>  
            <mesh
                position={ [
                    (Math.random() - 0.5) * 20,
                    (Math.random() - 0.5) * 50,
                    (Math.random() - 0.5) * 20
                ] }
                scale={ 0.5 + Math.random() * 0.5 }
                rotation={ [
                    Math.random() * Math.PI,
                    Math.random() * Math.PI,
                    0
                ] }
            >
                <torusGeometry args={ [0.2 , 0.2, 20, 20]} />
                <meshMatcapMaterial matcap={ matcapTexture } />
            </mesh>
            ) }  

            
    </>
}