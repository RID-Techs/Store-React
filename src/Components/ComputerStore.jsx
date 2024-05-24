import "./ComputerStore.css";
import price from "/Img/Price.png"
import Lenovo from "/Items_Images/Lenovo_i5.png";
import ROG_Gaming from "/Items_Images/ROG_Gaming.png";
import Megaport_Gamer from "/Items_Images/Megaport_Gamer.png";
import MacBook_Pro from "/Items_Images/MacBook_Pro.png";
import Retina_Apple from "/Items_Images/Retina_Apple.png";
import HP_Moniteur from "/Items_Images/HP_Moniteur.png";
import MSI_Gamer from "/Items_Images/MSI_Gamer.png";
import Xiaomi_Air from "/Items_Images/Xiaomi_Air.png";
import Purchase from "/Items_Images/WhatsApp.png";
import ASUS_Gaming from "/Items_Images/ASUS_Gaming.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function ComputerStore() {

    const navigate = useNavigate()

    useEffect(() => {
      const checkCookie = async () => {
        try {
          const IsAuthenticated = await fetch("https://back-store-mkge.onrender.com/auth/welcome", {
            method: "GET",
            credentials: "include"
          })

          if(IsAuthenticated.status === 401){
            await refreshAccessToken()
            return checkCookie()
          }

          const getAnswer = await IsAuthenticated.json()
          
          if(IsAuthenticated.ok){
            console.log("Nice")
            console.log(getAnswer)
          }
        } catch (error) {
          console.log(error)
        }
      }
      checkCookie()

      const refreshAccessToken = async () => {
        try {
            const response = await fetch('https://back-store-mkge.onrender.com/auth/refreshtoken', {
                method: 'POST',
                credentials: 'include'
            });
            const getAnswer = response.json()
            console.log(getAnswer)

            if(response.status === 403){
              navigate("/")
            }
    
          
        } catch (error) {
            console.error('Error refreshing access token:', error);
        }
    };

  })


    const Logged_Out = () => {
        toast.warn("You have just logged out !", {
          theme: "light",
          autoClose: 2000,
        });
      };

    const Log_Out = () => {

        Logged_Out()
        const loggingOut = async () => {
        try {
          const logNow = await fetch("https://back-store-mkge.onrender.com/auth/logout", {
            method: "POST",
            credentials: "include"
          })
          const res = logNow.json()
          console.log(res)

          if(logNow.ok){
            setTimeout(()=> {
              navigate("/")
          }, 1000)
          }

        } catch (error) {
          console.log(error)
        }
      }
      loggingOut()
    }

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
              <img height={100} src={price} alt="Price" />
            </div>
            <header>
              <h1>
                <span style={{ fontSize: "4rem" }}>D</span>iscount
                <span style={{ fontSize: "4rem" }}> -50%</span>
              </h1>
              <button onClick={Log_Out} type="button" id="log-out">
                  Log out
                </button>
            </header>
          </div>
        </div>

        <div id="dream-computer">
          <h4>Purchase the computer of your dream 😍 !!!</h4>
        </div>

        <div className="container mt-3">
          <div className="store-items row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">
            <div className="col">
              <div className="items">
                <div className="card">
                  <img src={Lenovo} alt="Laptop" />
                </div>
                <div>
                  <details>
                    <summary>Lenovo V310 (15) Intel Core i5</summary>
                    <p>Ordinateur portable Lenovo V310 (15) Intel Core i5</p>
                  </details>
                </div>
                <div className="mt-4">
                    <a id="purchase" href="https://wa.me/79836219?text=Hello, I would like to purchase the Lenovo V310 (15) Intel Core i5" target="_blank"> <img src={Purchase} alt="Purchase" /> Purchase</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="items">
                <div className="card">
                  <img src={MSI_Gamer} alt="Laptop" />
                </div>
                <div>
                  <details>
                    <summary>MSI Gamer</summary>
                    <p>Powerful Gaming Desktop</p>
                  </details>
                </div>
                <div className="mt-4">
                    <a id="purchase" href="https://wa.me/79836219?text=Hello, I would like to purchase the MSI Gamer" target="_blank"> <img src={Purchase} alt="Purchase" /> Purchase</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="items">
                <div className="card">
                  <img src={ROG_Gaming} alt="Laptop" />
                </div>
                <div>
                  <details>
                    <summary>ROG STRIX SCAR Edition Gaming Laptop GL503</summary>
                    <p>Powerful Gaming Laptop</p>
                  </details>
                </div>
                <div className="mt-4">
                    <a id="purchase" href="https://wa.me/79836219?text=Hello, I would like to purchase the ROG STRIX SCAR Edition Gaming Laptop GL503" target="_blank"> <img src={Purchase} alt="Purchase" /> Purchase</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="items">
                <div className="card">
                  <img src={Retina_Apple} alt="Laptop" />
                </div>
                <div>
                  <details>
                    <summary>Retina Apple</summary>
                    <p>Enjoy the Full HD Display.</p>
                  </details>
                </div>
                <div className="mt-4">
                    <a id="purchase" href="https://wa.me/79836219?text=Hello, I would like to purchase the HP Monitor with 4k Screen Display" target="_blank"> <img src={Purchase} alt="Purchase" /> Purchase</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="items">
                <div className="card">
                  <img src={MacBook_Pro} alt="Laptop" />
                </div>
                <div>
                  <details>
                    <summary>MacBook Pro 13</summary>
                    <p>For any professional task that need speed and robustness.</p>
                  </details>
                </div>
                <div className="mt-4">
                    <a id="purchase" href="https://wa.me/79836219?text=Hello, I would like to purchase the MacBook Pro 13" target="_blank"> <img src={Purchase} alt="Purchase" /> Purchase</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="items">
                <div className="card">
                  <img src={HP_Moniteur} alt="Laptop" />
                </div>
                <div>
                  <details>
                    <summary>HP Monitor with 4k Screen Display</summary>
                    <p>HP Monitor with 4k Screen Display and HDMI</p>
                  </details>
                </div>
                <div className="mt-4">
                    <a id="purchase" href="https://wa.me/79836219?text=Hello, I would like to purchase the HP Monitor with 4k Screen Display" target="_blank"> <img src={Purchase} alt="Purchase" /> Purchase</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="items">
                <div className="card">
                  <img src={Xiaomi_Air} alt="Laptop" />
                </div>
                <div>
                  <details>
                    <summary>Xiaomi NoteBook Air 12.5</summary>
                    <p>Robusteness and speed in one.</p>
                  </details>
                </div>
                <div className="mt-4">
                    <a id="purchase" href="https://wa.me/79836219?text=Hello, I would like to purchase the Xiaomi NoteBook Air 12.5" target="_blank"> <img src={Purchase} alt="Purchase" /> Purchase</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="items">
                <div className="card">
                  <img src={Megaport_Gamer} alt="Laptop" />
                </div>
                <div>
                  <details>
                    <summary>Megaport PC Gamer AMD FX-6100 </summary>
                    <p>Heavy tasks owe it respect for handling them smoothly.</p>
                  </details>
                </div>
                <div className="mt-4">
                    <a id="purchase" href="https://wa.me/79836219?text=Hello, I would like to purchase the Megaport PC Gamer AMD FX-6100" target="_blank"> <img src={Purchase} alt="Purchase" /> Purchase</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="items">
                <div className="card">
                  <img src={ASUS_Gaming} alt="Laptop" />
                </div>
                <div>
                  <details>
                    <summary>ASUS Gaming Laptop </summary>
                    <p>Run heavy tasks smoothly.</p>
                  </details>
                </div>
                <div className="mt-4">
                    <a id="purchase" href="https://wa.me/79836219?text=Hello, I would like to purchase the ASUS Gaming Laptop" target="_blank"> <img src={Purchase} alt="Purchase" /> Purchase</a>
                </div>
              </div>
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
