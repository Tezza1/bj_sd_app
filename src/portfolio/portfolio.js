import React from 'react';
import Header from '../pageLayout/header';

const Portfolio = () => {

    return(
        <div>
            <div style={{marginTop: "2em", paddingTop: "2em"}}>
                <Header 
                    engCategory={"Solution Portfolio"}
                    jpnCategory={"ソリューションポートフォリオ"}
                    icon={<i className="fas fa-folder-open"></i>}
                />      
            </div>
            <div className="pure-g">
                <div className="pure-u-1-5">
                    <p>Detailed / interactive table:</p>
                    <button className="pure-button">Table</button>
                </div>
                <div className="pure-u-4-5">
                <table className="pure-table">
                        <tbody>
                            <tr className="pure-table-odd">
                                <th className="tableHead">Everyday English</th>
                                <td>Berlitz English</td>
                                <td>Pro, SS, A&amp;E</td>
                                <td>Customized <br /><span className="tableType">&raquo; (BE) &laquo;</span></td>
                                <td>Customized <br /><span className="tableType">&raquo; (PCS) &laquo;</span></td>
                            </tr>
                    
                            <tr>
                                <th className="tableHead">Business English</th>
                                <td>Berlitz Business English</td>
                                <td>Biz+</td>
                                <td>General Business English</td>
                                <td>SS, Mtg, CS &amp; Email</td>
                            </tr>
                    
                            <tr className="pure-table-odd">
                                <th className="tableHead">Online Language</th>
                                <td>BVC</td>
                                <td>CyberTeachers<br /><span className="tableType">&raquo; (Telelangue) &laquo;</span></td>
                                <td>Time To Talk<br /><span className="tableType">&raquo; (GGE) &laquo;</span></td>
                                <td></td>
                            </tr>
                    
                            <tr>
                                <th className="tableHead">Other languages</th>
                                <td>Other Language Lessons</td>
                                <td>TOEIC<br /><span className="tableType">&raquo; (JIP) &laquo;</span></td>
                                <td>Translations<br /><span className="tableType">&raquo; (PCS) &laquo;</span></td>
                                <td></td>
                            </tr>
                    
                            <tr className="pure-table-odd">
                                <th className="tableHead">Communication <br /><i>(BTG)</i></th>
                                <td>Open<br /><span className="tableType">&raquo; (GLT) &laquo;</span></td>
                                <td>On-site<br /><span className="tableType">&raquo; (GLT) &laquo;</span></td>
                                <td>PCS</td>
                                <td>Simul</td>
                            </tr>
                    
                            <tr>
                                <th className="tableHead">Assessments</th>
                                <td>Level check <br /><span className="tableType">&raquo; (BE) &laquo;</span></td>
                                <td>GTEC <br /><span className="tableType">&raquo; (Benesse) &laquo;</span></td>
                                <td>GBC <br /><span className="tableType">&raquo; (PCS) &laquo;</span></td>
                                <td>IPL <br /><span className="tableType">&raquo; (Simul) &laquo;</span></td>
                            </tr>
                    
                            <tr className="pure-table-odd">
                                <th className="tableHead">Business skills<br /><i>(in Japanese)</i></th>
                                <td>Millenium Partners<br /><span className="tableType">&raquo; (Millenium) &laquo;</span></td>
                                <td>Biz Arts -online<br /><span className="tableType">&raquo; (KCCS) &laquo;</span></td>
                                <td></td>
                                <td></td>
                            </tr>
                            
                            <tr>
                                <th className="tableHead">Overseas</th>
                                <td>BSA</td>
                                <td>Language<br /><span className="tableType">&raquo; (ELS) &laquo;</span></td>
                                <td></td>
                                <td></td>
                            </tr>
        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;