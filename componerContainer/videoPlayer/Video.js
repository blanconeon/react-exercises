function Video(props) { //dont forget to put props here when they are passed down. 
    return (
      <div>
        <video controls autostart autoPlay muted src={props.src}/>
      </div>
    );
};
export default Video;