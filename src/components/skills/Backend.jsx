import React from 'react'

const Backend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Skills set</h3>

        <div className="skills__box">
            {/* left group */}
            <div className="skills__group">

                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Data Structures and Algorithms</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
                
                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">MERN Stack</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
                
                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">PowerBI</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
            </div>

            {/* right group */}
            <div className="skills__group">
                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Tableau</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
                
                <div className="skills__data">
                <i className="bx bx-badge-check"></i>
                <div>
                    <h3 className="skills__name">Git</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Backend