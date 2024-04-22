import logo from "/Img/Laptop.jpg";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";

export function SignIn() {

  const navigate = useNavigate()

  const EmptyInput = () => {
    toast.warn("All fileds are mandatory, please !", {
      theme: "light",
      autoClose: 2000,
    });
  };
  const Welcome = (message) => {
    toast.success(message, {
      theme: "light",
      autoClose: 2000,
    });
  };
  const wentWrong = (message) => {
    toast.error(message, {
      theme: "light",
      autoClose: 2000,
    });
  };

  const handlesubmit = () => {
    const Username = document.getElementById("Username");
    const Password = document.getElementById("Password");
  
    if (Username.value === "" || Password.value === "") {
      return EmptyInput();
    } else {
      const Signing_In = async () => {
        
        try {
          const Check_Data = await fetch(`http://localhost:9009/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: Username.value,
              password: Password.value,
            }),
          });

          const res = await Check_Data.json()

          if (Check_Data.ok) {
            const token = res.token
            localStorage.setItem("token", token)
            Welcome("Welcome " + Username.value + " 🤩")
            setTimeout(() => {
              navigate("/store")
            }, 2000);
          } else{
            const mesUser = res.mesUser
            const mesPass = res.mesPass
            if(mesUser){
              wentWrong("Invalid Username !")
            }
            if(mesPass){
              wentWrong("Invalid Password !")
            }
          }
        } catch (error) {
          console.log("Error", error);
        }
      };
      Signing_In();
    }
  };

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          opacity: "0.8",
          backgroundImage:
            "linear-gradient(#f744ca 1px, transparent 1px), linear-gradient(to right, #f744c1 1px, aliceblue 1px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div>
          <div className="Header">
            <div>
              <h2 id="store">Computer Store</h2>
            </div>
            <div className="delivery">
              <h1 id="buy">Buy Now</h1>
              <img height={100} src="../Img/Price.png" alt="Price" />
            </div>
            <header>
              <h1>
                <span style={{ fontSize: "4rem" }}>D</span>iscount
                <span style={{ fontSize: "4rem" }}> -50%</span>
              </h1>
            </header>
          </div>
        </div>

        <div className="container wraper mt-4">
          <div className="show">
          <div className="hold">
            <div>
              <img id="Gaming" src={logo} alt="Gaming" />
            </div>

            <div className="form-cover">
              <form>
                <label htmlFor="Username">Username: </label>
                <input
                  type="text"
                  id="Username"
                  placeholder="Enter your Username"
                />
                <label htmlFor="Password">Password: </label>
                <input
                  type="password"
                  id="Password"
                  placeholder="Enter your Password"
                />
                <button onClick={handlesubmit} type="button" id="log-out">
                  Login
                </button>
              </form>
            </div>
          </div>
          <div className="account mt-2">
            <p>Don&lsquo;t you have an account yet ? <Link to={"/signup"}>Sign Up</Link> </p>
          </div>
          </div>
        </div>

        <div className="bottom-info">
          <footer>
            <h6>
              2024 | All rights reserved. Made by RID Tech with{" "}
              <span style={{ color: "red" }}>&hearts;</span>
            </h6>
          </footer>
        </div>
      </div>
    </>
  );
}
