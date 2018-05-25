import React from 'react';
import PropTypes from 'prop-types';

//import '../css/homepage.scss';    // uses float
import homestyles from '../css/homepage2.scss';     // uses flexbox

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className={homestyles.main}>
                    <div className={homestyles.panel}>
                        <div>Panel</div>
                        <div>Panel</div>
                        <div>Panel</div>
                        <div>Panel</div>
                        <div>Panel</div>
                        <div>Panel</div>
                        <div>Panel</div>
                        <div>Panel</div>
                        <div>Panel</div>
                        <div>Panel</div>
                        <div>Panel</div>
                        <div>Panel</div>
                        
                    </div>
                    <div className={homestyles.content}>
                        <div className={homestyles.top6}>   
                            <div className={homestyles.span1}>metrics</div>
                            <div className={homestyles.span2}>top 6 chart 1 top 6 chart 1 top 6 chart 1 top 6 chart 1</div>
                            <div className={homestyles.span2}>top 6 chart 2</div>
                        </div>
                        <div className={`${homestyles.chart} ${homestyles.center}`}>
                            bubble chart<img src="../img/mplatform2.jpg" alt="bubble chart" />bubble chart
                        </div>
                        <div className={homestyles.grid}>
                            Grid
                        </div>
                    </div>
                </div>

                <div className="clearfix" />

                <div className={`container ${homestyles.inlineBlockContainer}`}>
                    <div className={`${homestyles.inlineBlock} ${homestyles.inlineBlock1}`}>Inline, Inline-block, Block</div>
                    <div className={`${homestyles.inlineBlock} ${homestyles.inlineBlock2}`}>Inline, Inline-block, Block</div>
                    <div className={`${homestyles.inlineBlock} ${homestyles.inlineBlock3}`}>Inline, Inline-block, Block</div>
                    <div className={`${homestyles.inlineBlock} ${homestyles.inlineBlock4}`}>Inline, Inline-block, Block</div>
                </div>


                {/* One way to do responsive resizing for video that is a fixed size */}
                <div className={`container ${homestyles.intrinsicRatioContainer}`}>
                    <div className={homestyles.videoContainer}>
                        <iframe width="640" height="360" src="https://www.youtube.com/embed/anvYeA1pWlk" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

const AppBar = props => {
    const style = {
        border: '1px solid #6afa6ba',
        width: '10%'
    }

    return (
        props.apps.map(app => {
            return <div className='d-flex flex-column flex-nowrap' key={app.id} style={style}>{app.name}</div>
        })
    );
}

AppBar.propTypes = {
    apps: PropTypes.array.isRequired
}


const Snapshot = props => <div>snaphost!</div>


export default HomePage;
export { Snapshot, AppBar };
