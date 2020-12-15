import React from 'react';
import './App.css';
import siteLogo from './img/Sitelogo.jpg';
import SliderOne from './components/SliderOne/SliderOne.js';
import SliderTwo from './components/SliderTwo/SliderTwo.js';
import SliderVideos from './components/SliderVideos/SliderVideos.js';
import HeaderMenu from './components/HeaderMenu/HeaderMenu'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
      isClicked: false,
    };
  }

  handleEnter() {
    this.setState({
      isHovered: true
    });
  }

  handleLeave() {
    this.setState({
      isHovered: false
    });
  }

  handleClick = () => {
 
    this.setState({
      isClicked: !this.state.isClicked,
    });
  }

  render() {
    console.log(12321, this.state.isClicked)

    return (
      <div  className="allDiv" >
        {this.state.isClicked && (
          <div className="blue">
            <p>ada</p><p>adad</p>
          </div>
        )}
          <div className="siteHead">
            <div className="headText">
              <div
                onMouseEnter={this.handleEnter.bind(this)}
                onMouseLeave={this.handleLeave.bind(this)}
                className="langChange">
                <div>
                  RU↓
                </div>
                {this.state.isHovered && (
                  <nav className="listLang">
                    <ul>
                      <li><a href="">RU</a></li>
                      <li><a href="">BY</a></li>
                      <li><a href="">EN</a></li>
                    </ul>q
                  </nav>
                )}
              </div> 
              <HeaderMenu/>
            </div>
          </div>

          <div className="mainAreaOne">
            <div className="mainString">
              <div className="mainStringCenter">
                <div className="blockLogo">
                  <img className="menuLogo" src={siteLogo}></img>
                </div>
                <div className="mainMenu">
                  <ul>
                    <li>Лицей</li>
                    <li>Событие</li>
                    <li>Абитуриентам</li>
                    <li>Образование</li>
                    <li>Наука</li>
                    <li>Международные cвязи</li>
                    <li>🔎</li>
                  </ul>
                </div>  
              </div>
            </div>
            <div className="mainSliderOne">
              <SliderOne />
            </div>
          </div>
          <div className="newsBlock">
            <div className="newsBlockMini">
              <div className="newsTitle">
                Новости
              </div>
              <div className="newsTitleList">
                <ul>
                    <li><a href="">Все</a></li>
                    <li><a href="">Новости</a></li>
                    <li><a href="">События</a></li>
                    <li><a href="">Анонсы</a></li>
                    <li><a href="">Достижения</a></li>
                    <li><a href="">Наука</a></li>
                    <li><a href="">Студенческая жизнь</a></li>
                    <li><a href="">Поступающим</a></li>
                </ul>
              </div>
              <div className="newsMainBlock">
                <div className="newsMainBlockLeft">
                  <div className="newsSlider">
                  <SliderTwo />
                  </div>
                  <div className="newsEventsList">
                    <div className="newsEvents">
                      <div className="newsEventsImg"></div>
                      <div className="newsEventsText">
                      Книжная выставка «Беларусь i ЮНЕСКА – шлях да мiру праз зблiжэнне культур i ведаў» открылась в БГУ
                      </div>
                    </div>
                    <div className="newsEvents">
                      <div className="newsEventsImg"></div>
                      <div className="newsEventsText">
                      Книжная выставка «Беларусь i ЮНЕСКА – шлях да мiру праз зблiжэнне культур i ведаў» открылась в БГУ
                      </div>
                    </div>
                    <div className="newsEvents">
                      <div className="newsEventsImg"></div>
                      <div className="newsEventsText">
                      Книжная выставка «Беларусь i ЮНЕСКА – шлях да мiру праз зблiжэнне культур i ведаў» открылась в БГУ
                      </div>
                    </div>
                  </div>
                </div>
                <div className="newsMainBlockRight">
                  <div className="newsPillar">Команда БГУ заняла первое место в Республиканском гражданско-патриотическом марафоне «Вместе – за сильную и процветающую Беларусь!»</div>
                  <div className="newsPillar">Команда БГУ заняла первое место в Республиканском гражданско-патриотическом марафоне «Вместе – за сильную и процветающую Беларусь!»</div>
                  <div className="newsPillar">Команда БГУ заняла первое место в Республиканском гражданско-патриотическом марафоне «Вместе – за сильную и процветающую Беларусь!»</div>
                  <div className="newsPillar">Команда БГУ заняла первое место в Республиканском гражданско-патриотическом марафоне «Вместе – за сильную и процветающую Беларусь!»</div>
                  <div className="newsPillar">Команда БГУ заняла первое место в Республиканском гражданско-патриотическом марафоне «Вместе – за сильную и процветающую Беларусь!»</div>
                  <div className="newsPillar">Команда БГУ заняла первое место в Республиканском гражданско-патриотическом марафоне «Вместе – за сильную и процветающую Беларусь!»</div>
                  <div className="newsPillar">Команда БГУ заняла первое место в Республиканском гражданско-патриотическом марафоне «Вместе – за сильную и процветающую Беларусь!»</div>
                </div>
              </div>
            </div>
          </div>
          <div className="blockVideoBoss">
            <div className="blockVideo">
              <div className='verticalText'>Видео</div>
              <div className="sectionsVideo">
                <ul>
                  <li><a href="">Видеотека ректора</a></li>
                  <li><a href="">БГСПЛ. Память сердца</a></li>
                  <li><a href="">Абитуриентам БГСПЛ</a></li>
                  <li><a href="">Мероприятия</a></li>
                  <li><a href="">Наука и производство</a></li>
                  <li><a href="">Креативное образование</a></li>
                  <li><a href="">Иностранные студенты о БГСПЛ</a></li>                  
                  <li><a href="">Выпускники о БГСПЛ</a></li>
                </ul>
              </div> 
              <div className='sliderVideos'>
                <SliderVideos />
              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default App;


