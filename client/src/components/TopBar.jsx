import React from 'React';
import Search from './Search.jsx';
import Nav from './Nav.jsx';
import style from '../css/TopBar.css';
import MobileDrop from './MobileDrop.jsx';
import EnDrop from './EnDrop.jsx';


class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            cities: [],
            locationNav: false,
            searchButton: false,
            mobile: false,
            en: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        let name = e.target.id;
        this.setState({
            [name]: !(this.state[name])
        })
    }

    render() {
        let navClicked = this.state.locationNav;
        let searchClicked = this.state.searchButton;
        let mobileClicked = this.state.mobile;
        let enClicked = this.state.en;
        return (
            <div className={style.topBar}>
                {searchClicked ? (<Search />) : (<div></div>)}
                <div className={style.topContainerS1}>
                    <div>
                        {mobileClicked ? <MobileDrop /> : <div></div>}
                    </div>
                    <div className={style.topContainerS1Right}>
                        <div className={style.topContainerS1RightS1}>
                            <a href className={style.smallLinks}>For Restauranteurs</a>
                        </div>
                        <div className={style.topContainerS1RightS2}>
                            <a href id="mobile" onClick={this.handleClick} className={style.smallLinks + ' ' + style.mobileOutsideComponents}>Mobile</a>
                            <i className={"material-icons" + ' ' + style.mobileOutsideComponents}>keyboard_arrow_down</i>
                        </div>
                        <div className={style.topContainerS1RightS3}>
                            <a href className={style.smallLinks}>Help</a>
                        </div>
                        <div className={style.topContainerS1RightS4}>
                            <i className={"material-icons" + ' ' + style.outsideEnComponents}>language</i>
                            <a href id="en" onClick={this.handleClick} className={style.smallLinks + ' ' + style.outsideEnComponents}>EN</a>
                            {enClicked ? <EnDrop /> : <div></div>}
                            <i className={"material-icons" + ' ' + style.outsideEnComponents}>keyboard_arrow_down</i>
                        </div>
                    </div>
                </div>

                {/* Refactor onclick funtion here */}
                <div className={style.topContainerS2}>
                    {navClicked ? (<Nav />) : (<div></div>)}
                    <div className={style.topContainerS2S1}>
                        <img className={style.openTableLogo} src={"https://s3-us-west-1.amazonaws.com/table-it/otlogoreg.png"} />
                    </div>
                    <button className={style.topContainerS2S2} id="locationNav" onClick={this.handleClick}>
                        <div id="locationNav" className={style.locationNav}>
                            <i id="locationNav" className={"material-icons" + ' ' + style.locationNavHeaderIcon}>location_on</i>
                            <div id="locationNav" className={style.locationNavHeader + ' ' + style.smallLinks}>Los Angeles</div>
                            <i id="locationNav" className={"material-icons" + ' ' + style.locationNavHeaderIcon}>keyboard_arrow_right</i>
                            <div id="locationNav" className={style.locationNavHeader + ' ' + style.smallLinks}>West Hollywood / Beverly Hills / Mid-Wilshire</div>
                            <i id="locationNav" className={"material-icons" + ' ' + style.locationNavHeaderIcon + ' ' + style.smallLinks}>keyboard_arrow_down</i>
                        </div>
                    </button>
                    <div className={style.topContainerS2S3}>
                        <div className={style.signUpButtonContainer}>
                            <button className={style.signUpButton}>Sign Up</button>
                        </div>
                        <div className={style.signInButtonContainer}>
                            <a href className={style.signInButton}>Sign In</a>
                        </div>
                        <div className={style.searchContainer}>
                            <i id="searchButton" onClick={this.handleClick} className={"material-icons" + ' ' + style.locationNavHeaderIcon}>search</i>
                        </div>
                    </div>
                </div>

                <div className={style.topContainerS3}>
                    <div className={style.topContainerS3SContainer}>
                        <div className={style.topContainerS3S1}>
                            <a href className={style.smallLinks}>Home</a>
                        </div>
                        <div className={style.topContainerS3S2}>
                            <div className={style.smallText}>United States</div>
                        </div>
                        <div className={style.topContainerS3S3}>
                            <a href className={style.smallText}>Los Angeles</a>
                        </div>
                        <div className={style.topContainerS3S4}>
                            <a href className={style.smallLinks}>Make Dynamic</a>
                        </div>
                        <div className={style.topContainerS3S5}>
                            <div className={style.smallText}>Manhattan Beach/Hermosa</div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}


export default TopBar;