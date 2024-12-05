import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const[toggleState,setToggleState] = useState(1);

     const toggleTab=(index)=>{
         setToggleState(index);
    }
  return (
    <section className="qualification section">
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
            <div  className={
                 toggleState === 1 
            ? "qualification__button qualification__active button--flex"  
            : "qualification__button button--flex"
                 }
                 onClick={() => toggleTab(1)}
            >
                      <i className="uil uil-briefcase-alt
                     qualification__icons"></i>{""}
                     Experience
                </div>

                <div className={
                    toggleState === 2 
            ? "qualification__button qualification__active button--flex"  
            : "qualification__button button--flex"
                 } onClick={() => toggleTab(2)}
                 >
                    <i className="uil uil-graduation-cap
                     qualification__icons"></i>{""}
                     Education
                   
                </div>
            </div>

            <div className="qualification__sections">
                <div className={
        toggleState === 1 
            ? "qualification__content qualification__content-active"  
            : "qualification__content"
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Software Engineer</h3>
                            <span className="qualification__subititle">APS Three.ai Pvt Ltd</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Jan 2023 - May 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Software Engineer Intern</h3>
                            <span className="qualification__subititle">MyAlgosoft Technologies</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Jan 2023 - May 2023
                            </div>
                        </div>

                       
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Flutter developer Intern</h3>
                            <span className="qualification__subititle">DevSquirrel Technologies Pvt Ltd</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                May 2022 - Aug 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Software developer Intern</h3>
                            <span className="qualification__subititle">Spain - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - 2022
                            </div>
                        </div>

                       
                    </div> */}
                </div>

                {/* this is the 2 copy paste */}

                <div className={
                   toggleState === 2 
            ? "qualification__content qualification__content-active"  
            : "qualification__content"
                }>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">The University of Texas at Arlington</h3>
                            <span className="qualification__subititle">Computer Science</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Aug 2024 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Charotar University of Science and Technology</h3>
                            <span className="qualification__subititle">Information Technology</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                Jun 2019 - May 2023
                            </div>
                        </div>

                       
                    </div>

                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Flutter developer Intern</h3>
                            <span className="qualification__subititle">DevSquirrel Technologies Pvt Ltd</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i>
                                May 2022 - Aug 2022
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}

                  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification
