import { useState } from "react";

function RegForm() {
  let [userName, setUserName] = useState("");
  let [developerName, setDeveloperName] = useState("");
  let [email, setEmail] = useState("");
  let [position, setPosition] = useState("");
  let [sat, setSat] = useState("");
  let [message, setMessage] = useState("");
  let [image, setImage] = useState("");

  let [user, setUser] = useState([]);
  function handleClick(e) {
    e.preventDefault();
    let userData = {
      id: Math.floor(Math.random() * 1000),
      userName,
      developerName,
      email,
      position,
      sat,
      message,
    };
    console.log(userData);
    setUser([...user, userData]);
    document.getElementById("form").style.display = "none";
    // console.log(user)
  }
  //let[form, setForm] = useState(true)
  return (
    <>
      <div>
        <form
          id="form"
          className="card m-5 p-5  me-5"
          onSubmit={handleClick}
          style={{ width: "50vw" }}
        >
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="User Name"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="userName"
              placeholder="Developer's Name"
              value={developerName}
              onChange={(e) => {
                setDeveloperName(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Developer's Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="position"
              placeholder="Position"
              value={position}
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            />
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="Satisfied"
              value="Satisfied"
              name="flexRadioDefault"
              onChange={(e) => {
                setSat(e.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox1">
              Satisfied
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="UnSatisfied"
              value="Un-satisfied"
              name="flexRadioDefault"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="inlineCheckbox2">
              Un-satisfied
            </label>
          </div>
          <div className="form-floating my-3">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="Textarea"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              id="image"
              placeholder="Position"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </form>
        {user.map((show) => {
          let { userName, message, id, developerName, sat } = show;
          return (
            <div
              className="card p-5 m-5 AfterDisplay"
              style={{ width: "50vw" }}
              key={id}
            >
              <h3 className="card-title text-center">Feedback</h3>
              <div className="card-body">
                <h5 className="text-center">
                  <span className="badge bg-secondary">{sat}</span>
                </h5>
                <div className="card-text">
                  <h6>UserName:</h6>
                  <p>{userName}</p>
                  <h6>Name:</h6>
                  <p>{developerName}</p>
                  <h6>Message:</h6>
                  <span>{message}</span> <br />
                  <h6>Image:</h6>
                  <img
                    src={URL.createObjectURL(image)}
                    alt="im-here"
                    style={{ width: "15rem" }}
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default RegForm;

export function FormValidate() {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");
  let [email, setEmail] = useState("");
  let [error, setError] = useState("");
  let [error1, setError1] = useState("");
  function handleClick(e) {
    e.preventDefault();
    if (userName.length - 1 == 0) {
      setError("Username Cannot be empty");
    } else {
      setError(null);
    }
    if (password !== confirmPassword) {
      setError1("Password doesnt match");
    } else {
      setError1(null);
    }
  }

  return (
    <>
      <form
        id="form"
        className="card m-5 p-5"
        onSubmit={handleClick}
        style={{ width: "50vw" }}
      >
        <div class="mb-3">
          <p class="fs-6 fw-lighter">{error}</p>
          <input
            type="text"
            class="form-control"
            id="userName"
            placeholder="User Name"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <p class="fs-6 fw-lighter">{error1}</p>
        </div>

        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button type="submit" class="btn btn-danger">
          Submit
        </button>
      </form>
    </>
  );
}
