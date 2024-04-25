import React, { useState } from 'react';
import "./qualification.css";
const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">
            Qualification
        </h2>
        <span className="section__subtitle">
            My personel journey
        </span>

        <div className="qualification__container container">
            {/* qualification tabs */}
            <div className="qualification__tabs">

                <div className={
                    toggleState === 1 ? 
                    "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(1)}
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
                    Education
                </div>
                
                <div className={
                    toggleState === 2 ? 
                    "qualification__button qualification__active button--flex" 
                    : "qualification__button button--flex"
                    }
                    onClick={() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
                    Experience
                </div>
                
            </div>
            {/* qualification sections */}
            <div className="qualification__sections">

                {/* qualification content - education, experience */}
                {/* education */}
                <div className={toggleState === 1 ?
                "qualification__content qualification__content-active"
                : "qualification__content"
            }
                >
                    {/*left side data*/}
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                Electronics and Communication Engineering
                            </h3>
                            <span className="qualification__subtitle">
                                BVRIT HYDERABAD College of Engineering for Women
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                    2021 - 2025
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* right side data */}
                    {/* <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">
                                Computer science
                            </h3>
                            <span className="qualification__subtitle">
                                IIT Bombay
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                    2021 - present
                            </div>
                        </div>

                        
                    </div> */}
                
                    

                </div>

                {/* experience */}
                <div className={toggleState === 2 ?
                "qualification__content qualification__content-active"
                : "qualification__content"
            }
                >
                    {/*left side data*/}
                    {/* <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                                software dev
                            </h3>
                            <span className="qualification__subtitle">
                                Google
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                    2021 - present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div> */}

                    {/* right side data */}
                    {/* <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">
                                SOftware dev
                            </h3>
                            <span className="qualification__subtitle">
                               meta
                            </span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                    2023 - present
                            </div>
                        </div>

                        
                    </div>
                 */}
                    

                </div>


                

            </div>
        </div>
    
    
    
    </section>
  );
};

export default Qualification;