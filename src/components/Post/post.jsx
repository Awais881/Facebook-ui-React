import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'
 import moment from 'moment';
 import './post.css';




let Post = ({ profilePhoto, name, postDate, postText, postImage }) => (
    <div className='post'>
      <div className='postHeader'>
        <img className='profilePhoto' src={profilePhoto} alt="profile" />
        <div>
          {name} <br />
          {/* {postDate} */}
        {moment(postDate).fromNow()} 
        </div>
      </div>
  
      <div className='postText'>
        {postText}
      </div>
      <img className='postImage' src={postImage} alt="post" />
  
      <hr />
      <div className='postFooter'>
        <div> <FontAwesomeIcon icon={faThumbsUp} /> like </div>
        <div> <FontAwesomeIcon icon={faComment} /> comment</div>
        <div> <FontAwesomeIcon icon={faShare} /> share</div>
      </div>  
      <hr />
  
    </div>
  );
  function Page() {
    return <div className='page'>
  
      <Post
        name="Arsalan"
        profilePhoto="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-0997.jpg?ssl=1"
        postDate="12 jan 2021"
        postImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUzCw6COo65IKws8HItxnuCc5BH7t5wOmwuw&usqp=CAU"
        postText=" Social media refers to the means of interactions among people in which they create, share, and/or exchange information and ideas in virtual communities and networks. The Office of Communications and Marketing manages the main Facebook, Twitter, Instagram, LinkedIn and YouTube accounts."
      />
      
      <Post
        name="Malik"
        profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3pZsFVy-qhDZpps34-E8Ob3ga0eSTxAVlAw&usqp=CAU"
        postDate="12 jan 2021"
        postImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnWWUnWgp0esxPhPnZ_lnNgOLANz3dMX7DVA&usqp=CAU"
        postText="The guides area is designed to help developers learn to better interact with the date and time problem domain, and the Moment.js library.
  We address our most frequently seen support requests here, so it is a great place to check for solutions to any issues you may have."
      />
      <Post
        name="Rehan"
        profilePhoto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQndLs1UQJYZoZ7kTX671WnLbVYfjiphBIKUA&usqp=CAU"
        postDate="22 Aug 2022"
        postImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq3bcXgBzVM3KcZoFdpr-fiXKB0YDS0VqjWQ&usqp=CAU"
        postText="The guides area is designed to help developers learn to better interact with the date and time problem domain, and the Moment.js library.
  We address our most frequently seen support requests here, so it is a great place to check for solutions to any issues you may have."
      />
      <Post
        name="Saylani"
        profilePhoto="https://media.istockphoto.com/photos/happy-indian-business-man-leader-manager-standing-in-office-headshot-picture-id1350800599?b=1&k=20&m=1350800599&s=170667a&w=0&h=LDmNXp5GzpzVB2FwIsV4iTAnqLJRQ5jGCE825aRXHQQ="
        postDate="12 sep 2021"
        postImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYIX4fdymadei7FiL-19pxFAWPLEJgQlNEww&usqp=CAU"
        postText="The guides area is designed to help developers learn to better interact with the date and time problem domain, and the Moment.js library.
  We address our most frequently seen support requests here, so it is a great place to check for solutions to any issues you may have."
      />
  
  
    </div>
  }
  export default Page;  