import React from "react";
import imgA from '../../assets/img/music4_img4.jpg';


function Aside() {
    return (
        <>
         <aside id="aside" className="left">
            <h3>Music Awarrd</h3>
            <div className="login">
                <img src={imgA} />
                <p><a href="#">뭉드</a></p>
            </div>
            <div className="chart">
                <ul>
                    <li>
                        <i className="material-icons">queue_music</i>
                        <a href="#">투데이</a>
                    </li>
                    <li>
                        <i className="material-icons">equalizer</i>
                        <a href="#">차트</a>
                    </li>
                    <li>
                        <i className="material-icons">headphones</i>
                        <a href="#">최신음악</a>
                    </li>
                    <li>
                        <i className="material-icons">lyrics</i>
                        <a href="#">이달의 뮤직</a>
                    </li>
                    <li>
                        <i className="material-icons">shuffle</i>
                        <a href="#">랜덤 뮤직</a>
                    </li>
                    <li>
                        <i className="material-icons">portrait</i>
                        <a href="#">나의 뮤직</a>
                    </li>
                </ul>
            </div>
            <div className="play_list">
                <ul>
                    <li><a href="#">플레이 리스트1</a><i className="material-icons">chevron_right</i></li>
                    <li><a href="#">플레이 리스트2</a><i className="material-icons">chevron_right</i></li>
                    <li><a href="#">플레이 리스트3</a><i className="material-icons">chevron_right</i></li>
                </ul>
            </div>
            <div className="info">
                <ul>
                    <li><a href="#">서비스 소개</a></li>
                    <li><a href="#">사용방법</a></li>
                    <li><a href="#">저작권 안내</a></li>
                </ul>
            </div>
        </aside>
        </>
    )
}

export default Aside;
