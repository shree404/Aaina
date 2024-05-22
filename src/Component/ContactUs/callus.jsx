import img from "../../Assets/ContactUs/whatsapp.svg";

function CallUs() {
  return (
    <>
      <div className="Callus">
        <p className="Callus-p1">Call Us</p>
        <p className="Callus-p2">Our lines are open 24 X 7</p>
        <button className="Callus-button">
          <img src={img} alt="whatsapp icon" /> 986-7481767
        </button>{" "}
        <br />
        <button className="Callus-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="black"
          >
            <path
              d="M0 27L1.892 21.3244C0.931966 19.7097 0.37931 17.8252 0.37931 15.8103C0.37931 9.84 5.21931 5 11.1897 5C17.16 5 22 9.84 22 15.8103C22 21.7807 17.16 26.6207 11.1897 26.6207C9.37314 26.6207 7.66245 26.1704 6.16 25.3792L0 27Z"
              fill="#2CB742"
            />
            <path
              d="M18.0866 19.4081C17.5875 18.4648 15.7467 17.386 15.7467 17.386C15.3302 17.1486 14.8276 17.122 14.5902 17.5453C14.5902 17.5453 13.992 18.2626 13.8399 18.3658C13.145 18.8365 12.5013 18.8183 11.8515 18.1685L10.3415 16.6585L8.83146 15.1485C8.1817 14.4987 8.1635 13.855 8.63422 13.1601C8.73739 13.008 9.45467 12.4098 9.45467 12.4098C9.87798 12.172 9.85143 11.6698 9.61398 11.2533C9.61398 11.2533 8.53522 9.41252 7.59187 8.91335C7.19056 8.70093 6.69784 8.77528 6.37694 9.09617L5.71012 9.763C3.5947 11.8784 4.63629 14.2666 6.7517 16.382L8.68505 18.3153L10.6184 20.2487C12.7338 22.3641 15.1219 23.4057 17.2374 21.2902L17.9042 20.6234C18.2251 20.3018 18.299 19.809 18.0866 19.4081Z"
              fill="white"
            />
          </svg>{" "}
          986-7481767
        </button>
      </div>
    </>
  );
}

export default CallUs;
