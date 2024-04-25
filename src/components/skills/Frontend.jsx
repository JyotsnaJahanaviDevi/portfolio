import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Languages</h3>

        <div className="skills__box">
            {/* left group */}
            <div className="skills__group">
                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">C/Cpp</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
                
                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Python</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
                
                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Javascript</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
            </div>

            {/* right group */}
            <div className="skills__group">
                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Java</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
                
                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Typescript</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
                
                {/* <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Typescript</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
                 */}
            </div>

        </div>
    </div>
  )
}

export default Frontend