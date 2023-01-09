import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, OrbitControls } from '@react-three/drei'

export default function Room()
{
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    return <>

    <color args={ [ '#695b5b' ] } attach="background" />

    <Environment preset="city" />
    
    <PresentationControls 
     
        >

        <Float rotationIntensity={ 0.4 } >
            <primitive
                object={ computer.scene }
                position-y={ - 5 }
                position-z={ 7 }
               
            >
                <Html
                    transform 
                    wrapperClass="htmlScreen"
                    distanceFactor={1.17}
                    position={ [ 0, 1.56, - 1.4]}
                    rotation-x={ - 0.256 }> <iframe src="https://chevintechstack.netlify.app/" /> </Html>
            </primitive>

            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={ 0.5 }
                position={ [ -3, -3, 8 ] }
                rotation-y={ 1 }
                maxWidth={ 2 }
                >
                    Programming Languages</Text>
        </Float>
    </PresentationControls>

    <ContactShadows 
    position-y={ - 1.4 }
    opacity={ 0.4 }
    scale={ 5 }
    blur={ 2.4 } />

</>
}