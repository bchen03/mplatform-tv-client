import React from 'react';
import PropTypes from 'prop-types';

//import '../css/homepage.scss';    // uses float
import '../css/homepage2.scss';     // uses flexbox

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="main">
                    <div className="panel">
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
                    <div className="content">
                        <div className="top6">
                            <div className="span-1 center">metrics</div>
                            <div className="span-2 center">top 6 chart 1 top 6 chart 1 top 6 chart 1 top 6 chart 1</div>
                            <div className="span-2 center">top 6 chart 2</div>
                        </div>
                        <div className="chart center">
                            bubble chart<img src="../img/mplatform2.jpg" alt="bubble chart" />bubble chart
                        </div>
                        <div className="grid center">
                            Grid
                        </div>
                    </div>
                </div>

                <div className="clearfix" />

                <div className="container inline-block-container">
                    <div className="inline-block inline-block-1">Inline, Inline-block, Block</div>
                    <div className="inline-block inline-block-2">Inline, Inline-block, Block</div>
                    <div className="inline-block inline-block-3">Inline, Inline-block, Block</div>
                    <div className="inline-block inline-block-4">Inline, Inline-block, Block</div>
                </div>


                {/* One way to do responsive resizing for video that is a fixed size */}
                <div className="container intrinsic-ratio-container">
                    <div className="video-container">
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
