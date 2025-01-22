import React from 'react'
import Globe from "react-globe.gl";
import MyGlobe from "../Components/MyGlobe.jsx";
// import * as data from '/Users/tony/Desktop/resume/src/datasets/ne_110m_populated_places_simple.geojson'
// import * as data from '/Users/tony/Desktop/resume/src/datasets/ne_110m_admin_0_countries.geojson'
const About = () => {
    const labelData = [
        {
            lat: 10.8231,
            lng: 106.6297,
            text: 'Ho Chi Minh',
        },
        {
            lat: 45.5017,
            lng: -73.5673,
            text: 'Montreal',
        },
        {
            lat: 43.6532,
            lng: -79.3832,
            text: 'Toronto',
        },
        {
            lat: 33.7489,
            lng: -84.3879,
            text: 'Atlanta',
        },
    ];

    return (
       <section className={'c-space my-20'}>
           <div className={'grid md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6 grid-cols-1 gap-5 h-full'}>
               <div className={'col-span-1 xl:row-span-1'}>
                   <div className={'grid-container'}>
                       <img src={'/MyFace.JPEG'} className={"rounded-full w-full object-contain sm:h=[276px] h-fit"}/>
                       <div>
                           <p className={'grid-headtext'}>Hi, I'm Khang</p>
                           <p className={'grid-subtext'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                               beatae dicta exercitationem explicabo fuga illo inventore iure laudantium magnam modi
                               mollitia nemo neque provident quidem quis tenetur, ullam vel velit.</p>
                       </div>
                   </div>


               </div>
               <div className={'col-span-1 xl:row-span-1'}>
                   <div className={'grid-container'}>
                       <img src={'/MyFace.JPEG'} className={"rounded-full w-full object-contain sm:h=[276px] h-fit"}/>
                       <div>
                           <p className={'grid-headtext'}>Hi, I'm Khang</p>
                           <p className={'grid-subtext'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                               beatae dicta exercitationem explicabo fuga illo inventore iure laudantium magnam modi
                               mollitia nemo neque provident quidem quis tenetur, ullam vel velit.</p>
                       </div>
                   </div>
               </div>
               <div className ={'col-span-1 xl:row-span-4'}>
                   <div className={'grid-container'}>
                       <div className ='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                           {/*<Globe*/}
                           {/* height={326}*/}
                           {/* width={326}*/}
                           {/* globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"*/}
                           {/* backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"*/}
                           {/* labelsData={[*/}

                           {/*     {*/}
                           {/*         lat: 10.8231,*/}
                           {/*         lng: 106.6297,*/}
                           {/*         text: 'Ho Chi Minh',*/}
                           {/*         size: 9999999,*/}
                           {/*         color: 'red'*/}
                           {/*     },*/}
                           {/*     {*/}
                           {/*         lat: 45.5017,*/}
                           {/*         lng: -73.5673,*/}
                           {/*         text: 'Montreal',*/}
                           {/*     },*/}
                           {/*     {*/}
                           {/*         lat: 43.6532,*/}
                           {/*         lng: -79.3832,*/}
                           {/*         text: 'Toronto',*/}
                           {/*     },*/}
                           {/*     {*/}
                           {/*         lat: 33.7489,*/}
                           {/*         lng: -84.3879,*/}
                           {/*         text: 'Atlanta',*/}

                           {/*     },*/}

                           {/* ]}*/}
                           {/*/>*/}
                           <MyGlobe

                           />

                       </div>

                   </div>

               </div>



           </div>

       </section>
    )
}
export default About
