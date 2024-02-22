import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function CorpRelation() {
    return (
        <>
            <Navbar />
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Corporate Relations</h2>
                </div>
            </div>
            <section id="supporters" className="section-with-bg">
                <div className="container" data-aos="fade-up">
                    <div className="row no-gutters supporters-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                                <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/DST.jpeg'} className="img-fluid" alt="DST" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo" style={{ border: '1px solid #e0e5fa' }}>
                                <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/iocl.jpeg'} className="img-fluid" alt="IOCL" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                                <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/rspcb.jpeg'} className="img-fluid" alt="RSPCB" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                                <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/serb.png'} className="img-fluid" alt="SERB" />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                                <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/alogoAi.png'} className="img-fluid" alt="ALOGOAI" />
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/bakerHughes.png'} className="img-fluid" alt="BH"/>
                            </div>
                        </div> */}
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                                <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/eeki.jpeg'} className="img-fluid" alt="EEKI" />
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/nrl.jpeg'} className="img-fluid" alt="NRL"/>
                            </div>
                        </div> */}
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                                <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/DRDO.png'} className="img-fluid" alt="NRL" style={{ height: '180px' }} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                                <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/CPCB.jpeg'} className="img-fluid" alt="NRL" style={{ height: '180px' }} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                                <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/Jal_Shakti.svg.png'} className="img-fluid" alt="NRL" style={{ height: '170px' }} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                                <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/JCKIC.jpeg'} className="img-fluid" alt="NRL" style={{ height: '200px' }} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                                <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/PrincipalSci.jpeg'} className="img-fluid" alt="NRL" style={{ height: '200px' }} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                                <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/CanaraBanK.png'} className="img-fluid" alt="NRL" style={{ height: '260px' }} />
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                                <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/NITI_AIM.png'} className="img-fluid" alt="NRL" style={{ height: '160px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <Navbar/>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Corporate Relations</h2>
                </div>
            </div>
            <div className='container' style={{padding:'40px 40px 0 40px'}}>
                <Link aria-current="page" to='https://iitj.ac.in/uploaded_docs/dept_upload/cml/Dept_Brochure_document-2022-03-22-13-18-pm.pdf' target="_blank" rel="noopener noreferrer"><img src={process.env.PUBLIC_URL + '/Images/dept_broc.jpeg'} className="img-fluid" alt="" style={{alignContent:'center',display:'block',marginLeft:'auto',marginRight:'auto',height:'555px',width:'1000px'}}/></Link>
            </div>
            <div style={{textAlign:'center'}}>
                <strong><span style={{color:'#3366ff'}}>Click on the above image to know more about the department of chemical engineering: ChemE @ IIT Jodhpur</span></strong>
            </div>
            <br></br>
            <div className='container'style={{textAlign:'center',padding:'0 70px 0 70px'}}>
                <hr></hr>
                <br></br>
            </div>
            <div className='container' style={{textAlign:'center',padding:'0 70px 0 70px'}}>
                <h3><span style={{color:'#ff6600',fontSize:'20px'}}>The department student activity council publishes a quarterly <Link aria-current="page" to='https://iitj.ac.in/uploaded_docs/dept_upload/cml/Newsletter_Q42021_corr_document-2022-03-21-15-13-pm.pdf' target="_blank" rel="noopener noreferrer">newsletter</Link> that captures the activities, events, and highlights of the department</span></h3>
                <br></br>
                <hr></hr>
                <br></br>
            </div>
            <div className='container' style={{textAlign:'center',padding:'0 70px 0 70px'}}>
                <h3><span style={{color:'#008000',fontSize:'20px'}}>The department offers a bouquet of <Link aria-current="page" to='https://iitj.ac.in/uploaded_docs/dept_upload/cml/Onepager_courses_document-2022-03-28-12-20-pm.pdf' target="_blank" rel="noopener noreferrer">courses</Link> that meets the needs of both traditional and disruptive technologies in the chemical engineering domain and prepares the students with the necessary skills for diverse career options.</span></h3>
                <br></br>
                <hr></hr>
            </div>
            <br></br>
            <br></br> */}
        </>
    )
}