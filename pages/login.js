



import { useForm } from 'react-hook-form';
import { useState, useRef, useContext } from 'react';
import app from '../lib/firebase';
import { useRouter } from 'next/router'
import { MDBBtn, } from 'mdbreact';
import { AuthContext } from '../components/auth/auth';
import { useFormik } from 'formik';
import { MDBNotification } from "mdbreact";
import { toast } from 'react-toastify';
const InputStyle = {
    minWidth: "150px",
    border: ".5px solid #efefef",
    padding: " .5rem",
    width: "300px",
    height: "35px",
    fontSize: "15px",
    color: "black"
}
const flex = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
    flexDirection: "column"
}

const validate = values => {
    const errors = {};
    if (!values.password) {
        errors.password = 'Requerido';
    } else if (values.password.length < 5) {
        errors.password = 'Debe ser de almenos 6 caracteres';
    }

    if (!values.email) {
        errors.email = 'Requerido';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email invalido';
    }

    return errors;
};


const Login = props => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [signUpMode, setSignUpMode] = useState(false);
    const formRef = useRef();
    const router = useRouter()
    const { currentUser } = useContext(AuthContext);



    const notify = type => {
        toast.error('Error message', {
            closeButton: false
        });
    };

    const submitForm = async (data) => {
       
        if (signUpMode) {
           
            app.auth().createUserWithEmailAndPassword(data.email, data.password).then(user => {
                let id = user.user.uid;
                 app.database().ref("/counters/" + id).set({ counter: 0 })
            }).catch(error => {
                console.log("ERROR");
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })

        } else {
            try {
                await app.auth().signInWithEmailAndPassword(data.email, data.password);
                router.push("/")
            } catch (error) {
                
                toast.error(error.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }

        setSignUpMode(false);
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            submitForm(values);
        },
    });

    const SignUp = () => {
        setSignUpMode(true);
        formik.handleSubmit();
    }
    return (
        <div style={flex} >
            <div style={{ textAlign: "left", width: "320px", marginBottom: "40px" }}>
                <h1 style={{ fontWeight: "500", color: "#4B515D", marginBottom: "5px" }}>
                    We are <span style={{ color: "#4239cd" }}>
                        Lernit
                    </span>
                </h1>

                <p style={{ marginTop: "0px" }}>
                    Mejora tu experiencia de aprendizaje
                </p>
            </div>
            <form 
           autoComplete="off"
            ref={formRef} 
            style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginBottom:"100px" }} onSubmit={formik.handleSubmit}>

                <input
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    style={InputStyle} placeholder="correo electrónico" name="email" ref={register()} />
                {formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null}

                <br></br>

                <input
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    type="password"
                    style={InputStyle} placeholder="contraseña" name="password" ref={register({ required: true })} />
                {formik.errors.password && <div className="errors">{formik.errors.password}</div>}

                <br></br>

                <br></br>
                <br></br>



                <MDBBtn style={{ width: "317px", background: "#4B515D" }} type="submit">Iniciar Sesión</MDBBtn>

                <MDBBtn style={{ width: "317px", marginTop: "40px", background: "#4B515D" }} onClick={SignUp}>
                    Crear Cuenta
              </MDBBtn>

            </form>
        </div>
    )
}

export default Login;