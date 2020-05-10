import WithAuth from "../components/auth/protected";
import app, { db } from "../lib/firebase";
import { MDBBtn, MDBIcon } from "mdbreact";
import { RiAddLine } from "react-icons/ri"
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../components/auth/auth";

const Home = props => {
    const { currentUser } = useContext(AuthContext);
    const [counter, setCounter] = useState(0);
    const [loadSubscribers, setLoadSubscribers] = useState(true);

    useEffect(() => {

        if(currentUser){
            const counterRef = app.database().ref("/counters").child(String(currentUser.uid)).child("counter");
            counterRef.on("value", snapshot => {
                setCounter(snapshot.val());
            })
        }
   
        setLoadSubscribers(false)
        return () => {
            setLoadSubscribers(true);
        }
    }, [currentUser])



    const increaseCounter = () => {
        const counterRef = app.database().ref("/counters").child(String(currentUser.uid)).child("counter");
        counterRef.set(Number(counter + 1));
    }
    return (
        <WithAuth>

            <div className="d-flex flex-column  cover" >
                <div className="gradient top-c">


                    <h1 style={{ fontSize: "40px", fontWeight: "500", color: "#ffffff" }} className="no-margin">
                        {counter}
                    </h1>
              
                    <h5 style={{ fontSize: "24px", color: "#ffffff" }} className="no-margin">
                        Contador
</h5>
<br></br>
                    <MDBBtn onClick={increaseCounter} color="#f5f5f5" style={{ borderRadius: "15px", border: "none", margin: "0px" }}>
                        <RiAddLine style={{ fontSize: "72px", color: "#423ed3" }} />
                    </MDBBtn>
                </div><br></br>


            </div>
            <div style={{ height: "200px", width: "100%", }} className="flex-c">

                <MDBBtn style={{ width: "90%", margin: '0px', maxWidth: "317px" }} onClick={() => { app.auth().signOut() }}>
                    Cerrar Sesión
</MDBBtn>
            </div>



        </WithAuth>
    );
}

export default Home