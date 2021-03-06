import Image from 'next/image'
import React from 'react'
import { MapButton } from '../MapButton'
import { SectionParalaxedBack } from '../SectionParalaxedBack'
import { Title } from '../Title'

export const Map: React.FC = () => {
    return (
        <SectionParalaxedBack
            contentStyle={{
                width: '100%',
                height: '100%',
                paddingTop: '10%',
                paddingBottom: '10%',

                display: 'flex',
                justifyContent: 'center',
            }}
            back={(
                <>
                    <Image
                        src='/static/map.jpg'
                        layout='fill'
                        objectFit='cover'
                        quality={90}
                    />
                </>
            )}
        >
            <div style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                gap: '8rem',

                width: '1000px',
                maxWidth: '100%',
            }}>
                <div>
                    <Title level={2} style={{ textAlign: 'center', color: 'white' }}>
                        Карта идей и предложений
                    </Title>
                </div>
                <MapButton />
            </div>
        </SectionParalaxedBack>
    )
}