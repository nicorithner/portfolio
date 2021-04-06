import { Link } from 'react-router-dom';
import './Thumbnail.css'
import '../../App.css';

 function Thumbnail(props) {
   return (
    <div className="project">
      <div className="project-image">
       <img src={props.image} alt="Descriptive media" width="300" height="auto"/>
      </div>

      <div className="description">
        <h2>{props.title}</h2>
        <p className="summary">{props.summary}</p>
        <p className="category">{props.category}</p>
      </div>

      <div className="links">
        <Link to={props.link}>
          <div className="link">Project Details</div>
        </Link> 
        <a rel="noreferrer" target="_blank" href="https://github.com/nicorithner"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="linkedin logo" /></a>
      </div>
     </div>
  )
}

export default Thumbnail;

