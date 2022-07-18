import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import a,{b,c,d} from '../assets/images';
export default function Home() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={b}
                        width={'800'}
                        height={'400'}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Ayur</h3>
                        <p>When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={c}
                        width={'800'}
                        height={'400'}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Ayur</h3>
                        <p>Ayurveda teaches us to cherish our innate-nature “to love and honor who we are”, not as what people think or tell us, “who we should be.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={d}
                        width={'800'}
                        height={'400'}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Ayur</h3>
                        <p>
                        Life (ayu) is the combination (samyoga) of body, senses, mind, and reincarnating soul.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
