
import '../styles/homepage.css'
import ReactPlayer from 'react-player/lazy'

function Homepage () {

    return (
        <div className='bkclr'>
            <p className='larger'> Welcome to the Dylan Archives</p>
            <ReactPlayer className='player' url='https://www.youtube.com/watch?v=a6Kv0vF41Bc' />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )

}

export default Homepage;